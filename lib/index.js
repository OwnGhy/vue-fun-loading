import LoadingCircle from './components/loading-circle.vue'

const vueFunLoading = {
    install(Vue, options) {
        Vue.component(LoadingCircle.name, LoadingCircle)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vueFunLoading);
}

export default vueFunLoading
