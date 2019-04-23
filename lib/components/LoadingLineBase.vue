<template>
  <div :class="`fun-loading-line-base fun-loading-line-base-${size}`" :style="loadingStyle">
    <span v-for="item in [1, 2, 3, 4, 5]" :key="item"></span>
  </div>
</template>
<script>
  export default {
    name: 'FunLoadingLineBase',
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
      loadingStyle() {
        return {
          // backgroundColor: this.color
        };
      }
    }
  }
</script>
<style lang="less">
  @import "./style/_variables.less";

  @loading-class: @{fun-loading-prefix}-line-base;

  .@{loading-class} {
    > span {
      display: inline-block;
      background: @fun-loading-color;
      transform-origin: 0 100%;
      animation: line_scale 1s ease infinite;

      &:nth-child(2){
        -webkit-animation-delay:0.2s;
      }
      &:nth-child(3){
        -webkit-animation-delay:0.4s;
      }
      &:nth-child(4){
        -webkit-animation-delay:0.6s;
      }
      &:nth-child(5){
        -webkit-animation-delay:0.8s;
      }
      &:last-child {
        margin-right: 0;
      }
    }

    &.@{loading-class}-small {
      > span {
        display: inline-block;
        width: 4px;
        height: 20px;
        border-radius: 2px;
        margin-right: 2px;
      }
    }
    &.@{loading-class}-middle {
      > span {
        width: 6px;
        height: 22px;
        border-radius: 3px;
      }
    }
    &.@{loading-class}-large {
      > span {
        width: 8px;
        height: 24px;
        border-radius: 4px;
      }
    }

    @keyframes line_scale {
      0%,100%{
        transform: scaleY(1);
        background: @fun-loading-color;
      }
      50%{
        transform: scaleY(1.5);
        background: @fun-loading-light-color;
      }
    }
  }
</style>
