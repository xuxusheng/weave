import { createMiddleware } from "hono/factory"
import type { Context as HonoContext } from "hono"
import { trace, context, propagation, type Span } from "../lib/tracing.js"
import { SpanStatusCode } from "@opentelemetry/api"

const tracer = trace.getTracer("weave-api")

const SPAN_KEY = "otel.span"

export function getCurrentSpan(c: HonoContext): Span | undefined {
  return c.get(SPAN_KEY as never) as Span | undefined
}

export function getTraceIds(c: HonoContext): { traceId: string; spanId: string } | undefined {
  const span = getCurrentSpan(c)
  if (!span) return undefined
  const spanContext = span.spanContext()
  return {
    traceId: spanContext.traceId,
    spanId: spanContext.spanId,
  }
}

function normalizeRoutePath(path: string): string {
  return path
    // UUID with hyphens (e.g., 550e8400-e29b-41d4-a716-446655440000)
    .replace(/\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi, "/:id")
    // UUID without hyphens (e.g., 550e8400e29b41d4a716446655440000)
    .replace(/\/[0-9a-f]{32}/gi, "/:id")
    // Numeric IDs
    .replace(/\/\d+/g, "/:id")
}

export const tracing = createMiddleware(async (c, next) => {
  const parentContext = propagation.extract(context.active(), c.req.raw.headers)

  const routePath = normalizeRoutePath(c.req.path)

  await tracer.startActiveSpan(
    `${c.req.method} ${routePath}`,
    {
      attributes: {
        "http.request.method": c.req.method,
        "url.full": c.req.url,
        "url.path": c.req.path,
        "url.scheme": new URL(c.req.url).protocol.replace(":", ""),
        "server.address": c.req.header("host") ?? "",
        "user_agent.original": c.req.header("user-agent") ?? "",
      },
    },
    parentContext,
    async (span) => {
      c.set(SPAN_KEY as never, span as never)

      try {
        await next()

        span.setAttribute("http.response.status_code", c.res.status)

        if (c.res.status >= 500) {
          span.setStatus({ code: SpanStatusCode.ERROR, message: `HTTP ${c.res.status}` })
        }
      } catch (err) {
        span.setStatus({
          code: SpanStatusCode.ERROR,
          message: err instanceof Error ? err.message : "Unknown error",
        })
        span.recordException(err instanceof Error ? err : new Error(String(err)))
        throw err
      } finally {
        span.end()
      }
    },
  )
})
