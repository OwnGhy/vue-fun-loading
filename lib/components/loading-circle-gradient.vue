<template>
  <div :class="`loading-circle-gradient loading-circle-gradient-${size}`" :style="loadingStyle">
    <div></div>
  </div>
</template>

<script>
  export default {
    name: 'loading-circle-gradient',
    props: {
      color: {
        type: String,
        default: 'hotpink'
      },
      size: {
        type: String,
        default: 'middle',
        elem: ['small', 'middle', 'large']
      }
    },
    computed: {
      loadingStyle() {
        return {
          background: `linear-gradient(${this.color}, rgba(0, 0, 0, 0))`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .loading-circle-gradient {
    box-sizing: border-box;
    margin: 0 auto;
    position: relative;
    border-radius: 50%;
    /*background-clip: padding-box;*/
    animation: load_circle_gradient 2s linear infinite;
    > div {
      position: absolute;
      top: 4px;
      left: 4px;
      z-index: -1;
      border-radius: 50%;
      background: #fff;
    }
    &.loading-circle-gradient-small {
      height: 40px;
      width: 40px;
      > div {
        height: 32px;
        width: 32px;
      }
    }
    &.loading-circle-gradient-middle {
      height: 60px;
      width: 60px;
      > div {
        height: 52px;
        width: 52px;
      }
    }
    &.loading-circle-gradient-large {
      height: 80px;
      width: 80px;
      > div {
        height: 72px;
        width: 72px;
      }
    }
    @keyframes load_circle_gradient{
      100%{
        -webkit-transform: rotate(360deg);
      }
    }
  }
</style>
