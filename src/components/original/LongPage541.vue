<template>
  <div class="default-popup pof">
    <div class="page page541 flex-cen">
      <div class="con flex-cen-col">
        <transition name="top-bottom">
          <!-- <div class="h2 flex-cen" v-show="showHide"><img src="../../assets/images/original/page25_title_01.png" alt="" /></div> -->
          <div class="h2 flex-cen" v-show="showHide">
            <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
              <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page25/page25_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
            </sequence-effect>
          </div>
        </transition>
        <div class="con-one flex-cen">
          <transition name="left-right">
            <div class="left flex-cen" v-show="showHide">
              <div class="img-one poa" v-show="showHide"><img src="../../assets/images/original/page25_01.png" alt=""/></div>
              <div class="img-two rotate" v-show="showHide"><img src="../../assets/images/original/page25_02.png" alt=""/></div>
            </div>
          </transition>
          <div class="right">
            <transition name="right-left">
              <div class="img" v-show="showHide"><img src="../../assets/images/original/page25_03.png" alt=""/></div>
            </transition>
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
        // data.showHide = false
        setTimeout(() => { data.showHide = false }, 400)
      },
      //左下角菜单点击回调
      selectMenu(e) {
        //console.log("e", e)
        if (e[0] == 'back') {
          emit("openDefaultBack", false)
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
  .con-one{margin-top: 102px;}
  .left{position: relative;width: 1282px;height: 1276px;margin-right: 185px;box-sizing: border-box;padding-top: 34px;}
  .left .img-one{z-index: 5;}
    .h2{width:1390px;height: 105px;position: relative;}
</style>