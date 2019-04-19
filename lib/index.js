import Loading from './components/Loading';

const install = function (Vue, opts = {}) {
    if (install.installed) return;

    Vue.component(Loading.name, Loading);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default install;
