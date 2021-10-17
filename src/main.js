import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import lib from './components/formTemplate/componets/index.js'
const app = createApp(App)
app.use(lib)
app.use(ElementPlus)
app.mount('#app')
