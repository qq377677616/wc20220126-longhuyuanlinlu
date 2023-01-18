<template>
  <div class="body">
    <transition name="opacity">
      <BrandLogo v-show="showHide1"></BrandLogo>
    </transition>
    <div
      :class="['content', isLeft ? 'toleft' : '', isRight ? 'toright' : '']"
      @touchstart="touchEvent(1, $event)"
      @touchmove="touchEvent(2, $event)"
      @touchend="touchEvent(3, $event)"
    >
      <!-- logo部分 -->
      <!-- 所有页面部分 -->
      <transition name="opacity">
        <LongPage0
          ref="longPage1"
          @page1Start="page1Start"
          v-show="showPageNum == 0"
          key="LongPage1"
          @changedMenu="changedMenu"
        ></LongPage0>
      </transition>
      <transition name="opacity">
        <LongPage1
          ref="longPage1"
          @page1Start="page1Start"
          v-show="showPageNum == 1"
          key="LongPage1"
          @changedMenu="changedMenu"
        ></LongPage1>
      </transition>
      <transition name="opacity">
        <LongPage2
          ref="longPage2"
          v-show="showPageNum == 2"
          key="LongPage2"
          @openShowTouchPage="openShowTouchPage"
          @changedMenu="changedMenu"
          @canclice="canclice"
        ></LongPage2>
      </transition>
      <transition name="opacity">
        <ChangShun21
          ref="longPage3"
          v-show="showPageNum == 3"
          key="LongPage3"
        ></ChangShun21>
      </transition>

      <!-- <transition name="opacity" v-for="item in 49" :key="item">
        <component 
          :is="`changShun${21+item}`" 
          :ref="`changShun${21+item}`"
          v-show="showPageNum == (21+item)" 
          :key="`LongPage${21+item}`">
        </component>
      </transition> -->
      <transition name="opacity"
        ><ChangShun22
          ref="changShun22"
          v-show="showPageNum == 22"
          key="LongPage22"
        ></ChangShun22
      ></transition>
      <transition name="opacity"
        ><ChangShun23
          ref="changShun23"
          v-show="showPageNum == 23"
          key="LongPage23"
        ></ChangShun23
      ></transition>
      <transition name="opacity"
        ><ChangShun24
          ref="changShun24"
          v-show="showPageNum == 24"
          key="LongPage24"
        ></ChangShun24
      ></transition>
      <transition name="opacity"
        ><ChangShun25
          ref="changShun25"
          v-show="showPageNum == 25"
          key="LongPage25"
        ></ChangShun25
      ></transition>
      <transition name="opacity"
        ><ChangShun26
          ref="changShun26"
          v-show="showPageNum == 26"
          key="LongPage26"
        ></ChangShun26
      ></transition>
      <transition name="opacity"
        ><ChangShun27
          ref="changShun27"
          v-show="showPageNum == 27"
          key="LongPage27"
        ></ChangShun27
      ></transition>
      <transition name="opacity"
        ><ChangShun28
          ref="changShun28"
          v-show="showPageNum == 28"
          key="LongPage28"
        ></ChangShun28
      ></transition>
      <transition name="opacity"
        ><ChangShun29
          ref="changShun29"
          v-show="showPageNum == 29"
          key="LongPage29"
        ></ChangShun29
      ></transition>
      <transition name="opacity"
        ><ChangShun30
          ref="changShun30"
          v-show="showPageNum == 30"
          key="LongPage30"
        ></ChangShun30
      ></transition>
      <transition name="opacity"
        ><ChangShun31
          ref="changShun31"
          v-show="showPageNum == 31"
          key="LongPage31"
        ></ChangShun31
      ></transition>
      <transition name="opacity"
        ><ChangShun32
          ref="changShun32"
          v-show="showPageNum == 32"
          key="LongPage32"
        ></ChangShun32
      ></transition>
      <transition name="opacity">
        <ChangShun33
          ref="changShun33"
          v-show="showPageNum == 33"
          key="LongPage33"
        ></ChangShun33>
      </transition>
      <transition name="opacity">
        <ChangShun34
          ref="changShun34"
          v-show="showPageNum == 34"
          key="LongPage34"
        ></ChangShun34>
      </transition>
      <transition name="opacity">
        <ChangShun35
          ref="changShun35"
          v-show="showPageNum == 35"
          key="LongPage35"
        ></ChangShun35>
      </transition>
      <transition name="opacity">
        <ChangShun36
          ref="changShun36"
          v-show="showPageNum == 36"
          key="LongPage36"
        ></ChangShun36>
      </transition>
      <transition name="opacity">
        <ChangShun37
          ref="changShun37"
          v-show="showPageNum == 37"
          key="LongPage37"
        ></ChangShun37>
      </transition>
      <transition name="opacity">
        <ChangShun38
          ref="changShun38"
          v-show="showPageNum == 38"
          key="LongPage38"
        ></ChangShun38>
      </transition>
      <transition name="opacity">
        <ChangShun39
          ref="changShun39"
          v-show="showPageNum == 39"
          key="LongPage39"
        ></ChangShun39>
      </transition>
      <transition name="opacity">
        <ChangShun40
          ref="changShun40"
          v-show="showPageNum == 40"
          key="LongPage40"
        ></ChangShun40>
      </transition>

      <transition name="opacity">
        <ChangShun41
          ref="changShun41"
          v-show="showPageNum == 41"
          key="LongPage41"
        ></ChangShun41>
      </transition>
      <transition name="opacity">
        <ChangShun42
          ref="changShun42"
          v-show="showPageNum == 42"
          key="LongPage42"
        ></ChangShun42>
      </transition>
      <transition name="opacity">
        <ChangShun43
          ref="changShun43"
          v-show="showPageNum == 43"
          key="LongPage43"
        ></ChangShun43>
      </transition>
      <transition name="opacity">
        <ChangShun44
          ref="changShun44"
          v-show="showPageNum == 44"
          key="LongPage44"
        ></ChangShun44>
      </transition>
      <transition name="opacity">
        <ChangShun45
          ref="changShun45"
          v-show="showPageNum == 45"
          key="LongPage45"
        ></ChangShun45>
      </transition>
      <transition name="opacity">
        <ChangShun46
          ref="changShun46"
          v-show="showPageNum == 46"
          key="LongPage46"
        ></ChangShun46>
      </transition>
      <transition name="opacity">
        <ChangShun47
          ref="changShun47"
          v-show="showPageNum == 47"
          key="LongPage47"
        ></ChangShun47>
      </transition>
      <transition name="opacity">
        <ChangShun48
          ref="changShun48"
          v-show="showPageNum == 48"
          key="LongPage48"
        ></ChangShun48>
      </transition>
      <transition name="opacity">
        <ChangShun49
          ref="changShun49"
          v-show="showPageNum == 49"
          key="LongPage49"
        ></ChangShun49>
      </transition>
      <transition name="opacity">
        <ChangShun50
          ref="changShun50"
          v-show="showPageNum == 50"
          key="LongPage50"
        ></ChangShun50>
      </transition>
      <transition name="opacity">
        <ChangShun51
          ref="changShun51"
          v-show="showPageNum == 51"
          key="LongPage51"
        ></ChangShun51>
      </transition>
      <transition name="opacity">
        <ChangShun52
          ref="changShun52"
          v-show="showPageNum == 52"
          key="LongPage52"
        ></ChangShun52>
      </transition>
      <transition name="opacity">
        <ChangShun53
          ref="changShun53"
          v-show="showPageNum == 53"
          key="LongPage53"
        ></ChangShun53>
      </transition>
      <transition name="opacity">
        <ChangShun54
          ref="changShun54"
          v-show="showPageNum == 54"
          key="LongPage54"
        ></ChangShun54>
      </transition>
      <transition name="opacity">
        <ChangShun55
          ref="changShun55"
          v-show="showPageNum == 55"
          key="LongPage55"
        ></ChangShun55>
      </transition>
      <transition name="opacity">
        <ChangShun56
          ref="changShun56"
          v-show="showPageNum == 56"
          key="LongPage56"
        ></ChangShun56>
      </transition>
      <transition name="opacity">
        <ChangShun57
          ref="changShun57"
          v-show="showPageNum == 57"
          key="LongPage57"
        ></ChangShun57>
      </transition>
      <transition name="opacity">
        <ChangShun58
          ref="changShun58"
          v-show="showPageNum == 58"
          key="LongPage58"
        ></ChangShun58>
      </transition>
      <transition name="opacity">
        <ChangShun59
          ref="changShun59"
          v-show="showPageNum == 59"
          key="LongPage59"
        ></ChangShun59>
      </transition>
      <transition name="opacity">
        <ChangShun60
          ref="changShun60"
          v-show="showPageNum == 60"
          key="LongPage60"
        ></ChangShun60>
      </transition>
      <transition name="opacity"
        ><ChangShun61
          ref="changShun61"
          v-show="showPageNum == 61"
          key="LongPage61"
        ></ChangShun61
      ></transition>
      <transition name="opacity"
        ><ChangShun62
          ref="changShun62"
          v-show="showPageNum == 62"
          key="LongPage62"
        ></ChangShun62
      ></transition>
      <transition name="opacity"
        ><ChangShun63
          ref="changShun63"
          v-show="showPageNum == 63"
          key="LongPage63"
        ></ChangShun63
      ></transition>
      <transition name="opacity"
        ><ChangShun64
          ref="changShun64"
          v-show="showPageNum == 64"
          key="LongPage64"
        ></ChangShun64
      ></transition>
      <transition name="opacity"
        ><ChangShun65
          ref="changShun65"
          v-show="showPageNum == 65"
          key="LongPage65"
        ></ChangShun65
      ></transition>
      <transition name="opacity"
        ><ChangShun66
          ref="changShun66"
          v-show="showPageNum == 66"
          key="LongPage66"
        ></ChangShun66
      ></transition>
      <transition name="opacity"
        ><ChangShun67
          ref="changShun67"
          v-show="showPageNum == 67"
          key="LongPage67"
        ></ChangShun67
      ></transition>
      <transition name="opacity"
        ><ChangShun68
          ref="changShun68"
          v-show="showPageNum == 68"
          key="LongPage68"
        ></ChangShun68
      ></transition>
      <transition name="opacity"
        ><ChangShun69
          ref="changShun69"
          v-show="showPageNum == 69"
          key="LongPage69"
        ></ChangShun69
      ></transition>
      <transition name="opacity"
        ><ChangShun70
          ref="changShun70"
          v-show="showPageNum == 70"
          key="LongPage70"
        ></ChangShun70
      ></transition>

      <!-- <transition :name="showPageNum41">
        <LongPage41 ref="longPage41" @showVideoPopup="showVideoPopup" @openShowTouchPage="openShowTouchPage" v-show="showPageNum == 41" key="LongPage41"></LongPage41>
      </transition>
      <transition :name="showPageNum42">
        <LongPage42 ref="longPage42" v-show="showPageNum == 42" @openShowTouchPage="openShowTouchPage" @showVideoPopup="showVideoPopup"></LongPage42>
      </transition>
      <transition :name="showPageNum43">
        <LongPage43 ref="longPage43" v-show="showPageNum == 43"></LongPage43>
      </transition>
      <transition :name="showPageNum44">
        <LongPage44 ref="longPage44" v-show="showPageNum == 44" @openShowTouchPage="openShowTouchPage" @showVideoPopup="showVideoPopup"></LongPage44>
      </transition>
      <transition name="opacity">
        <LongPage5 ref="longPage5" v-show="showPageNum == 5" @openShowTouchPage="openShowTouchPage"></LongPage5>
      </transition>
      <transition name="opacity">
        <LongPage6 ref="longPage6" v-show="showPageNum == 6" key="LongPage6" @showVideoPopup="showVideoPopup"></LongPage6>
      </transition>
      <transition name="opacity">
        <LongPage7 ref="longPage7" v-show="showPageNum == 7" key="LongPage7"></LongPage7>
      </transition> -->
      <!-- 左下角菜单栏部分 -->
      <!-- <transition name="left-right">
        <MenuList ref="menuList" @selectMenu="selectMenu" v-show="showMenuPageList.includes(showPageNum) && !isOpenShowTouchPage && !isShowVideoPopup"></MenuList>
      </transition> -->
    </div>
    <MenuList
      ref="menuList"
      @selectMenu="selectMenu"
      :showPageNum="showPageNum"
    ></MenuList>
    <img src="../assets/images/changshun/zhuyi.png" class="zhuyi" alt="" />
  </div>
