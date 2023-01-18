<template>
  <div class="default-popup pof">
    <div class="page page443 flex-cen">
      <div class="con">
        <div class="con-one flex-cen">
          <div class="left">
            <transition name="left-right">
              <!-- <div class="h3" v-show="showHide"><img src="../../assets/images/original/page16_title_01.png" alt=""/></div> -->
              <div class="h3" v-show="showHide">
                <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
                  <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page16_1/page16_1_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
                </sequence-effect>
              </div>
            </transition>
            <transition name="left-right">
              <div class="img" v-show="showHide"><img src="../../assets/images/original/page16_01.png" alt=""/></div>
            </transition>
            </div>
            <div class="right">
              <transition name="right-left">
                <!-- <div class="h3" v-show="showHide"><img src="../../assets/images/original/page16_title_02.png" alt=""/></div> -->
                <div class="h3" v-show="showHide">
                  <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
                    <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page16_2/page16_2_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
                  </sequence-effect>
                </div>
              </transition>
              <transition name="right-left">
                <div class="img" v-show="showHide"><img src="../../assets/images/original/page16_02.png" alt=""/></div>
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
          // if (data.showTouchPage == 441) data.transitionName = 'bottom-top2'
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
  .left{margin-right: 114px;}
  .left .img{margin-top: 100px;}
  /* .right{width: 396px;} */
  .right .img{margin-top: 99px;}
  .left .h3{width:833px;height: 103px;position: relative;}
  .right .h3{width:1106px;height: 104px;position: relative;}
</style>