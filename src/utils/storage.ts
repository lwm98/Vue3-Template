import store from 'store2'

// 统一添加前缀
const storage = store.namespace('Vue3_Template')

const local = { ...storage, set: localSet }
const session = { ...storage.session, set: sessionSet }

/**
 * 在 localStorage 保存一条记录，保存前会检测 key 键是否合法
 * @param {string} key 要保存的键名
 * @param {*} data 要保存的值
 */
function localSet(key:string, data:any) {
  // validateKey(key)
  storage.set(key, data)
}

/**
 * 在 sessionStorage 保存一条记录，保存前会检测 key 键是否合法
 * @param {string} key 要保存的键名
 * @param {*} data 要保存的值
 */
function sessionSet(key:string, data:any) {
  // validateKey(key)
  storage.set(key, data)
}

/**
 * 检测键值命名是否符合规范，key 只能包括大写字母和数字
 * @param {String} key 要检测的键名
 */
function validateKey(key:string) {
  const pattern = /^[A-Z0-9@_]+$/
  if (!pattern.test(key)) {
    throw new Error('key 只能包括大写字母和数字')
  }
}

export { local, session }