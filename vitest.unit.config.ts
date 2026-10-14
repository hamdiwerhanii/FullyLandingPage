import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.ts";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      globals: true,
      include: ["__tests__/unit/**/*.{test,spec}.{ts,tsx}"],
      setupFiles: ["./vitest.setup.ts"],
    },
  }),
);
