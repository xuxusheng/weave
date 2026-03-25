#!/bin/sh
set -e

if [ -z "$SKIP_MIGRATE" ]; then
  echo "正在执行数据库迁移..."
  MAX_RETRIES=3
  RETRY_COUNT=0

  while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
    if prisma migrate deploy; then
      break
    fi
    
    RETRY_COUNT=$((RETRY_COUNT + 1))
    if [ $RETRY_COUNT -lt $MAX_RETRIES ]; then
      echo "迁移失败，5秒后重试... (第 $RETRY_COUNT/$MAX_RETRIES 次)"
      sleep 5
    else
      echo "错误: 迁移在 $MAX_RETRIES 次尝试后仍然失败，应用启动中止"
      exit 1
    fi
  done
else
  echo "跳过数据库迁移"
fi

echo "正在启动应用..."
exec "$@"
