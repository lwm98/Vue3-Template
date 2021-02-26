import axios from 'axios'
import { ElMessage as Message } from 'element-plus'
import { useStore } from 'vuex'
import { getToken } from './auth'
import { decryptAES } from './cryption'

const store = useStore()
const BASE_URL = String(import.meta.env.VITE_BASE_API)
const isProd = import.meta.env.VITE_NODE_ENV == 'production'

const request = axios.create({
  baseURL: BASE_URL, // 这里实际开发修改
  timeout: 20000
})

/**
 * 请求拦截器
 */
request.interceptors.request.use(
  (config) => {
    const token = getToken()

    config.headers.token = token
    return config
  },
  (error) => Promise.reject(error)
)

/**
 * 响应拦截器
 */
request.interceptors.response.use(
  response => {
    let { data } = response
    if (data instanceof ArrayBuffer || data instanceof Blob) {
      return data
    }
    //   const notIntercept = response.config.url.includes('/api/exrate/')

    if (isProd) {
      data = JSON.parse(decryptAES(data))
    }
    switch (Number(data.resultCode)) {
      case 0:
        return data
      case 110:
        Message.error('登录异常')
        store.dispatch('user/logout').then(() => {
          location.reload()
        })
        return Promise.reject(data)
      case 111:
        store.dispatch('user/logout')
        return Promise.reject(data)
      default:
        console.log('%cError in here：' + response.config.url + ' ↓', 'color:red')
        if (data.data) {
          Message.error(data.data)
        } else {
          Message.error(data.resultMsg)
        }
        return Promise.reject(data)
    }
  },
  error => {
    Message({
      type: 'error',
      message: error
    })
    return Promise.reject(error)
  }
)
