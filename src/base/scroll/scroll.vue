<template>
  <div class="better-scroll" ref="betterScroll">
    <div><slot></slot></div>
    <!-- <slot></slot> -->
  </div>
</template>

<script type="text/ecmascript-6">
import BetterScroll  from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
BetterScroll.use(Pullup)
import { watch, toRefs, ref, onMounted } from 'vue'

export default {
  name: "scrollName",
  props: {
    // 列表数据
    list: {
      type: Array,
      default: () => []
    },
    // 刷新时间
    refreshDelay: {
      type: Number,
      default: 100
    },
    // X轴滚动开关
    scrollX: {
      type: Boolean,
      default: true,
    },
    // Y轴滚动开关
    scrollY: {
      type: Boolean,
      default: true,
    }
  },
  setup(props, { emit }) {
    const { refreshDelay, scrollX, scrollY  } = toRefs(props)
    const betterScroll = ref(null)
    let scroll;
    // 初始化BetterScroll
    const initBetterScroll = () => {
      scroll = new BetterScroll(betterScroll.value, {
        scrollX,//横向滚动开关
        scrollY,//竖向滚动开关
        HWCompositing: true, //是否启用硬件加速
        useTransition: true,//是否使用 CSS3 transition 动画。如果设置为 false，则使用 requestAnimationFrame 做动画。
        pullUpLoad: true,//开启上拉加载
      })
      
      // 当底部下拉距离超过阈值
      scroll.on('pullingUp', () => {
        emit('pullup')
      })
    }
    // 刷新滚动
    const refresh = () => {
      scroll.refresh() 
    }

    onMounted(() => {
      initBetterScroll()
    })

    watch(() => props.list, () => {
      setTimeout(() => {
        refresh()
      }, refreshDelay)
    }, { deep: true })
    
    return {
      refresh,
      betterScroll
    }
  }
} 
</script>

<style scoped>
  /* .b-scroll{overflow:hidden;} */
</style>
