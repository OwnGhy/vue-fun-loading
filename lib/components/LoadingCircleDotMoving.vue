<template>
  <div :class="`fun-loading-circle-dot-moving fun-loading-circle-dot-moving-${this.size}`" >
    <div v-for="i in 4" :key="i"><span :style="loadingStyle" /></div>
  </div>
</template>
<script>
export default {
  name: 'fun-loading-circle-dot-moving',
  props: {
    color: {
      type: String,
      default: '#ff69b4'
    },
    size: {
      type: String,
      default: 'middle',
      elem: ['small', 'middle', 'large']
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

  @loading-class: @{fun-loading-prefix}-circle-dot-moving;

  .@{loading-class} {
    display: inline-block;
    position: relative;

    .dot-moving(@boxSize, @dotSize) {
      width: @boxSize;
      height: @boxSize;
      > div {
        > span {
          width: @dotSize;
          height: @dotSize;
          margin-left: @dotSize / 2;
        }
      }
    }

    &.@{loading-class}-small {
      .dot-moving(@small, 4px);
    }
    &.@{loading-class}-middle {
      .dot-moving(@middle, 6px);
    }
    &.@{loading-class}-large {
      .dot-moving(@large, 8px);
    }

    > div{
      width: 100%;
      height: 100%;
      position: absolute;
      animation: load_circle_dot_moving 1.58s ease-out infinite;
      &:nth-child(2){
        -webkit-animation-delay:0.2s;
      }
      &:nth-child(3){
        -webkit-animation-delay:0.4s;
      }
      &:nth-child(4){
        -webkit-animation-delay:0.6s;
      }
      > span{
        display: inline-block;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        background: @fun-loading-color;
      }
    }
    @keyframes load_circle_dot_moving {
      0%{
        -webkit-transform: rotate(0deg);
      }
      10%{
        -webkit-transform: rotate(45deg);
      }
      50%{
        opacity: 1;
        -webkit-transform: rotate(160deg);
      }
      62%{
        opacity: 0;
      }
      65%{
        opacity: 0;
        -webkit-transform: rotate(200deg);
      }
      90%{
        -webkit-transform: rotate(340deg);
      }
      100%{
        -webkit-transform: rotate(360deg);
      }
    }
  }
</style>
