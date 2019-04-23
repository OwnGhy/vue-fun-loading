import VueFunLoading from './components/VueFunLoading';

const install = function (Vue, opts = {}) {
    if (install.installed) return;

    Vue.component(VueFunLoading.name, VueFunLoading);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default install;
