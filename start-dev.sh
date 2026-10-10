#!/usr/bin/env bash
# Keepalive wrapper for the Next.js dev server.
# Restarts the server if it dies. Detached from any controlling terminal.
cd /home/z/my-project
export NODE_ENV=development
while true; do
  echo "[$(date +%H:%M:%S)] Starting Next.js dev server..." >> /home/z/my-project/dev-server.keepalive.log
  node node_modules/next/dist/bin/next dev -p 3000 > /home/z/my-project/dev.log 2>&1
  EXIT=$?
  echo "[$(date +%H:%M:%S)] Server exited with code $EXIT. Restarting in 2s..." >> /home/z/my-project/dev-server.keepalive.log
  sleep 2
done
