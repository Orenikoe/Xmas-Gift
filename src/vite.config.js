const path = require("path");
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@services": path.resolve(__dirname, "src/services"),
    },
  },
   build: {
    rollupOptions: {
      external: [
        "react-snowfall","react-webcam","react-icons/bs","react-icons/bi","react-component-export-image"
      ],
    },
  },
  optimizeDeps: {
    inlcude: ["react-snowfall", "react-webcam",,"react-icons/bs","react-icons/bi","react-component-export-image"],
  },
});
