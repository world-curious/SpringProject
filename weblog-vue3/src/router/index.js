import Index from '@/pages/frontend/index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import login from '@/pages/admin/login.vue'

// 统一在这里声明所有路由
const routes = [
    {
        path: '/', // 路由地址
        component: Index, // 对应组件
        meta: { // meta 信息
            title: 'Weblog 首页' // 页面标题
        },

    },

    {
        path: '/login', // 路由地址
        component: login, // 对应组件
        meta: { // meta 信息
            title: 'Weblog 首页' // 页面标题
        },
    }

]

// 创建路由
const router = createRouter({
    // 指定路由的历史管理方式，hash 模式指的是 URL 的路径是通过 hash 符号（#）进行标识
    history: createWebHashHistory(),
    // routes: routes 的缩写
    routes, 
})

// 暴露出去
export default router

