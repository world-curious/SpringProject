import '@/assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
// 导入路由
import router from '@/router'

// 导入 Element Plus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'animate.css';


const app = createApp(App)

// 引入图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// 应用路由
app.use(router)
app.mount('#app')
