<template>
  <div :class="`fun-loading-dot-square fun-loading-dot-square-${size}`">
    <span v-for="item in [1, 2, 3, 4, 5]" :key="item" :style="loadingStyle"></span>
  </div>
</template>
<script>
  export default {
    name: 'FunLoadingDotSquare',
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

  @loading-class: @{fun-loading-prefix}-dot-square;

  .@{loading-class} {
    > span {
      display: inline-block;
      background: @fun-loading-color;
      animation: dot_square 1.04s ease infinite;
      transform-origin: right bottom;

      &:nth-child(1) {
        animation-delay: .13s;
      }
      &:nth-child(2) {
        animation-delay: .26s;
      }
      &:nth-child(3) {
        animation-delay: .39s;
      }
      &:nth-child(4) {
        animation-delay: .52s;
      }
      &:nth-child(5) {
        animation-delay: .65s;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    &.@{loading-class}-small {
      > span {
        width: 6px;
        height: 6px;
        margin-right: 3px;
      }
    }

    &.@{loading-class}-middle {
      > span {
        width: 8px;
        height: 8px;
        margin-right: 4px;
      }
    }

    &.@{loading-class}-large {
      > span {
        width: 10px;
        height: 10px;
        margin-right: 5px;
      }
    }


    @keyframes dot_square {
      0%{
        opacity: 1;
        transform: rotate(0);
      }
      100%{
        opacity: 0;
        transform: rotate(90deg);
      }
    }
  }
</style>
