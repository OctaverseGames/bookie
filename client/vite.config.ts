import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../shared"),
      "@assets": path.resolve(__dirname, "../attached_assets"),
    },
  },
  root: __dirname, // client folder
  build: {
    outDir: path.resolve(__dirname, "dist"), // Vercel serves from here
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    fs: {
      strict: true,
    },
  },
});
