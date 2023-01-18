<template>
  <div>
    <!-- 99999 -->
    <!-- h5跳转小程序 -->
    <div class="wx-open-box open-weapp" v-if="btnType == 1">
      <wx-open-launch-weapp
        id="launch-btn"
        :username="wxButtonInfo.username"
        :path="wxButtonInfo.path"
      >
        <script type="text/wxtag-template">
          <style>.btn{ width:3000px;height:3000px;opacity:0;background:red;-webkit-tap-highlight-color:transparent;}</style>
          <button class="btn">跳转小程序</button>
        </script>
      </wx-open-launch-weapp>
    </div>
   <!-- h5跳转App -->
    <div class="wx-open-box open-app" v-if="btnType == 2">
      <wx-open-launch-app id="launch-btn-app" :appid="wxButtonInfoWeapp.appid" :extinfo="wxButtonInfoWeapp.extinfo">
        <script type="text/wxtag-template">
          <style>.btn{ width:3000px;height:3000px;opacity:0;background:red;-webkit-tap-highlight-color:transparent;}</style>
          <button class="btn">跳转App</button>
        </script>
      </wx-open-launch-app>
    </div>
    <!-- h5订阅消息 -->
    <div class="wx-open-box open-subscribe" v-if="btnType == 3">
      <wx-open-subscribe :template="wxButtonInfo.template" id="subscribe-btn">
        <script type="text/wxtag-template" slot="style">
          <style>.btn{ width:3000px;height:3000px;opacity:0;background:red;-webkit-tap-highlight-color:transparent;}</style>
        </script>
        <script type="text/wxtag-template">
          <button class="btn">订阅消息</button>
        </script>
      </wx-open-subscribe>
    </div>
    <!-- h5浮窗音频 --> 
    <div class="wx-open-box open-audio" v-if="btnType == 4">
      <!-- 8888 -->
      <wx-open-audio
        id="audio"
        :title="wxButtonInfo.title"
        :singer="wxButtonInfo.singer"
        :episode="wxButtonInfo.episode"
        :src="wxButtonInfo.src"
        :cover="wxButtonInfo.cover"
      ></wx-open-audio>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  props: {
    //开放标签类型，1为跳转小程序、2为跳转app、3为订阅消息、4为浮窗音频
    btnType: {
      type: [String, Number],
      default: 1,
    },
    //开放标签信息
    wxButtonInfo: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.wx-open-box {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
}
</style>