import Cookies from 'js-cookie'

const TOKEN = 'write-off-token'
  /* 用户token */
function getToken() {
  return Cookies.get(TOKEN)
}

function setToken(token) {
  Cookies.set(TOKEN, token)
}

function removeToken() {
  Cookies.remove(TOKEN)
}

export {
  getToken,
  setToken,
  removeToken
}