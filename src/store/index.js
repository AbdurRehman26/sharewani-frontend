import Vue from 'vue'
import Vuex from 'vuex'
import shared from './modules/shared'
import dashboard from './modules/dashboard/'
import customers from './modules/customers/'
import systemsUsers from './modules/system-users/'
import systemLogs from './modules/system-logs/'
import configuration from './modules/configuration/'
import profile from './modules/profile/'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        shared,
        dashboard,
        customers,
        systemsUsers,
        systemLogs,
        configuration,
        profile,
    },
    strict: debug,
})
