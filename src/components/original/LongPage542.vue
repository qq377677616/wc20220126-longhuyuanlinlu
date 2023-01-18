<template>
  <div class="default-popup pof">
    <div class="page page542 flex-cen">
      <div class="con">
        <div class="con-one flex">
          <div class="flex">
              <div class="left">
                <transition name="top-bottom">
                  <div class="h3 flex-cen" v-show="showHide">
                    <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
                      <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page26-1/page26-1_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
                    </sequence-effect>
                  </div>
                </transition>
                <transition name="top-bottom">
                  <div class="img" v-show="showHide"><img src="../../assets/images/original/page26_01.png" alt=""/></div>
                </transition>
              </div>
               <div class="center">
                 <transition name="top-bottom">
                  <div class="h3 flex-cen" v-show="showHide">
                    <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
                      <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page26-2/page26-2_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
                    </sequence-effect>
                  </div>
                </transition>
                <transition name="top-bottom">
                  <div class="img" v-show="showHide"><img src="../../assets/images/original/page26_02.png" alt=""/></div>
                </transition>
              </div>
            </div>
            <div class="right" v-show="showHide">
              <transition name="top-bottom" v-show="showHide">
                <div class="h3 flex-cen">
                  <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
                    <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page26-3/page26-3_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
                  </sequence-effect>
                </div>
              </transition>
              <transition name="top-bottom">
                <div class="img" v-show="showHide"><img src="../../assets/images/original/page26_03.png" alt=""/></div>
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
        data.showHide = false
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
  .left{width:859px;height: 1367px;}
  .left .h3{width: 543px;height: 226px;position: relative;margin-bottom:108px;}
  .center{margin: 0 118px 0 109px;width:863px;height: 1362px;}
  .center .h3{width: 548px;height: 218px;position: relative;margin-bottom:97px;}
  .right{width: 865px;height: 1365px;}
  .right .h3{width: 544px;height: 218px;position: relative;margin-bottom:97px;}
  .left .img{transition-delay: .1s;}
  .left .h3,.center .img{transition-delay: .3s;}
  .center .h3,.right .img{transition-delay: .5s;}
  .right .h3{transition-delay: .7s;}
</style>