</template>
<script>
import { reactive, toRefs, ref, onMounted, provide, watch } from "vue";
import { touchEvent } from "assets/js/util";
export default {
  name: "indexName",
  setup() {
    let bb = 0;
    const longPage1 = ref(null),
      menuList = ref(),
      longPage2 = ref(null),
      longPage3 = ref(null),
      longPage41 = ref(null),
      longPage42 = ref(null),
      longPage43 = ref(null),
      longPage44 = ref(null),
      longPage5 = ref(null),
      longPage6 = ref(null),
      longPage7 = ref(null),
      defaultType = ref(2),
      changShun22 = ref(null),
      changShun23 = ref(null),
      changShun24 = ref(null),
      changShun25 = ref(null),
      changShun26 = ref(null),
      changShun27 = ref(null),
      changShun28 = ref(null),
      changShun29 = ref(null),
      changShun30 = ref(null),
      changShun31 = ref(null),
      changShun32 = ref(null),
      changShun33 = ref(null),
      changShun34 = ref(null),
      changShun35 = ref(null),
      changShun36 = ref(null),
      changShun37 = ref(null),
      changShun38 = ref(null),
      changShun39 = ref(null),
      changShun40 = ref(null),
      changShun41 = ref(null),
      changShun42 = ref(null),
      changShun43 = ref(null),
      changShun44 = ref(null),
      changShun45 = ref(null),
      changShun46 = ref(null),
      changShun47 = ref(null),
      changShun48 = ref(null),
      changShun49 = ref(null),
      changShun50 = ref(null),
      changShun51 = ref(null),
      changShun52 = ref(null),
      changShun53 = ref(null),
      changShun54 = ref(null),
      changShun55 = ref(null),
      changShun56 = ref(null),
      changShun57 = ref(null),
      changShun58 = ref(null),
      changShun59 = ref(null),
      changShun60 = ref(null),
      changShun61 = ref(null),
      changShun62 = ref(null),
      changShun63 = ref(null),
      changShun64 = ref(null),
      changShun65 = ref(null),
      changShun66 = ref(null),
      changShun67 = ref(null),
      changShun68 = ref(null),
      changShun69 = ref(null),
      changShun70 = ref(null);

    provide("isShowBackBtn", false);

    onMounted(() => {
      methods.page1Start();
      // setTimeout(() => { data.showHide1 = true }, 1000)
    });
    //页面数据
    const data = reactive({
      showMenuPageList: [2, 3, 41, 42, 43, 44, 5, 6, 7], //显示右下角菜单栏的页面索引
      showPageNum: bb, //显示隐藏变量--当前页面
      showHide1: false, //显示隐藏变量--logo
      showHide2: false,
      // showPageNum: -1,//显示隐藏变量--滑动页
      showPageNum41: "opacity", //页面进出场动画-41
      showPageNum42: "rl-page", //页面进出场动画-42
      showPageNum43: "rl-page", //页面进出场动画-43
      showPageNum44: "rl-page", //页面进出场动画-44
      isOpenShowTouchPage: false, //当前是否在查看某滑动页的详情页
      isShowVideoPopup: false, //当前是否在查看视频弹窗页
      isLeft: false,
      isRight: false,
      canslice: true,
    });

    //事件方法
    const methods = reactive({
      //首页点击开始
      page1Start: () => {
        setTimeout(() => {
          data.showPageNum = 1;
          longPage1.value.play();
          methods.showMenuBtnList(true);
          setTimeout(() => {
            data.showHide1 = true;
          }, 1000);
        }, 500);
      },
      //滑动事件
      touchEvent(tocuchType, e) {
        touchEvent(tocuchType, e, data).then((res) => {
          console.log("【滑动事件】", res);
          console.log("【滑动事件】", data.isShowVideoPopup, data.showPageNum);
          if (data.isShowVideoPopup) return;
          if (!data.isOpenShowTouchPage) {
            if (data.showPageNum == 41) {
              data.showPageNum41 = ["lr-page", "rl-page"][res.code - 1];
              data.showPageNum42 = ["rl-page", "lr-page"][res.code - 1];
            } else if (data.showPageNum == 42) {
              data.showPageNum42 = ["lr-page", "rl-page"][res.code - 1];
              data.showPageNum43 = ["rl-page", "lr-page"][res.code - 1];
            } else if (data.showPageNum == 43) {
              data.showPageNum43 = ["lr-page", "rl-page"][res.code - 1];
              data.showPageNum44 = ["rl-page", "lr-page"][res.code - 1];
            } else if (data.showPageNum == 44) {
              data.showPageNum44 = ["lr-page", "rl-page"][res.code - 1];
            }
          }
          if (!data.canslice) {
            console.log(
              "longPage1.value.showDefaultPage25",
              longPage1.value.showDefaultPage25
            );
            // if (res.code == 1) {
            //   // 云溪
            //   if(longPage1.value.showDefaultPage25){
            //     data.isLeft = true
            //     setTimeout(()=>{data.isLeft = false},1000)
            //     longPage1.value.showDefaultPage25 = false
            //     longPage1.value.showDefaultPage26 = true
            //   }else if(longPage1.value.showDefaultPage26){
            //     data.isLeft = true
            //     setTimeout(()=>{data.isLeft = false},1000)
            //     longPage1.value.showDefaultPage26 = false
            //     longPage1.value.showDefaultPage27 = true
            //   }
            // }
            // if (res.code == 2) {
            //   if(longPage1.value.showDefaultPage26){
            //     data.isRight = true
            //     setTimeout(()=>{data.isRight = false},1000)
            //     longPage1.value.showDefaultPage25 = true
            //     longPage1.value.showDefaultPage26 = false
            //   }else if(longPage1.value.showDefaultPage27){
            //     data.isRight = true
            //     setTimeout(()=>{data.isRight = false},1000)
            //     longPage1.value.showDefaultPage26 = true
            //     longPage1.value.showDefaultPage27 = false
            //   }
            // }
            return;
          }
          if (res.code == 1) {
            if (data.showPageNum == 3) return;

            if (data.showPageNum == 46) return;
            if (data.showPageNum == 28) return;
            if (data.showPageNum == 25) return;
            if (data.showPageNum == 31) return;
            if (data.showPageNum == 34) return;
            if (data.showPageNum == 37) return;
            if (data.showPageNum == 40) return;
            if (data.showPageNum == 43) return;
            if (data.showPageNum == 46) return;
            data.isLeft = true;
            setTimeout(() => {
              data.isLeft = false;
            }, 1000);
            if (data.showPageNum == 0) {
              setTimeout(() => {
                data.showPageNum = 1;
                longPage1.value.play();
                methods.showMenuBtnList(true);
                setTimeout(() => {
                  data.showHide1 = true;
                }, 1000);
              }, 500);
            } else if (data.showPageNum == 1) {
              data.showPageNum = data.showPageNum + 1;
              setTimeout(() => {
                longPage1.value.showSonPage = true;
                longPage1.value.removeAnimate();
              }, 400);
              longPage2.value.play();
            } else if (data.showPageNum == 2) {
              data.showPageNum = 3;
              longPage2.value.removeAnimate();
              longPage3.value.play();
            } else if (data.showPageNum == 3) {
              //   console.log("当前", changShun22);
              //   data.showPageNum = 22;

              setTimeout(() => {
                longPage3.value.removeAnimate();
              }, 550);
              //   setTimeout(() => {
              //     changShun22.value.play();
              //   }, 500);
              // } else if (data.showPageNum == 22) {
              data.showPageNum = 23;

              // setTimeout(() => {
              //   changShun22.value.removeAnimate();
              // }, 550);
              setTimeout(() => {
                changShun23.value.play();
              }, 500);

              // changShun22.value.removeAnimate()
              // changShun23.value.play()
            } else if (data.showPageNum == 23) {
              data.showPageNum = 24;
              setTimeout(() => {
                changShun24.value.play();
              }, 500);
              setTimeout(() => {
                changShun23.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 24) {
              data.showPageNum = 25;
              setTimeout(() => {
                changShun25.value.play();
              }, 500);
              setTimeout(() => {
                changShun24.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 25) {
              data.showPageNum = 26;
              setTimeout(() => {
                changShun26.value.play();
              }, 500);
              setTimeout(() => {
                changShun25.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 26) {
              data.showPageNum = 27;
              setTimeout(() => {
                changShun27.value.play();
              }, 500);
              setTimeout(() => {
                changShun26.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 27) {
              data.showPageNum = 28;
              setTimeout(() => {
                changShun28.value.play();
              }, 500);
              setTimeout(() => {
                changShun27.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 28) {
              data.showPageNum = 29;
              setTimeout(() => {
                changShun29.value.play();
              }, 500);
              setTimeout(() => {
                changShun28.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 29) {
              data.showPageNum = 30;
              setTimeout(() => {
                changShun30.value.play();
              }, 500);
              setTimeout(() => {
                changShun29.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 30) {
              data.showPageNum = 31;
              setTimeout(() => {
                changShun31.value.play();
              }, 500);
              setTimeout(() => {
                changShun30.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 31) {
              data.showPageNum = 32;
              setTimeout(() => {
                changShun32.value.play();
              }, 500);
              setTimeout(() => {
                changShun31.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 32) {
              data.showPageNum = 33;
              setTimeout(() => {
                changShun33.value.play();
              }, 500);
              setTimeout(() => {
                changShun32.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 33) {
              data.showPageNum = 34;
              setTimeout(() => {
                changShun34.value.play();
              }, 500);
              setTimeout(() => {
                changShun33.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 34) {
              data.showPageNum = 35;
              setTimeout(() => {
                changShun35.value.play();
              }, 500);
              setTimeout(() => {
                changShun34.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 35) {
              data.showPageNum = 36;
              setTimeout(() => {
                changShun36.value.play();
              }, 500);
              setTimeout(() => {
                changShun35.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 36) {
              data.showPageNum = 37;
              setTimeout(() => {
                changShun37.value.play();
              }, 500);
              setTimeout(() => {
                changShun36.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 37) {
              data.showPageNum = 38;
              setTimeout(() => {
                changShun38.value.play();
              }, 500);
              setTimeout(() => {
                changShun37.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 38) {
              data.showPageNum = 39;
              setTimeout(() => {
                changShun39.value.play();
              }, 500);
              setTimeout(() => {
                changShun38.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 39) {
              data.showPageNum = 40;
              setTimeout(() => {
                changShun40.value.play();
              }, 500);
              setTimeout(() => {
                changShun39.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 40) {
              data.showPageNum = 41;
              setTimeout(() => {
                changShun41.value.play();
              }, 500);
              setTimeout(() => {
                changShun40.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 41) {
              data.showPageNum = 42;
              setTimeout(() => {
                changShun42.value.play();
              }, 500);
              setTimeout(() => {
                changShun41.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 42) {
              data.showPageNum = 43;
              setTimeout(() => {
                changShun43.value.play();
              }, 500);
              setTimeout(() => {
                changShun42.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 43) {
              data.showPageNum = 44;
              setTimeout(() => {
                changShun44.value.play();
              }, 500);
              setTimeout(() => {
                changShun43.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 44) {
              data.showPageNum = 45;
              setTimeout(() => {
                changShun45.value.play();
              }, 500);
              setTimeout(() => {
                changShun44.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 45) {
              data.showPageNum = 46;
              setTimeout(() => {
                changShun46.value.play();
              }, 500);
              setTimeout(() => {
                changShun45.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 46) {
              data.showPageNum = 47;
              setTimeout(() => {
                changShun47.value.play();
              }, 500);
              setTimeout(() => {
                changShun46.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 47) {
              data.showPageNum = 48;
              setTimeout(() => {
                changShun48.value.play();
              }, 500);
              setTimeout(() => {
                changShun47.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 48) {
              data.showPageNum = 49;
              setTimeout(() => {
                changShun49.value.play();
              }, 500);
              setTimeout(() => {
                changShun48.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 49) {
              data.showPageNum = 50;
              setTimeout(() => {
                changShun50.value.play();
              }, 500);
              setTimeout(() => {
                changShun49.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 50) {
              data.showPageNum = 51;
              setTimeout(() => {
                changShun51.value.play();
              }, 500);
              setTimeout(() => {
                changShun50.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 51) {
              data.showPageNum = 52;
              setTimeout(() => {
                changShun52.value.play();
              }, 500);
              setTimeout(() => {
                changShun51.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 52) {
              data.showPageNum = 53;
              setTimeout(() => {
                changShun53.value.play();
              }, 500);
              setTimeout(() => {
                changShun52.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 53) {
              data.showPageNum = 54;
              setTimeout(() => {
                changShun54.value.play();
              }, 500);
              setTimeout(() => {
                changShun53.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 54) {
              data.showPageNum = 55;
              setTimeout(() => {
                changShun55.value.play();
              }, 500);
              setTimeout(() => {
                changShun54.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 55) {
              data.showPageNum = 56;
              setTimeout(() => {
                changShun56.value.play();
              }, 500);
              setTimeout(() => {
                changShun55.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 56) {
              data.showPageNum = 57;
              setTimeout(() => {
                changShun57.value.play();
              }, 500);
              setTimeout(() => {
                changShun56.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 57) {
              data.showPageNum = 58;
              setTimeout(() => {
                changShun58.value.play();
              }, 500);
              setTimeout(() => {
                changShun57.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 58) {
              data.showPageNum = 59;
              setTimeout(() => {
                changShun59.value.play();
              }, 500);
              setTimeout(() => {
                changShun58.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 59) {
              data.showPageNum = 60;
              setTimeout(() => {
                changShun60.value.play();
              }, 500);
              setTimeout(() => {
                changShun59.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 60) {
              data.showPageNum = 61;
              setTimeout(() => {
                changShun61.value.play();
              }, 500);
              setTimeout(() => {
                changShun60.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 61) {
              data.showPageNum = 62;
              setTimeout(() => {
                changShun62.value.play();
              }, 500);
              setTimeout(() => {
                changShun61.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 62) {
              data.showPageNum = 63;
              setTimeout(() => {
                changShun63.value.play();
              }, 500);
              setTimeout(() => {
                changShun62.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 63) {
              data.showPageNum = 64;
              setTimeout(() => {
                changShun64.value.play();
              }, 500);
              setTimeout(() => {
                changShun63.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 64) {
              data.showPageNum = 65;
              setTimeout(() => {
                changShun65.value.play();
              }, 500);
              setTimeout(() => {
                changShun64.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 65) {
              data.showPageNum = 66;
              setTimeout(() => {
                changShun66.value.play();
              }, 500);
              setTimeout(() => {
                changShun65.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 66) {
              data.showPageNum = 67;
              setTimeout(() => {
                changShun67.value.play();
              }, 500);
              setTimeout(() => {
                changShun66.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 67) {
              data.showPageNum = 68;
              setTimeout(() => {
                changShun68.value.play();
              }, 500);
              setTimeout(() => {
                changShun67.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 68) {
              data.showPageNum = 69;
              setTimeout(() => {
                changShun69.value.play();
              }, 500);
              setTimeout(() => {
                changShun68.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 69) {
              data.showPageNum = 70;
              setTimeout(() => {
                changShun70.value.play();
              }, 500);
              setTimeout(() => {
                changShun69.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 70) {
              data.showPageNum = 71;
              setTimeout(() => {
                changShun71.value.play();
              }, 500);
              setTimeout(() => {
                changShun70.value.removeAnimate();
              }, 550);
            } else if (data.showPageNum == 71) {
              data.showPageNum = 72;
              setTimeout(() => {
                changShun72.value.play();
              }, 500);
              setTimeout(() => {
                changShun71.value.removeAnimate();
              }, 550);
            } else {
              data.showPageNum = data.showPageNum + 1;
            }
            // ['longPage'+(1 + 1)].value.play()

            // if (data.showPageNum == 41) {
            //   if (!data.isOpenShowTouchPage) {
            //     data.showPageNum = 42
            //     longPage42.value.play()
            //   }
            // } else if (data.showPageNum == 42) {
            //   if (!data.isOpenShowTouchPage) {
            //     data.showPageNum = 43
            //     longPage43.value.play()
            //   } else {
            //     longPage42.value.monitorTouchEvent(res)
            //   }
            // } else if (data.showPageNum == 43) {
            //   data.showPageNum = 44
            //   longPage44.value.play()
            // } else if (data.showPageNum == 44) {
            //   if (!data.isOpenShowTouchPage) {
            //   } else {
            //     longPage44.value.monitorTouchEvent(res)
            //   }
            // } else if (data.showPageNum == 5) {
            //   longPage5.value.monitorTouchEvent(res)
            // } else if (data.showPageNum == 7) {
            //   data.showPageNum = 1
            //   longPage1.value.play()
            //   // menuList.value.hide()
            //   setTimeout(() => { menuList.value.selectMenuItem('1-1', true) }, 500)
            // }
          }
          if (res.code == 2) {
            console.log("右滑");
            console.log("data.showPageNum", data.showPageNum);
            if (data.showPageNum == 0) return;
            if (data.showPageNum == 1) return;
            if (data.showPageNum == 26) return;
            if (data.showPageNum == 23) return;
            if (data.showPageNum == 29) return;
            if (data.showPageNum == 32) return;
            if (data.showPageNum == 35) return;
            if (data.showPageNum == 38) return;
            if (data.showPageNum == 41) return;
            if (data.showPageNum == 43) return;
            data.isRight = true;
            setTimeout(() => {
              data.isRight = false;
            }, 1000);
            if (data.showPageNum == 2) {
              data.showPageNum = 1;
              longPage1.value.play();
              longPage2.value.removeAnimate();
              setTimeout(() => {
                longPage1.value.showSonPage = false;
              }, 400);
              console.log("订单");
            } else if (data.showPageNum == 3) {
              data.showPageNum = 2;
              console.log("changShun233", longPage3);
              setTimeout(() => {
                longPage3.value.removeAnimate();
              }, 550);
              setTimeout(() => {
                longPage2.value.play();
              }, 500);
            } else if (data.showPageNum == 22) {
              data.showPageNum = 3;
              setTimeout(() => {
                changShun22.value.removeAnimate();
              }, 550);
              setTimeout(() => {
                longPage3.value.play();
              }, 500);
              // longPage3.value.play()
            } else if (data.showPageNum == 23) {
              data.showPageNum = 3;
              setTimeout(() => {
                changShun23.value.removeAnimate();
              }, 550);
              setTimeout(() => {
                longPage3.value.play();
              }, 500);
            } else if (data.showPageNum == 24) {
              data.showPageNum = 23;
              setTimeout(() => {
                changShun23.value.play();
              }, 500);
              setTimeout(() => {
                changShun24.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 25) {
              data.showPageNum = 24;
              setTimeout(() => {
                changShun24.value.play();
              }, 500);
              setTimeout(() => {
                changShun25.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 26) {
              data.showPageNum = 25;
              setTimeout(() => {
                changShun25.value.play();
              }, 500);
              setTimeout(() => {
                changShun26.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 27) {
              data.showPageNum = 26;
              setTimeout(() => {
                changShun26.value.play();
              }, 500);
              setTimeout(() => {
                changShun27.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 28) {
              data.showPageNum = 27;
              setTimeout(() => {
                changShun27.value.play();
              }, 500);
              setTimeout(() => {
                changShun28.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 29) {
              data.showPageNum = 28;
              setTimeout(() => {
                changShun28.value.play();
              }, 500);
              setTimeout(() => {
                changShun29.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 30) {
              data.showPageNum = 29;
              setTimeout(() => {
                changShun29.value.play();
              }, 500);
              setTimeout(() => {
                changShun30.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 31) {
              data.showPageNum = 30;
              setTimeout(() => {
                changShun30.value.play();
              }, 500);
              setTimeout(() => {
                changShun31.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 32) {
              data.showPageNum = 31;
              setTimeout(() => {
                changShun31.value.play();
              }, 500);
              setTimeout(() => {
                changShun32.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 33) {
              data.showPageNum = 32;
              setTimeout(() => {
                changShun32.value.play();
              }, 500);
              setTimeout(() => {
                changShun33.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 34) {
              data.showPageNum = 33;
              setTimeout(() => {
                changShun33.value.play();
              }, 500);
              setTimeout(() => {
                changShun34.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 35) {
              data.showPageNum = 34;
              setTimeout(() => {
                changShun34.value.play();
              }, 500);
              setTimeout(() => {
                changShun35.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 36) {
              data.showPageNum = 35;
              setTimeout(() => {
                changShun35.value.play();
              }, 500);
              setTimeout(() => {
                changShun36.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 37) {
              data.showPageNum = 36;
              setTimeout(() => {
                changShun36.value.play();
              }, 500);
              setTimeout(() => {
                changShun37.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 38) {
              data.showPageNum = 37;
              setTimeout(() => {
                changShun37.value.play();
              }, 500);
              setTimeout(() => {
                changShun38.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 39) {
              data.showPageNum = 38;
              setTimeout(() => {
                changShun38.value.play();
              }, 500);
              setTimeout(() => {
                changShun39.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 40) {
              data.showPageNum = 39;
              setTimeout(() => {
                changShun39.value.play();
              }, 500);
              setTimeout(() => {
                changShun40.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 41) {
              data.showPageNum = 40;
              setTimeout(() => {
                changShun40.value.play();
              }, 500);
              setTimeout(() => {
                changShun41.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 42) {
              data.showPageNum = 41;
              setTimeout(() => {
                changShun41.value.play();
              }, 500);
              setTimeout(() => {
                changShun42.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 43) {
              data.showPageNum = 42;
              setTimeout(() => {
                changShun42.value.play();
              }, 500);
              setTimeout(() => {
                changShun43.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 44) {
              data.showPageNum = 43;
              setTimeout(() => {
                changShun43.value.play();
              }, 500);
              setTimeout(() => {
                changShun44.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 45) {
              data.showPageNum = 44;
              setTimeout(() => {
                changShun44.value.play();
              }, 500);
              setTimeout(() => {
                changShun45.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 46) {
              data.showPageNum = 45;
              setTimeout(() => {
                changShun45.value.play();
              }, 500);
              setTimeout(() => {
                changShun46.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 47) {
              data.showPageNum = 46;
              setTimeout(() => {
                changShun46.value.play();
              }, 500);
              setTimeout(() => {
                changShun47.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 48) {
              data.showPageNum = 47;
              setTimeout(() => {
                changShun47.value.play();
              }, 500);
              setTimeout(() => {
                changShun48.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 49) {
              data.showPageNum = 48;
              setTimeout(() => {
                changShun48.value.play();
              }, 500);
              setTimeout(() => {
                changShun49.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 50) {
              data.showPageNum = 49;
              setTimeout(() => {
                changShun49.value.play();
              }, 500);
              setTimeout(() => {
                changShun50.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 51) {
              data.showPageNum = 50;
              setTimeout(() => {
                changShun50.value.play();
              }, 500);
              setTimeout(() => {
                changShun51.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 52) {
              data.showPageNum = 51;
              setTimeout(() => {
                changShun51.value.play();
              }, 500);
              setTimeout(() => {
                changShun52.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 53) {
              data.showPageNum = 52;
              setTimeout(() => {
                changShun52.value.play();
              }, 500);
              setTimeout(() => {
                changShun53.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 54) {
              data.showPageNum = 53;
              setTimeout(() => {
                changShun53.value.play();
              }, 500);
              setTimeout(() => {
                changShun54.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 55) {
              data.showPageNum = 54;
              setTimeout(() => {
                changShun54.value.play();
              }, 500);
              setTimeout(() => {
                changShun55.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 56) {
              data.showPageNum = 55;
              setTimeout(() => {
                changShun55.value.play();
              }, 500);
              setTimeout(() => {
                changShun56.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 57) {
              data.showPageNum = 56;
              setTimeout(() => {
                changShun56.value.play();
              }, 500);
              setTimeout(() => {
                changShun57.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 58) {
              data.showPageNum = 57;
              setTimeout(() => {
                changShun57.value.play();
              }, 500);
              setTimeout(() => {
                changShun58.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 59) {
              data.showPageNum = 58;
              setTimeout(() => {
                changShun58.value.play();
              }, 500);
              setTimeout(() => {
                changShun59.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 60) {
              data.showPageNum = 59;
              setTimeout(() => {
                changShun59.value.play();
              }, 500);
              setTimeout(() => {
                changShun60.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 61) {
              data.showPageNum = 60;
              setTimeout(() => {
                changShun60.value.play();
              }, 500);
              setTimeout(() => {
                changShun61.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 62) {
              data.showPageNum = 61;
              setTimeout(() => {
                changShun61.value.play();
              }, 500);
              setTimeout(() => {
                changShun62.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 63) {
              data.showPageNum = 62;
              setTimeout(() => {
                changShun62.value.play();
              }, 500);
              setTimeout(() => {
                changShun63.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 64) {
              data.showPageNum = 63;
              setTimeout(() => {
                changShun63.value.play();
              }, 500);
              setTimeout(() => {
                changShun64.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 65) {
              data.showPageNum = 64;
              setTimeout(() => {
                changShun64.value.play();
              }, 500);
              setTimeout(() => {
                changShun65.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 66) {
              data.showPageNum = 65;
              setTimeout(() => {
                changShun65.value.play();
              }, 500);
              setTimeout(() => {
                changShun66.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 67) {
              data.showPageNum = 66;
              setTimeout(() => {
                changShun66.value.play();
              }, 500);
              setTimeout(() => {
                changShun67.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 68) {
              data.showPageNum = 67;
              setTimeout(() => {
                changShun67.value.play();
              }, 500);
              setTimeout(() => {
                changShun68.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 69) {
              data.showPageNum = 68;
              setTimeout(() => {
                changShun68.value.play();
              }, 500);
              setTimeout(() => {
                changShun69.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 70) {
              data.showPageNum = 69;
              setTimeout(() => {
                changShun69.value.play();
              }, 500);
              setTimeout(() => {
                changShun70.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 71) {
              data.showPageNum = 70;
              setTimeout(() => {
                changShun70.value.play();
              }, 500);
              setTimeout(() => {
                changShun71.value.removeAnimate();
              }, 600);
            } else if (data.showPageNum == 72) {
              data.showPageNum = 71;
              setTimeout(() => {
                changShun71.value.play();
              }, 500);
              setTimeout(() => {
                changShun72.value.removeAnimate();
              }, 600);
            } else {
              data.showPageNum = data.showPageNum - 1;
            }
            // if (data.showPageNum == 41) {

            // } else if (data.showPageNum == 42) {
            //   if (data.isOpenShowTouchPage) {
            //     longPage42.value.monitorTouchEvent(res)
            //   } else {
            //     data.showPageNum = 41
            //     // data.showPageNum41 = 'opacity'
            //   }
            // } else if (data.showPageNum == 43) {
            //   data.showPageNum = 42
            //   // longPage43.value.play()
            // } else if (data.showPageNum == 44) {
            //   if (!data.isOpenShowTouchPage) {
            //     data.showPageNum = 43
            //   } else {
            //     longPage44.value.monitorTouchEvent(res)
            //   }
            // } else if (data.showPageNum == 5) {
            //   longPage5.value.monitorTouchEvent(res)
            // }
          }
          // if (res.code == 2 && data.showPageNum) data.showPageNum = false
          // if (data.showPageNum) longPage42.value.monitorTouchEvent(res)
          // if (res.code == 2 && data.showPageNum) longPage42.value.selectMenu(['back'])
        });
      },
      //左下角菜单点击回调
      selectMenu: (e) => {
        console.log("e", e);
        if (e == 1) {
          if (data.showPageNum == 2) return;
          // data.isLeft = true
          // setTimeout(()=>{data.isLeft = false},1000)
          data.showPageNum = 2;
          // setTimeout(()=>{changShun22.value.removeAnimate()},550)
          // setTimeout(()=>{changShun23.value.play()},500)
          setTimeout(() => {
            longPage2.value.play();
          }, 500);
          return;
        }
        if (e == 2) {
          if (data.showPageNum == 1) return;
          // data.isRight = true
          // setTimeout(()=>{data.isRight = false},1000)
          setTimeout(() => {
            changShun22.value.removeAnimate();
          }, 550);
          setTimeout(() => {
            longPage3.value.removeAnimate();
          }, 550);

          data.showPageNum = 1;
          setTimeout(() => {
            longPage1.value.play();
            longPage1.value.showSonPage = false;
          }, 500);
          return;
        }
        if (e[0] == "back") {
          data.canslice = true;
          if (data.showPageNum == 2) {
            for (let i = 0; i < 12; i++) {
              longPage2.value["showDefaultPage" + (i + 1)] = false;
              // longPage2.value['changShun1'+(i+1)].value.removeAnimate()
            }
            longPage2.value.play();
          }
          if (data.showPageNum == 1) {
            for (let i = 0; i < 25; i++) {
              longPage1.value["showDefaultPage" + (i + 1)] = false;
              // longPage2.value['changShun1'+(i+1)].value.removeAnimate()
            }
            longPage1.value.showTouchPage = false;
            longPage1.value.showSonPage = false;
            longPage1.value.play();
          }
          console.log("data.showPageNum", data.showPageNum);
          if (
            data.showPageNum == 44 ||
            data.showPageNum == 45 ||
            data.showPageNum == 46 ||
            data.showPageNum == 41 ||
            data.showPageNum == 42 ||
            data.showPageNum == 43 ||
            data.showPageNum == 26 ||
            data.showPageNum == 27 ||
            data.showPageNum == 28 ||
            data.showPageNum == 23 ||
            data.showPageNum == 24 ||
            data.showPageNum == 25 ||
            data.showPageNum == 29 ||
            data.showPageNum == 30 ||
            data.showPageNum == 31 ||
            data.showPageNum == 32 ||
            data.showPageNum == 33 ||
            data.showPageNum == 34 ||
            data.showPageNum == 35 ||
            data.showPageNum == 37 ||
            data.showPageNum == 37 ||
            data.showPageNum == 38 ||
            data.showPageNum == 39 ||
            data.showPageNum == 40
          ) {
            data.showPageNum = 1;
            console.log("dcjjk");
            longPage1.value.showTouchPage = false;
            longPage1.value.showSonPage = false;
            longPage1.value.play();
          }
          // longPage2.value.showDefaultPage1 = false
          menuList.value.isShowBackBtn = false;
          menuList.value.hide();
          menuList.value.play();
          return;
        }
        // console.log("e-data.showPageNum", e, data.showPageNum)
        let _curPage = [
            longPage2.value,
            longPage3.value,
            longPage41.value,
            longPage5.value,
            longPage6.value,
            longPage7.value,
          ][
            data.showPageNum < 5
              ? data.showPageNum - 2
              : parseInt((data.showPageNum + "").slice(0, 1)) - 2
          ],
          _showPageNum = null;
        if (e[0] == 1) {
          if (e[1] == 0 || e[1] == 1) {
            _showPageNum = 2;
            longPage2.value.play();
          } else if (e[1] == 2) {
            _showPageNum = 3;
            longPage3.value.play();
          } else if (e[1] == 3) {
            _showPageNum = 41;
            longPage41.value.play();
          }
        } else if (e[0] == 2) {
          _showPageNum = 5;
          longPage5.value.play();
        } else if (e[0] == 3) {
          if (e[1] == 0 || e[1] == 1) {
            _showPageNum = 6;
            longPage6.value.play();
          } else if (e[1] == 2) {
            _showPageNum = 7;
            longPage7.value.play();
          }
        }
        // console.log("data.showPageNum ", data.showPageNum, _showPageNum)
        if (
          (_showPageNum != data.showPageNum && data.showPageNum < 42) ||
          (data.showPageNum > 41 && _showPageNum < 40)
        ) {
          if (parseInt((data.showPageNum + "").slice(0, 1)) == 4) {
            data.showPageNum41 = "opacity";
            longPage42.value.removeAnimate();
            longPage43.value.removeAnimate();
            longPage44.value.removeAnimate();
          }
          data.showPageNum = _showPageNum;
          setTimeout(() => {
            _curPage.removeAnimate();
          }, 500);
        }
      },
      //显示隐藏左下角菜单按钮
      showMenuBtnList(status) {
        status ? menuList.value.play() : menuList.value.hide();
      },
      //回调--设置查看滑动页的详情页
      openShowTouchPage(status) {
        console.log("执行力", status);
        data.isOpenShowTouchPage = status;
      },
      //组件回调--点击弹出视频弹窗
      showVideoPopup(status) {
        data.isShowVideoPopup = status;
        // menuList.value.switchMenuBackBtn(true)
      },
      changedMenu(a) {
        menuList.value.isShowBackBtn = true;
        menuList.value.hide();
        if (data.showPageNum == 2) {
          longPage2.value.removeAnimate();
        }
        if (data.showPageNum == 1) {
          if (!a) {
            setTimeout(() => {
              longPage1.value.removeAnimate();
            }, 500);
          }
          console.log("a", a);
          if (a == 25) {
            data.showPageNum = 26;
            setTimeout(() => {
              changShun26.value.play();
              data.canslice = true;
            }, 500);
            setTimeout(() => {
              longPage1.value.removeAnimate();
            }, 600);
          }
          if (a == 26) {
            data.showPageNum = 23;
            setTimeout(() => {
              changShun23.value.play();
              data.canslice = true;
            }, 500);
            setTimeout(() => {
              longPage1.value.removeAnimate();
            }, 600);
          }
          if (a == 27) {
            data.showPageNum = 29;
            setTimeout(() => {
              changShun29.value.play();
              data.canslice = true;
            }, 500);
            setTimeout(() => {
              longPage1.value.removeAnimate();
            }, 600);
          }
          if (a == 28) {
            data.showPageNum = 32;
            setTimeout(() => {
              changShun32.value.play();
              data.canslice = true;
            }, 500);
            setTimeout(() => {
              longPage1.value.removeAnimate();
            }, 600);
          }
          if (a == 29) {
            data.showPageNum = 35;
            setTimeout(() => {
              changShun35.value.play();
              data.canslice = true;
            }, 500);
            setTimeout(() => {
              longPage1.value.removeAnimate();
            }, 600);
          }
          if (a == 30) {
            data.showPageNum = 38;
            setTimeout(() => {
              changShun38.value.play();
              data.canslice = true;
            }, 500);
            setTimeout(() => {
              longPage1.value.removeAnimate();
            }, 600);
          }
          if (a == 31) {
            data.showPageNum = 41;
            setTimeout(() => {
              changShun41.value.play();
              data.canslice = true;
            }, 500);
            setTimeout(() => {
              longPage1.value.removeAnimate();
            }, 600);
          }
          if (a == 32) {
            data.showPageNum = 44;
            setTimeout(() => {
              changShun44.value.play();
              data.canslice = true;
            }, 500);
            setTimeout(() => {
              longPage1.value.removeAnimate();
            }, 600);
          }
        }
        data.canslice = false;
      },
      canclice() {
        console.log("zzh执行");
        data.canslice = true;
      },
    });
    //watch监听
    watch(
      [() => data.isOpenShowTouchPage, () => data.isShowVideoPopup],
      (
        [newOpenShowTouchPage, newShowVideoPopup],
        [oldOpenShowTouchPage, oldShowVideoPopup]
      ) => {
        // console.log("newOpenShowTouchPage, newShowVideoPopup", newOpenShowTouchPage, newShowVideoPopup)
        if ([newOpenShowTouchPage, newShowVideoPopup].some((item) => item))
          methods.showMenuBtnList(false);
        if ([newOpenShowTouchPage, newShowVideoPopup].every((item) => !item))
          methods.showMenuBtnList(true);
      }
    );

    console.log("methods", menuList);
    setTimeout(() => {
      menuList.value.play();
      // longPage1.value.play()
      // ['changShun'+bb].value.play()
    }, 500);
    // methods.showMenuBtnList(true)
    return {
      menuList,
      longPage1,
      longPage2,
      longPage3,
      longPage41,
      longPage42,
      longPage43,
      longPage44,
      longPage5,
      longPage6,
      longPage7,

      changShun22,
      changShun23,
      changShun24,
      changShun25,
      changShun26,
      changShun27,
      changShun28,
      changShun29,
      changShun30,
      changShun31,
      changShun32,
      changShun33,
      changShun34,
      changShun35,
      changShun36,
      changShun37,
      changShun38,
      changShun39,
      changShun40,
      changShun41,
      changShun42,
      changShun43,
      changShun44,
      changShun45,
      changShun46,
      changShun47,
      changShun48,
      changShun49,
      changShun50,
      changShun51,
      changShun52,
      changShun53,
      changShun54,
      changShun55,
      changShun56,
      changShun57,
      changShun58,
      changShun59,
      changShun60,
      changShun61,
      changShun62,
      changShun63,
      changShun64,
      changShun65,
      changShun66,
      changShun67,
      changShun68,
      changShun69,
      changShun70,
      ...toRefs(data),
      ...toRefs(methods),
    };
  },
};
</script>

<style>
  /* body{background:linear-gradient(135deg,#0A1F3F 0%, #0E2F5B 135%);} */
  /* #app{background: #0E2F5B url('../assets/images/original/pages_bg.png');background-size: cover;} */
  #app{background:  url('../assets/images/changshun/bg2.png') #EAC883;background-size: cover;overflow: hidden;}
  /* .page,.video-popup,.page41{background: #0E2F5B url('../assets/images/original/pages_bg.png');background-size: cover;} */
  .page .con{margin-top: -60px;}
  [class *= leave-active]{transition: all .5s;}
  .zhuyi{position: fixed;width: 2076px;height: 18px;bottom: 78px ;left: 582px;z-index: 8;}
  @keyframes toleft {
    0%{
      transform: translateX(0);
    }
    100%{
      transform: translateX(-100vw);
    }
  }
  .toleft{
    animation: toleft 1s forwards;
  }
  @keyframes toright {
    0%{
      transform: translateX(0);
    }
    100%{
      transform: translateX(100vw);
    }
  }
  .toright{
    animation: toright 1s forwards;
  }
</style>