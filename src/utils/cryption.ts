import CryptoJS from 'crypto-js'

const API_KEY = '636e2e636f6d2e64'
const KEY = CryptoJS.enc.Utf8.parse(API_KEY)
const OPTIONS = {
  iv: CryptoJS.enc.Utf8.parse('16-Bytes--String'),
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7
}

/**
 * 产生数据的 MD5 摘要的 16 进制大写字符串
 * @param {String} source 要获取摘要的字符串
 * @param {Boolean} addModifier 是否在 source 前后添加 API_KEY
 * @returns {String} 数据的 MD5 摘要的 16 进制大写字符串
 */
export function MD5(source:string, addModifier = true) {
  return CryptoJS.MD5(addModifier ? API_KEY + source + API_KEY : source)
    .toString(CryptoJS.enc.Hex)
    .toUpperCase()
}

/**
 * 用 AES 加密字符串
 * @param {String} source - 要加密的字符串
 * @returns {String} AES 加密过的 Base64 字符串
 */
export function encryptByAES(source:string) {
  const encryptedData = CryptoJS.AES.encrypt(source, KEY, OPTIONS)
  return encryptedData.toString()
}

/**
 * 解密 AES 加密过的字符串
 * @param {String} encryptedBase64Str AES 加密过的字符串
 * @returns {String} 解密后的 utf-8 真实字符串
 */
export function decryptAES(encryptedStr:string) {
  const decryptedData = CryptoJS.AES.decrypt(encryptedStr, KEY, OPTIONS)
  return CryptoJS.enc.Utf8.stringify(decryptedData)
}