import { api } from 'api/request'
/**
 * 接口请求
 * @param { String } url 接口地址 
 * @param { Object } data 请求的参数 
 * @param { String } method 请求方式（post/get/jsonp）
 * @param { String } url 接口地址 
 * @param { Boolean } 是否qs请求参数 
 * @param { Number } 接口地址类型（0为全地址、1为半地址、2为本地代理地址） 
 */
export default {
    //登录
    login: (data, url = '/api/write_off/login', method = 'post') => { return api(url, data, method) },
    //核销
    do: (data, url = '/api/write_off/do', method = 'post') => { return api(url, data, method) },
    // 核销记录
    log: (data, url = '/api/write_off/log', method = 'post') => { return api(url, data, method) },
}