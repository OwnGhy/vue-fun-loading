<template>
  <div :class="`fun-loading-circle-half fun-loading-circle-half-${size}`" :style="loadingStyle"></div>
</template>
<script>
  export default {
    name: 'FunLoadingCircleHalf',
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

  @loading-class: @{fun-loading-prefix}-circle-half;

  .@{loading-class} {
    border-radius: 50%;
    border-color: @fun-loading-color @fun-loading-color transparent transparent;
    border-style: solid;
    animation: load_half_rorate .6s infinite;

    &.@{loading-class}-small {
      width: 14px;
      height: 14px;
      border-width: 3px;
    }

    &.@{loading-class}-middle {
      width: 28px;
      height: 28px;
      border-width: 4px;
    }

    &.@{loading-class}-large {
      width: 40px;
      height: 40px;
      border-width: 5px;
    }

    @keyframes load_half_rorate {
      100% {
        transform: rotate(360deg);
      }
    }
  }
</style>
