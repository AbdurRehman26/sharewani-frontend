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
                    meta: {
                        noSidebar: true,
                    },
                },
                {
                    path: '/forgot-password',
                    name: 'forgot-page',
                    component: () =>
                        import(/* webpackChunkName: "forgot-password" */ '@/views/auth/ForgotPassword.vue'),
                    meta: {
                        noSidebar: true,
                    },
                },
                {
                    path: '/reset-password',
                    name: 'reset-password-page',
                    component: () =>
                        import(/* webpackChunkName: "reset-password" */ '@/views/auth/ResetPassword.vue'),
                    meta: {
                        noSidebar: true,
                    },
                },
                {
                    path: '/email-sent',
                    name: 'email-sent-page',
                    component: () =>
                        import(/* webpackChunkName: "email-sent" */ '@/views/auth/EmailSent.vue'),
                    meta: {
                        noSidebar: true,
                    },
                },
            ],
        },

        {
            path: '/contact-us',
            name: 'contact-us-page',
            component: () =>
                import(/* webpackChunkName: "contact-us" */ '@/views/ContactUs.vue'),
            meta: {
                noSidebar: true,
            },
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () =>
                import(/* webpackChunkName: "dashboard-alerts" */ '@/views/dashboard/Main.vue'),
            children: [
                {
                    path: '/',
                    name: 'dashbaord-alerts',
                    component: () =>
                        import(/* webpackChunkName: "dashboard-alerts" */ '@/views/dashboard/Alert.vue'),
                },
                {
                    path: 'dashbaord-activity',
                    name: 'dashboard-activity-page',
                    component: () =>
                        import(/* webpackChunkName: "dashboard-activity" */ '@/views/dashboard/Activity.vue'),
                },
                {
                    path: 'dashbaord-reporting',
                    name: 'dashboard-reporting-page',
                    component: () =>
                        import(/* webpackChunkName: "dashboard-reporting" */ '@/views/dashboard/Reporting.vue'),
                },
            ],
        },
        {
            path: '/system-users',
            name: 'systems',
            component: () =>
                import(/* webpackChunkName: "system-users" */ '@/views/systemusers/Main.vue'),
            children: [
                {
                    path: '/',
                    name: 'system-users',
                    component: () =>
                        import(/* webpackChunkName: "system-users" */ '@/views/systemusers/Users.vue'),
                },
                {
                    path: 'roles',
                    name: 'roles-and-permission',
                    component: () =>
                        import(/* webpackChunkName: "roles" */ '@/views/systemusers/Roles.vue'),
                },
                {
                    path: 'branches',
                    name: 'branches-page',
                    component: () =>
                        import(/* webpackChunkName: "branches" */ '@/views/systemusers/Branches.vue'),
                },
                {
                    path: 'application-access',
                    name: 'application-access-page',
                    component: () =>
                        import(/* webpackChunkName: "branches" */ '@/views/systemusers/Access.vue'),
                },
            ],
        },
        {
            path: '/system-logs',
            name: 'systems-logs',
            component: () =>
                import(/* webpackChunkName: "system-logs" */ '@/views/systemlogs/Main.vue'),
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
                    path: '/',
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
            path: '/customer-information',
            name: 'customer-details',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "customer-details" */ './views/profile/profile-details/Main.vue'),
            children: [
                {
                    path: '/',
                    name: 'customer-information',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import(/* webpackChunkName: "customer-information" */ './views/profile/profile-details/CustomerInformation.vue'),
                },
                {
                    path: '/screening-customer',
                    name: 'screening-customer',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import(/* webpackChunkName: "screening-customer" */ './views/profile/profile-details/ScreeningCustomer.vue'),
                },

                {
                    path: '/document-verification',
                    name: 'document-verification',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import(/* webpackChunkName: "document-verification" */ './views/profile/profile-details/DocumentVerification.vue'),
                },
            ],
        },
        {
            path: '/configuration',
            name: 'configuration',
            component: () =>
                import(/* webpackChunkName: "system-logs" */ '@/views/configuration/Main.vue'),
            children: [
                {
                    path: '/',
                    name: 'idenfo-engine',
                    component: () =>
                        import(/* webpackChunkName: "customer" */ './views/configuration/IdenfoEngine/Main.vue'),
                    children: [
                        {
                            path: '/',
                            name: 'nationality',
                            component: () =>
                                import(/* webpackChunkName: "customer" */ './views/configuration/IdenfoEngine/Nationality.vue'),
                        },
                        {
                            path: '/configuration/workfactor',
                            name: 'workfactor',
                            component: () =>
                                import(/* webpackChunkName: "customer" */ './views/configuration/IdenfoEngine/WorkFactor.vue'),
                        },
                        {
                            path: '/configuration/industryfactor',
                            name: 'industryfactor',
                            component: () =>
                                import(/* webpackChunkName: "customer" */ './views/configuration/IdenfoEngine/IndustryFactor.vue'),
                        },
                    ],
                },
            ],
        },
    ],
})
