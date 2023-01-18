<template>
  <div class="body">
    <div class="page page2 flex-cen">
      <transition name="opacity">
        <div
          class="con flex-cen-col"
          v-show="
            !showDefaultPage1 &&
            !showDefaultPage2 &&
            !showDefaultPage3 &&
            !showDefaultPage4 &&
            !showDefaultPage5 &&
            !showDefaultPage6 &&
            !showDefaultPage7 &&
            !showDefaultPage8 &&
            !showDefaultPage9 &&
            !showDefaultPage10 &&
            !showDefaultPage11 &&
            !showDefaultPage12
          "
        >
          <transition name="top-bottom">
            <div class="h2 flex-cen" v-show="showHide">
              <img src="../../assets/images/changshun/page02_1.png" alt="" />
            </div>
            <!-- <div class="h2 flex-cen" v-show="showHide">
              <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
                <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page2/page2_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
              </sequence-effect>
            </div> -->
          </transition>
          <!-- <div class="con-one flex-cen">
            <transition name="top-bottom">
              <div class="h2 flex-cen" v-show="showHide">
                <img src="../../assets/images/changshun/page02_2.png" alt="" />
              </div>
            </transition>
          </div> -->
          <transition name="opacity-scale">
            <img
              src="../../assets/images/changshun/jh2023.png"
              alt=""
              v-show="showHide"
              class="poimg"
            />
          </transition>

          <div class="con-two">
            <div class="li-list">
              <transition name="top-bottom">
                <div class="li" v-show="showHide" @click="openDefaultPage(1)">
                  <img src="../../assets/images/changshun/pu1.png" alt="" />
                </div>
              </transition>
              <transition name="top-bottom">
                <div class="li" v-show="showHide" @click="openDefaultPage(2)">
                  <img src="../../assets/images/changshun/pu2.png" alt="" />
                </div>
              </transition>
              <transition name="top-bottom">
                <div class="li" v-show="showHide" @click="openDefaultPage(3)">
                  <img src="../../assets/images/changshun/pu3.png" alt="" />
                </div>
              </transition>
              <transition name="top-bottom">
                <div class="li" v-show="showHide" @click="openDefaultPage(4)">
                  <img src="../../assets/images/changshun/pu4.png" alt="" />
                </div>
              </transition>
              <transition name="top-bottom">
                <div class="li" v-show="showHide" @click="openDefaultPage(5)">
                  <img src="../../assets/images/changshun/pu5.png" alt="" />
                </div>
              </transition>
              <transition name="top-bottom">
                <div class="li" v-show="showHide" @click="openDefaultPage(11)">
                  <img src="../../assets/images/changshun/pu11.png" alt="" />
                </div>
              </transition>
              <transition name="bottom-top">
                <div class="li" v-show="showHide" @click="openDefaultPage(12)">
                  <img src="../../assets/images/changshun/pu12.png" alt="" />
                </div>
              </transition>
              <transition name="bottom-top">
                <div class="li" v-show="showHide" @click="openDefaultPage(6)">
                  <img src="../../assets/images/changshun/pu10.png" alt="" />
                </div>
              </transition>
              <transition name="bottom-top">
                <div class="li" v-show="showHide" @click="openDefaultPage(7)">
                  <img src="../../assets/images/changshun/pu9.png" alt="" />
                </div>
              </transition>
              <transition name="bottom-top">
                <div class="li" v-show="showHide" @click="openDefaultPage(8)">
                  <img src="../../assets/images/changshun/pu7.png" alt="" />
                </div>
              </transition>
              <transition name="bottom-top">
                <div class="li" v-show="showHide" @click="openDefaultPage(9)">
                  <img src="../../assets/images/changshun/pu8.png" alt="" />
                </div>
              </transition>
              <transition name="bottom-top">
                <div class="li" v-show="showHide" @click="openDefaultPage(10)">
                  <img src="../../assets/images/changshun/pu6.png" alt="" />
                </div>
              </transition>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <transition name="opacity-scale2">
      <ChangShun1
        ref="ChangShun1"
        v-show="showDefaultPage1"
        @openDefaultBack="openDefaultBack"
      ></ChangShun1>
    </transition>
    <transition name="opacity-scale2">
      <ChangShun2
        ref="ChangShun2"
        v-show="showDefaultPage2"
        @openDefaultBack="openDefaultBack"
      ></ChangShun2>
    </transition>
    <transition name="opacity-scale2">
      <ChangShun3
        ref="ChangShun3"
        v-show="showDefaultPage3"
        @openDefaultBack="openDefaultBack"
      ></ChangShun3>
    </transition>
    <transition name="opacity-scale2">
      <ChangShun4
        ref="ChangShun4"
        v-show="showDefaultPage4"
        @openDefaultBack="openDefaultBack"
      ></ChangShun4>
    </transition>
    <transition name="opacity-scale2">
      <ChangShun8
        ref="ChangShun5"
        v-show="showDefaultPage5"
        @openDefaultBack="openDefaultBack"
      ></ChangShun8>
    </transition>
    <transition name="opacity-scale2">
      <ChangShun5
        ref="ChangShun6"
        v-show="showDefaultPage6"
        @openDefaultBack="openDefaultBack"
      ></ChangShun5>
    </transition>
    <transition name="opacity-scale2">
      <ChangShun6
        ref="ChangShun7"
        v-show="showDefaultPage7"
        @openDefaultBack="openDefaultBack"
      ></ChangShun6>
    </transition>
    <transition name="opacity-scale2">
      <ChangShun9
        ref="ChangShun8"
        v-show="showDefaultPage8"
        @openDefaultBack="openDefaultBack"
      ></ChangShun9>
    </transition>
    <transition name="opacity-scale2">
      <ChangShun7
        ref="ChangShun9"
        v-show="showDefaultPage9"
        @openDefaultBack="openDefaultBack"
      ></ChangShun7>
    </transition>
    <transition name="opacity-scale2">
      <ChangShun10
        ref="ChangShun10"
        v-show="showDefaultPage10"
        @openDefaultBack="openDefaultBack"
      ></ChangShun10>
    </transition>
    <transition name="opacity-scale2">
      <ChangShun11
        ref="ChangShun11"
        v-show="showDefaultPage11"
        @openDefaultBack="openDefaultBack"
      ></ChangShun11>
    </transition>
    <transition name="opacity-scale2">
      <ChangShun12
        ref="ChangShun12"
        v-show="showDefaultPage12"
        @openDefaultBack="openDefaultBack"
      ></ChangShun12>
    </transition>
  </div>
