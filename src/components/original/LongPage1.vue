<template>
  <div class="body">
    <div class="page page1 flex-cen">
      <transition name="opacity">
        <div class="con" v-show="!showSonPage">
          <!-- <div class="h2 flex-cen" v-show="showHide"><img src="../../assets/images/original/page1_title_01.png" alt=""></div> -->
          <!-- <transition name="top-bottom">
            <div class="h2 flex-cen" v-show="showHide">
              <sequence-effect :sequenceList="sequenceList" ref="sequence5" @sequenceListIndex="getSequenceListIndex">
                <img v-for="(item, index) in sequenceList.num" :key="'key'+item" :src="require('../../assets/images/sequence/page1/page1_'+index+'.png')" class="poa" :class="sequenceListIndex == index ? 'on' : ''" />
              </sequence-effect>
            </div>
          </transition>
          <transition name="bottom-top">
            <div class="h3 flex-cen" v-show="showHide" @click="start"><img src="../../assets/images/original/page1_btn_01.png" alt=""></div>
          </transition>
          <div class="start">
            <sequence-effect :sequenceList="sequenceList2" ref="sequence5" @sequenceListIndex="getSequenceListIndex2">
              <img v-for="(item, index) in sequenceList2.num" :key="'key'+item" :src="require('../../assets/images/sequence/start2/gd_'+index+'.png')" class="poa" :class="sequenceListIndex2 == index ? 'on' : ''" />
            </sequence-effect>
          </div> -->
          <transition name="opacity-scale2">
            <div class="con-one flex-cen">
              <div class="left">
                <transition name="left-right">
                  <div v-show="showHide">
                    <img
                      src="../../assets/images/changshun/page01_1.png"
                      alt=""
                      class="map"
                    />
                    <div
                      v-for="item in 32"
                      :key="item"
                      class="xfk"
                      @click="openDefaultPage(item)"
                    ></div>
                  </div>
                </transition>
              </div>
              <div class="right">
                <transition name="top-bottom">
                  <img
                    src="../../assets/images/changshun/cover222.jpg"
                    alt=""
                    v-show="showHide"
                    @click="toVideo(1)"
                  />
                </transition>
                <transition name="right-left">
                  <div class="center" v-show="showHide">
                    <img
                      src="../../assets/images/changshun/cover333.jpg"
                      alt=""
                      @click="toVideo(2)"
                    />
                    <img
                      src="../../assets/images/changshun/cover111.jpg"
                      alt=""
                      @click="toVideo(3)"
                    />
                  </div>
                </transition>
                <transition name="bottom-top">
                  <img
                    src="../../assets/images/changshun/page01_5.png"
                    alt=""
                    v-show="showHide"
                    class="bottom"
                  />
                </transition>
              </div>
            </div>
          </transition>

          <!-- <div class="start start-two">
            <sequence-effect :sequenceList="sequenceList2" ref="sequence5" @sequenceListIndex="getSequenceListIndex2">
              <img v-for="(item, index) in sequenceList2.num" :key="'key'+item" :src="require('../../assets/images/sequence/start/gd_'+index+'.png')" class="poa" :class="sequenceListIndex2 == index ? 'on' : ''" />
            </sequence-effect>
          </div> -->
        </div>
      </transition>
    </div>
    <transition name="opacity-scale2"
      ><ChangShun47
        ref="changShun1"
        v-show="showDefaultPage1"
        @openDefaultBack="openDefaultBack"
      ></ChangShun47
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun48
        ref="changShun2"
        v-show="showDefaultPage2"
        @openDefaultBack="openDefaultBack"
      ></ChangShun48
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun49
        ref="changShun3"
        v-show="showDefaultPage3"
        @openDefaultBack="openDefaultBack"
      ></ChangShun49
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun50
        ref="changShun4"
        v-show="showDefaultPage4"
        @openDefaultBack="openDefaultBack"
      ></ChangShun50
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun51
        ref="changShun4"
        v-show="showDefaultPage5"
        @openDefaultBack="openDefaultBack"
      ></ChangShun51
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun52
        ref="changShun4"
        v-show="showDefaultPage6"
        @openDefaultBack="openDefaultBack"
      ></ChangShun52
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun53
        ref="changShun4"
        v-show="showDefaultPage7"
        @openDefaultBack="openDefaultBack"
      ></ChangShun53
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun54
        ref="changShun4"
        v-show="showDefaultPage8"
        @openDefaultBack="openDefaultBack"
      ></ChangShun54
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun55
        ref="changShun4"
        v-show="showDefaultPage9"
        @openDefaultBack="openDefaultBack"
      ></ChangShun55
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun56
        ref="changShun4"
        v-show="showDefaultPage10"
        @openDefaultBack="openDefaultBack"
      ></ChangShun56
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun57
        ref="changShun1"
        v-show="showDefaultPage11"
        @openDefaultBack="openDefaultBack"
      ></ChangShun57
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun58
        ref="changShun2"
        v-show="showDefaultPage12"
        @openDefaultBack="openDefaultBack"
      ></ChangShun58
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun59
        ref="changShun3"
        v-show="showDefaultPage13"
        @openDefaultBack="openDefaultBack"
      ></ChangShun59
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun60
        ref="changShun4"
        v-show="showDefaultPage14"
        @openDefaultBack="openDefaultBack"
      ></ChangShun60
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun61
        ref="changShun4"
        v-show="showDefaultPage15"
        @openDefaultBack="openDefaultBack"
      ></ChangShun61
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun62
        ref="changShun4"
        v-show="showDefaultPage16"
        @openDefaultBack="openDefaultBack"
      ></ChangShun62
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun63
        ref="changShun4"
        v-show="showDefaultPage17"
        @openDefaultBack="openDefaultBack"
      ></ChangShun63
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun64
        ref="changShun4"
        v-show="showDefaultPage18"
        @openDefaultBack="openDefaultBack"
      ></ChangShun64
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun65
        ref="changShun4"
        v-show="showDefaultPage19"
        @openDefaultBack="openDefaultBack"
      ></ChangShun65
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun66
        ref="changShun4"
        v-show="showDefaultPage20"
        @openDefaultBack="openDefaultBack"
      ></ChangShun66
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun67
        ref="changShun1"
        v-show="showDefaultPage21"
        @openDefaultBack="openDefaultBack"
      ></ChangShun67
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun68
        ref="changShun2"
        v-show="showDefaultPage22"
        @openDefaultBack="openDefaultBack"
      ></ChangShun68
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun69
        ref="changShun3"
        v-show="showDefaultPage23"
        @openDefaultBack="openDefaultBack"
      ></ChangShun69
    ></transition>
    <transition name="opacity-scale2"
      ><ChangShun70
        ref="changShun4"
        v-show="showDefaultPage24"
        @openDefaultBack="openDefaultBack"
      ></ChangShun70
    ></transition>
    <!-- <transition name="opacity-scale2" ><ChangShun26 ref="changShun4" v-show="showDefaultPage25" @openDefaultBack="openDefaultBack"></ChangShun26></transition>
    <transition name="opacity-scale2" ><ChangShun27 ref="changShun4" v-show="showDefaultPage26" @openDefaultBack="openDefaultBack"></ChangShun27></transition>
    <transition name="opacity-scale2" ><ChangShun28 ref="changShun4" v-show="showDefaultPage27" @openDefaultBack="openDefaultBack"></ChangShun28></transition> -->

    <!-- 视频页 -->
    <transition :name="transitionNameVideo">
      <PlayVideo
        ref="playVideo"
        :videoSrc="videoSrc"
        :show="show"
        v-show="showTouchPage"
        @videoPlayBack="openDefaultBack"
      ></PlayVideo>
    </transition>
  </div>
