import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        /*404 Page*/
        {
            name: '/404',
            path: '*',
            components: {
                default: () =>
                    import(/* webpackChunkName: "404" */ '@/views/404/Main.vue'),
            },

            meta: {
                title: '404 Not Found',
                bodyClass: 'not-found-page',
            },
        },
        {
            path: '/',
            name: 'home',
            component: () =>
                import(/* webpackChunkName: "login" */ '@/views/home/Main.vue'),

            children: [
                {
                    path: '/',
                    name: 'home',
                    component: () =>
                        import(/* webpackChunkName: "login" */ '@/views/home/Main.vue'),
                    meta: {
                        title: 'Login',
                        noSidebar: true,
                        bodyClass: 'auth-body',
                    },
                },
            ],
        },

        {
            path: '/contact-us',
            name: 'contact-us',
            component: () =>
                import(/* webpackChunkName: "contact-us" */ '@/views/ContactUs.vue'),
            meta: {
                title: 'Contact Us',
                noSidebar: true,
                bodyClass: 'auth-body',
            },
        },
        {
            path: '/products',
            name: 'product.list',
            component: () =>
                import(/* webpackChunkName: "dashboard-alerts" */ '@/views/products/ProductMain.vue'),
            meta: {},
        },
        {
            path: '/products/:id',
            name: 'product.view',
            component: () =>
                import(/* webpackChunkName: "dashboard-alerts" */ '@/views/products/ProductView.vue'),
            meta: {
                title: 'Insights | Alerts',
            },
        },
    ],
})
