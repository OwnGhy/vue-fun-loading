<template>
    <div :class="`loading-circle-dot-moving loading-circle-dot-moving-${this.size}`" >
        <div v-for="i in 4" :key="i"><span :style="loadingStyle"></span></div>
    </div>
</template>

<script>
    export default {
        name: 'loading-circle-dot-moving',
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
    .loading-circle-dot-moving {
        position: relative;
        margin: 0 auto;
        &.loading-circle-dot-moving-small {
            width: 50px;
            height: 50px;
            > div {
                > span {
                    width: 10px;
                    height: 10px;
                    margin-top: -5px;
                    margin-left: -5px;
                }
            }
        }
        &.loading-circle-dot-moving-middle {
            width: 75px;
            height: 75px;
            > div {
                > span {
                    width: 15px;
                    height: 15px;
                    margin-top: -7.5px;
                    margin-left: -7.5px;
                }
            }

        }
        &.loading-circle-dot-moving-large {
            width: 100px;
            height: 100px;
            > div {
                > span {
                    width: 20px;
                    height: 20px;
                    margin-top: -10px;
                    margin-left: -10px;
                }
            }

        }
        > div{
            width: 100%;
            height: 100%;
            position: absolute;
            -webkit-animation: load_circle_dot_moving 2.08s linear infinite;
            &:nth-child(1){
                -webkit-animation-delay:0.2s;
            }
            &:nth-child(2){
                -webkit-animation-delay:0.4s;
            }
            &:nth-child(3){
                -webkit-animation-delay:0.6s;
            }
            &:nth-child(4){
                -webkit-animation-delay:0.8s;
            }
            > span{
                display: inline-block;
                border-radius: 50%;
                position: absolute;
                left: 50%;
            }
        }
        @-webkit-keyframes load_circle_dot_moving {
            0%{
                -webkit-transform: rotate(0deg);
            }
            10%{
                -webkit-transform: rotate(45deg);
            }
            50%{
                opacity: 1;
                -webkit-transform: rotate(160deg);
            }
            62%{
                opacity: 0;
            }
            65%{
                opacity: 0;
                -webkit-transform: rotate(200deg);
            }
            90%{
                -webkit-transform: rotate(340deg);
            }
            100%{
                -webkit-transform: rotate(360deg);
            }
        }
    }
</style>