</template>
<script>
import { reactive, toRefs, onMounted, ref, nextTick } from "vue";
export default {
  name: "indexName",
  setup(props, { emit }) {
    const ChangShun1 = ref(null),
      ChangShun2 = ref(null),
      ChangShun3 = ref(null),
      ChangShun4 = ref(null),
      ChangShun5 = ref(null),
      ChangShun6 = ref(null),
      ChangShun7 = ref(null),
      ChangShun8 = ref(null),
      ChangShun11 = ref(null),
      ChangShun12 = ref(null);
    onMounted(() => {
      // setTimeout(() => { methods.play() }, 200)
    });
    //页面数据
    const data = reactive({
      sequenceList: {
        url: `../assets/images/sequence/page1/page1_0.png`,
        num: 16,
        sequenceIndex: "sequenceListIndex",
        initIndex: 1,
        speed: 110,
        loop: true,
        autoplay: true,
      }, //序列配置
      sequenceListIndex: 0, //序列索引
      showHide: false, //显示隐藏变量--世界500强***大标题
      mySetTimeout1: null, //定时器1
      showDefaultPage1: false, //显示隐藏变量--内页
      showDefaultPage2: false, //显示隐藏变量--内页
      showDefaultPage3: false, //显示隐藏变量--内页
      showDefaultPage4: false, //显示隐藏变量--内页
      showDefaultPage5: false, //显示隐藏变量--内页
      showDefaultPage6: false, //显示隐藏变量--内页
      showDefaultPage7: false, //显示隐藏变量--内页
      showDefaultPage8: false, //显示隐藏变量--内页
      showDefaultPage9: false, //显示隐藏变量--内页
      showDefaultPage10: false, //显示隐藏变量--内页
      showDefaultPage11: false, //显示隐藏变量--内页
      showDefaultPage12: false, //显示隐藏变量--内页
      flag: false,
    });
    //事件方法
    const methods = reactive({
      //开始加载
      play() {
        data.mySetTimeout1 = setTimeout(() => {
          data.showHide = true;
        }, 500);
      },
      //移除加载效果
      removeAnimate() {
        clearTimeout(data.mySetTimeout1);
        data.showHide = false;
      },
      //点击探索龙湖
      start: () => {
        emit("page1Start");
      },
      //监听序列索引
      getSequenceListIndex(e) {},
      openDefaultPage(e) {
        if (data.flag) return;
        data.flag = true;
        setTimeout(() => {
          data.flag = false;
        }, 1000);

        // data.sequenceListIndex = e
        data["showDefaultPage" + e] = true;
        // ChangShun11.value.removeAnimate()
        // console.log("改变",'ChangShun1'+e );
        // // nextTick(()=>{['ChangShun1'+e].value.play()})
        emit("openShowTouchPage", true);
        emit("changedMenu");
      },
      //回调--详情组件左下角返回
      openDefaultBack() {
        console.log("抛出");
        for (let i = 0; i < 12; i++) {
          data["showDefaultPage" + (i + 1)] = false[
            "ChangShun" + (i + 1)
          ].value.removeAnimate();
          console.log("返回", i);
        }
        emit("canclice");
        emit("openShowTouchPage", false);
      },
    });
    return {
      ChangShun1,
      ...toRefs(data),
      ...toRefs(methods),
    };
  },
};
</script>

