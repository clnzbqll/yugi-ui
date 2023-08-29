import { defineConfig, loadEnv } from 'vite'
import createVitePlugins from "./vite/plugins";
import path from "path";

export default defineConfig(({ mode, command }) => {
  // 环境变量
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: createVitePlugins(env, command === "build"),
    resolve: {
      alias: {
        // 设置别名
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})