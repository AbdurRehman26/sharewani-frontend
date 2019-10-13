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
                {
                    path: 'auth/forgot-password',
                    name: 'forgot-page',
                    component: () =>
                        import(/* webpackChunkName: "forgot-password" */ '@/views/auth/ForgotPassword.vue'),
                    meta: {
                        title: 'Forgot Password',
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
                        title: 'Reset Password',
                        noSidebar: true,
                        noFooterBar: true,
                        bodyClass: 'auth-body',
                    },
                },
                {
                    path: 'auth/create-password',
                    name: 'create-password-page',
                    component: () =>
                        import(/* webpackChunkName: "reset-password" */ '@/views/auth/CreatePassword.vue'),
                    meta: {
                        title: 'Create Password',
                        noSidebar: true,
                        noFooterBar: true,
                        bodyClass: 'auth-body',
                    },
                },
                {
                    path: 'auth/email-sent',
                    name: 'email-sent-page',
                    component: () =>
                        import(/* webpackChunkName: "email-sent" */ '@/views/auth/EmailSent.vue'),
                    meta: {
                        title: 'Check Your Inbox',
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
            name: 'products',
            component: () =>
                import(/* webpackChunkName: "dashboard-alerts" */ '@/views/products/Main.vue'),
            children: [
                {
                    path: '/',
                    name: 'products',
                    component: () =>
                        import(/* webpackChunkName: "dashboard-alerts" */ '@/views/products/Main.vue'),
                    meta: {
                        title: 'Insights | Alerts',
                    },
                },
                {
                    path: 'alerts',
                    name: 'dashboard-alerts',
                    component: () =>
                        import(/* webpackChunkName: "dashboard-alerts" */ '@/views/insights/Alert.vue'),
                    meta: {
                        title: 'Insights | Alerts',
                    },
                },
                {
                    path: 'activity-dashboard',
                    name: 'dashboard-activity-page',
                    component: () =>
                        import(/* webpackChunkName: "dashboard-activity" */ '@/views/insights/Activity.vue'),
                    meta: {
                        title: 'Insights | Activity Dashboard',
                    },
                },
                {
                    path: 'customer-statistics',
                    name: 'dashboard-reporting-page',
                    component: () =>
                        import(/* webpackChunkName: "dashboard-reporting" */ '@/views/insights/Statistics.vue'),
                    meta: {
                        title: 'Insights | Customer Statistics',
                    },
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
                    meta: {
                        title: 'System Users',
                    },
                },
                {
                    path: 'users',
                    name: 'system-users',
                    component: () =>
                        import(/* webpackChunkName: "system-users" */ '@/views/system-users/Users.vue'),
                    meta: {
                        title: 'System Users',
                    },
                },
                {
                    path: 'roles',
                    name: 'roles-and-permission',
                    component: () =>
                        import(/* webpackChunkName: "roles" */ '@/views/system-users/Roles.vue'),
                    meta: {
                        title: 'System Users | Roles & Permission',
                    },
                },
                {
                    path: 'data-segments',
                    name: 'branches-page',
                    component: () =>
                        import(/* webpackChunkName: "branches" */ '@/views/system-users/DataSegments.vue'),
                    meta: {
                        title: 'System Users | Data Segments',
                    },
                },
                {
                    path: 'application-access',
                    name: 'application-access-page',
                    component: () =>
                        import(/* webpackChunkName: "access" */ '@/views/system-users/Access.vue'),
                    meta: {
                        title: 'System Users | Application Access',
                    },
                },
            ],
        },
        {
            path: '/system-logs',
            name: 'systems-logs',
            component: () =>
                import(/* webpackChunkName: "system-logs" */ '@/views/system-logs/Main.vue'),
            meta: {
                title: 'System Logs',
            },
        },
        {
            path: '/customer-profiles',
            name: 'profile',

            component: () =>
                import(/* webpackChunkName: "profile" */ './views/customer-profiles/Main.vue'),

            children: [
                {
                    path: '/',
                    name: 'all-customer',
                    component: () =>
                        import(/* webpackChunkName: "customer" */ './views/customer-profiles/AllCustomer.vue'),
                    meta: {
                        title: 'Customer Profile | All Customers',
                    },
                },
                {
                    path: '/customer-profiles/all-customer',
                    name: 'all-customer',
                    component: () =>
                        import(/* webpackChunkName: "customer" */ './views/customer-profiles/AllCustomer.vue'),
                    meta: {
                        title: 'Customer Profile | All Customers',
                    },
                },

                {
                    path: '/customer-profiles/advance-search',
                    name: 'advance-search',

                    component: () =>
                        import(/* webpackChunkName: "advance-search" */ './views/customer-profiles/AdvanceSearch.vue'),
                    meta: {
                        title: 'Customer Profile | Advance Search',
                    },
                },
            ],
        },

        {
            path: '/customer-profiles/customer-information',
            name: 'customer-details',
            component: () =>
                import(/* webpackChunkName: "customer-details" */ './views/customer-profiles/profile-details/Main.vue'),
            children: [
                {
                    path: '/',
                    name: 'customer-information',
                    component: () =>
                        import(/* webpackChunkName: "customer-information" */ './views/customer-profiles/profile-details/CustomerInformation.vue'),
                    meta: {
                        title: 'Customer Information | Customer Profile',
                        name: 'Customer Profile',
                    },
                },
                {
                    path: '/customer-profiles/name-screening',
                    name: 'screening-customer',
                    component: () =>
                        import(/* webpackChunkName: "screening-customer" */ './views/customer-profiles/profile-details/ScreeningCustomer.vue'),
                    meta: {
                        title: 'Customer Information | Name Screening',
                        name: 'Name Screening',
                    },
                },

                {
                    path: '/customer-profiles/document-verification',
                    name: 'document-verification',
                    component: () =>
                        import(/* webpackChunkName: "document-verification" */ './views/customer-profiles/profile-details/DocumentVerification.vue'),
                    meta: {
                        title: 'Customer Information | Document Verification',
                        name: 'Document Verification',
                    },
                },
                {
                    path: '/customer-profiles/kyc-risk-rating',
                    name: 'kyc-risk-rating',
                    component: () =>
                        import(/* webpackChunkName: "kyc-risk-rating" */ './views/customer-profiles/profile-details/KYCRiskRating.vue'),
                    meta: {
                        title: 'Customer Information | KYC Risk Rating',
                        name: 'KYC Risk Rating',
                    },
                },
                {
                    path: '/customer-profiles/activity-timeline',
                    name: 'activity-timeline',
                    component: () =>
                        import(/* webpackChunkName: "activity-timeline" */ './views/customer-profiles/profile-details/ActivityTimeline.vue'),
                    meta: {
                        title: 'Customer Information | Activity Timeline',
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
                            meta: {
                                title:
                                    'Configuration | Idenfo Engine | Risk Factor & Weightage',
                            },
                        },
                        {
                            path: '/configuration/idenfo-engine/risk',
                            name: 'conf-risk',
                            component: () =>
                                import(/* webpackChunkName: "risk-factor" */ './views/configuration/idenfo-engine/RiskFactor.vue'),
                            meta: {
                                title:
                                    'Configuration | Idenfo Engine | Risk Factor & Weightage',
                            },
                        },
                        {
                            path: '/configuration/idenfo-engine/',
                            name: 'idenfo-engine',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/idenfo-engine/RiskFactor.vue'),
                            meta: {
                                title:
                                    'Configuration | Idenfo Engine | Risk Factor & Weightage',
                            },
                        },
                        {
                            path: '/configuration/idenfo-engine/risk-rating',
                            name: 'risk-rating',
                            component: () =>
                                import(/* webpackChunkName: "risk-rating" */ './views/configuration/idenfo-engine/RiskRating.vue'),
                            meta: {
                                title:
                                    'Configuration | Idenfo Engine | Risk Rating Score & Risk Rating Overrides',
                            },
                        },
                        {
                            path:
                                '/configuration/idenfo-engine/document-verification-factor',
                            name: 'document-verification-factor',
                            component: () =>
                                import(/* webpackChunkName: "document-verification-factor" */ './views/configuration/idenfo-engine/DocumentVerificationFactors.vue'),
                            meta: {
                                title:
                                    'Configuration | Idenfo Engine | Document Verification Factors',
                            },
                        },

                        {
                            path:
                                '/configuration/idenfo-engine/name-screen-score',
                            name: 'name-screen-score',
                            component: () =>
                                import(/* webpackChunkName: "name-screen-score" */ './views/configuration/idenfo-engine/NameScreenScore.vue'),
                            meta: {
                                title:
                                    'Configuration | Idenfo Engine | Name Screening Score Factors',
                            },
                        },
                        {
                            path: '/configuration/idenfo-engine/nationality',
                            name: 'conf-nationality',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/idenfo-engine/Nationality.vue'),
                            meta: {
                                title:
                                    'Configuration | Idenfo Engine | Nationality Factor',
                            },
                        },
                        {
                            path: '/configuration/idenfo-engine/country',
                            name: 'conf-country',
                            component: () =>
                                import(/* webpackChunkName: "nationality" */ './views/configuration/idenfo-engine/Country.vue'),
                            meta: {
                                title:
                                    'Configuration | Idenfo Engine | Country of Residence Factor',
                            },
                        },
                        {
                            path: '/configuration/idenfo-engine/state',
                            name: 'state-factor',
                            component: () =>
                                import(/* webpackChunkName: "state" */ './views/configuration/idenfo-engine/StateFactor.vue'),
                            meta: {
                                title:
                                    'Configuration | Idenfo Engine | State Factor',
                            },
                        },
                        {
                            path: '/configuration/idenfo-engine/work',
                            name: 'work-factor',
                            component: () =>
                                import(/* webpackChunkName: "work" */ './views/configuration/idenfo-engine/WorkFactor.vue'),
                            meta: {
                                title:
                                    'Configuration | Idenfo Engine | Work Type Factor',
                            },
                        },
                        {
                            path: '/configuration/idenfo-engine/industry',
                            name: 'industry-factor',
                            component: () =>
                                import(/* webpackChunkName: "industry" */ './views/configuration/idenfo-engine/IndustryFactor.vue'),
                            meta: {
                                title:
                                    'Configuration | Idenfo Engine | Industry Factor',
                                responsiveMenuItem: true,
                            },
                        },
                        {
                            path: '/configuration/idenfo-engine/product',
                            name: 'productFactor',
                            component: () =>
                                import(/* webpackChunkName: "productFactor" */ './views/configuration/idenfo-engine/ProductFactor.vue'),
                            meta: {
                                title:
                                    'Configuration | Idenfo Engine | Product Factor',
                                responsiveMenuItem: true,
                            },
                        },
                        {
                            path: '/configuration/idenfo-engine/relationship',
                            name: 'relationship-factor',
                            component: () =>
                                import(/* webpackChunkName: "relationship-factor" */ './views/configuration/idenfo-engine/RelationshipPanel.vue'),
                            meta: {
                                title:
                                    'Configuration | Idenfo Engine | Relationship Length Factor',
                                responsiveMenuItem: true,
                            },
                        },
                        {
                            path: '/configuration/idenfo-engine/channel',
                            name: 'channel-factor',
                            component: () =>
                                import(/* webpackChunkName: "channel-factor" */ './views/configuration/idenfo-engine/ChannelFactor.vue'),
                            meta: {
                                title:
                                    'Configuration | Idenfo Engine | Channel Type Factor',
                                responsiveMenuItem: true,
                            },
                        },
                        {
                            path:
                                '/configuration/idenfo-engine/purpose-of-action',
                            name: 'purpose-action',
                            component: () =>
                                import(/* webpackChunkName: "purpose-of-action" */ './views/configuration/idenfo-engine/PurposeAction.vue'),
                            meta: {
                                title:
                                    'Configuration | Idenfo Engine | Purpose of Action Management',
                                responsiveMenuItem: true,
                            },
                        },
                        {
                            path: '/configuration/idenfo-engine/gender',
                            name: 'idenfo-engine-gender',
                            component: () =>
                                import(/* webpackChunkName: "gender" */ './views/configuration/idenfo-engine/Gender.vue'),
                            meta: {
                                title: 'Configuration | Idenfo Engine | Gender',
                                responsiveMenuItem: true,
                            },
                        },
                        {
                            path:
                                '/configuration/idenfo-engine/risk-level-review',
                            name: 'idenfo-engine-risk-level-review',
                            component: () =>
                                import(/* webpackChunkName: "risk-level-review" */ './views/configuration/idenfo-engine/RiskLevelReview.vue'),
                            meta: {
                                title:
                                    'Configuration | Idenfo Engine | Risk Level Review Configuration',
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
                                import(/* webpackChunkName: "screening-data" */ './views/configuration/screening-data/Gender.vue'),
                            meta: {
                                title:
                                    'Configuration | Screening Data | Gender',
                            },
                        },
                        {
                            path: '/',
                            name: 'gender',
                            component: () =>
                                import(/* webpackChunkName: "gender" */ './views/configuration/screening-data/Gender.vue'),
                            meta: {
                                title:
                                    'Configuration | Screening Data | Gender',
                            },
                        },
                        {
                            path: '/configuration/screening-data/',
                            name: 'gender',
                            component: () =>
                                import(/* webpackChunkName: "gender" */ './views/configuration/screening-data/Gender.vue'),
                            meta: {
                                title:
                                    'Configuration | Screening Data | Screening Data',
                            },
                        },
                        {
                            path: '/configuration/screening-data/deceased',
                            name: 'deceased',
                            component: () =>
                                import(/* webpackChunkName: "deceased" */ './views/configuration/screening-data/Deceased.vue'),
                            meta: {
                                title:
                                    'Configuration | Screening Data | Deceased',
                            },
                        },
                        {
                            path: '/configuration/screening-data/record-status',
                            name: 'record-status',
                            component: () =>
                                import(/* webpackChunkName: "record-status" */ './views/configuration/screening-data/RecordStatus.vue'),
                            meta: {
                                title:
                                    'Configuration | Screening Data | Record Status',
                            },
                        },
                        {
                            path: '/configuration/screening-data/name-type',
                            name: 'name-type',
                            component: () =>
                                import(/* webpackChunkName: "name-type" */ './views/configuration/screening-data/NameType.vue'),
                            meta: {
                                title:
                                    'Configuration | Screening Data | Name Type',
                            },
                        },
                        {
                            path: '/configuration/screening-data/descprition-1',
                            name: 'descprition-1',
                            component: () =>
                                import(/* webpackChunkName: "descprition-1" */ './views/configuration/screening-data/Descprition1.vue'),
                            meta: {
                                title:
                                    'Configuration | Screening Data | Description 1',
                            },
                        },
                        {
                            path: '/configuration/screening-data/descprition-2',
                            name: 'descprition-2',
                            component: () =>
                                import(/* webpackChunkName: "descprition-2" */ './views/configuration/screening-data/Descprition2.vue'),
                            meta: {
                                title:
                                    'Configuration | Screening Data | Description 2',
                            },
                        },
                        {
                            path: '/configuration/screening-data/descprition-3',
                            name: 'descprition-3',
                            component: () =>
                                import(/* webpackChunkName: "descprition-3" */ './views/configuration/screening-data/Descprition3.vue'),
                            meta: {
                                title:
                                    'Configuration | Screening Data | Description 3',
                            },
                        },
                        {
                            path: '/configuration/screening-data/role-type',
                            name: 'role-type',
                            component: () =>
                                import(/* webpackChunkName: "role-type" */ './views/configuration/screening-data/RoleType.vue'),
                            meta: {
                                title:
                                    'Configuration | Screening Data | Role Type',
                            },
                        },
                        {
                            path: '/configuration/screening-data/occupation',
                            name: 'occupation',
                            component: () =>
                                import(/* webpackChunkName: "occupation" */ './views/configuration/screening-data/Occupation.vue'),
                            meta: {
                                title:
                                    'Configuration | Screening Data | Occupation',
                                responsiveMenuItem: true,
                            },
                        },
                        {
                            path: '/configuration/screening-data/date-type',
                            name: 'data-type',
                            component: () =>
                                import(/* webpackChunkName: "data-type" */ './views/configuration/screening-data/DateType.vue'),
                            meta: {
                                title:
                                    'Configuration | Screening Data | Date Type',
                                responsiveMenuItem: true,
                            },
                        },
                        {
                            path:
                                '/configuration/screening-data/sanction-reference',
                            name: 'sanction-reference',
                            component: () =>
                                import(/* webpackChunkName: "sanction-reference" */ './views/configuration/screening-data/SactionReference.vue'),
                            meta: {
                                title:
                                    'Configuration | Screening Data | Sanction Reference',
                                responsiveMenuItem: true,
                            },
                        },
                        {
                            path: '/configuration/screening-data/country',
                            name: 'screening-country',
                            component: () =>
                                import(/* webpackChunkName: "country" */ './views/configuration/screening-data/Countries.vue'),
                            meta: {
                                title:
                                    'Configuration | Screening Data | Countries',
                                responsiveMenuItem: true,
                            },
                        },
                        {
                            path: '/configuration/screening-data/country-type',
                            name: 'screening-country-type',
                            component: () =>
                                import(/* webpackChunkName: "country-type" */ './views/configuration/screening-data/CountryType.vue'),
                            meta: {
                                title:
                                    'Configuration | Screening Data | Country Type',
                                responsiveMenuItem: true,
                            },
                        },
                        {
                            path:
                                '/configuration/screening-data/identification',
                            name: 'screening-indentification',
                            component: () =>
                                import(/* webpackChunkName: "identification" */ './views/configuration/screening-data/Identification.vue'),
                            meta: {
                                title:
                                    'Configuration | Screening Data | Identification',
                                responsiveMenuItem: true,
                            },
                        },
                        {
                            path:
                                '/configuration/screening-data/relationship-type',
                            name: 'screening-relationship',
                            component: () =>
                                import(/* webpackChunkName: "relationship-type" */ './views/configuration/screening-data/Relationship.vue'),
                            meta: {
                                title:
                                    'Configuration | Screening Data | Relationship Type',
                                responsiveMenuItem: true,
                            },
                        },
                    ],
                },
                {
                    path: '/configuration/simulate/',
                    name: 'simulate',
                    component: () =>
                        import(/* webpackChunkName: "simulate" */ './views/configuration/Simulate.vue'),
                    meta: {
                        title: 'Configuration | Simulation Switch',
                    },
                },

                {
                    path: '/configuration/form-builder/',
                    name: 'screening-data',
                    component: () =>
                        import(/* webpackChunkName: "form-builder" */ './views/configuration/form-builder/Main.vue'),
                    children: [
                        {
                            path: '/',
                            name: 'gender',
                            component: () =>
                                import(/* webpackChunkName: "setup-profile" */ './views/configuration/form-builder/SetupProfile.vue'),
                            meta: {
                                title:
                                    'Configuration | Registration Form Builder | Setup Profile',
                            },
                        },
                        {
                            path: '/configuration/form-builder/setup-profile',
                            name: 'gender',
                            component: () =>
                                import(/* webpackChunkName: "setup-profile" */ './views/configuration/form-builder/SetupProfile.vue'),
                            meta: {
                                title:
                                    'Configuration | Registration Form Builder | Setup Profile',
                            },
                        },
                        {
                            path: '/configuration/form-builder/account-info',
                            name: 'gender',
                            component: () =>
                                import(/* webpackChunkName: "account-info" */ './views/configuration/form-builder/AccountInfo.vue'),
                            meta: {
                                title:
                                    'Configuration | Registration Form Builder | Account Information',
                            },
                        },
                    ],
                },

                {
                    path: '/configuration/branding/',
                    name: 'branding',
                    component: () =>
                        import(/* webpackChunkName: "branding" */ './views/configuration/Branding.vue'),
                    meta: {
                        title: 'Configuration | Branding Configurations',
                    },
                },
                {
                    path: '/configuration/ocr-configuration/',
                    name: 'ocr-configuration',
                    component: () =>
                        import(/* webpackChunkName: "ocr-configuration" */ './views/configuration/OcrConfiguration.vue'),
                    meta: {
                        title: 'Configuration | OCR Configuration',
                    },
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
                        name: 'Register Customer',
                        title: 'Register Customer | Upload Document',
                        sessionStep: '1',
                        bodyClass: 'register-customer-body',
                    },
                },
                {
                    path: '/register-customer/upload-document',
                    name: 'upload-document',
                    component: () =>
                        import(/* webpackChunkName: "upload-document" */ './views/register-customer/UploadDocuments.vue'),
                    meta: {
                        name: 'Register Customers',
                        title: 'Register Customer | Upload Document',
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
                        title: 'Register Customer | Record Video',
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
                        title: 'Register Customer | Setup Profile',
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
                        title: 'Register Customer | Account Info',
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
                        title: 'Register Customer | Finish',
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
                        title: 'Public Registration | Upload Document',
                        sessionStep: '1',
                        noSidebar: true,
                        publicRegistration: true,
                        bodyClass: 'auth-body',
                    },
                },
                {
                    path: '/public-registration/upload-document',
                    name: 'public-registration-upload-document',
                    component: () =>
                        import(/* webpackChunkName: "public-registration-upload-document" */ './views/register-customer/UploadDocuments.vue'),
                    meta: {
                        name: 'Online Account Opening Application',
                        title: 'Public Registration | Upload Document',
                        sessionStep: '1',
                        noSidebar: true,
                        publicRegistration: true,
                        bodyClass: 'auth-body',
                    },
                },
                {
                    path: '/public-registration/record-video',
                    name: 'public-registration-record-video',
                    component: () =>
                        import(/* webpackChunkName: "public-registration-record-video" */ './views/register-customer/RecordVideo.vue'),
                    meta: {
                        name: 'Online Account Opening Application',
                        title: 'Public Registration | Record Video',
                        sessionStep: '2',
                        noSidebar: true,
                        publicRegistration: true,
                        bodyClass: 'auth-body',
                    },
                },
                {
                    path: '/public-registration/setup-profile',
                    name: 'public-registration-setup-profile',
                    component: () =>
                        import(/* webpackChunkName: "public-registration-setup-profile" */ './views/register-customer/SetupProfile.vue'),
                    meta: {
                        name: 'Online Account Opening Application',
                        title: 'Public Registration | Setup Profile',
                        sessionStep: '3',
                        noSidebar: true,
                        publicRegistration: true,
                        bodyClass: 'auth-body',
                    },
                },
                {
                    path: '/public-registration/account-info',
                    name: 'public-registration-account-info',
                    component: () =>
                        import(/* webpackChunkName: "public-registration-account-info" */ './views/register-customer/AccountInfo.vue'),
                    meta: {
                        name: 'Online Account Opening Application',
                        title: 'Public Registration | Account Info',
                        sessionStep: '4',
                        noSidebar: true,
                        publicRegistration: true,
                        bodyClass: 'auth-body',
                    },
                },
                {
                    path: '/public-registration/finish',
                    name: 'public-registration-finish',
                    component: () =>
                        import(/* webpackChunkName: "finish" */ './views/register-customer/Finish.vue'),
                    meta: {
                        name: 'Online Account Opening Application',
                        title: 'Public Registration | Finish',
                        sessionStep: '5',
                        noSidebar: true,
                        publicRegistration: true,
                        bodyClass: 'auth-body',
                    },
                },
            ],
        },
    ],
})