</template>
<script>
import { reactive, toRefs, onMounted, ref, provide } from "vue";
import { Logger } from "buffer";
export default {
  name: "indexName",
  setup(props, { emit }) {
    onMounted(() => {
      // setTimeout(() => { methods.play() }, 500)
    });
    const playVideo = ref(null);
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
      sequenceList2: {
        url: `../assets/images/sequence/page1/page1_0.png`,
        num: 31,
        sequenceIndex: "sequenceListIndex2",
        initIndex: 1,
        speed: 110,
        loop: true,
        autoplay: true,
      }, //序列配置
      sequenceListIndex2: 0, //序列索引
      showHide: false, //显示隐藏变量
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
      showDefaultPage13: false, //显示隐藏变量--内页
      showDefaultPage14: false, //显示隐藏变量--内页
      showDefaultPage15: false, //显示隐藏变量--内页
      showDefaultPage16: false, //显示隐藏变量--内页
      showDefaultPage17: false, //显示隐藏变量--内页
      showDefaultPage18: false, //显示隐藏变量--内页
      showDefaultPage19: false, //显示隐藏变量--内页
      showDefaultPage20: false, //显示隐藏变量--内页
      showDefaultPage21: false, //显示隐藏变量--内页
      showDefaultPage22: false, //显示隐藏变量--内页
      showDefaultPage23: false, //显示隐藏变量--内页
      showDefaultPage24: false, //显示隐藏变量--内页
      showDefaultPage25: false, //显示隐藏变量--内页
      showDefaultPage26: false, //显示隐藏变量--内页
      showDefaultPage27: false, //显示隐藏变量--内页

      showSonPage: false,
      showTouchPage: false,
      videoSrc: "",
      flag: false,
      show: 1,
    });
    data.videoSrc = "@/assets/01.mp4";
    //事件方法
    const methods = reactive({
      //开始加载
      play() {
        // data.showHide = true
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
      start() {
        data.showHide = false;
        methods.removeAnimate();
        emit("page1Start");
      },
      //监听序列索引
      getSequenceListIndex(e) {
        data.sequenceListIndex = e;
      },
      //监听序列索引
      getSequenceListIndex2(e) {
        data.sequenceListIndex2 = e;
      },
      openDefaultPage(e) {
        if (data.flag) return;
        data.flag = true;
        setTimeout(() => {
          data.flag = false;
        }, 1000);

        if (e < 25) {
          data["showDefaultPage" + e] = true;
          data.showSonPage = true;
          emit("changedMenu");
        } else {
          emit("changedMenu", e);
        }
      },
      toVideo(num) {
        data.show = num;
        // if(num == 1){
        //   data.show = 1
        //   provide("videoSrc", '/assets/01.mp4')
        //   data.videoSrc = 'https://img.vrupup.com/web/psy/changshun/video/01.mp4'
        // }
        // if(num == 2){
        //   provide("videoSrc", '/assets/02.mp4')
        //   data.videoSrc = 'https://img.vrupup.com/web/psy/changshun/video/02.mp4'
        // }
        // if(num == 3){
        //   provide("videoSrc", '/assets/03.mp4')
        //   data.videoSrc = 'https://img.vrupup.com/web/psy/changshun/video/03.mp4'
        // }
        data.showTouchPage = true;
        emit("changedMenu", "isno");
        setTimeout(() => {
          data.showTouchPage = true;
          playVideo.value.videoPlay();
        }, 500);
      },
    });
    return {
      playVideo,
      ...toRefs(data),
      ...toRefs(methods),
    };
  },
};
</script>

