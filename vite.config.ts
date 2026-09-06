import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/gyu-starry-portfolio/",
  plugins: [react()],
});
