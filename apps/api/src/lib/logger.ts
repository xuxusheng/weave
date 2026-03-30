import pino from "pino"

const isProduction = process.env.NODE_ENV === "production"

export const logger = pino({
  level:
    process.env.LOG_LEVEL ?? (isProduction ? "info" : "debug"),
  transport: isProduction
    ? {
        target: "pino-opentelemetry-transport",
        options: {
          logKeys: {
            "traceId": "trace_id",
            "spanId": "span_id",
          },
        },
      }
    : { target: "pino-pretty", options: { colorize: true } },
  redact: {
    paths: [
      "req.headers.authorization",
      "req.headers.cookie",
      "*.password",
      "*.secret",
      "*.token",
      "*.apiKey",
    ],
    censor: "[REDACTED]",
  },
})
