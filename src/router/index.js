import { createRouter, createWebHashHistory  }  from 'vue-router'

const routes = [
  {
      path: '/',
      name: 'index',
      component:() => import('views/index.vue'),
      meta: {
        tabBar: true
      }
  },
]

const router = createRouter({
  history: createWebHashHistory(),// hash模式：createWebHashHistory，history模式：createWebHistory
  routes
})

export default router