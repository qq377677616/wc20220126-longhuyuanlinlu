<template>
  <div class="default-popup pof">
    <div class="page page532 flex-cen">
      <div class="con flex-cen-col">
        <transition name="top-bottom">
          <!-- <div class="h2 flex-cen" v-show="showHide"><img src="../../assets/images/original/page23_title_01.png" alt="" /></div> -->
          <div class="h2 flex-cen" v-show="showHide">
            <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
              <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page23/page23_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
            </sequence-effect>
          </div>
        </transition>
        <div class="con-one flex-cen">
          <div class="left">
            <transition name="left-right">
              <div class="img" v-show="showHide"><img src="../../assets/images/original/page23_01.png" alt=""/></div>
            </transition>
          </div>
          <div class="right">
            <transition name="right-left">
              <div v-show="showHide">
                <transition name="opacity">
                  <div class="line"><img src="../../assets/images/original/02xuxian.gif" alt=""/></div>
                </transition>
                <div class="img"><img src="../../assets/images/original/page23_02.png" alt=""/></div>
              </div>
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
  .con-one{margin-top: 136px;}
  .left{margin-right: 269px;}
  .h2{width:1526px;height: 106px;position: relative;}
  .right{position: relative;}
  .right .line{position: absolute;left: 50%;transform: translateX(-50%);width: 1344px;height: 1232px;top: 42px;}
</style>