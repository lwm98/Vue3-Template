import router from './router'

router.beforeEach((to, from) => {
  console.log('路由前置守卫',to);
  return true
})