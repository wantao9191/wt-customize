import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  chainWebpack: config => {
    config.resolve.alias
      .set("views", resolve("src/views")).
      set("assets", resolve("src/assets")).
      set("components", resolve("src/components")).
      set("api", resolve("src/api")).set("store", resolve("src/store"))
  }
})
