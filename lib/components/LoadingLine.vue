<template>
  <div :class="`fun-loading-line fun-loading-line-${size}`" :style="loadingStyle">
    <span v-for="item in [1, 2, 3, 4, 5]" :key="item"></span>
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
          // backgroundColor: this.color
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
  }
</style>
