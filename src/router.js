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
                        import(/* webpackChunkName: "login" */ '@/views/auth/Login.vue'),
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
                {
                    path: '/contact-us',
                    name: 'contact-us-page',
                    component: () =>
                        import(/* webpackChunkName: "contact-us" */ '@/views/ContactUs.vue'),
                },
            ],
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () =>
                import(/* webpackChunkName: "about" */ '@//views/dashboard/Main.vue'),
            children: [
                {
                    path: '/',
                    name: 'alerts',
                    component: () =>
                        import(/* webpackChunkName: "login" */ '@/views/dashboard/Alert.vue'),
                },
            ],
        },
        {
            path: '/customer-profile',
            name: 'profile',
            component: () =>
                import(/* webpackChunkName: "profile" */ './views/profile/Main.vue'),
        },
    ],
})
