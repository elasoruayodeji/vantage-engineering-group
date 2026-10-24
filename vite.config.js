import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    // Allow connections from any host (needed for phone access)
    allowedHosts: true,
    hmr: {
      // Use the actual host for HMR connections
      host: "localhost",
      port: 3000,
      protocol: "ws",
    },
  },
  // Preview configuration for built site
  preview: {
    host: "0.0.0.0",
    port: 4173,
    strictPort: true,
    allowedHosts: true,
  },
});
