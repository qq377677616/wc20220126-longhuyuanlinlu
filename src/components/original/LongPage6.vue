<template>
  <div class="default-popup pof">
  <!-- :style="{ 'z-index': showDefaultPage || showTouchtPage != -1 ? 1001 : 499}" -->
    <div class="page page6 flex-cen">
      <transition name="opacity-scale2" v-show="!showHideVideo">
        <div class="con flex">
          <transition name="left-right">
            <div class="left" v-show="showHide">
              <!-- <div class="h3"><img src="../../assets/images/original/page28_title_01.png" alt=""/></div> -->
              <div class="h3">
                <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
                  <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page28_1/page28_1_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
                </sequence-effect>
              </div>
              <div class="img"><img src="../../assets/images/original/page28_01.png" alt=""/></div>
            </div>
          </transition>
          <transition name="right-left">
            <div class="right" v-show="showHide" @click="clickPlayVideo">
              <!-- <div class="h3"><img src="../../assets/images/original/page28_title_02.png" alt=""/></div> -->
              <div class="h3">
                <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
                  <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page28_2/page28_2_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
                </sequence-effect>
              </div>
              <div class="img"><img src="../../assets/images/original/page28_02.png" alt=""/></div>
            </div>
          </transition>
        </div>
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
    const playVideo = ref(null)
    // provide("videoSrc", ['https://game.vrupup.com/resources/web/szq/longhudaping/video/video_08.mp4', require('../../assets/video/video_08.mp4')][ASSETS_URL_TYPE])
    provide("videoSrc", 'https://game.vrupup.com/resources/web/szq/longhudaping/video/video_08.mp4')
    onMounted(() => {
      // methods.play()
    })
    //页面数据
    const data = reactive({
      sequenceList: { url: `../assets/images/sequence/page1/page1_0.png`, num: 16, sequenceIndex: "sequenceListIndex", initIndex: 1, speed: 110, loop: true, autoplay: true },//序列配置
      sequenceListIndex: 0,//序列索引
      showHide: false,//显示隐藏变量
      mySetTimeout1: null,//定时器1
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
      //点击弹出视频
      clickPlayVideo() {
        data.showHideVideo = true
        emit("showVideoPopup", true)
        setTimeout(() => { playVideo.value.videoPlay() }, 500)
      },
      //回调--视频组件左下角返回
      videoPlayBack() {
        data.showHideVideo = false
        emit("showVideoPopup", false)
      },
      //左下角菜单点击回调
      selectMenu:(e) => {
        //console.log("e", e)
        if (e[0] == 'back') {
          emit('openDefaultBack')
        } 
      },
      //监听序列索引
      getSequenceListIndex(e) {
        data.sequenceListIndex = e
      }
    })
    return {
      playVideo,
      ...toRefs(data),
      ...toRefs(methods),
    }
  }
}
</script>

<style scoped>
  /* .default-popup{z-index: 900;} */
  .left{margin-right: 376px;}
  .left .img{margin-top: 144px;}
  .right .img{margin-top: 142px;}
  .left .h3{width:1001px;height: 102px;position: relative;}
  .right .h3{width:900px;height: 106px;position: relative;}
</style>