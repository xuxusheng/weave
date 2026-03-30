import { trace, context, propagation, type Span, SpanStatusCode } from "@opentelemetry/api"
import { NodeSDK } from "@opentelemetry/sdk-node"
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http"
import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http"
import { resourceFromAttributes, envDetector, hostDetector, osDetector } from "@opentelemetry/resources"
import { ATTR_SERVICE_NAME, ATTR_SERVICE_VERSION } from "@opentelemetry/semantic-conventions"
import { W3CTraceContextPropagator } from "@opentelemetry/core"
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node"
import { LoggerProvider, BatchLogRecordProcessor } from "@opentelemetry/sdk-logs"

let sdk: NodeSDK | null = null
let _loggerProvider: LoggerProvider | null = null

export function initTracing(): void {
  if (sdk) return

  const otlpEndpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT ?? "http://localhost:4318"

  const resource = resourceFromAttributes({
    [ATTR_SERVICE_NAME]: "weave-api",
    [ATTR_SERVICE_VERSION]: process.env.npm_package_version ?? "0.1.0",
    "deployment.environment": process.env.NODE_ENV ?? "development",
  })

  const traceExporter = new OTLPTraceExporter({
    url: `${otlpEndpoint}/v1/traces`,
  })

  const logExporter = new OTLPLogExporter({
    url: `${otlpEndpoint}/v1/logs`,
  })

  _loggerProvider = new LoggerProvider({
    resource,
    processors: [new BatchLogRecordProcessor(logExporter)],
  })

  sdk = new NodeSDK({
    resource,
    resourceDetectors: [envDetector, hostDetector, osDetector],
    traceExporter,
    textMapPropagator: new W3CTraceContextPropagator(),
    instrumentations: [
      getNodeAutoInstrumentations({
        "@opentelemetry/instrumentation-http": { enabled: true },
        "@opentelemetry/instrumentation-pg": { enabled: true },
        "@opentelemetry/instrumentation-fs": { enabled: false },
      }),
    ],
  })

  sdk.start()
}

export async function shutdownTracing(): Promise<void> {
  if (_loggerProvider) {
    await _loggerProvider.shutdown()
    _loggerProvider = null
  }
  if (sdk) {
    await sdk.shutdown()
    sdk = null
  }
}

const tracer = trace.getTracer("weave-api")

export async function withSpan<T>(
  name: string,
  attributes: Record<string, string | number | boolean>,
  fn: (span: Span) => Promise<T>,
): Promise<T> {
  return tracer.startActiveSpan(name, { attributes }, async (span) => {
    try {
      const result = await fn(span)
      return result
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
  })
}

export { trace, context, propagation, type Span }
