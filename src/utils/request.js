import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

/**
 * 请求拦截配置
 */
service.interceptors.request.use(config => {
  if (store.getters.token) {
    // let each request carry token
    // ['X-Token'] is a custom headers key
    // please modify it according to the actual situation
    config.headers['X-Token'] = getToken()
  }
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

/**
 * 响应拦截配置
 */
service.interceptors.response.use(response => {
  const res = response.data
  if (res.code !== '0000') {
    Message({
      message: res.desc || 'Error',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(new Error(res.desc || 'Error'))
  } else {
    return res
  }
}, error => {
  Message({
    message: error.desc,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default service
