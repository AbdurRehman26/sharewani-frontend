import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index'
import BootstrapVue from 'bootstrap-vue'
import vbclass from 'vue-body-class'
import Toasted from 'vue-toasted'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCartPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

require('@/auto-import.js')

Vue.use(BootstrapVue)
// you can also pass options, check options reference below
Vue.use(Toasted, {
    position: 'bottom-right',
    theme: 'bubble',
    duration: 5000,
    iconPack: 'material',
})

Vue.use(vbclass, router);
Vue.config.productionTip = false;

new Vue({
    router: router,
    store,
    render: (h) => h(App),
    methods: {
        checkMeta() {
            document.title =
                process.env.VUE_APP_TITLE + ' | ' + this.$route.meta.title
        },
        pageTop() {
            window.scrollTo(0, 0)
        },
    },
    watch: {
        $route: function() {
            this.checkMeta()
            this.pageTop()
        },
    },
}).$mount('#app')
