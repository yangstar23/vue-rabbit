//导入了两个方法
// createRouter:创建router实例对象
// createWebHistory:创建history模式路由
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/index.vue'
import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //path和component的对应关系位置
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
           //home
            path: '',
            component: Home
        },
          //category
        {
          path: '/category/:id',
          component: Category
        }
        ]
    },
    {
        path: '/login',
        component: Login,
    },
  ]
})

export default router
