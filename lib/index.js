import LoadingCircle from './components/loading-circle.vue'
import LoadingCircleGradient from './components/loading-circle-gradient.vue'

const vueFunLoading = {
    install(Vue, options) {
        Vue.component(LoadingCircle.name, LoadingCircle)
        Vue.component(LoadingCircleGradient.name, LoadingCircleGradient)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vueFunLoading);
}

export default vueFunLoading
