// import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import jsonp from 'api/jsonp'
import { REQUEST_URL, REQUEST_PROXY_URL, ERR_Ok } from 'api/project.config'
import { Toast } from 'vant'
import { removeToken, getToken } from 'api/cookies'
import router from '../router'

// 判断url是否是后端请求地址
const IS_REQUEST_URL = (url) => {
    return url.indexOf(REQUEST_URL) !== -1
}

/*********************创建一个axios实例*********************/
const service = axios.create({
    timeout: 10000, // 请求超时时长
})

/*********************当前模式*********************/
if (process.env.NODE_ENV == 'development') { //本地开发模式
    console.log("【本地开发模式】")
        // REQUEST_URL = '/api'
} else { //线上部署模式
    console.log("【线上部署模式】")
        // REQUEST_URLS = REQUEST_URL
}

/*********************请求拦截器*********************/
service.interceptors.request.use(
    config => {
        if (config.method === 'get') config.params = config._params;
        // 登录接口，无需token
        if(IS_REQUEST_URL(config.url) && !(config.url.indexOf('/api/write_off/login') !== -1)) config.headers.token = getToken() || '';
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

/*********************响应拦截器*********************/
service.interceptors.response.use(response => {
    const { data: { msg, code }, config: { url } } = response
    if(IS_REQUEST_URL(url)) {
        // token状态失效
        if (code == -1) {
            removeToken()
            Toast('登录状态过期，请重新登录')
            router.replace('/')
        }
        // 状态返回失败
        if (code == 0) Toast(msg)
    }
    if (response.status == ERR_Ok || response.data.status == ERR_Ok || response.data.data.status == ERR_Ok) {
        return IS_REQUEST_URL(url) ? response.data : response
    } else {
        return { status: 1001, message: `返回数据状态status状态不为${ERR_Ok}` }
    }
})
/*********************导出一个通用请求方法*********************/
export const api = (url, data, type = 'post', isQs = true, isUrl = 1, config) => {
    if (isUrl == 1 || (isUrl == 2 && process.env.NODE_ENV === 'production')) {
        url = `${REQUEST_URL}${url}`
    } else if (isUrl == 2) {
        url = `${REQUEST_PROXY_URL}${url}`
    }
    if (type === 'jsonp') {
        return jsonp(url, data).then(res => {
            if(IS_REQUEST_URL(url)) {
                return res.code === 1 ? Promise.resolve(res) : Promise.reject(res)
            }
            return  Promise.resolve(res)
        }).catch(err => {
            return Promise.reject(err)
        })
    } else {
        if (type !== 'post' && type !== 'get') return Promise.reject({ status: 1001, message: '请求方法不符合规范' })
        return service[type](url, type == 'post' ? (isQs ? qs.stringify(data) : data) : { _params: data }, config).then(res => {
            if(IS_REQUEST_URL(url)) {
                return res.code === 1 ? Promise.resolve(res) : Promise.reject(res)
            }
            return  Promise.resolve(res)
        }).catch(err => {
            console.log('catch', err)
            return Promise.reject(err)
        })
    }
}