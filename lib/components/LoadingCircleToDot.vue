<template>
  <div :class="`fun-loading-circle-to-dot fun-loading-circle-to-dot-${size}`" :style="loadingStyle"></div>
</template>
<script>
  import { LightenDarkenColor } from './../utils';

  export default {
    name: 'FunLoadingCircleToDot',
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
          borderColor: `${LightenDarkenColor(this.color, 40)} ${this.color}`
        };
      }
    }
  }
</script>
<style lang="less">
  @import "./style/_variables.less";

  @loading-class: @{fun-loading-prefix}-circle-to-dot;

  .@{loading-class} {
    border-radius: 50%;
    border-style: solid;
    border-color: @fun-loading-color @fun-loading-light-color;
    animation: rotate_to_dot 1.5s infinite;

    &.@{loading-class}-small {
      width: 12px;
      height: 12px;
      border-width: 6px;
    }

    &.@{loading-class}-middle {
      width: 18px;
      height: 18px;
      border-width: 9px;
    }

    &.@{loading-class}-large {
      width: 26px;
      height: 26px;
      border-width: 12px;
    }

    @keyframes rotate_to_dot {
      50%{
        transform:rotate(180deg) scale(1.3);
        border-style:dotted;
      }
      100%{
        transform:rotate(360deg) scale(1);
      }
    }
  }

</style>
