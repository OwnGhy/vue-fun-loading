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
          type="circle-quarter"
        />
        <vue-fun-loading
          slot="demo-6"
          type="word"
        />
        <vue-fun-loading
          slot="demo-7"
          type="word-cover"
        />
        <vue-fun-loading
          slot="demo-8"
          size="large"
          type="word-border-bounce"
        />
      </juri>
    </div>
  </div>
</template>

<script>
  import Juri from 'vue-juri';
  import GithubCat from './GithubCat';
  import size from 'raw-loader!./docs/size.md';
  import circledotmoving from 'raw-loader!./docs/circledotmoving.md';
  import circlegradient from 'raw-loader!./docs/circlegradient.md';
  import circleline from 'raw-loader!./docs/circleline.md';
  import circlequarter from 'raw-loader!./docs/circlequarter.md';
  import circledotcolor from 'raw-loader!./docs/circledotcolor.md';
  import word from 'raw-loader!./docs/word.md';
  import wordcover from 'raw-loader!./docs/wordcover.md';
  import wordborderbounce from 'raw-loader!./docs/wordborderbounce.md';

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
          circledotcolor,
          circledotmoving,
          circlegradient,
          circleline,
          circlequarter,
          word,
          wordcover,
          wordborderbounce
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
