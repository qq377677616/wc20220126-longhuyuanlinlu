<template>
  <div class="body">
    <div class="page page3 flex-cen">
      <div class="con flex-cen-col">
        <transition name="top-bottom">
          <!-- <div class="h2 flex-cen" v-show="showHide"><img src="../../assets/images/original/page3_title_01.png" alt=""/></div> -->
          <div class="h2 flex-cen" v-show="showHide">
            <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
              <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page3/page3_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
            </sequence-effect>
          </div>
        </transition>
        <div class="con-one flex-bet">
          <div class="left">
            <transition name="top-bottom">
              <div class="title" v-show="showHide"><img src="../../assets/images/original/page3_title_02.png" alt=""/></div>
            </transition>
            <transition name="top-bottom">
              <div class="img-text" v-show="showHide">
                <div class="five flex-cen">
                    <div class="six-shape"><img src="../../assets/images/original/page3_11.png" alt=""/></div>
                    <div class="item"><img src="../../assets/images/original/page3_01.png" alt=""/></div>
                    <div class="item"><img src="../../assets/images/original/page3_02.png" alt=""/></div>
                    <div class="item"><img src="../../assets/images/original/page3_03.png" alt=""/></div>
                    <div class="item"><img src="../../assets/images/original/page3_04.png" alt=""/></div>
                    <div class="item"><img src="../../assets/images/original/page3_05.png" alt=""/></div>
                </div>
                <div class="h4"><img src="../../assets/images/original/page3_title_05.png" alt=""/></div>
              </div>
            </transition>
          </div>
          <!-- <transition name="right-left"> -->
            <div class="center-right flex">
              <div class="center">
                <transition name="top-bottom">
                  <div class="title" v-show="showHide"><img src="../../assets/images/original/page3_title_03.png" alt=""/></div>
                </transition>
                <transition name="top-bottom">
                  <div class="img-text" v-show="showHide">
                    <div class="five flex">
                        <div class="item"><img src="../../assets/images/original/page3_06.png" alt=""/></div>
                        <div class="item"><img src="../../assets/images/original/page3_07.png" alt=""/></div>
                        <div class="item"><img src="../../assets/images/original/page3_08.png" alt=""/></div>
                        <div class="item"><img src="../../assets/images/original/page3_09.png" alt=""/></div>
                        <div class="item"><img src="../../assets/images/original/page3_10.png" alt=""/></div>
                    </div>
                    <div class="h4"><img src="../../assets/images/original/page3_title_06.png" alt=""/></div>
                  </div>
                </transition>
              </div>
              <div class="right">
                <transition name="top-bottom">
                  <div class="title" v-show="showHide"><img src="../../assets/images/original/page3_title_04.png" alt=""/></div>
                </transition>
                <transition name="top-bottom">
                  <div class="img-text" v-show="showHide">
                    <div class="form"><img src="../../assets/images/original/page3_12.png" alt=""/></div>
                    <div class="h4"><img src="../../assets/images/original/page3_title_07.png" alt=""/></div>
                  </div>
                </transition>
              </div>
            </div>
          <!-- </transition> -->
        </div>
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
      // methods.play()
    })
    //页面数据
    const data = reactive({
      sequenceList: { url: `../assets/images/sequence/page1/page1_0.png`, num: 16, sequenceIndex: "sequenceListIndex", initIndex: 1, speed: 110, loop: true, autoplay: true },//序列配置
      sequenceListIndex: 0,//序列索引
      showHide: false,//显示隐藏变量--财务盘面***大标题
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
  /* .page1{background: url('../../assets/images/original/page1_bg_01.png');} */
  .con-one{margin-top: 108px;align-items: start;height: 943px;}
  .h2{width: 835px;height: 104px;position: relative;}
  .left{width: 676px;}
  .left .five{width: 676px;height: 650px;position: relative;margin-top: 70px;}
  .left .five .item{position: absolute;width: 220px;height: 220px;}
  .left .five .item:nth-child(2){left:235px;top:0;}
  .left .five .item:nth-child(3){left:0;top:156px;}
  .left .five .item:nth-child(4){left:456px;top:156px;}
  .left .five .item:nth-child(5){left:78px;top:426px;}
  .left .five .item:nth-child(6){left:373px;top:426px;}
  .left .five .six-shape{position: absolute;left:178px;top:162px;}
  .left .h4{margin-top: 68px;text-align: center;}

  .center{margin:0 165px 0 188px;width: 982px;}
  .center .five{margin-top: 70px;flex-wrap: wrap;}
  .center .five .item:not(:last-child){margin-bottom: 66px;}
  .center .five .item:nth-child(2n-1){margin-right: 20px;}
  .center .h4{margin-top: 68px;text-align: right;}
  .right{width:950px;}
  .right .form{margin-top: 65px;}
  .right .h4{margin-top: 58px;text-align: right;}

  .left .img-text{transition-delay: .2s;}
  .left .title{transition-delay: .4s;}
  .center .img-text{transition-delay: .5s;}
  .center .title{transition-delay: .7s;}
  .right .img-text{transition-delay: .8s;}
  .right .title{transition-delay: 1s;}
</style>