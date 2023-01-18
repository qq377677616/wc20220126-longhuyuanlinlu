<template>
  <div class="default-popup pof">
    <div class="page page411 flex-cen">
      <div class="con flex-cen">
        <div class="con-one flex-cen-col">
          <transition name="top-bottom">
            <!-- <div class="h2" v-show="showHide"><img src="../../assets/images/original/page5_title_01.png" alt=""/></div> -->
            <div class="h2" v-show="showHide && defaultType == 1">
              <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
                <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page5/page5_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
              </sequence-effect>
            </div>
          </transition>
          <transition name="top-bottom">
            <div class="h2" v-show="showHide && defaultType == 2">
              <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
                <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page6/page6_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
              </sequence-effect>
            </div>
          </transition>
          <transition name="top-bottom">
            <div class="h2" v-show="showHide && defaultType == 3">
              <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
                <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page7/page7_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
              </sequence-effect>
            </div>
          </transition>
          <!-- 龙湖塑造中国 -->
          <div class="list flex-cen" v-show="defaultType == 1">
            <transition :name="transitionName1">
              <div class="li" v-show="showHide">
                <div class="h3"><img src="../../assets/images/original/page5_title_02.png" alt=""/></div>
                <div class="img"><img src="../../assets/images/original/page5_01.png" alt=""/></div>
              </div>
            </transition>
            <transition :name="transitionName1">
              <div class="li" v-show="showHide">
                <div class="h3"><img src="../../assets/images/original/page5_title_03.png" alt=""/></div>
                <div class="img"><img src="../../assets/images/original/page5_02.png" alt=""/></div>
              </div>
            </transition>
            <transition :name="transitionName1">
              <div class="li" v-show="showHide">
                <div class="h3"><img src="../../assets/images/original/page5_title_04.png" alt=""/></div>
                <div class="img"><img src="../../assets/images/original/page5_03.png" alt=""/></div>
              </div>
            </transition>
            <transition :name="transitionName1">
              <div class="li" v-show="showHide">
                <div class="h3"><img src="../../assets/images/original/page5_title_05.png" alt=""/></div>
                <div class="img"><img src="../../assets/images/original/page5_04.png" alt=""/></div>
              </div>
            </transition>
            <transition :name="transitionName1">
              <div class="li" v-show="showHide">
                <div class="h3"><img src="../../assets/images/original/page5_title_06.png" alt=""/></div>
                <div class="img"><img src="../../assets/images/original/page5_05.png" alt=""/></div>
              </div>
            </transition>
            <transition :name="transitionName1">
              <div class="li" v-show="showHide">
                <div class="h3"><img src="../../assets/images/original/page5_title_07.png" alt=""/></div>
                <div class="img"><img src="../../assets/images/original/page5_06.png" alt=""/></div>
              </div>
            </transition>
          </div> 
          <!-- 精筑洋房标杆 -->
          <div class="list flex-cen" v-show="defaultType == 2">
            <transition :name="transitionName2">
              <div class="li" v-show="showHide">
                <div class="h3"><img src="../../assets/images/original/page6_title_02.png" alt=""/></div>
                <div class="img"><img src="../../assets/images/original/page6_01.png" alt=""/></div>
              </div>
            </transition>
            <transition :name="transitionName2">
              <div class="li" v-show="showHide">
                <div class="h3"><img src="../../assets/images/original/page6_title_03.png" alt=""/></div>
                <div class="img"><img src="../../assets/images/original/page6_02.png" alt=""/></div>
              </div>
            </transition>
            <transition :name="transitionName2">
              <div class="li" v-show="showHide">
                <div class="h3"><img src="../../assets/images/original/page6_title_04.png" alt=""/></div>
                <div class="img"><img src="../../assets/images/original/page6_03.png" alt=""/></div>
              </div>
            </transition>
            <transition :name="transitionName2">
              <div class="li" v-show="showHide">
                <div class="h3"><img src="../../assets/images/original/page6_title_05.png" alt=""/></div>
                <div class="img"><img src="../../assets/images/original/page6_04.png" alt=""/></div>
              </div>
            </transition>
            <transition :name="transitionName2">
              <div class="li" v-show="showHide">
                <div class="h3"><img src="../../assets/images/original/page6_title_06.png" alt=""/></div>
                <div class="img"><img src="../../assets/images/original/page6_05.png" alt=""/></div>
              </div>
            </transition>
            <transition :name="transitionName2">
              <div class="li" v-show="showHide">
                <div class="h3"><img src="../../assets/images/original/page6_title_07.png" alt=""/></div>
                <div class="img"><img src="../../assets/images/original/page6_06.png" alt=""/></div>
              </div>
            </transition>
          </div>
          <!-- 靠极塔尖大平层 -->
          <div class="list flex-cen" v-show="defaultType == 3">
            <transition :name="transitionName3">
              <div class="li" v-show="showHide">
                <div class="h3"><img src="../../assets/images/original/page7_title_02.png" alt=""/></div>
                <div class="img"><img src="../../assets/images/original/page7_01.png" alt=""/></div>
              </div>
            </transition>
            <transition :name="transitionName3">
              <div class="li" v-show="showHide">
                <div class="h3"><img src="../../assets/images/original/page7_title_03.png" alt=""/></div>
                <div class="img"><img src="../../assets/images/original/page7_02.png" alt=""/></div>
              </div>
            </transition>
            <transition :name="transitionName3">
              <div class="li" v-show="showHide">
                <div class="h3"><img src="../../assets/images/original/page7_title_04.png" alt=""/></div>
                <div class="img"><img src="../../assets/images/original/page7_03.png" alt=""/></div>
              </div>
            </transition>
            <transition :name="transitionName3">
              <div class="li" v-show="showHide">
                <div class="h3"><img src="../../assets/images/original/page7_title_05.png" alt=""/></div>
                <div class="img"><img src="../../assets/images/original/page7_04.png" alt=""/></div>
              </div>
            </transition>
            <transition :name="transitionName3">
              <div class="li" v-show="showHide">
                <div class="h3"><img src="../../assets/images/original/page7_title_06.png" alt=""/></div>
                <div class="img"><img src="../../assets/images/original/page7_05.png" alt=""/></div>
              </div>
            </transition>
            <transition :name="transitionName3">
              <div class="li" v-show="showHide">
                <div class="h3"><img src="../../assets/images/original/page7_title_07.png" alt=""/></div>
                <div class="img"><img src="../../assets/images/original/page7_06.png" alt=""/></div>
              </div>
            </transition>
          </div>
        </div>
        <!-- 左下角菜单栏部分 -->
        <transition name="bt-page" v-show="isShowMenu">
          <MenuList ref="menuList" @selectMenu="selectMenu"></MenuList>
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
    const defaultType = inject("defaultType"), menuList = ref(null)
    provide("isShowBackBtn", true)
    onMounted(() => {
      data.defaultType = defaultType
      // methods.play()
    })
    //页面数据
    const data = reactive({
      sequenceList: { url: `../assets/images/sequence/page1/page1_0.png`, num: 16, sequenceIndex: "sequenceListIndex", initIndex: 1, speed: 110, loop: true, autoplay: true },//序列配置
      sequenceListIndex: 0,//序列索引
      showHide: false,//显示隐藏变量--左
      showHideVideo: false,//显示隐藏变量--全屏视频组件
      defaultType: 1,//显示内容：1为龙湖塑造中国、2为精筑洋房标杆、3为靠极塔尖大平层
      mySetTimeout1: null,//定时器1
      isShowMenu: false,//展示菜单栏
      transitionName1: 'rt-lb-scale',//展示效果1
      transitionName2: 'opacity-scale',//展示效果2
      transitionName3: 'left-right',//展示效果3
    })
    //事件方法
    const methods = reactive({
      //开始加载
      play() {
        data.mySetTimeout1 = setTimeout(() => { data.showHide = true }, 400)
        // data.mySetTimeout1 = setTimeout(() => { data.showHide = true }, 600)
        setTimeout(() => { data.isShowMenu = true }, 1000)
      },
      //移除加载效果
      removeAnimate() {
        clearTimeout(data.mySetTimeout1)
        clearTimeout(data.mySetTimeout2)
        data.showHide = false
        data.showHide = false
      },
      //点击弹出视频
      clickPlayVideo() {
        data.showHideVideo = true
        playVideo.value.videoPlay()
        // emit("showVideoPopup")
      },
      //回调--视频组件左下角返回
      videoPlayBack() {
        data.showHideVideo = false
      },
      //左下角菜单点击回调
      selectMenu:(e) => {
        //console.log("e", e)
        if (e[0] == 'back') {
          data.isShowMenu = false
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
      menuList
    }
  }
}
</script>

<style scoped>
  .default-popup{z-index: 900;}
  .h2{width:1285px;height: 104px;position: relative;}
  .list{margin-top: 70px;flex-wrap: wrap;}
  .list .li{width: 915px;}
  .list .li:not(:nth-child(3n)){margin-right: 98px;}
  .list .li:nth-child(3)~.li{margin-top: 98px;}
  .list .li .img{margin-top: 53px;}
  .list .li:nth-child(1) {transition-delay: .2s;}
  .list .li:nth-child(2) {transition-delay: .35s;}
  .list .li:nth-child(3) {transition-delay: .5s;}
  .list .li:nth-child(4) {transition-delay: .65s;}
  .list .li:nth-child(5) {transition-delay: .8s;}
  .list .li:nth-child(6) {transition-delay: .95s;}

</style>