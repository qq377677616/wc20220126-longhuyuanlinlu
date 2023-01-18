<template>
  <div class="default-popup pof">
    <div class="page page44 flex-cen">
      <transition name="opacity-scale2">
        <div class="con flex-cen-col" v-show="showTouchPage == -1 && !showHideVideo">
          <transition name="top-bottom">
            <!-- <div class="h2 flex-cen" v-show="showHide"><img src="../../assets/images/original/page13_title_01.png" alt="" /></div> -->
            <div class="h2 flex-cen" v-show="showHide">
              <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
                <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page13/page13_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
              </sequence-effect>
            </div>
          </transition>
          <div class="con-one flex-cen">
            <div class="left">
              <transition name="left-right">
                <div class="img-one" v-show="showHide"><img src="../../assets/images/original/page13_01.png" alt=""/></div>
              </transition>
              <transition name="left-right">
                <div class="img-two" v-show="showHide"><img src="../../assets/images/original/page13_02.png" alt=""/></div>
              </transition>
              <transition name="opacity">
                <div class="btn" v-show="showHide"><img src="../../assets/images/original/page13_btn_01.png" alt="" @click="learnMore"/></div>
              </transition>
              </div>
            <div class="right">
              <transition name="right-left">
                <div class="img-top" v-show="showHide" @click="clickPlayVideo"><img src="../../assets/images/original/page13_03.png" alt=""/></div>
              </transition>
            </div>
          </div>
        </div>
      </transition>
      <!-- 点击了解更多页 -->
      <!-- <transition :name="showTouchPage == -1 ? 'bottom-top2' : 'right-left2'"> -->
      <transition :name="transitionName441">
        <LongPage441 ref="longPage441" v-show="showTouchPage == 441" @openDefaultBack="openDefaultBack"></LongPage441>
      </transition>
      <transition :name="transitionName442">
        <LongPage442 ref="longPage442" v-show="showTouchPage == 442" @openDefaultBack="openDefaultBack"></LongPage442>
      </transition>
      <transition :name="transitionName443">
        <LongPage443 ref="longPage443" v-show="showTouchPage == 443" @openDefaultBack="openDefaultBack"></LongPage443>
      </transition>
      <transition :name="transitionName444">
        <LongPage444 ref="longPage444" v-show="showTouchPage == 444" @openDefaultBack="openDefaultBack"></LongPage444>
      </transition>
      <!-- 视频页 -->
      <transition name="opacity-scale2">
        <PlayVideo ref="playVideo" v-show="showHideVideo" @videoPlayBack="videoPlayBack"></PlayVideo>
      </transition>
      <!-- 左下角菜单栏部分 -->
      <!-- <transition name="left-right">
        <MenuList ref="menuList" @selectMenu="selectMenu"></MenuList>
      </transition> -->
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, ref, provide, inject, onMounted } from 'vue'
import * as tool from 'assets/js/tool'
import { ASSETS_URL_TYPE } from 'api/project.config'

