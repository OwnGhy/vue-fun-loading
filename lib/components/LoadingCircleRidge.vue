<template>
  <div :class="`fun-loading-circle-ridge fun-loading-circle-ridge-${size}`" :style="loadingStyle"></div>
</template>
<script>
  export default {
    name: 'FunLoadingCircleRidge',
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

  @loading-class: @{fun-loading-prefix}-circle-ridge;

  .@{loading-class} {
    width: 0;
    height: 0;
    border-radius: 50%;
    border-style: ridge;
    border-color: @fun-loading-color @fun-loading-light-color;
    animation: rotate_ridge 1.5s infinite;

    &.@{loading-class}-small {
      border-width: 10px;
    }

    &.@{loading-class}-middle {
      border-width: 18px;
    }

    &.@{loading-class}-large {
      border-width: 25px;
    }

    @keyframes rotate_ridge {
      50%{
        transform:rotate(180deg) scale(1.3);
      }
      100%{
        transform:rotate(360deg) scale(0.9);
      }
    }
  }

</style>
