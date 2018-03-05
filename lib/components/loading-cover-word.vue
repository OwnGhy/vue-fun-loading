<template>
    <div :class="`loading-cover-word loading-cover-word-${this.size}`" ></div>
</template>

<script>
    export default {
        name: 'loading-cover-word',
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
    .loading-cover-word {
        position: relative;
        margin: 0 auto;
        background-color: rgba(255,255,255,0.2);
        &.loading-cover-word-small {
            width: 75px;
            height: 10px;
            &:before{
                content: "";
                position: absolute;
                background-color: pink;
                top: 0;
                left: 0;
                height: 10px;
                width: 0;
                z-index: 0;
                opacity: 1;
                -webkit-transform-origin:  100% 0%;
                transform-origin:  100% 0% ;
                animation: load_cover_word 10s ease-in-out infinite;
            }

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
            }
        }
        &.loading-cover-word-middle {
            width: 112.5px;
            height: 15px;
            &:before{
                content: "";
                position: absolute;
                background-color: pink;
                top: 0;
                left: 0;
                height: 15px;
                width: 0;
                z-index: 0;
                opacity: 1;
                -webkit-transform-origin:  100% 0%;
                transform-origin:  100% 0% ;
                animation: load_cover_word 10s ease-in-out infinite;
            }

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
            }
        }
        &.loading-cover-word-large {
            width: 150px;
            height: 20px;
            &:before{
                content: "";
                position: absolute;
                background-color: pink;
                top: 0px;
                left: 0px;
                height: 20px;
                width: 0px;
                z-index: 0;
                opacity: 1;
                -webkit-transform-origin:  100% 0%;
                transform-origin:  100% 0% ;
                animation: load_cover_word 10s ease-in-out infinite;
            }

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
            }
        }
        @keyframes load_cover_word{
            0%{width: 0px;}
            70%{width: 100%; opacity: 1;}
            90%{opacity: 0; width: 100%;}
            100%{opacity: 0;width: 0px;}
        }
    }
</style>
