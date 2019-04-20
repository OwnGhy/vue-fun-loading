<template>
  <div :class="`fun-loading-word fun-loading-word-${size}`" :style="loadingStyle"></div>
</template>
<script>
  export default {
    name: 'FunLoadingWord',
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

  @loading-class: @{fun-loading-prefix}-word;

  .@{loading-class}:after {
    content: 'LOADING...';
    color: @fun-loading-color;
    font-family: helvetica, arial, sans-serif;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    background-color: #fff;
    z-index: 1;
  }

  .@{loading-class}:before {
    content: "";
    position: absolute;
    left: 0;
    background-color: @fun-loading-color;
    width: 0;
    z-index: 0;
    opacity: 1;
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0;
  }
  .word-after(@height, @fontSize, @fontWeight) {
    height: @height;
    line-height: @height;
    font-weight: @fontWeight;
    font-size: @fontSize;
  }

  .word-before(@height, @top, @animation) {
    height: @height;
    top: @top;
    animation: @animation 6s ease-in-out infinite;
  }

  .@{loading-class} {
    position: relative;
    margin: 0 auto;

    .@{loading-class}-small {
      width: 75px;
    }

    &.@{loading-class}-small:after {
      .word-after(16px, 12px, 400);
    }

    &.@{loading-class}-small:before {
      .word-before(22px, -3px, load_with_word_small);
    }

    .@{loading-class}-middle {
      width: 112.5px;
    }

    &.@{loading-class}-middle:after {
      .word-after(20px, 14px, 400);
    }

    &.@{loading-class}-middle:before {
      .word-before(26px, -3px, load_with_word_middle);
    }

    .@{loading-class}-large {
      width: 150px;
    }

    &.@{loading-class}-large:after {
      .word-after(24px, 16px, 500);
    }

    &.@{loading-class}-large:before {
      .word-before(30px, -3px, load_with_word_large);
    }

    .animation-common(@width) {
      0% {
        width: 0;
      }
      70% {
        width: @width;
        opacity: 1;
      }
      90% {
        opacity: 0;
        width: @width;
      }
      100% {
        opacity: 0;
        width: 0;
      }
    }

    @keyframes load_with_word_small {
      .animation-common(75px);
    }
    @keyframes load_with_word_middle {
      .animation-common(112.5px);
    }
    @keyframes load_with_word_large {
      .animation-common(150px);
    }
  }
</style>
