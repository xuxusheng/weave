FROM node:22-alpine AS builder
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@9.15.4 --activate

# Copy workspace config first for better caching
COPY pnpm-workspace.yaml pnpm-lock.yaml turbo.json package.json ./
COPY apps/web/package.json ./apps/web/
COPY apps/api/package.json ./apps/api/

RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# Build
RUN pnpm build

FROM node:22-alpine AS api
WORKDIR /app
COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/apps/api/package.json ./
RUN corepack enable && corepack prepare pnpm@9.15.4 --activate && pnpm install --prod
EXPOSE 3001
CMD ["node", "dist/index.js"]

FROM nginx:alpine AS web
COPY --from=builder /app/apps/web/dist /usr/share/nginx/html

RUN rm -f /etc/nginx/conf.d/default.conf

RUN cat > /etc/nginx/conf.d/gzip.conf << 'EOF'
gzip on;
gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_min_length 256;
gzip_types text/plain text/css text/javascript application/javascript application/json application/xml image/svg+xml font/woff2;
EOF

RUN cat > /etc/nginx/conf.d/app.conf << 'EOF'
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;

    location / {
        try_files $uri $uri/ /index.html;
    }
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_set_header Host $host;
    }
}
EOF

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
