import { createRouter,createWebHistory,RouteRecordRaw } from "vue-router"

const routes:Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        meta: {
          title: "首页",
        },
        component: () => import("@/views/index.vue"),
    },
    {
        path: "/pagea",
        name: "PageA",
        meta: {
          title: "页面A",
        },
        component: () => import("@/views/PageA.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router