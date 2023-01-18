<template>
  <div class="default-popup pof">
    <div class="page page7 flex-cen">
      <div class="con flex-cen-col">
        <transition name="top-bottom">
          <!-- <div class="h2 flex-cen" v-show="showHide"><img src="../../assets/images/original/page29_title_01.png" alt="" /></div> -->
          <div class="h2 flex-cen" v-show="showHide">
            <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
              <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page29/page29_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
            </sequence-effect>
          </div>
        </transition>
        <div class="con-one flex-cen">
          <div class="left">
            <transition name="left-right">
              <div class="img" v-show="showHide"><img src="../../assets/images/original/page29_01.png" alt=""/></div>
            </transition>
            <transition name="left-right">
              <div class="img" v-show="showHide"><img src="../../assets/images/original/page29_02.png" alt=""/></div>
            </transition>
            <transition name="left-right">
              <div class="img" v-show="showHide"><img src="../../assets/images/original/page29_03.png" alt=""/></div>
            </transition>
          </div>
          <!-- <transition name="bottom-top"> -->
          <div class="center" v-show="showHide"><img src="../../assets/images/original/page29_07.png" alt=""/></div>
          <!-- </transition> -->
          <div class="right">
            <transition name="right-left">
              <div class="img" v-show="showHide"><img src="../../assets/images/original/page29_04.png" alt=""/></div>
            </transition>
            <transition name="right-left">
              <div class="img" v-show="showHide"><img src="../../assets/images/original/page29_05.png" alt=""/></div>
            </transition>
            <transition name="right-left">
              <div class="img" v-show="showHide"><img src="../../assets/images/original/page29_06.png" alt=""/></div>
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
    onMounted(() => {
      // methods.play()
    })
    //页面数据
    const data = reactive({
      sequenceList: { url: `../assets/images/sequence/page1/page1_0.png`, num: 16, sequenceIndex: "sequenceListIndex", initIndex: 1, speed: 110, loop: true, autoplay: true },//序列配置
      sequenceListIndex: 0,//序列索引
      showHide: false,//显示隐藏变量
      mySetTimeout1: null,//定时器1
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
      ...toRefs(data),
      ...toRefs(methods),
    }
  }
}
</script>

<style scoped>
  /* .default-popup{z-index: 900;} */
  .con-one{margin-top: 85px;}
  .center{margin:30px 26px 0;}
  .con-one .img:nth-child(2){margin:95px 0;}
  .left .img:nth-child(1){transition-delay: .2s;}
  .left .img:nth-child(2){transition-delay: .6s;}
  .left .img:nth-child(3){transition-delay: 1s;}
  .right .img:nth-child(1){transition-delay: .4s;}
  .right .img:nth-child(2){transition-delay: .8s;}
  .right .img:nth-child(3){transition-delay: 1.2s;}
  .h2{width:1215px;height: 102px;position: relative;}
</style>