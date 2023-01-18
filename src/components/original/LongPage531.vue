<template>
  <div class="default-popup pof">
    <div class="page page531 flex-cen">
      <div class="con flex-cen-col">
        <transition name="top-bottom">
          <!-- <div class="h2 flex-cen" v-show="showHide"><img src="../../assets/images/original/page22_title_01.png" alt="" /></div> -->
          <div class="h2 flex-cen" v-show="showHide">
            <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
              <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page22/page22_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
            </sequence-effect>
          </div>
        </transition>
        <div class="con-one flex-cen">
          <transition name="left-right">
            <div class="left" v-show="showHide">
              <div class="img-one"><img src="../../assets/images/original/page22_05.png" alt=""/></div>
              <div>
                <transition name="top-bottom">
                  <div class="item" v-show="showHide"><img src="../../assets/images/original/page22_01.png" alt=""/></div>
                </transition>
                <transition name="top-bottom">
                  <div class="item" v-show="showHide"><img src="../../assets/images/original/page22_02.png" alt=""/></div>
                </transition>
                <transition name="bottom-top">
                  <div class="item" v-show="showHide"><img src="../../assets/images/original/page22_03.png" alt=""/></div>
                </transition>
                <transition name="bottom-top">
                  <div class="item" v-show="showHide"><img src="../../assets/images/original/page22_04.png" alt=""/></div>
                </transition>
              </div>
            </div>
          </transition>
          <div class="right">
            <transition name="right-left">
              <div class="img" v-show="showHide"><img src="../../assets/images/original/page22_06.png" alt=""/></div>
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
      //回调--详情组件左下角返回
      openDefaultBack() {
        methods.setShowTouchPage(-1)

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
  .con-one{margin-top: 193px;}
  /* .con-one>div{flex-shrink: 0;} */
  .left{width:1646px;height: 936px;position: relative;margin-right: 234px;}
  .left .img-one{margin:68px 0 0 420px;}
  .left .item{position: absolute;}
  .left .item:nth-child(1){left:0;top:0;transition-delay: .4s;}
  .left .item:nth-child(2){left:1201px;top:0;transition-delay: .5s;}
  .left .item:nth-child(3){left:0;top:645px;transition-delay: .6s;}
  .left .item:nth-child(4){left:1201px;top:645px;transition-delay: .7s;}
  .h2{width:1524px;height: 104px;position: relative;}
</style>