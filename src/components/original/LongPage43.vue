<template>
  <div class="default-popup pof">
    <div class="page page43 flex-cen">
      <div class="con flex-cen-col">
        <transition name="top-bottom">
          <!-- <div class="h2 flex-cen" v-show="showHide"><img src="../../assets/images/original/page12_title_01.png" alt="" /></div> -->
          <div class="h2 flex-cen" v-show="showHide">
            <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
              <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page12/page12_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
            </sequence-effect>
          </div>
        </transition>
        <div class="con-one flex-cen">
          <transition name="left-right">
            <div class="left">
              <!-- <div class="img"><img src="../../assets/images/original/page12_01.png"  alt=""/></div> -->
              <div class="left-top flex">
                <transition name="top-bottom">
                  <div class="item" v-show="showHide"><img src="../../assets/images/original/page12_01.png"  alt=""/></div>
                </transition>
                <transition name="top-bottom">
                  <div class="item" v-show="showHide"><img src="../../assets/images/original/page12_02.png"  alt=""/></div>
                </transition>
                <transition name="top-bottom">
                  <div class="item" v-show="showHide"><img src="../../assets/images/original/page12_03.png"  alt=""/></div>
                </transition>
                <transition name="top-bottom">
                  <div class="item" v-show="showHide"><img src="../../assets/images/original/page12_04.png"  alt=""/></div>
                </transition>
              </div>
              <transition name="opacity">
                <div class="line" v-show="showHide"><img src="../../assets/images/original/page12_05.png"  alt=""/></div>
              </transition>
              <div class="left-bottom flex">
                <transition name="bottom-top">
                  <div class="item" v-show="showHide"><img src="../../assets/images/original/page12_06.png"  alt=""/></div>
                </transition>
                <transition name="bottom-top">
                  <div class="item" v-show="showHide"><img src="../../assets/images/original/page12_07.png"  alt=""/></div>
                </transition>
                <transition name="bottom-top">
                  <div class="item" v-show="showHide"><img src="../../assets/images/original/page12_08.png"  alt=""/></div>
                </transition>
                <transition name="bottom-top">
                  <div class="item" v-show="showHide"><img src="../../assets/images/original/page12_09.png"  alt=""/></div>
                </transition>
              </div>
            </div>
          </transition>
          <transition name="right-left">
            <div class="right" v-show="showHide">
              <div class="img"><img src="../../assets/images/original/page12_10.png"  alt=""/></div>
            </div>
          </transition>
        </div>
        <!-- 点击了解更多页 -->
        <!-- <transition :name="showTouchPage == -1 ? 'bt-page' : 'rl-page'"> -->
        <transition :name="transitionName">
          <LongPage421 ref="longPage421" v-show="showTouchPage == 421"></LongPage421>
        </transition>
        <transition name="rl-page">
          <LongPage422 ref="longPage422" v-show="showTouchPage == 422"></LongPage422>
        </transition>
        <!-- 左下角菜单栏部分 -->
        <!-- <transition name="left-right">
          <MenuList ref="menuList" @selectMenu="selectMenu"></MenuList>
        </transition> -->
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
    // provide("isShowBackBtn", true)
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
      transitionName: 'bt-page'//点击了解更多页页面动画切换效果
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
        methods.setShowTouchPage(421)
      },
      //设置显示隐藏变量--滑动内页1
      setShowTouchPage(showTouchPage) {
        // data.transitionName = showTouchPage == 421 ? 'right-left' : 'bt-page'
        data.showTouchPage = showTouchPage
        if (data.showTouchPage == -1) {
          data.transitionName = 'bt-page'
          console.log("data.transitionName", data.transitionName)
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
      //左下角菜单点击回调
      selectMenu(e) {
        //console.log("e", e)
        if (e[0] == 'back') {
          // if (data.showTouchPage == 421) data.transitionName = 'bt-page'
          emit('openLearnMoreBack', data.showTouchPage)
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
      ...toRefs(data),
      ...toRefs(methods),
    }
  }
}
</script>

<style scoped>
  /* .default-popup{z-index: 900;} */
  .con-one{margin-top: 92px;}
  .left{margin-right: 174px;transition-delay: .3s;}
  .right{transition-delay: .4s;}
  .h2{width:1285px;height: 103px;position: relative;}
  .left-top{width: 888px;height: 257px;flex-wrap: wrap;}
  .left-top .item:nth-child(2n){margin-left: 155px;}
  .left-top .item:nth-child(1),.left-top .item:nth-child(2){margin-bottom: 69px;}
  .line{margin:56px 0 76px;}
  .left-bottom{width: 961px;height: 479px;flex-wrap: wrap;margin-left: -34px;}
  .left-bottom .item:nth-child(1){margin-right: 181px;margin-left: 68px;}
  .left-bottom .item:nth-child(3){margin-right: 154px;}
  .left-bottom .item:nth-child(1),.left-bottom .item:nth-child(2){margin-bottom: 31px;}
  .left-top .item,.left-bottom .item{transition-duration: 1s;}
  .left-top .item:nth-child(2){transition-delay: .2s;}
  .left-top .item:nth-child(3){transition-delay: .4s;}
  .left-top .item:nth-child(4){transition-delay: .6s;}
  /* .left-bottom .item:nth-child(1){transition-delay: .5s;}
  .left-bottom .item:nth-child(2){transition-delay: .6s;}
  .left-bottom .item:nth-child(3){transition-delay: .7s;}
  .left-bottom .item:nth-child(4){transition-delay: .8s;} */

</style>