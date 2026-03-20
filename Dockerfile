# 预构建方案：本地 build 好，Docker 只打包静态文件
FROM nginx:alpine

COPY dist/ /usr/share/nginx/html/

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
    location /monaco-editor/ {
        expires 30d;
        add_header Cache-Control "public";
    }
    location ~* \.worker\.js$ {
        add_header Content-Type "application/javascript";
        add_header Cross-Origin-Opener-Policy "same-origin";
        add_header Cross-Origin-Embedder-Policy "require-corp";
    }
}
EOF

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