<style scoped>
.page1 {
  background: url('../../assets/images/original/page1_bg_01.png');
}
.h2{width:1338px;height: 104px;position: relative;}
/* .h3{margin-top:137px;} */
.con-one {
  margin-top: 67px;
  height: 97px;
  transition-delay: .2s;
}
.con-one .h2{transition-delay: .2s;}



.con-two {
  position: relative;
  z-index: 99;
  margin-top: 206px;
  height: 808px;
  width: 2869px;
}

.li-list {
  width: 2869px;
  flex-wrap: wrap;
  display: flex;
}
.li-list .li{margin-left: 83px;}
.li-list .li:nth-child(6n-5) {
  margin-left: 0;
}
.li-list .li img{width: 407px;height: 422px;}
.li-list .li:nth-child(n+7){ 
  margin-top: 110px;
}
.li-list .li:nth-child(1){transition-delay: .4s}
.li-list .li:nth-child(2){transition-delay: .8s}
.li-list .li:nth-child(3){transition-delay: 1.2s}
.li-list .li:nth-child(4){transition-delay: 1.6s}
.li-list .li:nth-child(5){transition-delay: 2s}
.li-list .li:nth-child(6){transition-delay: 2.4s}

.li-list .li:nth-child(7){transition-delay: .6s}
.li-list .li:nth-child(8){transition-delay: 1s}
.li-list .li:nth-child(9){transition-delay: 1.4s}
.li-list .li:nth-child(10){transition-delay: 1.8s}
.li-list .li:nth-child(11){transition-delay: 2.2s}
.li-list .li:nth-child(12){transition-delay: 2.6s}

/* .li-list .li:nth-child(2)~.li {
  margin-top: 73px;
} */



.poimg{
  width: 3086px;
  height: 567;
  position: fixed;
  left: 0;
  top: 634px;
  z-index: 1;
}
.page2{align-items: flex-start;padding-top: 244px;}
.page .con {margin-top: 0;}
</style>