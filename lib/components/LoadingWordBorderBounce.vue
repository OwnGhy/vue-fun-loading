<template>
  <div :class="`fun-loading-word-border-bounce fun-loading-word-border-bounce-${size}`" :style="loadingStyle">LOADING...</div>
</template>
<script>
  export default {
    name: 'FunLoadingWordBorderBounce',
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

  @loading-class: @{fun-loading-prefix}-word-border-bounce;

  .@{loading-class} {
    position: relative;
    color: @fun-loading-color;
    font-family: helvetica, arial, sans-serif;
    letter-spacing: 0.1em;

    .common(@width, @height, @fontWeight, @fontSize, @padding) {
      padding-left: @padding;
      width: @width;
      height: @height;
      line-height: @height;
      font-weight: @fontWeight;
      font-size: @fontSize;
    }

    .beforeAfterCommon(@width, @height, @animation) {
      width: @width;
      height: @height;
      animation: @animation 1s infinite alternate ease-in-out;
    }

    .animationCommon(@width1, @height1, @width2, @height2, @left) {
      0% {
        left: 0;
        height: @height1;
        width: @width1;
      }
      50% {
        height: @height2;
        width: @width2;
      }
      100% {
        left: @left;
        height: @height1;
        width: @width1;
      }
    }

    &.@{loading-class}-small {
      .common(75px, 16px, 400, 12px, 14px);
      &::before, &::after {
        .beforeAfterCommon(12px, 12px, load_border_bounce_small);
      }
    }

    &.@{loading-class}-middle {
      .common(112px, 20px, 400, 14px, 16px);
      &::before, &::after {
        .beforeAfterCommon(14px, 14px, load_border_bounce_middle);
      }
    }

    &.@{loading-class}-large {
      .common(128px, 24px, 500, 16px, 18px);
      &::before, &::after {
        .beforeAfterCommon(16px, 16px, load_border_bounce_large);
      }
    }

    &::before, &::after {
      content: "";
      display: block;
      background: @fun-loading-color;
      position: absolute;
    }
    &::before {
      top: -4px;
    }
    &::after {
      bottom: -4px;
    }
    @keyframes load_border_bounce_small {
      .animationCommon(12px, 12px, 12px, 4px, 91px);
    }

    @keyframes load_border_bounce_middle {
      .animationCommon(14px, 14px, 21px, 5px, 120px);
    }
    @keyframes load_border_bounce_large {
      .animationCommon(16px, 16px, 24px, 6px, 144px);
    }
  }
</style>
