<template>
  <div id="app">
    <github-cat git-path="https://github.com/OwnGhy/vue-fun-loading" color="pink" />
    <h2>Examples</h2>
    <div class="demo">
      <juri :doc-list="docList" :expend-all="expend">
        <vue-fun-loading
          slot="demo-0"
        />
        <vue-fun-loading
          slot="demo-1"
          type="circle-dot-moving"
        />
        <vue-fun-loading
          slot="demo-2"
          type="circle-gradient"
        />
        <vue-fun-loading
          slot="demo-3"
          type="circle-line"
        />
        <vue-fun-loading
          slot="demo-4"
          type="circle-quarter"
        />
        <vue-fun-loading
          slot="demo-5"
          color="#00ad9f"
        />
      </juri>
    </div>
  </div>
</template>

<script>
  import Juri from 'vue-juri';
  import GithubCat from './GithubCat';
  import circledot from 'raw-loader!./docs/circledot.md';
  import circledotmoving from 'raw-loader!./docs/circledotmoving.md';
  import circlegradient from 'raw-loader!./docs/circlegradient.md';
  import circleline from 'raw-loader!./docs/circleline.md';
  import circlequarter from 'raw-loader!./docs/circlequarter.md';
  import circledotcolor from 'raw-loader!./docs/circledotcolor.md';

  export default {
    name: 'vue-fun-loading-demo',
    components: {
      Juri,
      GithubCat
    },
    data() {
      return {
        expend: false,
        docList: [circledot, circledotmoving, circlegradient, circleline, circlequarter, circledotcolor]
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
  .demo {
  }
</style>
