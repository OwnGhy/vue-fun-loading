<template>
    <div class="loading-border-bounce">loading...</div>
</template>
<script>
    export default {
        name: 'loading-border-bounce'
    }
</script>
<style lang="scss" scoped>
    .loading-border-bounce {
        position: relative;
        margin: 0 auto;
        width: 250px;
        height: 50px;
        color: pink;
        line-height: 50px;
        font-family: helvetica, arial, sans-serif;
        text-transform: uppercase;
        font-weight: 900;
        letter-spacing: 0.2em;
        &::before, &::after {
            content: "";
            display: block;
            width: 15px;
            height: 15px;
            background: pink;
            position: absolute;
            animation: load_border_bounce .7s infinite alternate ease-in-out;
        }
        &::before {
            top: 0;
        }
        &::after {
            bottom: 0;
        }
        @keyframes load_border_bounce {
            0% { left: 0; height: 30px; width: 15px }
            50% { height: 8px; width: 40px }
            100% { left: 235px; height: 30px; width: 15px}
        }
    }
</style>