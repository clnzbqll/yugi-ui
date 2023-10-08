import { defineConfig, loadEnv } from 'vite'
import createVitePlugins from "./vite/plugins";
import path from "path";

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    // 插件
    plugins: createVitePlugins(env, command === "build"),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },
    // 服务器
    server: {
      port: 5173,
      host: "0.0.0.0",
      open: true, 
      proxy: {
        "/yg": {
          target: "http://192.168.110.25:2000",
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/yg/, ""),
        },
      },
    }, 
  }
})