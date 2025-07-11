import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "dotenv/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/pipeline/",
  server: {
    port: parseInt(process.env.PORT || "3000"),
  },
});
