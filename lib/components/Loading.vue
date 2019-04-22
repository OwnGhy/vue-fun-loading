<template>
  <component
    :is="`Loading${this.firstLetterUppercase(type)}`"
    :size="size"
    :color="color"
  />
</template>
<script>
import LoadingCircleDot from './LoadingCircleDot';
import LoadingCircleDotMoving from './LoadingCircleDotMoving';
import LoadingCircleGradient from './LoadingCircleGradient';
import LoadingCircleLine from './LoadingCircleLine';
import LoadingCircleHalf from './LoadingCircleHalf';
import LoadingCircleQuarter from './LoadingCircleQuarter';
import LoadingCircleToDot from './LoadingCircleToDot';
import LoadingWord from './LoadingWord';
import LoadingWordCover from './LoadingWordCover';
import LoadingWordBorderBounce from './LoadingWordBorderBounce';

export default {
    name: 'VueFunLoading',
    components: {
        LoadingCircleDot,
        LoadingCircleDotMoving,
        LoadingCircleGradient,
        LoadingCircleLine,
        LoadingCircleHalf,
        LoadingCircleQuarter,
        LoadingCircleToDot,
        LoadingWord,
        LoadingWordCover,
        LoadingWordBorderBounce
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
            elem: [
              'circle-dot',
              'circle-half',
              'circle-quarter',
              'circle-to-dot',
              'circle-dot-moving',
              'circle-gradient',
              'circle-line',
              'word',
              'word-cover',
              'word-border-bounce'
            ]
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
