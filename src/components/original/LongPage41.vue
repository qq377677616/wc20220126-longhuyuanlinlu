<template>
  <div class="body" :style="{ 'z-index': showDefaultPage || showTouchtPage != -1 ? 1001 : 499}">
    <div class="page page41 flex-cen">
      <div class="con">
        <transition name="opacity-scale2">
          <div class="con-one flex-cen" v-show="!showHideVideo && !showDefaultPage && showTouchtPage == -1">
            <div class="left">
              <transition name="top-bottom">
                <!-- <div class="h3" v-show="showHide"><img src="../../assets/images/original/page4_title_01.png" alt=""/></div> -->
                <div class="h3" v-show="showHide">
                  <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
                    <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page4/page4_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
                  </sequence-effect>
                </div>
              </transition>
              <div class="three flex">
                <transition name="top-bottom">
                  <div class="item" v-show="showHide"><img src="../../assets/images/original/page4_01.png" alt=""/></div>
                </transition>
                <transition name="top-bottom">
                  <div class="item" v-show="showHide"><img src="../../assets/images/original/page4_02.png" alt=""/></div>
                </transition>
                <transition name="top-bottom">
                  <div class="item" v-show="showHide"><img src="../../assets/images/original/page4_03.png" alt=""/></div>
                </transition>
              </div>
              <div class="video">
                <transition name="left-right">
                  <div class="item" v-show="showHide" @click="clickPlayVideo"><img src="../../assets/images/original/page4_04.png" alt=""/></div>
                </transition>
              </div>
            </div>
            <div class="right">
              <transition name="top-bottom">
                <!-- <div class="h3" v-show="showHide"><img src="../../assets/images/original/page4_title_02.png" alt=""/></div> -->
                <div class="h3" v-show="showHide">
                  <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
                    <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page4_02/page4_02_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
                  </sequence-effect>
                </div>
              </transition>
              <div class="three">
                <transition name="right-left">
                  <div class="li" @click="openDefaultPage(1)" v-show="showHide">
                    <div class="title"><img src="../../assets/images/original/page4_title_03.png" alt=""/></div>
                    <div class="list flex">
                      <div class="item"><img src="../../assets/images/original/page4_05.png" alt=""/></div>
                      <div class="item"><img src="../../assets/images/original/page4_06.png" alt=""/></div>
                      <div class="item"><img src="../../assets/images/original/page4_07.png" alt=""/></div>
                    </div>
                  </div>
                </transition>
                <transition name="right-left">
                  <div class="li" @click="openDefaultPage(2)" v-show="showHide">
                    <div class="title"><img src="../../assets/images/original/page4_title_04.png" alt=""/></div>
                    <div class="list flex">
                      <div class="item"><img src="../../assets/images/original/page4_08.png" alt=""/></div>
                        <div class="item"><img src="../../assets/images/original/page4_09.png" alt=""/></div>
                        <div class="item"><img src="../../assets/images/original/page4_10.png" alt=""/></div>
                    </div>
                  </div>
                </transition>
                <transition name="right-left">
                  <div class="li" @click="openDefaultPage(3)" v-show="showHide">
                    <div class="title"><img src="../../assets/images/original/page4_title_05.png" alt=""/></div>
                    <div class="list flex">
                      <div class="item"><img src="../../assets/images/original/page4_11.png" alt=""/></div>
                        <div class="item"><img src="../../assets/images/original/page4_12.png" alt=""/></div>
                        <div class="item"><img src="../../assets/images/original/page4_13.png" alt=""/></div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <!-- 视频页 --> 
      <transition name="opacity-scale2">
        <PlayVideo ref="playVideo" v-show="showHideVideo" @videoPlayBack="videoPlayBack"></PlayVideo>
      </transition>
      <!-- 内页详情 -->
      <transition name="opacity-scale2">
        <LongPage411 ref="longPage411" v-show="showDefaultPage" @openDefaultBack="openDefaultBack"></LongPage411>
      </transition>
      <!-- 左下角菜单栏部分 -->
      <!-- <transition name="left-right">
        <MenuList ref="menuList" @selectMenu="selectMenu"></MenuList>
      </transition> -->
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, ref, onMounted, provide } from 'vue'
import { touchEvent } from 'assets/js/util'
import { ASSETS_URL_TYPE } from 'api/project.config'
export default {
  name: 'indexName',
  setup(props, { emit }) {
    const playVideo = ref(null), longPage411 = ref(null), defaultType = ref(2)
    provide("defaultType", defaultType)
    // provide("videoSrc", ['https://game.vrupup.com/resources/web/szq/longhudaping/video/video_01.mp4', require('../../assets/video/video_01.mp4')][ASSETS_URL_TYPE])
    provide("videoSrc", 'https://game.vrupup.com/resources/web/szq/longhudaping/video/video_01.mp4')
    onMounted(() => {
      // methods.play()
    })
    //页面数据
    const data = reactive({
      sequenceList: { url: `../assets/images/sequence/page1/page1_0.png`, num: 16, sequenceIndex: "sequenceListIndex", initIndex: 1, speed: 110, loop: true, autoplay: true },//序列配置
      sequenceListIndex: 0,//序列索引
      showHide: false,//显示隐藏变量--左
      showHideVideo: false,//显示隐藏变量--全屏视频组件
      showDefaultPage: false,//显示隐藏变量--内页
      showTouchtPage: -1,//显示隐藏变量--滑动页
      mySetTimeout1: null,//定时器1
      // isOpenShowTouchPage: false,//当前是否在查看某滑动页的详情页
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
      //回调--设置查看滑动页的详情页
      openShowTouchPage(status) {
        // data.isOpenShowTouchPage = status
        emit("openShowTouchPage", status)
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
      //回调--详情组件左下角返回
      openDefaultBack() {
        data.showDefaultPage = false
        longPage411.value.removeAnimate()
        emit("openShowTouchPage", false)
      },
      //回调--滑动页左下角返回
      openLearnMoreBack(showTouchPage) {
        if (showTouchPage == -1) {
          longPage42.value.removeAnimate()
          data.showTouchtPage = false
        } else if (showTouchPage == 421 || showTouchPage == 422) {
          longPage42.value.setShowTouchPage(-1)
        }
      },
      //点击查看详细
      openDefaultPage(e) {
        defaultType.value = e
        data.showDefaultPage = true
        // status ? menuList.value.play() : menuList.value.hide()
        longPage411.value.play()
        emit("openShowTouchPage", true)
      },
      //监听序列索引
      getSequenceListIndex(e) {
        data.sequenceListIndex = e
      }
    })
    return {
      playVideo,
      longPage411,
      ...toRefs(data),
      ...toRefs(methods),
    }
  }
}
</script>

<style scoped>
  .body{position: relative;z-index: 1000;}
  .left{margin-right: 246px;width: 1302px;}
  .left .h3{padding-left: 54px;width:412px;height: 104px;position: relative;}
  .left .three{margin-top: 148px;height: 225px;}
  .left .three .item:not(:last-child){margin-right: 76px;}
  .left .video{margin-top: 175px;text-align: center;;height: 537px;}
  .left .three .item:nth-child(1){transition-delay: .2s;}
  .left .three .item:nth-child(2){transition-delay: .3s;}
  .left .three .item:nth-child(3){transition-delay: .4s;}
  .left .video .item{transition-delay: .5s;}

  .right{width:1379px;}
  .right .h3{width:417px;height: 104px;position: relative;}
  .right .three{margin-top: 87px;}
  .right .three .li:not(:last-child){margin-bottom: 49px;}
  .right .three .list{margin-top: 23px;}
  .right .three .list .item:not(:last-child){margin-right: 11px;}
  .right .li:nth-child(1){transition-delay: .3s;}
  .right .li:nth-child(2){transition-delay: .5s;}
  .right .li:nth-child(3){transition-delay: .7s;}
</style>