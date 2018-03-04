import LoadingCircle from './components/loading-circle.vue'
import LoadingCircleGradient from './components/loading-circle-gradient.vue'
import LoadingCircleDot from './components/loading-circle-dot.vue'
import LoadingCircleDotMoving from './components/loading-circle-dot-moving.vue'

const vueFunLoading = {
    install(Vue, options) {
        Vue.component(LoadingCircle.name, LoadingCircle)
        Vue.component(LoadingCircleGradient.name, LoadingCircleGradient)
        Vue.component(LoadingCircleDot.name, LoadingCircleDot)
        Vue.component(LoadingCircleDotMoving.name, LoadingCircleDotMoving)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vueFunLoading);
}

export default vueFunLoading