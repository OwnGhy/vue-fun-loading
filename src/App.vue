<template>
  <div id="app">
    <vue-fun-loading />
    <Loading type="circle-quarter" />
    <LoadingCircleDot />
    <LoadingCircleDotMoving />
    <LoadingCircleGradient />
    <LoadingCircleLine />
  </div>
</template>

<script>
  import Loading from './../lib/components/Loading'
  import LoadingCircleDot from './../lib/components/LoadingCircleDot'
  import LoadingCircleDotMoving from './../lib/components/LoadingCircleDotMoving'
  import LoadingCircleGradient from './../lib/components/LoadingCircleGradient'
  import LoadingCircleLine from './../lib/components/LoadingCircleLine'

  export default {
    name: 'App',
    components: {
      Loading,
      LoadingCircleDot,
      LoadingCircleDotMoving,
      LoadingCircleGradient,
      LoadingCircleLine
    },
    data () {
      return {
        multiData: [{
          id: 1,
          name: 'test 1'
        }, {
          id: 2,
          name: 'test 2'
        }, {
          id: 3,
          name: 'test 3'
        }]
      }
    }
  }
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
  }
</style>