<style scoped>
  /* .page1{background: url('../../assets/images/original/page1_bg_01.png');} */
  .h2{width:1800px;height: 235px;position: relative;}
  .h3{margin-top:137px;}
  /* .start{width:387px;height: 326px;position: absolute;left:196px;bottom: 297px;} */
  .start{width:240px;height: 241px;position: absolute;left:196px;bottom: 297px;}
  [class *= leave-active]{transition: all .5s;}
  .start-two{left:342px;top:268px;}
  .left{width:1115px;position: relative;;margin-right: 53px;}
  .center{margin-top: 42px;transition-delay: .4s;}
  .center img:nth-child(2){margin-left: 39px;}
  .bottom{margin-top: 44px;margin-left: 177px;transition-delay: .8s;}
  .xfk{
    position: absolute;
    width: 92px;
    height: 30px;
    left: 2px;
    top: 3px;
    /* background-color: rgba(172, 82, 82, 0.6);  */
  }
  .map{
    width: 1115px;
    height: 1162px;
  }
  /* .xfk:nth-child(2){left: 30px;top: 230px;} */
  .xfk:nth-child(2){left: 366px;top: 183px;}
  .xfk:nth-child(3){left: 304px;top: 462px;}
  .xfk:nth-child(4){left: 518px;top: 882px;}
  .xfk:nth-child(5){left: 430px;top: 446px;}
  .xfk:nth-child(6){left: 79px;top: 232px;}
  /* 千山 */
  .xfk:nth-child(8){left: 264px;top: 913px;}
  .xfk:nth-child(9){left: 264px;top: 214px;}
  /* 揽镜 */
  .xfk:nth-child(11){left: 637px;top: 815px;}
  .xfk:nth-child(12){left: 634px;top: 662px;} 
  .xfk:nth-child(13){left: 406px;top: 487px;}
  .xfk:nth-child(14){left: 795px;top: 738px;}
  .xfk:nth-child(15){left: 576px;top: 241px;}
  .xfk:nth-child(16){left: 289px;top: 875px;}
  .xfk:nth-child(17){left: 610px;top: 396px;width: 170px;}
  /* 斌江天街 */
  .xfk:nth-child(19){left: 454px;top: 584px;width: 170px;}
  .xfk:nth-child(20){left: 610px;top: 360px;width: 170px;}
  .xfk:nth-child(21){left: 764px;top: 515px;width: 197px;}
  .xfk:nth-child(22){left: 598px;top: 537px;width: 129px;}
  .xfk:nth-child(23){left: 279px;top: 334px;width: 170px;}
  .xfk:nth-child(24){left: 466px;top: 688px;width: 160px;}
  .xfk:nth-child(25){left: 558px;top: 482px;width: 171px;}
  .xfk:nth-child(26){left: 404px;top: 218px;width: 66px;}
  .xfk:nth-child(27){left: 119px;top: 276px;}
  .xfk:nth-child(28){left: 486px;top: 288px;}
  .xfk:nth-child(29){left: 136px;top: 956px;}
  .xfk:nth-child(30){left: 816px;top: 640px;width: 124px;}
  .xfk:nth-child(31){left: 893px;top: 702px;width: 124px;}
  .xfk:nth-child(32){left: 300px;top: 950px;}
  .xfk:nth-child(33){left: 657px;top: 943px;}
</style>