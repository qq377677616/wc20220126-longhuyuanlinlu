<template>
  <!-- 路由视图 -->
  <router-view v-slot="{ Component }" class="router-view">
    <transition :name="transitionName">
      <keep-alive include="cancelName">
        <component :is="Component"/>
      </keep-alive>
    </transition>
  </router-view>
</template>

<script>
import VConsole from 'vconsole'
import { PROJECT_CONFIG } from 'api/project.config'
if (PROJECT_CONFIG.vConsole.is_open) { new VConsole() }

import { reactive, toRefs, provide } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'App',
  setup() {
    const state = reactive({
      transitionName: '',//路由跳转动画  0 '' 1 'right-left' 2 left-right''
    })
    const routeHistory = []
    provide('routeHistory', routeHistory)
    const router = useRouter()
    const tabBarPath = router.options.routes.map(item => {
      if(item.meta && item.meta.tabBar) {
        return item.path
      }
    })
    router.beforeEach((to, from, next) => {
      console.log('beforeEach Begin', routeHistory)
      // 初始化进入或者tabBar页面切换时 无动画效果
      if(!from.name || to.meta.tabBar && from.meta.tabBar) {
        state.transitionName = ''
        routeHistory.push(to.fullPath)
      } 
      // 判断是否返回tabBar页面
      else if(tabBarPath.includes(to.fullPath)) {
        state.transitionName = 'left-right'
        routeHistory.splice(0, routeHistory.length, to.fullPath)
      } 
      // 判断是否返回上一个路由栈
      else if(routeHistory.length-1 >= 0 && routeHistory[routeHistory.length-2] === to.fullPath ) {
        state.transitionName = 'left-right'
        routeHistory.pop()
      } 
      // 添加路由栈
      else {
        state.transitionName = 'right-left'
        routeHistory.push(to.fullPath)
      }
      console.log('beforeEach End', routeHistory)
      next()
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style>
/* body{background:linear-gradient(135deg,#0A1F3F 0%, #0E2F5B 135%);} */
/* .body{background:linear-gradient(135deg,#0A1F3F 0%, #0E2F5B 135%);} */
.router-view{transition: all .5s cubic-bezier(.55,0,.1,1);position: absolute;left:0;top:0;width: 100%;min-height:100vh;}
.right-left-enter-from,.left-right-leave-to{transform: translateX(100%);opacity: 0;}
.right-left-leave-to,.left-right-enter-from{transform: translateX(-100%);opacity: 0;}
.page{width: 100vw;height: 100vh;background-size: cover !important;position: fixed;left:0;top:0;z-index: 100;overflow: hidden;}
</style>
