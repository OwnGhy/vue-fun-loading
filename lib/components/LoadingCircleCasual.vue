<template>
  <svg :class="`fun-loading-circle-casual fun-loading-circle-casual-${this.size}`" xmlns="http://www.w3.org/2000/svg">
    <circle :r="radius" :stroke-width="stroke" :cx="cxy" :cy="cxy" fill="none" :stroke="strokeColor" />
  </svg>
</template>
<script>
  export default {
    name: 'LoadingCircleCasual',
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
      strokeColor() {
        return this.color || '#ff69b4';
      },
      radius () {
        if (this.size === 'small') {
          return 7;
        } else if (this.size === 'middle') {
          return 15;
        } else {
          return 22;
        }
      },
      stroke() {
        if (this.size === 'small') {
          return 3;
        } else if (this.size === 'middle') {
          return 4;
        } else {
          return 5;
        }
      },
      cxy() {
        if (this.size === 'small') {
          return 11;
        } else if (this.size === 'middle') {
          return 17;
        } else {
          return 26;
        }
      }
    }
  }
</script>
<style lang="less">
  @import "./style/_variables.less";

  @loading-class: @{fun-loading-prefix}-circle-casual;

  .@{loading-class} {

    &.@{loading-class}-small {
      width: @small;
      height: @small;
    }

    &.@{loading-class}-middle {
      width: @middle;
      height: @middle;
    }

    &.@{loading-class}-large {
      width: @large;
      height: @large;
    }
  }
  circle {
    animation: 4s a infinite, 4s o infinite;
  }
  @keyframes a {
    from {
      stroke-dasharray: 100, 0;
    }
    50% {
      stroke-dasharray: 0, 100;
    }
    to {
      stroke-dasharray: 100, 0;
    }
  }
  @keyframes o {
    from {
      stroke-dashoffset: 75%;
    }
    to {
      stroke-dashoffset: 375%;
    }
  }

</style>
