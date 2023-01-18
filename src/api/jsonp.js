import { createApp } from 'vue'

export default function jsonp(url, data) {
  const app = createApp()
  return new Promise((resolve, reject) => {
    app.prototype.$jsonp(url,data).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}