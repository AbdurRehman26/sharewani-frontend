import Vue from 'vue'
import Vuex from 'vuex'
import shared from './modules/shared'
import auth from './modules/auth/'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        shared,
        auth,
    },
    strict: debug,
})
