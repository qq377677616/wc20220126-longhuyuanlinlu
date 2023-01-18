<template>
  <div class="default-popup pof">
    <div class="page page533 flex-cen">
      <div class="con flex-cen-col">
        <transition name="top-bottom">
          <!-- <div class="h2 flex-cen" v-show="showHide"><img src="../../assets/images/original/page24_title_01.png" alt="" /></div> -->
          <div class="h2 flex-cen" v-show="showHide">
            <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
              <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page24/page24_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
            </sequence-effect>
          </div>
        </transition>
        <div class="con-one flex-cen">
          <transition name="left-right">
            <div class="left flex" v-show="showHide">
              <div class="img-one" v-show="showHide"><img src="../../assets/images/original/page24_01.png" alt=""/></div>
              <div class="img-two" v-show="showHide"><img src="../../assets/images/original/page24_02.png" alt=""/></div>
            </div>
          </transition>
          <div class="right">
            <transition name="top-bottom">
              <div class="right-top" v-show="showHide">
                <img src="../../assets/images/original/page24_05.png" alt="">
                <img class="line" src="../../assets/images/original/03xuxian.gif" alt="">
              </div>
            </transition>
            <transition name="bottom-top">
              <div class="right-bottom" v-show="showHide">
                <img src="../../assets/images/original/page24_06.png" alt="">
                <img class="line" src="../../assets/images/original/03xuxian.gif" alt="">
              </div>
            </transition>
          </div>
          <!-- <div class="right flex">
            <transition name="right-left">
              <div class="line" v-show="showHide"><img src="../../assets/images/original/03xuxian.gif" alt=""/></div>
            </transition>
            <transition name="right-left">
              <div class="img-one" v-show="showHide"><img src="../../assets/images/original/page24_03.png" alt=""/></div>
            </transition>
            <transition name="right-left">
              <div class="img-two" v-show="showHide"><img src="../../assets/images/original/page24_04.png" alt=""/></div>
            </transition>
          </div> -->
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
    const longPage51 = ref(null), longPage521 = ref(null), longPage522 = ref(null), longPage523 = ref(null)
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
      showTouchPage: -1,//显示隐藏变量--滑动内页1
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
      ...toRefs(data),
      ...toRefs(methods),
    }
  }
}
</script>

<style scoped>
  /* .default-popup{z-index: 900;} */
  .con-one{margin-top: 180px;}
  .left{margin-right: 106px;width: 1219px;height: 966px;}
  .h2{width:1318px;height: 106px;position: relative;}
  .right{position: relative;width: 1635px;height: 958px;}
  .right>div{position: relative;transition-delay: .3s;}
  /* .right .line{position: absolute;left: 278px;width: 448px;height: 1080px;top: -66px;transition-delay: .6s;} */
  .right .line{position: absolute;left: 377px;top: 0px;}
  .left{transition-delay: .3s;}
  .left .img-one{margin-right: 90px;}
  .right .img-one{margin-right: 291px;}
  .right .right-bottom{margin-top: 53px;}
</style>