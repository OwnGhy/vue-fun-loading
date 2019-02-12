<template>
  <span :class="`fun-loading-circle fun-loading-circle-${this.size}`" :style="loadingStyle"></span>
</template>

<script>
import { LightenDarkenColor } from './../utils'
export default {
  name: 'fun-loading-circle-quarter',
  props: {
    size: {
      type: String,
      default: 'middle',
      elem: ['small', 'middle', 'large']
    },
    color: {
      type: String,
      default: '#ff69b4'
    }
  },
  computed: {
    loadingStyle () {
      return {
        borderColor: `${LightenDarkenColor(this.color, 30)}`,
        borderRightColor: `${this.color}`
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import "./style/_variables.less";
  @loading-class: @{fun-loading-prefix}-circle;

  .@{loading-class} {
    display: inline-block;
    background: transparent;
    border-radius: 50%;
    border: 5px solid @fun-loading-light-color;
    border-right-color: @fun-loading-color;
    animation: load_circle 1s infinite;
  }

  // 定义不同size的quarter样式
  .quarter(@size, @border) {
    height: @size - @border * 2;
    width: @size - @border * 2;
    border-width: @border;
  }
  .@{loading-class}-small {
    .quarter(@small, 4px);
  }
  .@{loading-class}-middle {
    .quarter(@middle, 5px);
  }
  .@{loading-class}-large {
    .quarter(@large, 6px);
  }
  @keyframes load_circle {
    100% {
      transform: rotateZ(360deg);
    }
  }
</style>
