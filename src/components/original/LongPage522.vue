<template>
  <div class="default-popup pof">
    <div class="page page522 flex-cen">
      <div class="con flex-cen">
        <transition name="left-right">
          <div class="left" v-show="showHide">
            <div class="h3">
              <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
                <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page21/page21_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
              </sequence-effect>
            </div>
            <div class="img"><img src="../../assets/images/original/page21_01.png" alt=""/></div>
          </div>
        </transition>
        <transition name="right-left">
          <div class="right" v-show="showHide">
            <!-- <div class="h3"><img src="../../assets/images/original/page10_title_02.png" alt=""/></div> -->
            <div class="h3">
              <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
                <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page21-1/page21-1_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
              </sequence-effect>
            </div>
            <div class="img"><img src="../../assets/images/original/page21_02.png" alt=""/></div>
          </div>
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
  .left{margin-right: 148px;transition-delay: .1s;}
  .left .h3{width:940px;height: 105px;position: relative;margin-bottom: 112px;}
  .right{transition-delay: .3s;}
  .right .h3{width:1349px;height: 105px;position: relative;margin-bottom: 124px;}
</style>