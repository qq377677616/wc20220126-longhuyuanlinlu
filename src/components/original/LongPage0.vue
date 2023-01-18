<template>
  <div class="body">
    <div class="page page1 flex-cen">
      <div class="con">
        <transition name="top-bottom">
          <div class="h2 flex-cen" v-show="showHide"><img src="../../assets/images/changshun/page0_01.png" alt=""></div>
        </transition>
        <transition name="bottom-top">
          <div v-show="showHide">
            <div class="h3 flex-cen" @click="start"><img src="../../assets/images/changshun/page0_02.png" alt=""></div>
            <div class="h3 flex-cen" @click="start"><img src="../../assets/images/changshun/page0_03.png" alt=""></div>
          </div>
        </transition>
        <div class="start">
          <transition name="left-right">
            <div v-show="showHide" class="np">
              <img src="../../assets/images/changshun/logggo1124.png" alt="" style="height:156px;width:801px;object-fit:cover;">
            </div>
          </transition>
          <!-- <sequence-effect :sequenceList="sequenceList2" ref="sequence5" @sequenceListIndex="getSequenceListIndex2">
            <img v-for="(item, index) in sequenceList2.num" :key="'key'+item" :src="require('../../assets/images/sequence/start2/gd_'+index+'.png')" class="poa" :class="sequenceListIndex2 == index ? 'on' : ''" />
          </sequence-effect> -->
        </div>
        <!-- <div class="start start-two">
          <sequence-effect :sequenceList="sequenceList2" ref="sequence5" @sequenceListIndex="getSequenceListIndex2">
            <img v-for="(item, index) in sequenceList2.num" :key="'key'+item" :src="require('../../assets/images/sequence/start/gd_'+index+'.png')" class="poa" :class="sequenceListIndex2 == index ? 'on' : ''" />
          </sequence-effect>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, onMounted } from 'vue'
export default {
  name: 'indexName',
  setup(props, { emit }) {
    onMounted(() => {
      setTimeout(() => { methods.play() }, 500)
    })
    //页面数据
    const data = reactive({
      sequenceList: { url: `../assets/images/sequence/page1/page1_0.png`, num: 16, sequenceIndex: "sequenceListIndex", initIndex: 1, speed: 110, loop: true, autoplay: true },//序列配置
      sequenceListIndex: 0,//序列索引
      sequenceList2: { url: `../assets/images/sequence/page1/page1_0.png`, num: 31, sequenceIndex: "sequenceListIndex2", initIndex: 1, speed: 110, loop: true, autoplay: true },//序列配置
      sequenceListIndex2: 0,//序列索引
      showHide: false,//显示隐藏变量
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
      //点击探索龙湖
      start() {
        data.showHide = false
        methods.removeAnimate()
        emit('page1Start')
      },
      //监听序列索引
      getSequenceListIndex(e) {
        data.sequenceListIndex = e
      },
      //监听序列索引
      getSequenceListIndex2(e) {
        data.sequenceListIndex2 = e
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
  .page1{background: url('../../assets/images/changshun/page0_bbg.png');}
  .h2{width:1005px;height: 232px;position: relative;margin-left: 875px;}
  .h3{margin-top:89px;width: 2755px;height: 324px;}
  .h3:nth-child(2) img{width: 571px;height: 123px;}
  /* .start{width:387px;height: 326px;position: absolute;left:196px;bottom: 297px;} */
  .start{width:240px;height: 241px;position: absolute;left:196px;bottom: 297px;}
  [class *= leave-active]{transition: all .5s;}
  .start-two{left:342px;top:268px;}
  .np{position: fixed;left: 129px;top: 113px;z-index: 999;width: 801px;height: 156px;}
</style>