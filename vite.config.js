import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Correct full config
export default defineConfig({
  plugins: [react()],
  base: "/builer-wesite/", // 👈 must end with a slash and be in quotes
});
