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
                    path: 'auth/forgot-password',
                    name: 'forgot-page',
                    component: () =>
                        import(/* webpackChunkName: "forgot-password" */ '@/views/auth/ForgotPassword.vue'),
                    meta: {
                        noSidebar: true,
                    },
                },
                {
                    path: 'auth/reset-password',
                    name: 'reset-password-page',
                    component: () =>
                        import(/* webpackChunkName: "reset-password" */ '@/views/auth/ResetPassword.vue'),
                    meta: {
                        noSidebar: true,
                    },
                },
                {
                    path: 'auth/email-sent',
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
                    path: 'activity',
                    name: 'dashboard-activity-page',
                    component: () =>
                        import(/* webpackChunkName: "dashboard-activity" */ '@/views/dashboard/Activity.vue'),
                },
                {
                    path: 'reporting',
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
                import(/* webpackChunkName: "system-users" */ '@/views/system-users/Main.vue'),
            children: [
                {
                    path: '/',
                    name: 'system-users',
                    component: () =>
                        import(/* webpackChunkName: "system-users" */ '@/views/system-users/Users.vue'),
                },
                {
                    path: 'roles',
                    name: 'roles-and-permission',
                    component: () =>
                        import(/* webpackChunkName: "roles" */ '@/views/system-users/Roles.vue'),
                },
                {
                    path: 'data-segments',
                    name: 'branches-page',
                    component: () =>
                        import(/* webpackChunkName: "branches" */ '@/views/system-users/DataSegments.vue'),
                },
                {
                    path: 'application-access',
                    name: 'application-access-page',
                    component: () =>
                        import(/* webpackChunkName: "branches" */ '@/views/system-users/Access.vue'),
                },
            ],
        },
        {
            path: '/system-logs',
            name: 'systems-logs',
            component: () =>
                import(/* webpackChunkName: "system-logs" */ '@/views/system-logs/Main.vue'),
        },
        {
            path: '/customers',
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
            component: () =>
                import(/* webpackChunkName: "customer-details" */ './views/profile/profile-details/Main.vue'),
            children: [
                {
                    path: '/',
                    name: 'customer-information',
                    component: () =>
                        import(/* webpackChunkName: "customer-information" */ './views/profile/profile-details/CustomerInformation.vue'),
                },
                {
                    path: '/screening-customer',
                    name: 'screening-customer',
                    component: () =>
                        import(/* webpackChunkName: "screening-customer" */ './views/profile/profile-details/ScreeningCustomer.vue'),
                },

                {
                    path: '/document-verification',
                    name: 'document-verification',
                    component: () =>
                        import(/* webpackChunkName: "document-verification" */ './views/profile/profile-details/DocumentVerification.vue'),
                },
                {
                    path: '/kyc-risk-rating',
                    name: 'kyc-risk-rating',
                    component: () =>
                        import(/* webpackChunkName: "kyc-risk-rating" */ './views/profile/profile-details/KYCRiskRating.vue'),
                },
                {
                    path: '/activity-timeline',
                    name: 'activity-timeline',
                    component: () =>
                        import(/* webpackChunkName: "activity-timeline" */ './views/profile/profile-details/ActivityTimeline.vue'),
                },
            ],
        },
        {
            path: '/configuration',
            name: 'configuration',
            component: () =>
                import(/* webpackChunkName: "configuration" */ '@/views/configuration/Main.vue'),
            children: [
                {
                    path: '/configuration',
                    name: 'idenfo-engine',
                    component: () =>
                        import(/* webpackChunkName: "idenfo-engine" */ './views/configuration/idenfo-engine/Main.vue'),
                    children: [
                        {
                            path: '/',
                            name: 'nationality',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/idenfo-engine/Nationality.vue'),
                        },
                        {
                            path: '/configuration/idenfo-engine/',
                            name: 'nationality',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/idenfo-engine/Nationality.vue'),
                        },

                        {
                            path: '/configuration/idenfo-engine/work',
                            name: 'workFactor',
                            component: () =>
                                import(/* webpackChunkName: "workFactor" */ './views/configuration/idenfo-engine/WorkFactor.vue'),
                        },
                        {
                            path: '/configuration/idenfo-engine/industry',
                            name: 'industryFactor',
                            component: () =>
                                import(/* webpackChunkName: "industryFactor" */ './views/configuration/idenfo-engine/IndustryFactor.vue'),
                        },
                        {
                            path: '/configuration/idenfo-engine/product',
                            name: 'productFactor',
                            component: () =>
                                import(/* webpackChunkName: "productFactor" */ './views/configuration/idenfo-engine/ProductFactor.vue'),
                        },
                        {
                            path: '/configuration/idenfo-engine/state',
                            name: 'stateFactor',
                            component: () =>
                                import(/* webpackChunkName: "stateFactor" */ './views/configuration/idenfo-engine/StateFactor.vue'),
                        },
                        {
                            path: '/configuration/idenfo-engine/relationship',
                            name: 'relationshipFactor',
                            component: () =>
                                import(/* webpackChunkName: "relationshipFactor" */ './views/configuration/idenfo-engine/RelationshipPanel.vue'),
                        },
                        {
                            path: '/configuration/idenfo-engine/channel',
                            name: 'channelFactor',
                            component: () =>
                                import(/* webpackChunkName: "channelFactor" */ './views/configuration/idenfo-engine/ChannelFactor.vue'),
                        },
                        {
                            path: '/configuration/idenfo-engine/risk',
                            name: 'riskFactor',
                            component: () =>
                                import(/* webpackChunkName: "riskFactor" */ './views/configuration/idenfo-engine/RiskFactor.vue'),
                        },
                        {
                            path: '/configuration/idenfo-engine/risk-rating',
                            name: 'riskRating',
                            component: () =>
                                import(/* webpackChunkName: "riskRating" */ './views/configuration/idenfo-engine/RiskRating.vue'),
                        },
                        {
                            path:
                                '/configuration/idenfo-engine/document-verification-factor',
                            name: 'documentVerificationFactors',
                            component: () =>
                                import(/* webpackChunkName: "riskRating" */ './views/configuration/idenfo-engine/DocumentVerificationFactors.vue'),
                        },
                        {
                            path:
                                '/configuration/idenfo-engine/name-screen-score',
                            name: 'nameScreenScore',
                            component: () =>
                                import(/* webpackChunkName: "riskRating" */ './views/configuration/idenfo-engine/NameScreenScore.vue'),
                        },
                    ],
                },
                {
                    path: '/configuration/import-data/',
                    name: 'import-data',
                    component: () =>
                        import(/* webpackChunkName: "customer" */ './views/configuration/ImportData.vue'),
                },
                {
                    path: '/configuration/manual-review/',
                    name: 'manual-review',
                    component: () =>
                        import(/* webpackChunkName: "customer" */ './views/configuration/ManualReviewSwitch.vue'),
                },
                {
                    path: '/configuration/branding/',
                    name: 'branding',
                    component: () =>
                        import(/* webpackChunkName: "customer" */ './views/configuration/Branding.vue'),
                },
            ],
        },

        {
            path: '/register-customer',
            name: 'customer-registration',
            component: () =>
                import(/* webpackChunkName: "customer-registration" */ './views/register-customer/Main.vue'),
            children: [
                {
                    path: '/',
                    name: 'upload-document',
                    component: () =>
                        import(/* webpackChunkName: "upload-document" */ './views/register-customer/UploadDocuments.vue'),
                    meta: {
                        name: 'Register Customers',
                        sessionStep: '1',
                    },
                },
                {
                    path: '/register-customer/upload-document',
                    name: 'upload-document',
                    component: () =>
                        import(/* webpackChunkName: "upload-document" */ './views/register-customer/UploadDocuments.vue'),
                    meta: {
                        name: 'Register Customers',
                        sessionStep: '1',
                    },
                },
                {
                    path: '/register-customer/record-video',
                    name: 'record-video',
                    component: () =>
                        import(/* webpackChunkName: "record-video" */ './views/register-customer/RecordVideo.vue'),
                    meta: {
                        name: 'Register Customers',
                        sessionStep: '2',
                    },
                },
                {
                    path: '/register-customer/setup-profile',
                    name: 'setup-profile',
                    component: () =>
                        import(/* webpackChunkName: "setup-profile" */ './views/register-customer/SetupProfile.vue'),
                    meta: {
                        name: 'Register Customers',
                        sessionStep: '3',
                    },
                },
                {
                    path: '/register-customer/account-info',
                    name: 'account-info',
                    component: () =>
                        import(/* webpackChunkName: "account-info" */ './views/register-customer/AccountInfo.vue'),
                    meta: {
                        name: 'Register Customers',
                        sessionStep: '4',
                    },
                },
                {
                    path: '/register-customer/finish',
                    name: 'finish',
                    component: () =>
                        import(/* webpackChunkName: "finish" */ './views/register-customer/Finish.vue'),
                    meta: {
                        name: 'Register Customers',
                        sessionStep: '5',
                    },
                },
            ],
        },

        {
            path: '/public-registration',
            name: 'customer-registration',
            component: () =>
                import(/* webpackChunkName: "public-customer-registration" */ './views/register-customer/Main.vue'),
            children: [
                {
                    path: '/',
                    name: 'public-registration-upload-document',
                    component: () =>
                        import(/* webpackChunkName: "public-registration-upload-document" */ './views/register-customer/UploadDocuments.vue'),
                    meta: {
                        name: 'Online Account Opening Application',
                        sessionStep: '1',
                        noSidebar: true,
                        publicRegistration: true,
                    },
                },
                {
                    path: '/public-registration/upload-document',
                    name: 'public-registration-upload-document',
                    component: () =>
                        import(/* webpackChunkName: "public-registration-upload-document" */ './views/register-customer/UploadDocuments.vue'),
                    meta: {
                        name: 'Online Account Opening Application',
                        sessionStep: '1',
                        noSidebar: true,
                        publicRegistration: true,
                    },
                },
                {
                    path: '/public-registration/record-video',
                    name: 'public-registration-record-video',
                    component: () =>
                        import(/* webpackChunkName: "public-registration-record-video" */ './views/register-customer/RecordVideo.vue'),
                    meta: {
                        name: 'Online Account Opening Application',
                        sessionStep: '2',
                        noSidebar: true,
                        publicRegistration: true,
                    },
                },
                {
                    path: '/public-registration/setup-profile',
                    name: 'public-registration-setup-profile',
                    component: () =>
                        import(/* webpackChunkName: "public-registration-setup-profile" */ './views/register-customer/SetupProfile.vue'),
                    meta: {
                        name: 'Online Account Opening Application',
                        sessionStep: '3',
                        noSidebar: true,
                        publicRegistration: true,
                    },
                },
                {
                    path: '/public-registration/account-info',
                    name: 'public-registration-account-info',
                    component: () =>
                        import(/* webpackChunkName: "public-registration-account-info" */ './views/register-customer/AccountInfo.vue'),
                    meta: {
                        name: 'Online Account Opening Application',
                        sessionStep: '4',
                        noSidebar: true,
                        publicRegistration: true,
                    },
                },
                {
                    path: '/public-registration/finish',
                    name: 'public-registration-finish',
                    component: () =>
                        import(/* webpackChunkName: "public-registration-finish" */ './views/register-customer/Finish.vue'),
                    meta: {
                        name: 'Online Account Opening Application',
                        sessionStep: '5',
                        noSidebar: true,
                        publicRegistration: true,
                    },
                },
            ],
        },
    ],
})
