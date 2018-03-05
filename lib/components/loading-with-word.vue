<template>
    <div :class="`loading-with-word loading-with-word-${this.size}`" ></div>
</template>

<script>
    export default {
        name: 'loading-with-word',
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
    .loading-with-word {
        position: relative;
        margin: 0 auto;
        &.loading-with-word-small {
            width: 75px;
            height: 10px;
            &:after{
                content: "LOADING ...";
                color: pink;
                font-family:  helvetica, arial, sans-serif ;
                font-weight: 500;
                font-size: 8px;
                position: absolute;
                width: 100%;
                height: 10px;
                line-height: 10px;
                left: 0;
                top: 0;
                background-color: #fff;
                z-index: 1;
            }
            &:before{
                content: "";
                position: absolute;
                background-color: pink;
                top: -2.5px;
                left: 0;
                height: 15px;
                width: 0;
                z-index: 0;
                opacity: 1;
                -webkit-transform-origin:  100% 0%;
                transform-origin:  100% 0% ;
                -webkit-animation: load_with_word 10s ease-in-out infinite;
                animation: load_with_word 10s ease-in-out infinite;
            }
        }
        &.loading-with-word-middle {
            width: 112.5px;
            height: 15px;
            &:after{
                content: "LOADING ...";
                color: pink;
                font-family:  helvetica, arial, sans-serif ;
                font-weight: 700;
                font-size: 12px;
                position: absolute;
                width: 100%;
                height: 15px;
                line-height: 15px;
                left: 0;
                top: 0;
                background-color: #fff;
                z-index: 1;
            }
            &:before{
                content: "";
                position: absolute;
                background-color: pink;
                top: -3.75px;
                left: 0;
                height: 22.5px;
                width: 0;
                z-index: 0;
                opacity: 1;
                -webkit-transform-origin:  100% 0%;
                transform-origin:  100% 0% ;
                -webkit-animation: load_with_word 10s ease-in-out infinite;
                animation: load_with_word 10s ease-in-out infinite;
            }
        }
        &.loading-with-word-large {
            width: 150px;
            height: 20px;
            &:after{
                content: "LOADING ...";
                color: pink;
                font-family:  helvetica, arial, sans-serif ;
                font-weight: 900;
                font-size: 16px;
                position: absolute;
                width: 100%;
                height: 20px;
                line-height: 20px;
                left: 0;
                top: 0;
                background-color: #fff;
                z-index: 1;
            }
            &:before{
                content: "";
                position: absolute;
                background-color: pink;
                top: -5px;
                left: 0;
                height: 30px;
                width: 0;
                z-index: 0;
                opacity: 1;
                -webkit-transform-origin:  100% 0%;
                transform-origin:  100% 0% ;
                -webkit-animation: load_with_word 10s ease-in-out infinite;
                animation: load_with_word 10s ease-in-out infinite;
            }
        }
        @keyframes load_with_word{
            0%{width: 0px;}
            70%{width: 100%; opacity: 1;}
            90%{opacity: 0; width: 100%;}
            100%{opacity: 0;width: 0px;}
        }
    }
</style>
