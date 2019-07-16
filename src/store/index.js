import Vue from 'vue'
import Vuex from 'vuex'
import shared from './modules/shared'
import data from './modules/data/'
import dashboard from './modules/dashboard/'
import customers from './modules/customers/'
import systemsUsers from './modules/system-users/'
import systemLogs from './modules/system-logs/'
import configuration from './modules/configuration/'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        shared,
        data,
        dashboard,
        customers,
        systemsUsers,
        systemLogs,
        configuration,
    },
    strict: debug,
})
