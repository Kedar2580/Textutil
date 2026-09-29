import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The "homepage" field in package.json is https://Kedar2580.github.io/Textutil,
// so the app is served from a subpath. That subpath has to be baked into every
// asset URL at build time, otherwise the built site 404s on its JS bundle.
// Override with BASE_PATH when deploying somewhere else (e.g. BASE_PATH=/ vite build).
const base = process.env.BASE_PATH ?? "/Textutil/";

export default defineConfig({
  base,
  plugins: [react()],
});
