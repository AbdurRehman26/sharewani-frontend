import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import vbclass from 'vue-body-class'
require('@/auto-import.js')

Vue.use(BootstrapVue)
Vue.use(vbclass, router)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
