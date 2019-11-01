import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
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
        component: () =>
            import(/* webpackChunkName: "login" */ '@/views/home/Main.vue'),

        children: [
            {
                path: '/',
                name: 'home',
                component: () =>
                    import(/* webpackChunkName: "login" */ '@/views/home/Main.vue'),
                meta: {
                    title: 'Home',
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
            import(/* webpackChunkName: "contact-us" */ '@/views/contact-us/Main.vue'),
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
        meta: {
            title: 'Products | List',
        },
    },
    {
        path: '/products/:id',
        name: 'product.view',
        component: () =>
            import(/* webpackChunkName: "dashboard-alerts" */ '@/views/products/ProductView.vue'),
        meta: {
            title: 'Products | View',
        },
    },
    {
        path: '/orders',
        name: 'order.list',
        component: () =>
            import(/* webpackChunkName: "dashboard-alerts" */ '@/views/orders/OrderMain.vue'),
        meta: {
            forAuth: true,
            title: 'Orders | View',
        },
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: () =>
            import(/* webpackChunkName: "dashboard-alerts" */ '@/views/checkout/Main.vue'),
        meta: {
            title: 'Checkout',
            forAuth: true,
        },
    },
]

// Create the router instance
const router = new Router({
    mode: 'history',
    routes, // short for `routes: routes`
    app,
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.forVisitors)) {
    } else if (to.matched.some((record) => record.meta.forAuth)) {
        if (
            !localStorage.getItem('token') ||
            localStorage.getItem('token') == 'null'
        ) {
            next({
                name: from.name,
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
