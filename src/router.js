import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'login-page',
            component: () =>
                import(/* webpackChunkName: "login" */ '@/views/auth/Main.vue'),

            children: [
                {
                    path: '/',
                    name: 'login-page',
                    component: () =>
                        import(/* webpackChunkName: "forgot-password" */ '@/views/auth/Login.vue'),
                },
                {
                    path: '/forgot-password',
                    name: 'forgot-page',
                    component: () =>
                        import(/* webpackChunkName: "forgot-password" */ '@/views/auth/ForgotPassword.vue'),
                },
                {
                    path: '/reset-password',
                    name: 'reset-password-page',
                    component: () =>
                        import(/* webpackChunkName: "reset-password" */ '@/views/auth/ResetPassword.vue'),
                },
                {
                    path: '/email-sent',
                    name: 'email-sent-page',
                    component: () =>
                        import(/* webpackChunkName: "email-sent" */ '@/views/auth/EmailSent.vue'),
                },
            ],
        },

        {
            path: '/contact-us',
            name: 'contact-us-page',
            component: () =>
                import(/* webpackChunkName: "contact-us" */ '@/views/ContactUs.vue'),
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ './views/dashboard/Main.vue'),
        },
        {
            path: '/customer-profile',
            name: 'profile',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "profile" */ './views/profile/Main.vue'),

            children: [
                {
                    path: '/all-customer',
                    name: 'all-customer',
                    component: () =>
                        import(/* webpackChunkName: "customer" */ './views/profile/AllCustomer.vue'),
                },

                {
                    path: '/advance-search',
                    name: 'advance-search',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import(/* webpackChunkName: "advance-search" */ './views/profile/AdvanceSearch.vue'),
                },
            ],
        },
        {
            path: '/chart',
            name: 'chart',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "profile" */ './views/Chart.vue'),
        },
    ],
})
