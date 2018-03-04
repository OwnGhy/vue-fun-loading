<template>
    <div :class="`loading-circle-line loading-circle-line-${this.size}`" >
        <span v-for="i in 8" :key="i" :style="loadingStyle"></span>
    </div>
</template>

<script>
    export default {
        name: 'loading-circle-line',
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
    .loading-circle-line {
        position: relative;
        margin: 0 auto;
        &.loading-circle-line-small {
            width: 50px;
            height: 50px;
            > span {
                width: 15px;
                height: 5px;
                border-top-left-radius: 2.5px;
                border-bottom-left-radius: 2.5px;
                &:nth-child(1){
                    left: 0;
                    top: 50%;
                    margin-top:-2.5px;
                    -webkit-animation-delay:0.13s;
                }
                &:nth-child(2){
                    left: 5px;
                    top: 10px;
                    -webkit-transform: rotate(45deg);
                    -webkit-animation-delay:0.26s;
                }
                &:nth-child(3){
                    left: 50%;
                    top: 5px;
                    margin-left: -7.5px;
                    -webkit-transform: rotate(90deg);
                    -webkit-animation-delay:0.39s;
                }
                &:nth-child(4){
                    top: 10px;
                    right:5px;
                    -webkit-transform: rotate(135deg);
                    -webkit-animation-delay:0.52s;
                }
                &:nth-child(5){
                    right: 0;
                    top: 50%;
                    margin-top:-2.5px;
                    -webkit-transform: rotate(180deg);
                    -webkit-animation-delay:0.65s;
                }
                &:nth-child(6){
                    right: 5px;
                    bottom:10px;
                    -webkit-transform: rotate(225deg);
                    -webkit-animation-delay:0.78s;
                }
                &:nth-child(7){
                    bottom: 5px;
                    left: 50%;
                    margin-left: -7.5px;
                    -webkit-transform: rotate(270deg);
                    -webkit-animation-delay:0.91s;
                }
                &:nth-child(8){
                    bottom: 10px;
                    left: 5px;
                    -webkit-transform: rotate(315deg);
                    -webkit-animation-delay:1.04s;
                }
            }
        }
        &.loading-circle-line-middle {
            width: 75px;
            height: 75px;
            > span {
                width: 22.5px;
                height: 7.5px;
                border-top-left-radius: 3.75px;
                border-bottom-left-radius: 3.75px;
                &:nth-child(1){
                    left: 0;
                    top: 50%;
                    margin-top:-3.75px;
                    -webkit-animation-delay:0.13s;
                }
                &:nth-child(2){
                    left: 7.5px;
                    top: 15px;
                    -webkit-transform: rotate(45deg);
                    -webkit-animation-delay:0.26s;
                }
                &:nth-child(3){
                    left: 50%;
                    top: 7.5px;
                    margin-left: -11.25px;
                    -webkit-transform: rotate(90deg);
                    -webkit-animation-delay:0.39s;
                }
                &:nth-child(4){
                    top: 15px;
                    right:7.5px;
                    -webkit-transform: rotate(135deg);
                    -webkit-animation-delay:0.52s;
                }
                &:nth-child(5){
                    right: 0;
                    top: 50%;
                    margin-top:-3.75px;
                    -webkit-transform: rotate(180deg);
                    -webkit-animation-delay:0.65s;
                }
                &:nth-child(6){
                    right: 7.5px;
                    bottom:15px;
                    -webkit-transform: rotate(225deg);
                    -webkit-animation-delay:0.78s;
                }
                &:nth-child(7){
                    bottom: 7.5px;
                    left: 50%;
                    margin-left: -11.25px;
                    -webkit-transform: rotate(270deg);
                    -webkit-animation-delay:0.91s;
                }
                &:nth-child(8){
                    bottom: 15px;
                    left: 7.5px;
                    -webkit-transform: rotate(315deg);
                    -webkit-animation-delay:1.04s;
                }
            }
        }
        &.loading-circle-line-large {
            width: 100px;
            height: 100px;
            > span {
                width: 30px;
                height: 10px;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                &:nth-child(1){
                    left: 0;
                    top: 50%;
                    margin-top:-5px;
                    -webkit-animation-delay:0.13s;
                }
                &:nth-child(2){
                    left: 10px;
                    top: 20px;
                    -webkit-transform: rotate(45deg);
                    -webkit-animation-delay:0.26s;
                }
                &:nth-child(3){
                    left: 50%;
                    top: 10px;
                    margin-left: -15px;
                    -webkit-transform: rotate(90deg);
                    -webkit-animation-delay:0.39s;
                }
                &:nth-child(4){
                    top: 20px;
                    right:10px;
                    -webkit-transform: rotate(135deg);
                    -webkit-animation-delay:0.52s;
                }
                &:nth-child(5){
                    right: 0;
                    top: 50%;
                    margin-top:-5px;
                    -webkit-transform: rotate(180deg);
                    -webkit-animation-delay:0.65s;
                }
                &:nth-child(6){
                    right: 10px;
                    bottom:20px;
                    -webkit-transform: rotate(225deg);
                    -webkit-animation-delay:0.78s;
                }
                &:nth-child(7){
                    bottom: 10px;
                    left: 50%;
                    margin-left: -15px;
                    -webkit-transform: rotate(270deg);
                    -webkit-animation-delay:0.91s;
                }
                &:nth-child(8){
                    bottom: 20px;
                    left: 10px;
                    -webkit-transform: rotate(315deg);
                    -webkit-animation-delay:1.04s;
                }
            }
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
