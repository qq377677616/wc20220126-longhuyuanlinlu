<template>
  <div class="default-popup pof">
    <div class="page page5 flex-cen">
      <!-- <transition name="opacity-scale2"> -->
        <!-- <div class="con flex-cen-col" v-show="showTouchPage == -1 && (showTouchPage != 523 && showTouchPage != 534 && showTouchPage != 543)"> -->
        <div class="con flex-cen-col">
          <transition name="top-bottom">
            <!-- <div class="h2 flex-cen" v-show="showHide"><img src="../../assets/images/original/page18_title_01.png" alt="" /></div> -->
            <div class="h2 flex-cen" v-show="showHide && showTouchPage == -1 && (showTouchPage != 523 && showTouchPage != 534 && showTouchPage != 543)">
              <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
                <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page18/page18_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
              </sequence-effect>
            </div>
          </transition>
          <div class="con-one flex-cen">
            <transition name="opacity-scale2">
              <!-- <div class="left" v-show="showHide"> -->
              <div class="left" v-show="showHide && showTouchPage == -1 && (showTouchPage != 523 && showTouchPage != 534 && showTouchPage != 543)">
                <div class="img-one"><img class="rotate" src="../../assets/images/original/page18_04.png" alt=""/></div>
                <div class="img-two poa"><img src="../../assets/images/original/page18_03.png" alt=""/></div>
                <div class="img-three poa"><img src="../../assets/images/original/page18_02.png" alt=""/></div>
                <div>
                  <div class="item" v-for="item in 5" :key="item" @click="selectItem(item)"></div>
                </div>
              </div>
            </transition>
            <div class="right">
              <transition name="opacity-scale2">
                <!-- <div class="img" v-show="showHide"><img src="../../assets/images/original/page18_05.png" alt=""/></div> -->
                <div class="img" v-show="showHide && showTouchPage == -1 && (showTouchPage != 523 && showTouchPage != 534 && showTouchPage != 543)"><img src="../../assets/images/original/page18_05.png" alt=""/></div>
              </transition>
            </div>
          </div>
        </div>
      <!-- </transition> -->
      <!-- 滑动更多页 -->
      <transition name="opacity-scale2">
        <LongPage51 ref="longPage51" v-show="showTouchPage == 51" @openDefaultBack="openDefaultBack"></LongPage51>
      </transition>
      <transition :name="transitionName521">
        <LongPage521 ref="longPage521" v-show="showTouchPage == 521" @openDefaultBack="openDefaultBack"></LongPage521>
      </transition>
      <transition :name="transitionName522">
        <LongPage522 ref="longPage522" v-show="showTouchPage == 522" @openDefaultBack="openDefaultBack"></LongPage522>
      </transition>
      <transition :name="transitionName531">
        <LongPage531 ref="longPage531" v-show="showTouchPage == 531" @openDefaultBack="openDefaultBack"></LongPage531>
      </transition>
      <transition :name="transitionName532">
        <LongPage532 ref="longPage532" v-show="showTouchPage == 532" @openDefaultBack="openDefaultBack"></LongPage532>
      </transition>
      <transition :name="transitionName533">
        <LongPage533 ref="longPage533" v-show="showTouchPage == 533" @openDefaultBack="openDefaultBack"></LongPage533>
      </transition>
      <transition :name="transitionName541">
        <LongPage541 ref="longPage541" v-show="showTouchPage == 541" @openDefaultBack="openDefaultBack"></LongPage541>
      </transition>
      <transition :name="transitionName542">
        <LongPage542 ref="longPage542" v-show="showTouchPage == 542" @openDefaultBack="openDefaultBack"></LongPage542>
      </transition>
      <transition name="opacity-scale2">
        <LongPage55 ref="longPage55" v-show="showTouchPage == 55" @openDefaultBack="openDefaultBack"></LongPage55>
      </transition>
      <!-- 视频页 -->
      <transition :name="transitionNameVideo">
        <PlayVideo ref="playVideo" v-show="showTouchPage == 523 || showTouchPage == 534 || showTouchPage == 543" @videoPlayBack="openDefaultBack"></PlayVideo>
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
    const longPage51 = ref(null), longPage521 = ref(null), longPage522 = ref(null), playVideo = ref(null), longPage531 = ref(null), longPage532 = ref(null), longPage533 = ref(null), longPage541 = ref(null), longPage542 = ref(null), longPage55 = ref(null), videoSrc = ref('')
    // provide("isShowBackBtn", true)
    provide("videoSrc", videoSrc)
    onMounted(() => {
      // methods.play()
    })
    //页面数据
    const data = reactive({
      sequenceList: { url: `../assets/images/sequence/page1/page1_0.png`, num: 16, sequenceIndex: "sequenceListIndex", initIndex: 1, speed: 110, loop: true, autoplay: true },//序列配置
      sequenceListIndex: 0,//序列索引
      showHide: false,//显示隐藏变量
      mySetTimeout1: null,//定时器1
      showTouchPage: -1,//显示隐藏变量--滑动内页1
      transitionName521: 'opacity-scale2',//点击了解更多页页面动画切换效果
      transitionName522: 'rl-page',//点击了解更多页页面动画切换效果
      transitionNameVideo: 'lr-page',//点击了解更多页页面动画切换效果
      transitionName531: 'opacity-scale2',//点击了解更多页页面动画切换效果
      transitionName532: 'rl-page',//点击了解更多页页面动画切换效果
      transitionName533: 'rl-page',//点击了解更多页页面动画切换效果
      transitionName541: 'opacity-scale2',//点击了解更多页页面动画切换效果
      transitionName542: 'rl-page',//点击了解更多页页面动画切换效果
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
      //点击了5心产品
      selectItem(e) {
        //console.log("e", e)
        let _curPage = [longPage51.value, longPage521.value, longPage531.value, longPage541.value, longPage55.value][e - 1]
        if (e == 1) {
          data.showTouchPage = 51
        } else if (e == 2) {
          data.showTouchPage = 521
        } else if (e == 3) {
          data.showTouchPage = 531
        } else if (e == 4) {
          data.showTouchPage = 541
        } else if (e == 5) {
          data.showTouchPage = 55
        }
        emit("openShowTouchPage", data.showTouchPage == -1 ? false : true)
        _curPage.play()
      },
      //设置显示隐藏变量--滑动内页1
      setShowTouchPage(showTouchPage) {
        data.showTouchPage = showTouchPage
        if (data.showTouchPage == -1) {
          data.transitionName521 = 'opacity-scale2'
          data.transitionName531 = 'opacity-scale2'
          data.transitionName541 = 'opacity-scale2'
          // emit("openShowTouchPage", false)
          longPage51.value.removeAnimate()
          longPage521.value.removeAnimate()
          longPage522.value.removeAnimate()
          longPage531.value.removeAnimate()
          longPage532.value.removeAnimate()
          longPage533.value.removeAnimate()
          longPage541.value.removeAnimate()
          longPage542.value.removeAnimate()
          longPage55.value.removeAnimate()
          // longPage422.value.removeAnimate()
        } else if (data.showTouchPage == 421) {
          longPage421.value.play()
        } else if (data.showTouchPage == 422) {
          longPage422.value.play()
        } else if (data.showTouchPage == 522) {
          longPage522.value.play()
        } else if (data.showTouchPage == 531) {
          longPage531.value.play()
        } else if (data.showTouchPage == 532) {
          longPage532.value.play()
        } else if (data.showTouchPage == 533) {
          longPage533.value.play()
        } else if (data.showTouchPage == 541) {
          longPage541.value.play()
        } else if (data.showTouchPage == 542) {
          longPage542.value.play()
        }
        emit("openShowTouchPage", data.showTouchPage == -1 ? false : true)
      },
      //监听滑动
      monitorTouchEvent(res) {
        // console.log("监听滑动5", res)
        // console.log("data.showTouchPage ", data.showTouchPage)
        if (data.showTouchPage == -1) {

        } else if (data.showTouchPage == 521) {
          data.transitionName521 = ['lr-page', 'opacity-scale2'][res.code - 1]
          data.transitionName522 = ['rl-page', 'lr-page'][res.code - 1]
        } else if (data.showTouchPage == 522) {
          data.transitionName522 = ['lr-page', 'rl-page'][res.code - 1]
          data.transitionNameVideo = ['rl-page', 'lr-page'][res.code - 1]
        } else if (data.showTouchPage == 523) {
          data.transitionNameVideo = ['rl-page', 'rl-page'][res.code - 1]
        } else if (data.showTouchPage == 531) {
          data.transitionName531 = ['lr-page', 'opacity-scale2'][res.code - 1]
          data.transitionName532 = ['rl-page', 'lr-page'][res.code - 1]
        } else if (data.showTouchPage == 532) {
          data.transitionName532 = ['lr-page', 'rl-page'][res.code - 1]
          data.transitionName533 = ['rl-page', 'lr-page'][res.code - 1]
        } else if (data.showTouchPage == 533) {
          data.transitionName533 = ['lr-page', 'rl-page'][res.code - 1]
          data.transitionNameVideo = ['rl-page', 'lr-page'][res.code - 1]
        } else if (data.showTouchPage == 541) {
          data.transitionName541 = ['lr-page', 'opacity-scale2'][res.code - 1]
          data.transitionName542 = ['rl-page', 'lr-page'][res.code - 1]
        } else if (data.showTouchPage == 542) {
          data.transitionName542 = ['lr-page', 'rl-page'][res.code - 1]
          data.transitionNameVideo = ['rl-page', 'lr-page'][res.code - 1]
        } else if (data.showTouchPage == 543) {
          data.transitionNameVideo = ['rl-page', 'rl-page'][res.code - 1]
        } 
        if (res.code == 1) {
          if (data.showTouchPage == -1) {

          } else if (data.showTouchPage == 521) {
            methods.setShowTouchPage(522)
          } else if (data.showTouchPage == 522) {
            // videoSrc.value = ['https://game.vrupup.com/resources/web/szq/longhudaping/video/video_05.mp4', require('../../assets/video/video_05.mp4')][ASSETS_URL_TYPE]
            videoSrc.value = 'https://game.vrupup.com/resources/web/szq/longhudaping/video/video_05.mp4'
            methods.setShowTouchPage(523)
            setTimeout(() => { playVideo.value.videoPlay() }, 500)
          } else if (data.showTouchPage == 531) {
            methods.setShowTouchPage(532)
          } else if (data.showTouchPage == 532) {
            methods.setShowTouchPage(533)
          } else if (data.showTouchPage == 533) {
            videoSrc.value = 'https://game.vrupup.com/resources/web/szq/longhudaping/video/video_06.mp4'

            methods.setShowTouchPage(534)
            setTimeout(() => { playVideo.value.videoPlay() }, 500)
          } else if (data.showTouchPage == 541) {
            methods.setShowTouchPage(542)
          } else if (data.showTouchPage == 542) {
            videoSrc.value = 'https://game.vrupup.com/resources/web/szq/longhudaping/video/video_07.mp4'
            methods.setShowTouchPage(543)
            setTimeout(() => { playVideo.value.videoPlay() }, 500)
          } 
        }
        if (res.code == 2) {
          if (data.showTouchPage == -1) {
            methods.selectMenu(['back'])
          } else if (data.showTouchPage == 521) {
            methods.setShowTouchPage(-1)
          } else if (data.showTouchPage == 522) {
            methods.setShowTouchPage(521)
          } else if (data.showTouchPage == 523) {
            methods.setShowTouchPage(522)
          } else if (data.showTouchPage == 531) {
            methods.setShowTouchPage(-1)
          } else if (data.showTouchPage == 532) {
            methods.setShowTouchPage(531)
          } else if (data.showTouchPage == 533) {
            methods.setShowTouchPage(532)
          } else if (data.showTouchPage == 534) {
            methods.setShowTouchPage(533)
          } else if (data.showTouchPage == 541) {
            methods.setShowTouchPage(-1)
          } else if (data.showTouchPage == 542) {
            methods.setShowTouchPage(541)
          } else if (data.showTouchPage == 543) {
            methods.setShowTouchPage(542)
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
      longPage51,
      longPage521,
      longPage522,
      playVideo,
      longPage531,
      longPage532,
      longPage533,
      longPage541,
      longPage542,
      longPage55,
      ...toRefs(data),
      ...toRefs(methods),
    }
  }
}
</script>

<style scoped>
  /* .default-popup{z-index: 900;} */
  .con-one{margin-top: 151px;}
  .left{width:1423px;height:997px;position: relative;;margin-right: 71px;}
  .left .item{width: 330px;height: 350px;position: absolute;opacity: .5;z-index: 10;}
  .left .item:nth-child(1){width:330px;height:350px;left:540px;top:0;}
  .left .item:nth-child(2){width:450px;height:230px;left:0;top:400px;}
  .left .item:nth-child(3){width:465px;height:200px;left:110px;top:820px;}
  .left .item:nth-child(4){width:465px;height:200px;left:830px;top:820px;}
  .left .item:nth-child(5){width:465px;height:200px;left:960px;top:410px;}
  .left .img-two{z-index: 4;}
  .left .img-three{z-index: 5;}
  .img-one img,.img-two img{margin: 276px 0 0 360px;}
  .h2{width:1098px;height: 104px;position: relative;}
</style>