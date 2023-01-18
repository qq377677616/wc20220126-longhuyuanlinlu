<template>
  <div class="default-popup pof">
    <div class="page page421 flex-cen">
      <transition name="opacity-scale2" v-show="!showHideVideo">
        <div class="con flex-cen">
          <transition name="left-right">
            <div class="left" v-show="showHide">
              <!-- <div class="h3"><img src="../../assets/images/original/page10_title_01.png" alt=""/></div> -->
              <div class="h3">
                <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
                  <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page10_1/page10_1_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
                </sequence-effect>
              </div>
              <div class="h4"><img src="../../assets/images/original/page10_title_03.png" alt=""/></div>
              <div class="img" @click="clickPlayVideo"><img src="../../assets/images/original/page10_01.png" alt=""/></div>
            </div>
          </transition>
          <transition name="right-left">
            <div class="right" v-show="showHide">
              <!-- <div class="h3"><img src="../../assets/images/original/page10_title_02.png" alt=""/></div> -->
              <div class="h3">
                <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
                  <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page10_2/page10_2_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
                </sequence-effect>
              </div>
              <div class="h4"><img src="../../assets/images/original/page10_title_04.png" alt=""/></div>
              <div class="img"><img src="../../assets/images/original/page10_02.png" alt=""/></div>
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
    // provide("videoSrc", ['https://game.vrupup.com/resources/web/szq/longhudaping/video/video_03.mp4', require('../../assets/video/video_03.mp4')][ASSETS_URL_TYPE])
    provide("videoSrc", 'https://game.vrupup.com/resources/web/szq/longhudaping/video/video_03.mp4')
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
        setTimeout(() => { playVideo.value.videoPlay() }, 500)
        // emit("showVideoPopup")
      },
      //回调--视频组件左下角返回
      videoPlayBack() {
        data.showHideVideo = false
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
  .left{margin-right: 119px;}
  .h4{margin:61px 0 74px;}
  .left .h3{width:1068px;height: 106px;position: relative;}
  .right .h3{width:1277px;height: 103px;position: relative;}
</style>