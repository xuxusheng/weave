import { createMiddleware } from "hono/factory"
import { rateLimiter, MemoryStore } from "hono-rate-limiter"
import { getClientIp } from "request-ip"
import { logger } from "../lib/logger.js"

function getClientIpFromContext(c: Parameters<Parameters<typeof rateLimiter>[0]["keyGenerator"]>[0]): string {
  return getClientIp({ headers: c.req.header() } as Parameters<typeof getClientIp>[0])
    ?? "anonymous"
}

const store = new MemoryStore()

export const apiRateLimiter = createMiddleware(
  rateLimiter({
    windowMs: 60 * 1000,
    limit: 60,
    keyGenerator: getClientIpFromContext,
    standardHeaders: "draft-7",
    skip: (c) => c.req.path === "/health",
    store,
    handler: (c) => {
      const ip = getClientIpFromContext(c)
      logger.warn({ ip, path: c.req.path }, "Rate limit exceeded")
      return c.json(
        { error: "Too many requests. Please retry later." },
        429,
      )
    },
  }),
)

export const webhookRateLimiter = createMiddleware(
  rateLimiter({
    windowMs: 60 * 1000,
    limit: 10,
    keyGenerator: getClientIpFromContext,
    standardHeaders: "draft-7",
    store,
    handler: (c) => {
      const ip = getClientIpFromContext(c)
      logger.warn({ ip, path: c.req.path }, "Webhook rate limit exceeded")
      return c.json(
        { error: "Too many webhook requests. Please retry later." },
        429,
      )
    },
  }),
)

export function shutdownRateLimiter(): void {
  store.shutdown()
}
