<template>
  <span :class="`fun-loading-circle-dot fun-loading-circle-dot-${this.size}`">
    <span v-for="i in 8" :key="i" :style="loadingStyle"></span>
  </span>
</template>
<script>
export default {
  name: 'fun-loading-circle-dot',
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
        backgroundColor: this.color
      }
    }
  }
}
</script>
<style lang="less">
  @import "./style/_variables.less";

  @loading-class: @{fun-loading-prefix}-circle-dot;

  .@{loading-class} {
    display: inline-block;
    position: relative;

    // 定义不同size的dot的样式
    .dot(@boxSize, @boxSizeRadius, @dotSize, @dotSizeRadius) {
      width: @boxSize;
      height: @boxSize;

      @computedLen: (@boxSizeRadius * sqrt(2) - @boxSizeRadius + @dotSizeRadius) * sqrt(2) / 2;
      @delayUnit: 0.13s;

      > span {
        width: @dotSize;
        height: @dotSize;
        &:nth-child(1){
          left: @boxSizeRadius - @dotSizeRadius;
          top: 0;
          -webkit-animation-delay: @delayUnit;
        }
        &:nth-child(2){
          left: @boxSize - (@computedLen + @dotSizeRadius);
          top: @computedLen - @dotSizeRadius;
          -webkit-animation-delay: @delayUnit * 2;
        }
        &:nth-child(3){
          left: @boxSize - @dotSize;
          top: @boxSizeRadius - @dotSizeRadius;
          -webkit-animation-delay: @delayUnit * 3;
        }
        &:nth-child(4){
          left: @boxSize - (@computedLen + @dotSizeRadius);
          top: @boxSize - (@computedLen + @dotSizeRadius);
          -webkit-animation-delay: @delayUnit * 4;
        }
        &:nth-child(5){
          left: @boxSizeRadius - @dotSizeRadius;
          top: @boxSize - @dotSize;
          -webkit-animation-delay: @delayUnit * 5;
        }
        &:nth-child(6){
          left: @computedLen - @dotSizeRadius;
          top: @boxSize - (@computedLen + @dotSizeRadius);
          -webkit-animation-delay: @delayUnit * 6;
        }
        &:nth-child(7){
          top: @boxSizeRadius - @dotSizeRadius;
          left: 0;
          -webkit-animation-delay: @delayUnit * 7;
        }
        &:nth-child(8){
          left: @computedLen - @dotSizeRadius;
          top: @computedLen - @dotSizeRadius;
          -webkit-animation-delay: @delayUnit * 8;
        }
      }
    }

    &.@{loading-class}-small {
      .dot(@small, @small / 2, 4px, 2px);
    }
    &.@{loading-class}-middle {
      .dot(@middle, @middle / 2, 6px, 3px);
    }
    &.@{loading-class}-large {
      .dot(@large, @large / 2, 8px, 4px);
    }
    > span{
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: @fun-loading-color;
      position: absolute;
      -webkit-animation: load_circle_dot 1.04s ease infinite;
    }
    @-webkit-keyframes load_circle_dot{
      0%{
        -webkit-transform: scale(1.2);
        opacity: 1;
      }
      100%{
        -webkit-transform: scale(.3);
        opacity: .5;
      }
    }
  }
</style>
