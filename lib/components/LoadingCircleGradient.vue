<template>
  <div
    :class="`fun-loading-circle-gradient fun-loading-circle-gradient-${size}`"
    :style="loadingStyle"
  >
    <div />
  </div>
</template>

<script>
export default {
    name: 'FunLoadingCircleGradient',
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
                background: `linear-gradient(${this.color}, rgba(0, 0, 0, 0))`
            };
        }
    }
};
</script>

<style lang="less">
  @import "./style/_variables.less";
  @loading-class: @{fun-loading-prefix}-circle-gradient;

  .@{loading-class} {
    display: inline-block;
    box-sizing: border-box;
    margin: 0 auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(@fun-loading-color, rgba(0, 0, 0, 0));
    /*background-clip: padding-box;*/
    animation: load_circle_gradient 2s linear infinite;

    > div {
      position: absolute;
      z-index: -1;
      border-radius: 50%;
      background: #fff;
    }

    .gradient(@size, @border) {
      height: @size;
      width: @size;
      > div {
        height: @size - @border * 2;
        width: @size - @border * 2;
        top: @border;
        left: @border;
      }
    }
    &.@{loading-class}-small {
      .gradient(@small, 3px);
    }
    &.@{loading-class}-middle {
      .gradient(@middle, 4px);
    }
    &.@{loading-class}-large {
      .gradient(@small, 5px);
    }
    @keyframes load_circle_gradient{
      100%{
        -webkit-transform: rotate(360deg);
      }
    }
  }
</style>
