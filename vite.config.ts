import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { defineConfig, loadEnv, type PluginOption } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react(), tailwindcss()] as PluginOption[],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      host: true,
      port: parseInt(env.VITE_APP_PORT) || 3000,
      watch: {
        usePolling: true,
      },
      // Add options to reduce warnings
      hmr: {
        overlay: false,
      },
    },
    // Add build options to reduce warnings
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // Suppress specific warnings if needed
          if (warning.code === "CIRCULAR_DEPENDENCY") return;
          warn(warning);
        },
      },
    },
    component: {
      devServer: {
        framework: "react",
        bundler: "vite",
        // viteConfig?: Will try to infer, if passed it will be used as is
      },
    },
  };
});
