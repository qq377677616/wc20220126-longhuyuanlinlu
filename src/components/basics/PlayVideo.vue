<template>
  <div class="video-popup pof flex-cen">
    <div class="video-box">
      <!-- <video ref="video" src="http://www.mobileh5.com/video/CG2.mp4" controls></video> -->
      <video v-if="show == 1" ref="video" src="../../assets/video/01.mp4" controls></video>
      <video v-if="show == 2" ref="video" src="../../assets/video/02.mp4" controls></video>
      <video v-if="show == 3" ref="video" src="../../assets/video/03.mp4" controls></video>

      <!-- <video v-if="show == 1" ref="video" src="https://img.vrupup.com/web/psy/changshun/video/01.mp4" controls></video>
      <video v-if="show == 2" ref="video" src="https://img.vrupup.com/web/psy/changshun/video/02.mp4" controls></video>
      <video v-if="show == 3" ref="video" src="https://img.vrupup.com/web/psy/changshun/video/03.mp4" controls></video> -->
    </div>
    <!-- 左下角菜单栏部分 -->
    <transition name="bottom-top2">
      <MenuList v-show="isShowMenu" ref="menuList" @selectMenu="selectMenu"></MenuList>
    </transition>
  </div>
</template>
<script>
import { reactive, toRefs, ref, onMounted, provide, inject } from 'vue'
export default {
  name: 'indexName',
  props:['videoSrc','show'],
  setup(props, { emit }) {
    const video = ref(null), videoSrc = inject("videoSrc")
    provide("isShowBackBtn", true)
    onMounted(() => {
      console.log("撒旦撒旦撒",props);
      data.videoSrc = props.videoSrc
      data.show = props.show
    })
    //页面数据
    const data = reactive({
      videoSrc: '',//视频地址
      isShowMenu: false,//展示菜单栏
      menuActiveNum: '1-1',//菜单选中
      show:1
    })
    //事件方法
    const methods = reactive({
      //播放视频
      videoPlay: () => {
        video.value.play()
        setTimeout(() => { data.isShowMenu = true }, 500)
      },
      //左下角菜单点击回调
      selectMenu:(e) => {
        //console.log("e", e)
        if (e[0] == 'back') {
          setTimeout(() => { data.isShowMenu = false }, 200)
          video.value.pause()
          emit('videoPlayBack')
        } 
      },
    })
    return {
      video,
      ...toRefs(data),
      ...toRefs(methods),
    }
  }
}
</script>

<style scoped>
  .video-popup{z-index: 900;margin-top: 0;}
  .video-popup .video-box{width:2414px;height: 1357px;background: #000;object-fit: cover;}
  .video-popup video{width: 100%;height: 100%;}
</style>