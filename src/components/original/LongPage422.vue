<template>
  <div class="default-popup pof">
    <div class="page page422 flex-cen">
      <div class="con flex-cen-col">
        <transition name="top-bottom">
          <!-- <div class="h2 flex-cen" v-show="showHide"><img src="../../assets/images/original/page11_title_01.png" alt="" /></div> -->
          <div class="h2 flex-cen" v-show="showHide">
            <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
              <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page11/page11_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
            </sequence-effect>
          </div>
        </transition>
        <div class="con-one flex-cen">
          <transition name="top-bottom">
            <div class="left por" v-show="showHide">
              <div class="img"><img src="../../assets/images/original/page11_01.png" alt=""/></div>
              <div class="list poa">
                <transition name="left-right"><div class="item" v-show="showHide"><img src="../../assets/images/original/page11_02.png" style="width:1051px;height:170px;" alt=""/></div></transition>
                <transition name="left-right"><div class="item" v-show="showHide"><img src="../../assets/images/original/page11_03.png" style="width:1051px;height:170px;" alt=""/></div></transition>
                <transition name="left-right"><div class="item" v-show="showHide"><img src="../../assets/images/original/page11_04.png" style="width:1051px;height:170px;" alt=""/></div></transition>
                <transition name="left-right"><div class="item" v-show="showHide"><img src="../../assets/images/original/page11_05.png" style="width:1051px;height:170px;" alt=""/></div></transition>
              </div>
            </div>
          </transition>
          <div class="right">
            <transition name="right-left">
              <div class="img" v-show="showHide"><img src="../../assets/images/original/page11_06.png" alt=""/></div>
            </transition>
          </div>
        </div>
        <!-- 左下角菜单栏部分 -->
        <transition name="bottom-top2">
          <MenuList v-show="isShowMenu" ref="menuList" @selectMenu="selectMenu"></MenuList>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, ref, provide, inject, onMounted } from 'vue'
export default {
  name: 'indexName',
  setup(props, { emit }) {
    provide("isShowBackBtn", true)
    onMounted(() => {
      // methods.play()
    })
    //页面数据
    const data = reactive({
      sequenceList: { url: `../assets/images/sequence/page1/page1_0.png`, num: 16, sequenceIndex: "sequenceListIndex", initIndex: 1, speed: 110, loop: true, autoplay: true },//序列配置
      sequenceListIndex: 0,//序列索引
      showHide: false,//显示隐藏变量
      mySetTimeout1: null,//定时器1
      mySetTimeout2: null,//定时器2
      isShowMenu: false,//展示菜单栏
    })
    //事件方法
    const methods = reactive({
      //开始加载
      play() {
        data.mySetTimeout1 = setTimeout(() => { data.showHide = true }, 400)
        data.mySetTimeout2 = setTimeout(() => { data.isShowMenu = true }, 700)
      },
      //移除加载效果
      removeAnimate() {
        clearTimeout(data.mySetTimeout1)
        clearTimeout(data.mySetTimeout2)
        data.showHide = false
        data.isShowMenu = false
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
  .con-one{margin-top: 116px;}
  .left{margin-right: 35px;}
  .con-one .left,.con-one .img{transition-delay: .2s;}
  .h2{width:1935px;height: 104px;position: relative;}
  .left .list{padding:53px 0 0 36px;box-sizing: border-box;}
  .left .item:not(:last-child){margin-bottom: 64px;}
  .left .item:nth-child(1){transition-delay: .7s;}
  .left .item:nth-child(2){transition-delay: .8s;}
  .left .item:nth-child(3){transition-delay: .9s;}
  .left .item:nth-child(4),.right .img{transition-delay: 1s;}
</style>