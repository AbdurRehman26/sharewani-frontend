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
                        bodyClass: 'auth-body',
                    },
                },
                {
                    path: 'auth/forgot-password',
                    name: 'forgot-page',
                    component: () =>
                        import(/* webpackChunkName: "forgot-password" */ '@/views/auth/ForgotPassword.vue'),
                    meta: {
                        noSidebar: true,
                        bodyClass: 'auth-body',
                    },
                },
                {
                    path: 'auth/reset-password',
                    name: 'reset-password-page',
                    component: () =>
                        import(/* webpackChunkName: "reset-password" */ '@/views/auth/ResetPassword.vue'),
                    meta: {
                        noSidebar: true,
                        bodyClass: 'auth-body',
                    },
                },
                {
                    path: 'auth/email-sent',
                    name: 'email-sent-page',
                    component: () =>
                        import(/* webpackChunkName: "email-sent" */ '@/views/auth/EmailSent.vue'),
                    meta: {
                        noSidebar: true,
                        bodyClass: 'auth-body',
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
                bodyClass: 'auth-body',
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
                    name: 'dashboard-alerts',
                    component: () =>
                        import(/* webpackChunkName: "dashboard-alerts" */ '@/views/dashboard/Alert.vue'),
                },
                {
                    path: 'alerts',
                    name: 'dashboard-alerts',
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
                    path: 'customer-statistics',
                    name: 'dashboard-reporting-page',
                    component: () =>
                        import(/* webpackChunkName: "dashboard-reporting" */ '@/views/dashboard/Statistics.vue'),
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
                    path: 'users',
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
            path: '/customer-profiles',
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
                    path: '/customer-profiles/all-customer',
                    name: 'all-customer',
                    component: () =>
                        import(/* webpackChunkName: "customer" */ './views/profile/AllCustomer.vue'),
                },

                {
                    path: '/customer-profiles/advance-search',
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
            path: '/customer-profiles/customer-information',
            name: 'customer-details',
            component: () =>
                import(/* webpackChunkName: "customer-details" */ './views/profile/profile-details/Main.vue'),
            children: [
                {
                    path: '/',
                    name: 'customer-information',
                    component: () =>
                        import(/* webpackChunkName: "customer-information" */ './views/profile/profile-details/CustomerInformation.vue'),
                    meta: {
                        name: 'Customer Profile',
                    },
                },
                {
                    path: '/customer-profiles/name-screening',
                    name: 'screening-customer',
                    component: () =>
                        import(/* webpackChunkName: "screening-customer" */ './views/profile/profile-details/ScreeningCustomer.vue'),
                    meta: {
                        name: 'Name Screening',
                    },
                },

                {
                    path: '/customer-profiles/document-verification',
                    name: 'document-verification',
                    component: () =>
                        import(/* webpackChunkName: "document-verification" */ './views/profile/profile-details/DocumentVerification.vue'),
                    meta: {
                        name: 'Document Verification',
                    },
                },
                {
                    path: '/customer-profiles/kyc-risk-rating',
                    name: 'kyc-risk-rating',
                    component: () =>
                        import(/* webpackChunkName: "kyc-risk-rating" */ './views/profile/profile-details/KYCRiskRating.vue'),
                    meta: {
                        name: 'KYC Risk Rating',
                    },
                },
                {
                    path: '/customer-profiles/activity-timeline',
                    name: 'activity-timeline',
                    component: () =>
                        import(/* webpackChunkName: "activity-timeline" */ './views/profile/profile-details/ActivityTimeline.vue'),
                    meta: {
                        name: 'Activity Timeline',
                    },
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
                    path: '/',
                    name: 'idenfo-engine',
                    component: () =>
                        import(/* webpackChunkName: "idenfo-engine" */ './views/configuration/idenfo-engine/Main.vue'),
                    children: [
                        {
                            path: '/',
                            name: 'idenfo-engine',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/idenfo-engine/RiskFactor.vue'),
                        },
                        {
                            path: '/configuration/idenfo-engine/risk',
                            name: 'conf-risk',
                            component: () =>
                                import(/* webpackChunkName: "riskFactor" */ './views/configuration/idenfo-engine/RiskFactor.vue'),
                        },
                        {
                            path: '/configuration/idenfo-engine/',
                            name: 'idenfo-engine',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/idenfo-engine/RiskFactor.vue'),
                        },
                        {
                            path: '/configuration/idenfo-engine/risk-rating',
                            name: 'risk-rating',
                            component: () =>
                                import(/* webpackChunkName: "riskRating" */ './views/configuration/idenfo-engine/RiskRating.vue'),
                        },
                        {
                            path:
                                '/configuration/idenfo-engine/document-verification-factor',
                            name: 'document-verification-factor',
                            component: () =>
                                import(/* webpackChunkName: "riskRating" */ './views/configuration/idenfo-engine/DocumentVerificationFactors.vue'),
                        },

                        {
                            path:
                                '/configuration/idenfo-engine/name-screen-score',
                            name: 'name-screen-score',
                            component: () =>
                                import(/* webpackChunkName: "riskRating" */ './views/configuration/idenfo-engine/NameScreenScore.vue'),
                        },
                        {
                            path: '/configuration/idenfo-engine/nationality',
                            name: 'conf-nationality',
                            component: () =>
                                import(/* webpackChunkName: "riskRating" */ './views/configuration/idenfo-engine/Nationality.vue'),
                        },
                        {
                            path: '/configuration/idenfo-engine/country',
                            name: 'conf-country',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/idenfo-engine/Country.vue'),
                        },
                        {
                            path: '/configuration/idenfo-engine/state',
                            name: 'state-factor',
                            component: () =>
                                import(/* webpackChunkName: "stateFactor" */ './views/configuration/idenfo-engine/StateFactor.vue'),
                        },
                        {
                            path: '/configuration/idenfo-engine/work',
                            name: 'work-factor',
                            component: () =>
                                import(/* webpackChunkName: "workFactor" */ './views/configuration/idenfo-engine/WorkFactor.vue'),
                        },
                        {
                            path: '/configuration/idenfo-engine/industry',
                            name: 'industry-factor',
                            component: () =>
                                import(/* webpackChunkName: "industryFactor" */ './views/configuration/idenfo-engine/IndustryFactor.vue'),
                            meta: {
                                responsiveMenuItem: true,
                            },
                        },
                        {
                            path: '/configuration/idenfo-engine/product',
                            name: 'productFactor',
                            component: () =>
                                import(/* webpackChunkName: "productFactor" */ './views/configuration/idenfo-engine/ProductFactor.vue'),
                            meta: {
                                responsiveMenuItem: true,
                            },
                        },
                        {
                            path: '/configuration/idenfo-engine/relationship',
                            name: 'relationship-factor',
                            component: () =>
                                import(/* webpackChunkName: "relationshipFactor" */ './views/configuration/idenfo-engine/RelationshipPanel.vue'),
                            meta: {
                                responsiveMenuItem: true,
                            },
                        },
                        {
                            path: '/configuration/idenfo-engine/channel',
                            name: 'channel-factor',
                            component: () =>
                                import(/* webpackChunkName: "channelFactor" */ './views/configuration/idenfo-engine/ChannelFactor.vue'),
                            meta: {
                                responsiveMenuItem: true,
                            },
                        },
                        {
                            path:
                                '/configuration/idenfo-engine/purpose-of-action',
                            name: 'purpose-action',
                            component: () =>
                                import(/* webpackChunkName: "riskRating" */ './views/configuration/idenfo-engine/PurposeAction.vue'),
                            meta: {
                                responsiveMenuItem: true,
                            },
                        },
                    ],
                },
                {
                    path: '/configuration/screening-data/',
                    name: 'screening-data',
                    component: () =>
                        import(/* webpackChunkName: "customer" */ './views/configuration/screening-data/Main.vue'),
                    children: [
                        {
                            path: '/configuration/screening-data/gender',
                            name: 'gender',
                            component: () =>
                                import(/* webpackChunkName: "riskFactor" */ './views/configuration/screening-data/Gender.vue'),
                        },
                        {
                            path: '/',
                            name: 'gender',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/screening-data/Gender.vue'),
                        },
                        {
                            path: '/configuration/screening-data/',
                            name: 'gender',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/screening-data/Gender.vue'),
                        },
                        {
                            path: '/configuration/screening-data/deceased',
                            name: 'deceased',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/screening-data/Deceased.vue'),
                        },
                        {
                            path: '/configuration/screening-data/record-status',
                            name: 'record-status',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/screening-data/RecordStatus.vue'),
                        },
                        {
                            path: '/configuration/screening-data/name-type',
                            name: 'name-type',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/screening-data/NameType.vue'),
                        },
                        {
                            path: '/configuration/screening-data/name-type',
                            name: 'name-type',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/screening-data/NameType.vue'),
                        },
                        {
                            path: '/configuration/screening-data/descprition-1',
                            name: 'descprition-1',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/screening-data/Descprition1.vue'),
                        },
                        {
                            path: '/configuration/screening-data/descprition-2',
                            name: 'descprition-2',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/screening-data/Descprition2.vue'),
                        },
                        {
                            path: '/configuration/screening-data/descprition-3',
                            name: 'descprition-3',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/screening-data/Descprition3.vue'),
                        },
                        {
                            path: '/configuration/screening-data/role-type',
                            name: 'role-type',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/screening-data/RoleType.vue'),
                        },
                        {
                            path: '/configuration/screening-data/occupation',
                            name: 'occupation',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/screening-data/Occupation.vue'),
                        },
                        {
                            path: '/configuration/screening-data/data-type',
                            name: 'data-type',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/screening-data/DataType.vue'),
                            meta: {
                                responsiveMenuItem: true,
                            },
                        },
                        {
                            path:
                                '/configuration/screening-data/sanction-reference',
                            name: 'sanction-reference',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/screening-data/SactionReference.vue'),
                            meta: {
                                responsiveMenuItem: true,
                            },
                        },
                        {
                            path: '/configuration/screening-data/country',
                            name: 'screening-country',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/screening-data/Countries.vue'),
                            meta: {
                                responsiveMenuItem: true,
                            },
                        },
                        {
                            path: '/configuration/screening-data/country-type',
                            name: 'screening-country-type',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/screening-data/CountryType.vue'),
                            meta: {
                                responsiveMenuItem: true,
                            },
                        },
                        {
                            path:
                                '/configuration/screening-data/identification',
                            name: 'screening-indentification',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/screening-data/Identification.vue'),
                            meta: {
                                responsiveMenuItem: true,
                            },
                        },
                        {
                            path:
                                '/configuration/screening-data/relationship-type',
                            name: 'screening-relationship',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/screening-data/Relationship.vue'),
                            meta: {
                                responsiveMenuItem: true,
                            },
                        },
                    ],
                },
                {
                    path: '/configuration/manual-review/',
                    name: 'manual-review',
                    component: () =>
                        import(/* webpackChunkName: "customer" */ './views/configuration/ManualReviewSwitch.vue'),
                },
                {
                    path: '/configuration/form-builder/',
                    name: 'branding',
                    component: () =>
                        import(/* webpackChunkName: "builder" */ './views/configuration/FormBuilder.vue'),
                },
                {
                    path: '/configuration/branding/',
                    name: 'branding',
                    component: () =>
                        import(/* webpackChunkName: "customer" */ './views/configuration/Branding.vue'),
                },
                {
                    path: '/configuration/ocr-configuration/',
                    name: 'ocr-configuration',
                    component: () =>
                        import(/* webpackChunkName: "builder" */ './views/configuration/OcrConfiguration.vue'),
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
