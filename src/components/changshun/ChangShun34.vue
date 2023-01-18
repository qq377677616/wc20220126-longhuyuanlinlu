<template>
  <div class="body">
    <div class="page page1 flex-cen">
        <transition name="opacity-scale2">
      <div class="con">
          <transition name="top-bottom">
            <div class="h2 flex-cen" v-show="showHide"><img src="../../assets/images/changshun/page34_1.png" alt="" /></div>
          </transition>
          <div class="con-one flex-cen">
                <div class="left">
                    <transition name="left-right" class="dl" v-show="showHide">
                        <img src="../../assets/images/changshun/page34_2.png" alt="" v-show="showHide">              
                    </transition>
                </div>
                <div class="right">
                    <transition name="right-left">
                      <img src="../../assets/images/changshun/page34_3.png" alt="" v-show="showHide">               
                    </transition>
                </div>
          </div> 
          
      </div>
        </transition>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, onMounted } from 'vue'
export default {
  name: 'indexName',
  setup(props, { emit }) {
    onMounted(() => {
      //setTimeout(() => { methods.play() }, 500)
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
        //
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
  /* .page1{background: url('../../assets/images/original/page1_bg_01.png');} */
  .h2{width:888px;height: 170px;position: relative;margin-left: 712px;}
  .h3{margin-top:137px;}
  /* .start{width:387px;height: 326px;position: absolute;left:196px;bottom: 297px;} */
  .start{width:240px;height: 241px;position: absolute;left:196px;bottom: 297px;}
  [class *= leave-active]{transition: all .5s;}
  .start-two{left:342px;top:268px;}
  .left{width:1141px;position: relative;;margin-right: 46px;}
  /* .right{width:1390px;} */
  .left,.right{margin-top: 87px;}
</style>