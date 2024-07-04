import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
  },
  resolve: {
    alias: [
      { find: "@atoms", replacement: path.resolve(__dirname, "src/atoms") },
      {
        find: "@molecules",
        replacement: path.resolve(__dirname, "src/molecules"),
      },
      {
        find: "@organisms",
        replacement: path.resolve(__dirname, "src/organisms"),
      },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
      {
        find: "@providers",
        replacement: path.resolve(__dirname, "src/providers"),
      },
    ],
  },
});
