#!/bin/sh
# Copy Monaco Editor files to public directory for local loading (no CDN)
DEST="public/monaco-editor/min/vs"
SRC="node_modules/monaco-editor/min/vs"

rm -rf "$DEST"
mkdir -p "$DEST"

# Copy everything except node_modules
cp -r "$SRC"/* "$DEST/"

echo "✅ Monaco files copied ($(du -sh "$DEST" | cut -f1))"
