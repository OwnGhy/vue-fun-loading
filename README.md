# vue-fun-loading

[![NPM version](https://img.shields.io/npm/v/vue-fun-loading.svg?style=flat)](https://npmjs.com/package/vue-fun-loading)

A fun vue loading components.

## Install

```bash
npm install vue-fun-loading --save-dev
```

## Usage

In main.js, import and use vue-fun-loading:
```
import Vue from 'vue';
import App from './App.vue';
import VueFunLoading From 'vue-fun-loading';

Vue.use(VueFunLoading);

new Vue({
  el: '#app',
  render: h => h(App)
})
```

Then you can use vue-fun-loading anywhere.
```
<template>
  <div id="app">
      <vue-fun-loading size="small" color="#5872bc" type="circle-dot" />
  </div>
</template>
```

CDN: [UNPKG](https://unpkg.com/vue-fun-loading/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-fun-loading/)

## Notification
This tool is aim for summarizing loading and learning how to build a vue components.
It's not perfect but will update later, welcome any suggestion.

## License

MIT &copy; [ownghy](https://github.com/OwnGhy)
