import Vue from 'vue';
import App from './App.vue';
import VueFunLoading from './../lib/index';

Vue.use(VueFunLoading);

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    render: (h) => h(App)
}).$mount(root);
