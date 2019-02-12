import Vue from 'vue'
import App from './App.vue'
import VueFunLoading from './../lib/index.js'
Vue.use(VueFunLoading)

new Vue({
  el: '#app',
  render: h => h(App)
})
