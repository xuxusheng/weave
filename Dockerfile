FROM oven/bun:1 AS builder
WORKDIR /app

# Copy workspace config for dependency caching
COPY bunfig.toml package.json bun.lock ./
COPY apps/web/package.json ./apps/web/
COPY apps/api/package.json ./apps/api/

RUN bun install --frozen-lockfile

# Copy source and build
COPY . .
RUN cd apps/api && bunx prisma generate
RUN bun run build

# --- Production image ---
FROM oven/bun:1-slim
WORKDIR /app

# Copy built backend + prisma files
COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/apps/api/prisma ./prisma
COPY --from=builder /app/apps/api/prisma.config.ts ./
COPY --from=builder /app/apps/api/package.json ./

COPY --from=builder /app/node_modules ./node_modules

# Copy entrypoint script
COPY docker-entrypoint.sh ./
RUN chmod +x docker-entrypoint.sh

# Copy built frontend (served by Hono)
COPY --from=builder /app/apps/web/dist /web/dist

ENV NODE_ENV=production
ENV STATIC_ROOT=/web/dist/
EXPOSE 3000

USER bun
ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["bun", "run", "dist/index.js"]
