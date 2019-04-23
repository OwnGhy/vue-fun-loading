<template>
  <div id="app">
    <github-cat git-path="https://github.com/OwnGhy/vue-fun-loading" color="pink" />
    <h2>Examples</h2>
    <div class="demo">
      <juri :doc-list="docList" :expend-all="expend">
        <div slot="demo-0">
          <span class="gutter">
            <vue-fun-loading size="small" />
          </span>
          <span class="gutter">
            <vue-fun-loading />
          </span>
          <span class="gutter">
            <vue-fun-loading size="large" />
          </span>
        </div>
        <vue-fun-loading
          slot="demo-1"
          color="#00ad9f"
        />
        <vue-fun-loading
          slot="demo-2"
          type="circle-dot-moving"
        />
        <vue-fun-loading
          slot="demo-3"
          type="circle-gradient"
        />
        <vue-fun-loading
          slot="demo-4"
          type="circle-line"
        />
        <vue-fun-loading
          slot="demo-5"
          type="circle-half"
        />
        <vue-fun-loading
          slot="demo-6"
          type="circle-quarter"
        />
        <vue-fun-loading
          slot="demo-7"
          type="circle-to-dot"
        />
        <vue-fun-loading
          slot="demo-8"
          type="circle-to-dash"
        />
        <vue-fun-loading
          slot="demo-9"
          type="circle-ridge"
        />
        <vue-fun-loading
          slot="demo-10"
          type="dot"
        />
        <vue-fun-loading
          slot="demo-11"
          type="dot-shrink"
        />
        <vue-fun-loading
          slot="demo-12"
          type="dot-moving"
        />
        <vue-fun-loading
          slot="demo-13"
          type="dot-square"
        />
        <vue-fun-loading
          slot="demo-14"
          type="dot-square-shrink"
        />
        <vue-fun-loading
          slot="demo-15"
          type="word"
        />
        <vue-fun-loading
          slot="demo-16"
          type="word-cover"
        />
        <vue-fun-loading
          slot="demo-17"
          type="word-border-bounce"
        />
        <vue-fun-loading
          slot="demo-18"
          size="small"
          type="line"
        />
        <vue-fun-loading
          slot="demo-19"
          size="small"
          type="line-base"
        />
      </juri>
    </div>
  </div>
</template>

<script>
  import Juri from 'vue-juri';
  import GithubCat from './GithubCat';
  import size from 'raw-loader!./docs/size.md';
  import color from 'raw-loader!./docs/color.md';
  import circledotmoving from 'raw-loader!./docs/circledotmoving.md';
  import circlegradient from 'raw-loader!./docs/circlegradient.md';
  import circleline from 'raw-loader!./docs/circleline.md';
  import circlehalf from 'raw-loader!./docs/circlehalf.md';
  import circlequarter from 'raw-loader!./docs/circlequarter.md';
  import circletodot from 'raw-loader!./docs/circletodot.md';
  import circletodash from 'raw-loader!./docs/circletodash.md';
  import circleridge from 'raw-loader!./docs/circleridge.md';
  import dot from 'raw-loader!./docs/dot.md';
  import dotshrink from 'raw-loader!./docs/dotshrink.md';
  import dotmoving from 'raw-loader!./docs/dotmoving.md';
  import dotsquare from 'raw-loader!./docs/dotsquare.md';
  import dotsquareshrink from 'raw-loader!./docs/dotsquareshrink.md';
  import word from 'raw-loader!./docs/word.md';
  import wordcover from 'raw-loader!./docs/wordcover.md';
  import wordborderbounce from 'raw-loader!./docs/wordborderbounce.md';
  import line from 'raw-loader!./docs/line.md';
  import linebase from 'raw-loader!./docs/linebase.md';

  export default {
    name: 'vue-fun-loading-demo',
    components: {
      Juri,
      GithubCat
    },
    data() {
      return {
        expend: false,
        docList: [
          size,
          color,
          circledotmoving,
          circlegradient,
          circleline,
          circlehalf,
          circlequarter,
          circletodot,
          circletodash,
          circleridge,
          dot,
          dotshrink,
          dotmoving,
          dotsquare,
          dotsquareshrink,
          word,
          wordcover,
          wordborderbounce,
          line,
          linebase
        ]
      };
    }
  }
</script>

<style>
  body {
    padding: 0 120px;
    margin: 0;
  }
  h2 {
    margin-bottom: 40px;
  }
  .gutter {
    margin-right: 10px;
  }
</style>
