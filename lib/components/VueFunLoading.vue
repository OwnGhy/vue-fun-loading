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
import LoadingCircleCasual from './LoadingCircleCasual';
import LoadingCircleQuarter from './LoadingCircleQuarter';
import LoadingCircleToDot from './LoadingCircleToDot';
import LoadingCircleToDash from './LoadingCircleToDash';
import LoadingCircleRidge from './LoadingCircleRidge';
import LoadingDot from './LoadingDot';
import LoadingDotShrink from './LoadingDotShrink';
import LoadingDotMoving from './LoadingDotMoving';
import LoadingDotSquare from './LoadingDotSquare';
import LoadingDotSquareShrink from './LoadingDotSquareShrink';
import LoadingWord from './LoadingWord';
import LoadingWordCover from './LoadingWordCover';
import LoadingWordBorderBounce from './LoadingWordBorderBounce';
import LoadingLine from './LoadingLine';
import LoadingLineBase from './LoadingLineBase';

export default {
    name: 'VueFunLoading',
    components: {
        LoadingCircleDot,
        LoadingCircleDotMoving,
        LoadingCircleGradient,
        LoadingCircleLine,
        LoadingCircleHalf,
        LoadingCircleCasual,
        LoadingCircleQuarter,
        LoadingCircleToDot,
        LoadingCircleToDash,
        LoadingCircleRidge,
        LoadingDot,
        LoadingDotShrink,
        LoadingDotMoving,
        LoadingDotSquare,
        LoadingDotSquareShrink,
        LoadingWord,
        LoadingWordCover,
        LoadingWordBorderBounce,
        LoadingLine,
        LoadingLineBase
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
              'circle-to-dash',
              'circle-ridge',
              'circle-casual',
              'dot',
              'dot-shrink',
              'dot-moving',
              'dot-square',
              'dot-square-shrink',
              'circle-dot-moving',
              'circle-gradient',
              'circle-line',
              'word',
              'word-cover',
              'word-border-bounce',
              'line',
              'line-base'
            ]
        }
    },
    methods: {
        firstLetterUppercase (text) {
            const letterArr = text.split('-'),
              len = letterArr.length;
            for(let i = 0; i < len; i++) {
              let letter = letterArr[i].split('');
              letter[0] = letter[0].toUpperCase();
              letterArr[i] = letter.join('');
            }
            return letterArr.join('');
        }
    }
};
</script>
