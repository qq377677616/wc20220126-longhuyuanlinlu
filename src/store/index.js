import { createStore } from 'vuex'
// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      storeName: '',
    }
  },
  mutations: {
    // 修改store数据
    setState(state, payload) {
      state[Object.keys(payload)] = Object.values(payload)[0]
    },
  },
  actions: {
  }
})
export default store