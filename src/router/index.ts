import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/index.vue'
export const routes:any = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '主页'
    },
    hidden: true,
    component: () => import('@/views/index.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    meta: {
      title: '首页'
    },
    component: Layout,
    redirect: '/pagea',
    children: [
      {
        path: '/pagea',
        name: 'PageA',
        meta: {
          title: '页面A',
          icon: 'el-icon-magic-stick'
        },
        component: () => import('@/views/PageA.vue')
      }

    ]
  },
  {
    path: '/moduleb',
    name: 'ModuleB',
    meta: {
      title: '模块B'
    },
    component: Layout,
    children: [
      {
        path: '/pageb',
        name: 'PageB',
        meta: {
          title: '页面B',
          icon: 'el-icon-reading'
        },
        component: () => import('@/views/PageB.vue')
      }

    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes
})

export default router
