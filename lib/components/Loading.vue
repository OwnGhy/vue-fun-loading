<template>
  <component
    :is="`Loading${this.firstLetterUppercase(type)}`"
    :size="size"
    :color="color"
  />
</template>
<script>
import LoadingCircleDot from './LoadingCircleDot';
import LoadingCircleQuarter from './LoadingCircleQuarter';

export default {
    name: 'VueFunLoading',
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
            elem: ['circle-dot', 'circle-quarter', 'circle-dot-moving', 'circle-gradient', 'circle-line']
        }
    },
    methods: {
        firstLetterUppercase (text) {
            const letterArr = text.split('');
            letterArr[0] = letterArr[0].toUpperCase();
            return letterArr.join('');
        }
    }
};
</script>
