import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


const dev_url = 'http://172.17.67.28:8081/server/index.php?s=/mock-path/7&path='

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host : true,
    proxy : {
      "/login": dev_url ,
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ]
})
