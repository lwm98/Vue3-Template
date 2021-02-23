import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import initElement from './plugins/element-plus'
import './styles/index.scss'
import './permission'

let app = createApp(App)
initElement(app)
app.use(store).use(router).mount('#app')

import store2 from 'store2'

// 统一添加前缀
const storage = store2.namespace('Vue3_Template')
let a = {...storage}
