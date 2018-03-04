<template>
    <div :class="`loading-circle-dot loading-circle-dot-${this.size}`" >
        <span v-for="i in 8" :key="i" :style="loadingStyle"></span>
    </div>
</template>

<script>
    export default {
        name: 'loading-circle-dot',
        props: {
            color: {
                type: String,
                default: 'pink'
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
                    backgroundColor: this.color
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .loading-circle-dot {
        position: relative;
        margin: 0 auto;
        &.loading-circle-dot-small {
            width: 50px;
            height: 50px;
            > span {
                width: 8px;
                height: 8px;
                &:nth-child(1){
                    left: 0;
                    top: 50%;
                    margin-top:-4px;
                    -webkit-animation-delay:0.13s;
                }
                &:nth-child(2){
                    left: 7px;
                    top: 7px;
                    -webkit-animation-delay:0.26s;
                }
                &:nth-child(3){
                    left: 50%;
                    top: 0;
                    margin-left: -4px;
                    -webkit-animation-delay:0.39s;
                }
                &:nth-child(4){
                    top: 7px;
                    right:7px;
                    -webkit-animation-delay:0.52s;
                }
                &:nth-child(5){
                    right: 0;
                    top: 50%;
                    margin-top:-4px;
                    -webkit-animation-delay:0.65s;
                }
                &:nth-child(6){
                    right: 7px;
                    bottom:7px;
                    -webkit-animation-delay:0.78s;
                }
                &:nth-child(7){
                    bottom: 0;
                    left: 50%;
                    margin-left: -4px;
                    -webkit-animation-delay:0.91s;
                }
                &:nth-child(8){
                    bottom: 7px;
                    left: 7px;
                    -webkit-animation-delay:1.04s;
                }
            }
        }
        &.loading-circle-dot-middle {
            width: 75px;
            height: 75px;
            > span {
                width: 12px;
                height: 12px;
                &:nth-child(1){
                    left: 0;
                    top: 50%;
                    margin-top:-6px;
                    -webkit-animation-delay:0.13s;
                }
                &:nth-child(2){
                    left: 10.5px;
                    top: 10.5px;
                    -webkit-animation-delay:0.26s;
                }
                &:nth-child(3){
                    left: 50%;
                    top: 0;
                    margin-left: -6px;
                    -webkit-animation-delay:0.39s;
                }
                &:nth-child(4){
                    top: 10.5px;
                    right:10.5px;
                    -webkit-animation-delay:0.52s;
                }
                &:nth-child(5){
                    right: 0;
                    top: 50%;
                    margin-top:-6px;
                    -webkit-animation-delay:0.65s;
                }
                &:nth-child(6){
                    right: 10.5px;
                    bottom: 10.5px;
                    -webkit-animation-delay:0.78s;
                }
                &:nth-child(7){
                    bottom: 0;
                    left: 50%;
                    margin-left: -6px;
                    -webkit-animation-delay:0.91s;
                }
                &:nth-child(8){
                    bottom: 10.5px;
                    left: 10.5px;
                    -webkit-animation-delay:1.04s;
                }
            }
        }
        &.loading-circle-dot-large {
            width: 100px;
            height: 100px;
            > span {
                width: 16px;
                height: 16px;
                &:nth-child(1){
                    left: 0;
                    top: 50%;
                    margin-top:-8px;
                    -webkit-animation-delay:0.13s;
                }
                &:nth-child(2){
                    left: 14px;
                    top: 14px;
                    -webkit-animation-delay:0.26s;
                }
                &:nth-child(3){
                    left: 50%;
                    top: 0;
                    margin-left: -8px;
                    -webkit-animation-delay:0.39s;
                }
                &:nth-child(4){
                    top: 14px;
                    right:14px;
                    -webkit-animation-delay:0.52s;
                }
                &:nth-child(5){
                    right: 0;
                    top: 50%;
                    margin-top:-8px;
                    -webkit-animation-delay:0.65s;
                }
                &:nth-child(6){
                    right: 14px;
                    bottom:14px;
                    -webkit-animation-delay:0.78s;
                }
                &:nth-child(7){
                    bottom: 0;
                    left: 50%;
                    margin-left: -8px;
                    -webkit-animation-delay:0.91s;
                }
                &:nth-child(8){
                    bottom: 14px;
                    left: 14px;
                    -webkit-animation-delay:1.04s;
                }
            }
        }
        > span{
            display: inline-block;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: hotpink;
            position: absolute;
            -webkit-animation: load_circle_dot 1.04s ease infinite;
        }
        @-webkit-keyframes load_circle_dot{
            0%{
                -webkit-transform: scale(1.2);
                opacity: 1;
            }
            100%{
                -webkit-transform: scale(.3);
                opacity: .5;
            }
        }
    }
</style>
