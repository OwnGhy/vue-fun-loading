<template>
  <div :class="`fun-loading-line fun-loading-line-${size}`">
    <span v-for="item in [1, 2, 3, 4, 5]" :key="item" :style="loadingStyle"></span>
  </div>
</template>
<script>
  export default {
    name: 'FunLoadingLine',
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
          backgroundColor: this.color
        };
      }
    }
  }
</script>
<style lang="less">
  @import "./style/_variables.less";

  @loading-class: @{fun-loading-prefix}-line;

  .@{loading-class} {
    > span {
      display: inline-block;
      background: @fun-loading-color;
      margin-right: 2px;
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
        width: 4px;
        height: 20px;
        border-radius: 2px;
      }
    }
    &.@{loading-class}-middle {
      > span {
        width: 5px;
        height: 24px;
        border-radius: 2.5px;
      }
    }
    &.@{loading-class}-large {
      > span {
        width: 6px;
        height: 28px;
        border-radius: 3px;
      }
    }

    @keyframes line_scale {
      0%,100%{
        transform: scaleY(1);
      }
      50%{
        transform: scaleY(1.6);
        filter: opacity(35%);
      }
    }
  }
</style>
