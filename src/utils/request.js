import axios from 'axios'
import { getToken } from '@/utils/auth'
import store from '@/store/index'
import Vue from 'vue'

// Create axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_ROOT_API,
    timeout: 10000, // Request timeout
})

// Request intercepter
service.interceptors.request.use(
    (config) => {
        const token = getToken()

        if (token) {
            config.headers['Authorization'] = 'Bearer ' + getToken() // Set JWT token
        }

        return config
    },
    (error) => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// response pre-processing
service.interceptors.response.use(
    (response) => {
        if (response.headers.authorization) {
            response.data.token = response.headers.authorization
        }

        if (response.data.error && response.data.error == 'Unauthorized') {
            store.commit('setToken', null)
            store.commit('setUser', null)

            Vue.toasted.error('Please login in order to continue')
        }

        if (response.data.message) {
            Vue.toasted.success(response.data.message)
        }

        return response.data
    },
    (error) => {
        if (error.response.status == 422) {
            const errors = error.response.data.errors
            for (var i in errors) {
                Vue.toasted.error(errors[i][0], {
                    type: 'error',
                })
                return false
            }

            Vue.toasted.error(error.response.data.message, {
                type: 'error',
            })
        }

        Vue.toasted.error(error.response.data.message, {
            type: 'error',
        })
    }
)

export default service
