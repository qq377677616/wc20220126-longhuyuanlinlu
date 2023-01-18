<template>
  <div class="default-popup pof">
    <div class="page page51 flex-cen">
      <div class="con flex-cen-col">
        <transition name="top-bottom">
          <!-- <div class="h2 flex-cen" v-show="showHide"><img src="../../assets/images/original/page19_title_01.png" alt="" /></div> -->
          <div class="h2 flex-cen" v-show="showHide">
            <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
              <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page19/page19_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
            </sequence-effect>
          </div>
        </transition>
        <div class="con-one">
          <div class="top" v-show="showHide">
            <!-- <transition :name="showHide ? 'opacity' : ''">
              <div class="line" :class="{'on': showHide}" v-show="showHide"><img src="../../assets/images/original/01xuxian.gif" alt=""/></div>
            </transition> -->
            <transition name="opacity">
              <div class="line" v-show="showHide"><img src="../../assets/images/original/01xuxian.gif" alt=""/></div>
            </transition>
            <transition name="top-bottom">
              <div class="img-two" v-show="showHide"><img src="../../assets/images/original/page19_01.png" alt=""/></div>
            </transition>
            </div>
          <div class="bottom">
            <transition name="bottom-top">
              <div class="img" v-show="showHide"><img src="../../assets/images/original/page19_02.png" alt=""/></div>
            </transition>
          </div>
        </div>
        <!-- 点击了解更多页 -->
        <transition :name="transitionName">
          <LongPage421 ref="longPage421" v-show="showTouchPage == 421" @openDefaultBack="openDefaultBack"></LongPage421>
        </transition>
        <transition name="rl-page">
          <LongPage422 ref="longPage422" v-show="showTouchPage == 422" @openDefaultBack="openDefaultBack"></LongPage422>
        </transition>
        <!-- 左下角菜单栏部分 -->
        <transition name="bottom-top2">
          <MenuList v-show="isShowMenu" ref="menuList" @selectMenu="selectMenu"></MenuList>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, ref, provide, inject, onMounted } from 'vue'
export default {
  name: 'indexName',
  setup(props, { emit }) {
    const longPage421 = ref(null), longPage422 = ref(null) 
    provide("isShowBackBtn", true)
    onMounted(() => {
      // methods.play()
    })
    //页面数据
    const data = reactive({
      sequenceList: { url: `../assets/images/sequence/page1/page1_0.png`, num: 16, sequenceIndex: "sequenceListIndex", initIndex: 1, speed: 110, loop: true, autoplay: true },//序列配置
      sequenceListIndex: 0,//序列索引
      showHide: false,//显示隐藏变量
      mySetTimeout1: null,//定时器1
      mySetTimeout2: null,//定时器2
      showTouchPage: '-1',//显示隐藏变量--滑动内页1
      transitionName: 'bt-page',//点击了解更多页页面动画切换效果
      showHideVideo: false,//显示隐藏变量--全屏视频组件
      isShowMenu: false,//展示菜单栏
    })
    //事件方法
    const methods = reactive({
      //开始加载
      play() {
        data.mySetTimeout1 = setTimeout(() => { data.showHide = true }, 400)
        data.mySetTimeout2 = setTimeout(() => { data.isShowMenu = true }, 700)
      },
      //移除加载效果
      removeAnimate() {
        clearTimeout(data.mySetTimeout1)
        clearTimeout(data.mySetTimeout2)
        data.showHide = false
        data.isShowMenu = false
      },
      //点击了5心产品
      selectItem(e) {
        //console.log("e", e)
      },
      //设置显示隐藏变量--滑动内页1
      setShowTouchPage(showTouchPage) {
        // data.transitionName = showTouchPage == 421 ? 'right-left' : 'bt-page'
        data.showTouchPage = showTouchPage
        if (data.showTouchPage == -1) {
          data.transitionName = 'bt-page'
          emit("openShowTouchPage", false)
          longPage421.value.removeAnimate()
          longPage422.value.removeAnimate()
        } else if (data.showTouchPage == 421) {
          longPage421.value.play()
        } else if (data.showTouchPage == 422) {
          longPage422.value.play()
        }
      },
      //监听滑动
      monitorTouchEvent(res) {
        console.log("监听滑动", res)
        console.log("data.showTouchPage ", data.showTouchPage )
        // data.transitionName = 'left-right'
        if (res.code == 1) {
          if (data.showTouchPage == -1) {

          } else if (data.showTouchPage == 421) {
            data.transitionName = 'lr-page'
            // data.showTouchPage = 422
            methods.setShowTouchPage(422)
          }
        }
        if (res.code == 2) {
          if (data.showTouchPage == -1) {
            methods.selectMenu(['back'])
          } else if (data.showTouchPage == 421) {
            methods.setShowTouchPage(-1)
            // data.transitionName = 'bt-page'
          } else if (data.showTouchPage == 422) {
            data.transitionName = 'lr-page'
            console.log('data.transitionName', data.transitionName)
            methods.setShowTouchPage(421)
          }
        }
      },
      //回调--详情组件左下角返回
      openDefaultBack() {
        methods.setShowTouchPage(-1)
      },
      //左下角菜单点击回调
      selectMenu(e) {
        //console.log("e", e)
        if (e[0] == 'back') {
          // methods.setShowTouchPage(-1)
          // emit("openShowTouchPage", false)
          emit("openDefaultBack", false)
          // emit('openLearnMoreBack', data.showTouchPage)
        } 
      },
      //监听序列索引
      getSequenceListIndex(e) {
        data.sequenceListIndex = e
      }
    })
    return {
      ...toRefs(data),
      ...toRefs(methods),
    }
  }
}
</script>

<style scoped>
  .top{margin:78px 0 61px;transition-delay: .2s;}
  .con-one{height: 1270px;}
  .bottom img{transition-delay: .5s;}
  .h2{width:1339px;height: 105px;position: relative;}
  .top .line{position: absolute;left:50%;top:466px;transform: translateX(-50%);transition-delay: .6s;}
</style>