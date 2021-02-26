import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../layout/index.vue'
export const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '主页'
    },
    component: () => import('@/views/index.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    meta: {
      title: '首页'
    },
    component: Layout,
    redirect: 'PageA',
    children: [
      {
        path: '/pagea',
        name: 'PageA',
        meta: {
          title: '页面A'
        },
        component: () => import('@/views/PageA.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
