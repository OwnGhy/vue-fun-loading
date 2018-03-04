<template>
  <div :class="`loading-circle loading-circle-${this.size}`" :style="loadingStyle"></div>
</template>

<script>
  export default {
    name: 'loading-circle',
    props: {
      topColor: {
        type: String,
        default: 'pink'
      },
      rightColor: {
        type: String,
        default: 'hotpink'
      },
      bottomColor: {
        type: String,
        default: 'hotpink'
      },
      leftColor: {
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
          borderColor: `${this.topColor} ${this.rightColor} ${this.bottomColor} ${this.leftColor}`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .loading-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    &.loading-circle-small {
      width: 50px;
      height: 50px;
      &::before {
        content: "";
        color: white;
        height: 20px;
        width: 20px;
        background: transparent;
        border-radius: 50%;
        border: 5px solid transparent;
        border-color: inherit;
        animation: load_circle .6s infinite;
      }
    }
    &.loading-circle-middle {
      width: 80px;
      height: 80px;
      &::before {
        content: "";
        color: white;
        height: 30px;
        width: 30px;
        background: transparent;
        border-radius: 50%;
        border: 7px solid transparent;
        border-color: inherit;
        animation: load_circle .6s infinite;
      }
    }
    &.loading-circle-large {
      width: 100px;
      height: 100px;
      &::before {
        content: "";
        color: white;
        height: 50px;
        width: 50px;
        background: transparent;
        border-radius: 50%;
        border: 10px solid transparent;
        border-color: inherit;
        animation: load_circle .6s infinite;
      }
    }
    @keyframes load_circle {
      100% {
        transform: rotatez(360deg);
      }
    }
  }
</style>
