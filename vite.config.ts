import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
    "!**/dist/**": "",
  },
  lint: {
    ignorePatterns: ["**/generated/**"],
    options: { typeAware: true, typeCheck: true },
    rules: {
      "unicorn/no-thenable": "off",
    },
  },
});
