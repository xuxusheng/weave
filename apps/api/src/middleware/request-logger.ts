import { createMiddleware } from "hono/factory"
import { logger } from "../lib/logger.js"
import { getTraceIds } from "./tracing.js"

export const requestLogger = createMiddleware(async (c, next) => {
  const start = Date.now()
  const requestId = crypto.randomUUID()

  c.header("X-Request-ID", requestId)

  await next()

  const responseTime = Date.now() - start
  const traceIds = getTraceIds(c)

  const childFields: Record<string, string> = { requestId }
  if (traceIds) {
    childFields.traceId = traceIds.traceId
    childFields.spanId = traceIds.spanId
  }

  const log = logger.child(childFields)

  const logData = {
    method: c.req.method,
    path: c.req.path,
    status: c.res.status,
    responseTime,
    userAgent: c.req.header("user-agent"),
  }

  if (c.res.status >= 500) {
    log.error(logData, "request failed")
  } else if (c.res.status >= 400) {
    log.warn(logData, "client error")
  } else {
    log.info(logData, "request completed")
  }
})
