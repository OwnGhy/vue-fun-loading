<template>
  <div :class="`fun-loading-circle-line fun-loading-circle-line-${this.size}`">
    <span
      v-for="i in 8"
      :id="`idid${i}`"
      :key="i"
      :style="loadingStyle"
    />
  </div>
</template>

<script>
export default {
    name: 'LoadingCircleLine',
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
                backgroundColor: this.color
            };
        }
    }
};
</script>

<style lang="less">
  @import "./style/_variables.less";
  @loading-class: @{fun-loading-prefix}-circle-line;
  .@{loading-class} {
    display: inline-block;
    position: relative;

    .line(@boxSize, @lineWidth, @lineHeight) {
      @boxSizeRadius: @boxSize / 2;
      @lineHeightHalf: @lineHeight / 2;
      @lineWidthHalf: @lineWidth / 2;
      @computedLen: ((sqrt(2) - 1) * @boxSizeRadius + @lineHeightHalf) * sqrt(2) / 2;
      @delayUnit: 0.13s;
      @degUnit: 45deg;

      width: @boxSize;
      height: @boxSize;
      > span {
        width: @lineWidth;
        height: @lineHeight;
        border-top-left-radius: @lineWidthHalf;
        border-top-right-radius: @lineWidthHalf;
        &:nth-child(1) {
          left: @boxSizeRadius - @lineWidthHalf;
          top: 0;
          -webkit-animation-delay: @delayUnit;
        }
        &:nth-child(2) {
          left: @boxSize - @computedLen - @lineWidthHalf;
          top: @computedLen - @lineHeightHalf;
          -webkit-animation-delay: @delayUnit * 2;
          -webkit-transform: rotate(@degUnit);
        }
        &:nth-child(3) {
          left: @boxSize - @lineHeightHalf - @lineWidthHalf;
          top: @boxSizeRadius - @lineHeightHalf;
          -webkit-animation-delay: @delayUnit * 3;
          -webkit-transform: rotate(@degUnit * 2);
        }
        &:nth-child(4) {
          left: @boxSize - @computedLen - @lineWidthHalf;
          top: @boxSize - @lineHeightHalf - @computedLen;
          -webkit-animation-delay: @delayUnit * 4;
          -webkit-transform: rotate(@degUnit * 3);
        }
        &:nth-child(5) {
          left: @boxSizeRadius - @lineWidthHalf;
          bottom: 0;
          -webkit-animation-delay: @delayUnit * 5;
          -webkit-transform: rotate(@degUnit * 4);
        }
        &:nth-child(6) {
          left: @computedLen - @lineWidthHalf;
          top: @boxSize - @lineHeightHalf - @computedLen;
          -webkit-animation-delay: @delayUnit * 6;
          -webkit-transform: rotate(@degUnit * 5);
        }
        &:nth-child(7) {
          left: @lineHeightHalf - @lineWidthHalf;
          top: @boxSizeRadius - @lineHeightHalf;
          -webkit-animation-delay: @delayUnit * 7;
          -webkit-transform: rotate(@degUnit * 6);
        }
        &:nth-child(8) {
          left: @computedLen - @lineWidthHalf;
          top: @computedLen - @lineHeightHalf;
          -webkit-animation-delay: @delayUnit * 8;
          -webkit-transform: rotate(@degUnit * 7);
        }
      }
    }

    &.@{loading-class}-small {
      .line(@small, 2px, 6px);
    }
    &.@{loading-class}-middle {
      .line(@middle, 4px, 10px);
    }
    &.@{loading-class}-large {
      .line(@large, 6px, 14px);
    }
    > span{
      display: inline-block;
      position: absolute;
      -webkit-animation: load_circle_line 1.04s ease infinite;
    }
    @-webkit-keyframes load_circle_line{
      0%{
        opacity: 1;
      }
      100%{
        opacity: .2;
      }
    }
  }
</style>
