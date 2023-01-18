<template>
  <div class="default-popup pof">
    <div class="page page442 flex-cen">
      <div class="con flex-cen-col">
        <transition name="top-bottom">
          <!-- <div class="h2 flex-cen" v-show="showHide"><img src="../../assets/images/original/page15_title_01.png" alt="" /></div> -->
          <div class="h2 flex-cen" v-show="showHide">
            <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
              <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page15/page15_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
            </sequence-effect>
          </div>
        </transition>
        <div class="con-one flex-cen">
          <div class="left">
            <transition name="left-right">
              <div class="img" v-show="showHide"><img src="../../assets/images/original/page15_02.png" alt=""/></div>
            </transition>
            <transition name="left-right">
              <div class="img" v-show="showHide"><img src="../../assets/images/original/page15_03.png" alt=""/></div>
            </transition>
            </div>
            <div class="center">
              <!-- <transition name="opacity-scale">
                <div class="img" v-show="showHide"><img src="../../assets/images/original/page15_01.png" alt=""/></div>
              </transition> -->
              <div class="img"><img src="../../assets/images/original/page15_01.png" alt=""/></div>
            </div>
            <div class="right">
              <transition name="right-left">
                <div class="img" v-show="showHide"><img src="../../assets/images/original/page15_04.png" alt=""/></div>
              </transition>
              <transition name="right-left">
                <div class="img" v-show="showHide"><img src="../../assets/images/original/page15_05.png" alt=""/></div>
              </transition>
            </div>
        </div>
        <div class="con-two flex-cen">
          <transition name="bottom-top">
            <div class="img" v-show="showHide"><img src="../../assets/images/original/page15_06.png" alt=""/></div>
          </transition>
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
  /* .con{height: 1427px;} */
  /* .page .con{height: 1427px;} */
  .con-one{height: 1099px;}
  .con-two{height: 225px;}
  .left{width: 845px;text-align: right;}
  .left .con-box{margin-top: 62px;}
  .left .img:nth-child(1){margin-bottom: 105px;}
  .center{width: 583px;margin:71px 200px 74px 217px;}
  .right{width: 847px;}
  .right .img:nth-child(1){margin-bottom: 114px;}
  /* .left .img:nth-child(1){transition-delay: .2s;} */
  .left .img:nth-child(2){transition-delay: .2s;}
  .right .img:nth-child(1){transition-delay: .3s;}
  .right .img:nth-child(2){transition-delay: .4s;}
  .con-two .img{transition-delay: .5s;}
  .h2{width:895px;height: 103px;position: relative;}
</style>