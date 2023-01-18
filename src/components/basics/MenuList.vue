<template>
  <div class="menu" :class="{ isHideIng: !isShowMenuBtn && !isShowBackBtn }">
    <!-- <transition name="opacity"> -->
    <div class="flex" v-show="!isShowBackBtn">
      <div class="menu-li">
        <!-- <transition name="left-right3">
            <div class="item" v-show="isShowMenuBtn && menuActiveNum.split('-')[0] == 1" :class="{'on': menuActiveNum.split('-')[0] == 1 && menuActiveNum.split('-')[1] == 3}" @click="selectMenuItem('1-3')">
              <img src="../../assets/images/changshun/page_btn_01.png" alt="" />
              <img src="../../assets/images/original/page2_btn_01s.png" alt="" />
            </div>
          </transition>
          <transition name="left-right3">
            <div class="item" v-show="isShowMenuBtn && menuActiveNum.split('-')[0] == 1" :class="{'on': menuActiveNum.split('-')[0] == 1 && menuActiveNum.split('-')[1] == 2}" @click="selectMenuItem('1-2')">
              <img src="../../assets/images/changshun/page_btn_02.png" alt="" />
              <img src="../../assets/images/original/page2_btn_02s.png" alt="" />
            </div>
          </transition> -->
        <transition name="left-right3">
          <div
            class="item"
            v-show="isShowMenuBtn"
            :class="{
              on:
                menuActiveNum.split('-')[0] == 1 &&
                menuActiveNum.split('-')[1] == 1,
            }"
            @click="selectMenuItem('1')"
          >
            <!-- <img src="../../assets/images/changshun/page_btn_04s.png" alt="" v-if="showPageNum>0&&showPageNum<23" /> -->
            <img
              src="../../assets/images/changshun/page_btn_04s.png"
              alt=""
              v-if="showPageNum == 2 || showPageNum == 3 || showPageNum == 22"
            />
            <img
              src="../../assets/images/changshun/page2_btn_04.png"
              alt=""
              v-if="showPageNum == 1"
            />
          </div>
        </transition>
        <transition name="bottom-top3" v-show="isShowMenuBtn">
          <div
            class="item"
            :class="{ on: menuActiveNum.split('-')[0] == 1 }"
            @click="selectMenuItem('2')"
          >
            <!-- <img src="../../assets/images/changshun/page2_btn_03.png" alt="" v-if="showPageNum>0&&showPageNum<23" /> -->
            <!-- <img src="../../assets/images/changshun/page_btn_03s.png" alt="" v-if="showPageNum>=23" /> -->
            <img
              src="../../assets/images/changshun/page_btn_03s.png"
              alt=""
              v-if="showPageNum == 1"
            />
            <img
              src="../../assets/images/changshun/page2_btn_03.png"
              alt=""
              v-if="showPageNum == 2 || showPageNum == 3 || showPageNum == 22"
            />
          </div>
        </transition>
      </div>
      <!-- <div class="menu-li">
          <transition name="bottom-top3" v-show="isShowMenuBtn">
            <div class="item" :class="{'on': menuActiveNum.split('-')[0] == 2}" @click="selectMenuItem('2-0')">
              <img src="../../assets/images/original/page2_btn_05.png" alt="" />
              <img src="../../assets/images/original/page2_btn_05s.png" alt="" />
            </div>
          </transition>
        </div> -->
      <!-- <div class="menu-li">
          <div class="item" :class="{'on': menuActiveNum.split('-')[0] == 3}" @click="selectMenuItem('3-0')">
            <img src="../../assets/images/original/page2_btn_05.png" alt="" />
            <img src="../../assets/images/original/page2_btn_05s.png" alt="" />
          </div>
        </div> -->
      <!-- <div class="menu-li">
          <transition name="left-right3">
            <div class="item" v-show="isShowMenuBtn && menuActiveNum.split('-')[0] == 3" :class="{'on': menuActiveNum.split('-')[0] == 3 && menuActiveNum.split('-')[1] == 2}" @click="selectMenuItem('3-2')">
              <img src="../../assets/images/original/page2_btn_08.png" alt="" />
              <img src="../../assets/images/original/page2_btn_08s.png" alt="" />
            </div>
          </transition>
          <transition name="left-right3">
            <div class="item" v-show="isShowMenuBtn && menuActiveNum.split('-')[0] == 3" :class="{'on': menuActiveNum.split('-')[0] == 3 && menuActiveNum.split('-')[1] == 1}" @click="selectMenuItem('3-1')">
              <img src="../../assets/images/original/page2_btn_07.png" alt="" />
              <img src="../../assets/images/original/page2_btn_07s.png" alt="" />
            </div>
          </transition>
          <transition name="bottom-top3" v-show="isShowMenuBtn">
            <div class="item" :class="{'on': menuActiveNum.split('-')[0] == 3}" @click="selectMenuItem('3-1')">
              <img src="../../assets/images/original/page2_btn_06.png" alt="" />
              <img src="../../assets/images/original/page2_btn_06s.png" alt="" />
            </div>
          </transition>
        </div> -->
    </div>
    <!-- </transition> -->
    <transition name="opacity">
      <div class="menu-li" v-show="isShowBackBtn">
        <div class="item on" @click="pageBack">
          <img src="../../assets/images/changshun/back.png" alt="" />
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { reactive, toRefs, onMounted, inject } from "vue";
export default {
  name: "indexName",
  props: ["showPageNum"],
  setup(props, { emit }) {
    console.log("参数是啥", props.showPageNum);
    console.log("参数是啥", props);
    const isShowBackBtn = inject("isShowBackBtn");
    onMounted(() => {
      data.isShowBackBtn = isShowBackBtn;
    });
    //页面数据
    const data = reactive({
      menuActiveNum: "1-1", //菜单选中
      isShowMenuBtn: false, //是否显示按钮
      isShowBackBtn: false, //当前是否显示返回按钮
      showPageNum: props.showPageNum,
    });
    //事件方法
    const methods = reactive({
      //显示菜单按钮
      play() {
        // data.isShowMenuBtn = true
        setTimeout(() => {
          data.isShowMenuBtn = true;
        }, 500);
      },
      //隐藏菜单按钮
      hide() {
        setTimeout(() => {
          data.isShowMenuBtn = false;
        }, 0);
      },
      //点击菜单按钮
      selectMenuItem(currentOrder, isChange) {
        console.log("currentOrder", currentOrder);
        emit("selectMenu", currentOrder);
        // data.menuActiveNum = currentOrder
        // if (!isChange) emit('selectMenu', currentOrder.split("-"))
      },
      //点击返回按钮
      pageBack() {
        // emit('selectMenu')
        emit("selectMenu", ["back"]);
      },
      //切换显示菜单和返回按钮
      switchMenuBackBtn(e) {
        data.isShowBackBtn = e;
      },
    });
    return {
      ...toRefs(data),
      ...toRefs(methods),
    };
  },
};
</script>

<style scoped>
  .menu{position: fixed;left:65px;bottom:52px;z-index: 1000;}
  .menu .menu-li{align-items: flex-end;display: flex;flex-wrap: wrap;width: 275px;}
  .menu .menu-li:not(:last-child){margin-right:25px;}
  .menu .item{margin-top: 7px;}
  .menu .item img:last-child,.menu .item.on img:first-child{display: none;}
  .menu .item.on img:last-child{display: block;}

  /* .menu-li:nth-child(1) .item:nth-child(1){} */
  .menu-li:nth-child(2) .item:last-child{transition-delay: .2s;}
  .menu-li:nth-child(3) .item:last-child{transition-delay: .3s;}
  .menu-li:nth-child(1) .item:nth-last-child(2),.menu-li:nth-child(3) .item:nth-last-child(2){transition-delay: .4s;}
  .menu-li:nth-child(1) .item:nth-last-child(3),.menu-li:nth-child(3) .item:nth-last-child(3){transition-delay: .5s;}
  .menu-li:nth-child(1) .item:nth-last-child(4),.menu-li:nth-child(3) .item:nth-last-child(4){transition-delay: .6s;}
  .menu.isHideIng .item{transition-delay: 0s !important;}
</style>