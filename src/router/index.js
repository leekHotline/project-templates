//导入依赖
import { createRouter, createWebHistory } from 'vue-router'
import My from '../views/My.vue'
import Header from '../components/Header.vue'

//定义路由
const routes = [
  {
    path: '/',
    name: 'my',
    component: My,
    children: [
      {
        path: '/test1',
        name: 'test1',
        component: () => import('@/views/Test1.vue')
      },
      {
        path: '/test2',
        name: 'test2',
        component: () => import('@/views/Test2.vue')
      },
      {
        path: '/test3',
        name: 'test3',
        component: () => import('@/views/Test3.vue')
      },
      {
        path: '/test4',
        name: 'test4',
        component: () => import('@/views/Test4.vue')
      },
      {
        path: '/test5',
        name: 'test5',
        component: () => import('@/views/Test5.vue')
      },
    ]
  },
  {
    path: '/header',
    name: 'header',
    component: Header
  },
  {
    path: '/footer',
    name: 'footer',
    component: () => import('@/components/Footer.vue')
  },



]
//创建路由实例
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
//导出路由实例
export default router


