import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import vbclass from 'vue-body-class'
import Toasted from 'vue-toasted'
/*import VueMeta from 'vue-meta'*/

require('@/auto-import.js')

Vue.use(BootstrapVue)
// you can also pass options, check options reference below
Vue.use(Toasted, {
    position: 'bottom-right',
    theme: 'bubble',
    duration: 5000,
    iconPack: 'material',
})

Vue.use(vbclass, router)
Vue.config.productionTip = false

new Vue({
    router: router,
    store,
    render: (h) => h(App),
    methods: {
        checkMeta() {
            // const title = document.title
            // document.title = ''
            document.title = 'Idenfo | ' + this.$route.meta.title
        },
    },
    watch: {
        $route: function() {
            this.checkMeta()
        },
    },
}).$mount('#app')
