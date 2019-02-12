<template>
  <component :size="size" :color="color" :is="`Loading${this.firstLetterUppercase(type)}`" />
</template>
<script>
import LoadingCircleDot from './LoadingCircleDot'
import LoadingCircleQuarter from './LoadingCircleQuarter'

export default {
  name: 'vue-fun-loading',
  components: {
    LoadingCircleDot,
    LoadingCircleQuarter
  },
  props: {
    size: {
      type: String,
      default: 'middle',
      elem: ['small', 'middle', 'large']
    },
    color: {
      type: String
    },
    type: {
      type: String,
      default: 'circle-dot',
      elem: ['circle-dot', 'circle-quarter']
    }
  },
  methods: {
    firstLetterUppercase (text) {
      let letterArr = text.split('')
      letterArr[0] = letterArr[0].toUpperCase()
      return letterArr.join('')
    }
  }
}
</script>
