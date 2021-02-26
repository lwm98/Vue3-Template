import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import initElement from './plugins/element-plus'
import './styles/index.scss'
import './permission'
import waves from './derective/waves'

const app = createApp(App)
initElement(app)
app.use(store).use(router)

// Mount when the route is ready
router.isReady().then(() => {
  app.mount('#app', true)
})

waves.install(app)