export default {
  name: 'indexName',
  setup(props, { emit }) {
    const longPage441 = ref(null), longPage442 = ref(null), longPage443 = ref(null), longPage444 = ref(null), playVideo = ref(null)
    // provide("isShowBackBtn", true)
    // provide("videoSrc", ['https://game.vrupup.com/resources/web/szq/longhudaping/video/video_04.mp4', require('../../assets/video/video_04.mp4')][ASSETS_URL_TYPE])
    provide("videoSrc", 'https://game.vrupup.com/resources/web/szq/longhudaping/video/video_04.mp4')
    onMounted(() => {
      // methods.play()
    })
    //页面数据
    const data = reactive({
      sequenceList: { url: `../assets/images/sequence/page1/page1_0.png`, num: 16, sequenceIndex: "sequenceListIndex", initIndex: 1, speed: 110, loop: true, autoplay: true },//序列配置
      sequenceListIndex: 0,//序列索引
      showHide: false,//显示隐藏变量
      mySetTimeout1: null,//定时器1
      showTouchPage: '-1',//显示隐藏变量--滑动内页1
      transitionName441: 'opacity-scale2',//页面进出场动画-441
      transitionName442: 'rl-page',//页面进出场动画-442
      transitionName443: 'rl-page',//页面进出场动画-443
      transitionName444: 'rl-page',//页面进出场动画-444
      showHideVideo: false,//显示隐藏变量--全屏视频组件

    })
    //事件方法
    const methods = reactive({
      //开始加载
      play() {
        data.mySetTimeout1 = setTimeout(() => { data.showHide = true }, 400)
      },
      //移除加载效果
      removeAnimate() {
        clearTimeout(data.mySetTimeout1)
        data.showHide = false
      },
      //点击了解更多
      learnMore() {
        emit("openShowTouchPage", true)
        methods.setShowTouchPage(441)
      },
      //设置显示隐藏变量--滑动内页1
      setShowTouchPage(showTouchPage) {
        // data.transitionName = showTouchPage == 441 ? 'right-left' : 'bottom-top2'
        data.showTouchPage = showTouchPage
        if (data.showTouchPage == -1) {
          data.transitionName441 = 'opacity-scale2'
          longPage441.value.removeAnimate()
          longPage442.value.removeAnimate()
          longPage443.value.removeAnimate()
          longPage444.value.removeAnimate()
          emit("openShowTouchPage", false)
        } else if (data.showTouchPage == 441) {
          longPage441.value.play()
        } else if (data.showTouchPage == 442) {
          longPage442.value.play()
        } else if (data.showTouchPage == 443) {
          longPage443.value.play()
        } else if (data.showTouchPage == 444) {
          longPage444.value.play()
        }
      },
      //监听滑动
      monitorTouchEvent(res) {
        console.log("【内页监听滑动】", data.showTouchPage, res)
        if (data.showTouchPage != -1) {
            if (data.showTouchPage == 441) {
              data.transitionName441 = ['lr-page', 'rl-page'][res.code - 1]
              data.transitionName442 = ['rl-page', 'lr-page'][res.code - 1]
            } else if (data.showTouchPage == 442) {
              data.transitionName442 = ['lr-page', 'rl-page'][res.code - 1]
              data.transitionName443 = ['rl-page', 'lr-page'][res.code - 1]
            } else if (data.showTouchPage == 443) {
              data.transitionName443 = ['lr-page', 'rl-page'][res.code - 1]
              data.transitionName444 = ['rl-page', 'lr-page'][res.code - 1]
            } else if (data.showTouchPage == 444) {
              data.transitionName444 = ['lr-page', 'rl-page'][res.code - 1]
            }
          }
        if (res.code == 1) {
          if (data.showTouchPage == -1) {
            
          } else if (data.showTouchPage == 441) {
            methods.setShowTouchPage(442)
          } else if (data.showTouchPage == 442) {
            // data.transitionName = 'lr-page'
            methods.setShowTouchPage(443)
          } else if (data.showTouchPage == 443) {
            methods.setShowTouchPage(444)
          }
        }
        if (res.code == 2) {
          if (data.showTouchPage == -1) {
            methods.selectMenu(['back'])
          } else if (data.showTouchPage == 441) {
            methods.setShowTouchPage(-1)
          } else if (data.showTouchPage == 442) {
            methods.setShowTouchPage(441)
          } else if (data.showTouchPage == 443) {
            methods.setShowTouchPage(442)
          } else if (data.showTouchPage == 444) {
            methods.setShowTouchPage(443)
          }
        }
      },
      //点击弹出视频
      clickPlayVideo() {
        data.showHideVideo = true
        setTimeout(() => { playVideo.value.videoPlay() }, 500)
        emit("showVideoPopup", true)
      },
      //回调--视频组件左下角返回
      videoPlayBack() {
        data.showHideVideo = false
        emit("showVideoPopup", false)
      },
      //左下角菜单点击回调
      selectMenu(e) {
        //console.log("e", e)
        if (e[0] == 'back') {
          // if (data.showTouchPage == 441) data.transitionName = 'bottom-top2'
          emit('openLearnMoreBack', data.showTouchPage)
        } 
      },
       //回调--详情组件左下角返回
      openDefaultBack() {
        methods.setShowTouchPage(-1)
        // data.showTouchPage = -1
        // longPage421.value.removeAnimate()
        // emit("openShowTouchPage", false)
      },
      //监听序列索引
      getSequenceListIndex(e) {
        data.sequenceListIndex = e
      }
    })
    return {
      longPage441,
      longPage442,
      longPage443,
      longPage444,
      playVideo,
      ...toRefs(data),
      ...toRefs(methods),
    }
  }
}
</script>

<style scoped>
  /* .default-popup{z-index: 900;} */
  .con-one{margin-top: 145px;}
  .left{margin-right: 97px;}
  .left .btn{margin-top:45px;text-align: right;transition-delay: 1s;}
  .img-top{margin-bottom: 63px;}
  .img-bottom{transition-delay: 1s;}
  .h2{width:1178px;height: 104px;position: relative;}
  .img-two{margin-top: 92px;transition-delay: .5s;}
  .right .img-top{transition-delay: .3s;}
</style>