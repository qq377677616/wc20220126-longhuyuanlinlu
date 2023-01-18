import router from './router'
import { getToken } from 'api/cookies'
import { Toast } from 'vant'
router.beforeEach((to, from, next) => {
  if(!getToken()&&to.path !== '/') {
    Toast('登录状态过期，请重新登录')
    next({ path: '/' })
  }
  next()
})