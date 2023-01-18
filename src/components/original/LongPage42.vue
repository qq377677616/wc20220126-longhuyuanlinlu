<template>
  <div class="default-popup pof">
    <div class="page page42 flex-cen">
      <transition name="opacity-scale2">
        <div class="con flex-cen-col" v-show="showTouchPage == -1 && !showHideVideo">
          <transition name="top-bottom">
            <!-- <div class="h2 flex-cen" v-show="showHide"><img src="../../assets/images/original/page09_title_01.png" alt="" /></div> -->
            <div class="h2 flex-cen" v-show="showHide">
              <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
                <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page9/page9_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
              </sequence-effect>
            </div>
          </transition>
          <div class="con-one flex-cen">
            <div class="left">
                <!-- <div class="img" @click="clickPlayVideo"><img src="../../assets/images/original/page09_01.png" alt=""/></div> -->
                <div>
                  <div class="flex-cen">
                    <transition name="top-bottom">
                      <div class="tip" v-show="showHide"><img src="../../assets/images/original/page9_01.png" alt=""/></div>
                    </transition>
                    <transition name="top-bottom">
                      <div class="tip" v-show="showHide"><img src="../../assets/images/original/page9_02.png" alt=""/></div>
                    </transition>
                    <transition name="top-bottom">
                      <div class="tip" v-show="showHide"><img src="../../assets/images/original/page9_03.png" alt=""/></div>
                    </transition>
                  </div>
                  <transition name="left-right">
                    <div v-show="showHide">
                      <div class="img" @click="clickPlayVideo"><img src="../../assets/images/original/page9_08.png" alt=""/></div>
                      <div class="btn"><img src="../../assets/images/original/page13_btn_01.png" alt="" @click="learnMore"/></div>
                    </div>
                  </transition>
                </div>
              </div>
              <div class="right">
                <transition name="right-left">
                  <div class="img-top flex-cen" v-show="showHide"><img src="../../assets/images/original/page09_02.png" alt=""/></div>
                </transition>
                <transition name="opacity">
                  <div class="line flex-cen" v-show="showHide"><img src="../../assets/images/original/page09_04.png" alt=""/></div>
                </transition>
                <div class="flex-cen">
                  <transition name="bottom-top">
                    <div class="item" v-show="showHide"><img src="../../assets/images/original/page9_04.png" alt=""/></div>
                  </transition>
                  <transition name="bottom-top">
                    <div class="item" v-show="showHide"><img src="../../assets/images/original/page9_05.png" alt=""/></div>
                  </transition>
                  <transition name="bottom-top">
                    <div class="item" v-show="showHide"><img src="../../assets/images/original/page9_06.png" alt=""/></div>
                  </transition>
                  <transition name="bottom-top">
                    <div class="item" v-show="showHide"><img src="../../assets/images/original/page9_07.png" alt=""/></div>
                  </transition>
                </div>
              </div>
          </div>
        </div>
      </transition>
      <!-- 点击了解更多页 -->
      <!-- <transition :name="showTouchPage == -1 ? 'bt-page' : 'right-left2'"> -->
      <transition :name="transitionName">
        <LongPage421 ref="longPage421" v-show="showTouchPage == 421" @openDefaultBack="openDefaultBack"></LongPage421>
      </transition>
      <transition name="rl-page">
        <LongPage422 ref="longPage422" v-show="showTouchPage == 422" @openDefaultBack="openDefaultBack"></LongPage422>
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
import { ASSETS_URL_TYPE } from 'api/project.config'
export default {
  name: 'indexName',
  setup(props, { emit }) {
    const longPage421 = ref(null), longPage422 = ref(null), playVideo = ref(null)
    // provide("isShowBackBtn", true)
    // provide("videoSrc", ['https://game.vrupup.com/resources/web/szq/longhudaping/video/video_02.mp4', require('../../assets/video/video_02.mp4')][ASSETS_URL_TYPE])
    provide("videoSrc", 'https://game.vrupup.com/resources/web/szq/longhudaping/video/video_02.mp4')
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
      transitionName: 'opacity-scale2',//点击了解更多页页面动画切换效果
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
        methods.setShowTouchPage(421)
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
        // console.log("data.showTouchPage ", data.showTouchPage )
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
        // data.showTouchPage = -1
        // longPage421.value.removeAnimate()
        // emit("openShowTouchPage", false)
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
          methods.setShowTouchPage(-1)
          emit("openShowTouchPage", false)
          // emit('openLearnMoreBack', data.showTouchPage)
        } 
      },
      //监听序列索引
      getSequenceListIndex(e) {
        data.sequenceListIndex = e
      }
    })
    return {
      longPage421,
      longPage422,
      playVideo,
      ...toRefs(data),
      ...toRefs(methods),
    }
  }
}
</script>

<style scoped>
  /* .default-popup{z-index: 900;} */
  .h2{width: 971px;height: 103px;position: relative;}
  .con-one{margin-top: 145px;}
  .left{margin-right: 97px;transition-delay: .3s;}
  .left .img{margin-top: 35px;}
  .left .btn{margin-top:45px;text-align: right;}
  .left .tip:nth-child(2){margin:0 32px 0 33px;}
  .img-top{transition-delay: .7s;}
  /* .img-bottom{transition-delay: 1s;} */
  .right .item:not(:last-child){margin-right: 52px;}
  .right .item:nth-child(2){margin-right: 51px;}
  .right .line{margin:63px 0 79px;transition-delay: .5s;}
  .left .tip:nth-child(1),.right .item:nth-child(1){transition-delay: .5s;}
  .left .tip:nth-child(2),.right .item:nth-child(2){transition-delay: .6s;}
  .left .tip:nth-child(3),.right .item:nth-child(3){transition-delay: .7s;}
  .right .item:nth-child(4){transition-delay: .8s;}
</style>