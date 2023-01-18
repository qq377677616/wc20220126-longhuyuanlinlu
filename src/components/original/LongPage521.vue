<template>
  <div class="default-popup pof">
    <div class="page page521 flex-cen">
      <div class="con flex-cen-col">
        <transition name="top-bottom">
          <!-- <div class="h2 flex-cen" v-show="showHide"><img src="../../assets/images/original/page20_title_01.png" alt="" /></div> -->
          <div class="h2 flex-cen" v-show="showHide">
            <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
              <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page20/page20_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
            </sequence-effect>
          </div>
        </transition>
        <div class="con-one">
          <transition name="top-bottom">
            <div class="top" v-show="showHide">
              <div class="img-two"><img src="../../assets/images/original/page20_01.png" alt=""/></div>
            </div>
          </transition>
          <div class="bottom flex-cen">
            <transition name="bottom-top">
              <div class="img" v-show="showHide"><img src="../../assets/images/original/page20_02.png" alt=""/></div>
            </transition>
            <transition name="bottom-top">
              <div class="img" v-show="showHide"><img src="../../assets/images/original/page20_03.png" alt=""/></div>
            </transition>
            <transition name="bottom-top">
              <div class="img" v-show="showHide"><img src="../../assets/images/original/page20_04.png" alt=""/></div>
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
      //点击了5心产品
      selectItem(e) {
        //console.log("e", e)
      },
      //设置显示隐藏变量--滑动内页1
      setShowTouchPage(showTouchPage) {
        // data.transitionName = showTouchPage == 421 ? 'right-left' : 'bt-page'
        data.showTouchPage = showTouchPage
        if (data.showTouchPage == -1) {
          data.transitionName = 'bt-page'
          emit("openShowTouchPage", false)
          longPage421.value.removeAnimate()
          longPage422.value.removeAnimate()
        } else if (data.showTouchPage == 421) {
          longPage421.value.play()
        } else if (data.showTouchPage == 422) {
          longPage422.value.play()
        }
      },
      //监听滑动
      monitorTouchEvent(res) {
        console.log("监听滑动", res)
        console.log("data.showTouchPage ", data.showTouchPage )
        // data.transitionName = 'left-right'
        if (res.code == 1) {
          if (data.showTouchPage == -1) {

          } else if (data.showTouchPage == 421) {
            data.transitionName = 'lr-page'
            // data.showTouchPage = 422
            methods.setShowTouchPage(422)
          }
        }
        if (res.code == 2) {
          if (data.showTouchPage == -1) {
            methods.selectMenu(['back'])
          } else if (data.showTouchPage == 421) {
            methods.setShowTouchPage(-1)
            // data.transitionName = 'bt-page'
          } else if (data.showTouchPage == 422) {
            data.transitionName = 'lr-page'
            console.log('data.transitionName', data.transitionName)
            methods.setShowTouchPage(421)
          }
        }
      },
      //回调--详情组件左下角返回
      openDefaultBack() {
        methods.setShowTouchPage(-1)
        // data.showTouchPage = -1
        // longPage421.value.removeAnimate()
        // emit("openShowTouchPage", false)
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
  .top{margin:136px 0 67px;transition-delay: .5s;}
  .bottom .img:nth-child(1){transition-delay: .7s;}
  .bottom .img:nth-child(2){transition-delay: .8s;margin:0 25px;}
  .bottom .img:nth-child(3){transition-delay: .9s;}
  .h2{width:863px;height: 108px;position: relative;}
</style>