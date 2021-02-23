// import Cookies from 'js-cookie'
import { session } from '@/utils/storage.js'

const TokenKey = 'VUE3_PC_TOKEN'

export function getToken() {
  return session.get(TokenKey)
}

export function setToken(token:string) {
  return session.set(TokenKey, token)
}

export function removeToken() {
  return session.remove(TokenKey)
}
