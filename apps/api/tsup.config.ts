import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    entry: ["src"],
    splitting: false,
    sourcemap: true,
    clean: true,
    minify: !options.watch,
    bundle: true,
    dts: true,
    tsconfig: "./tsconfig.json",
    outDir: "dist",
  };
});
