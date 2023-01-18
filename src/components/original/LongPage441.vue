<template>
  <div class="default-popup pof">
    <div class="page page441 flex-cen">
      <div class="con flex-cen-col">
        <transition name="top-bottom">
          <!-- <div class="h2 flex-cen" v-show="showHide"><img src="../../assets/images/original/page14_title_01.png" alt="" /></div> -->
          <div class="h2 flex-cen" v-show="showHide">
            <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
              <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page14/page14_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
            </sequence-effect>
          </div>
        </transition>
        <div class="con-one flex-cen">
          <div class="left">
            <!-- <transition name="opacity-scale"> -->
              <div class="h3" v-show="showHide"><img src="../../assets/images/original/page14_title_02.png" alt=""/></div>
            <!-- </transition> -->
            <div class="con-box flex-cen">
              <transition name="left-right">
                <div class="img" v-show="showHide"><img src="../../assets/images/original/page14_01.png" alt=""/></div>
              </transition>
              <transition name="right-left">
                <div class="img" v-show="showHide"><img src="../../assets/images/original/page14_02.png" alt=""/></div>
              </transition>
            </div>
          </div>
          <div class="right">
            <transition name="opacity-scale">
              <div class="h3" v-show="showHide"><img src="../../assets/images/original/page14_title_03.png" alt=""/></div>
            </transition>
            <div class="con-list">
              <transition name="right-left">
                <div class="li" v-show="showHide"><img src="../../assets/images/original/page14_03.png" alt=""/></div>
              </transition>
              <transition name="right-left">
                <div class="li" v-show="showHide"><img src="../../assets/images/original/page14_04.png" alt=""/></div>
              </transition>
              <transition name="right-left">
                <div class="li" v-show="showHide"><img src="../../assets/images/original/page14_05.png" alt=""/></div>
              </transition>
              <transition name="right-left">
                <div class="li" v-show="showHide"><img src="../../assets/images/original/page14_06.png" alt=""/></div>
              </transition>
            </div>
          </div>
        </div>
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
    // provide("isShowBackBtn", true)
    onMounted(() => {
      // methods.play()
    })
    //页面数据
    const data = reactive({
      sequenceList: { url: `../assets/images/sequence/page1/page1_0.png`, num: 16, sequenceIndex: "sequenceListIndex", initIndex: 1, speed: 110, loop: true, autoplay: true },//序列配置
      sequenceListIndex: 0,//序列索引
      showHide: false,//显示隐藏变量--左侧品牌活动
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
        methods.setShowTouchPage(441)
      },
      //设置显示隐藏变量--滑动内页1
      setShowTouchPage(showTouchPage) {
        // data.transitionName = showTouchPage == 441 ? 'right-left' : 'bt-page'
        data.showTouchPage = showTouchPage
        if (data.showTouchPage == -1) {
          data.transitionName = 'bt-page'
          console.log("data.transitionName", data.transitionName)
          longPage441.value.removeAnimate()
          longPage422.value.removeAnimate()
        } else if (data.showTouchPage == 441) {
          longPage441.value.play()
        } else if (data.showTouchPage == 422) {
          longPage422.value.play()
        }
      },
      //监听滑动
      monitorTouchEvent(res) {
        // data.transitionName = 'left-right'
        if (res.code == 1) {
          if (data.showTouchPage == -1) {
            
          } else if (data.showTouchPage == 441) {
            data.transitionName = 'lr-page'
            // data.showTouchPage = 422
            methods.setShowTouchPage(422)
          }
        }
        if (res.code == 2) {
          if (data.showTouchPage == -1) {
            methods.selectMenu(['back'])
          } else if (data.showTouchPage == 441) {
            methods.setShowTouchPage(-1)
            // data.transitionName = 'bt-page'
          } else if (data.showTouchPage == 422) {
            data.transitionName = 'lr-page'
            console.log('data.transitionName', data.transitionName)
            methods.setShowTouchPage(441)
          }
        }
          
      },
      //左下角菜单点击回调
      selectMenu(e) {
        //console.log("e", e)
        if (e[0] == 'back') {
          // if (data.showTouchPage == 441) data.transitionName = 'bt-page'
          emit('openDefaultBack')
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
  /* .default-popup{z-index: 900;} */
  .con-one{margin-top: 88px;}
  .left{margin-right: 222px;width: 2315px;}
  .left .con-box{margin-top: 62px;width: 2315px;height: 804px;}
  .left .img:nth-child(1){margin-right: 29px;}
  .right{width: 396px;}
  .right .con-list{margin-top: 108px;}
  .right .con-list .li:not(:last-child){margin-bottom: 118px;}
  .right .con-list .li:nth-child(1){transition-delay: .1s;}
  .right .con-list .li:nth-child(2){transition-delay: .2s;}
  .right .con-list .li:nth-child(3){transition-delay: .3s;}
  .right .con-list .li:nth-child(4){transition-delay: .4s;}
  .h2{width:535px;height: 102px;position: relative;}
</style>