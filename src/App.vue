<template>
    <div id="app">
        <div class="main-content">
            <base-sidebar
                v-if="!$route.meta.noSidebar"
                :countryListing="countryListing"
                :sidelinksListing="sidelinksListing"
            ></base-sidebar>
            <router-view />
        </div>
    </div>
</template>

<style lang="scss">
@import 'assets/scss/app.scss';
</style>
<script>
export default {
    components: {},
    /*
        |--------------------------------------------------------------------------
        | Component > props
        |--------------------------------------------------------------------------
        */
    props: {
        /**
         * Value to determine the current compose mode which
         * varies between 'add' and 'edit'
         */
        mode: {
            type: String,
            default: 'add',
        },
    }, // End of Component > props

    /*
        |--------------------------------------------------------------------------
        | Component > data
        |--------------------------------------------------------------------------
        */
    data() {
        return {
            countryListing: [
                {
                    anchorLink: '/',
                    menuLabel: 'UAE',
                },
                {
                    anchorLink: '/dashboard',
                    menuLabel: 'PK',
                },
                {
                    anchorLink: '/',
                    menuLabel: 'UK',
                },
                {
                    anchorLink: '/',
                    menuLabel: 'USA',
                },
            ],
            sidelinksListing: [
                {
                    anchorLink: '/dashboard',
                    icon: 'icon-insights',
                    menuLabel: 'Insights',
                },
                {
                    anchorLink: '/customer-profile',
                    icon: 'icon-customer-profil',
                    menuLabel: 'Customer Profiles',
                },
                {
                    anchorLink: '/register-customer/upload-document',
                    icon: 'icon-add-customer',
                    menuLabel: 'Register Customer',
                },
                {
                    anchorLink: '/search-people',
                    icon: 'icon-world',
                    menuLabel: 'Search People',
                },
                {
                    anchorLink: '/configuration',
                    icon: 'icon-configurations',
                    menuLabel: 'Configurations',
                },
                {
                    anchorLink: '/system-users',
                    icon: 'icon-system-users',
                    menuLabel: 'System Users',
                },
                {
                    anchorLink: '/system-logs',
                    icon: 'icon-system-log',
                    menuLabel: 'System Logs',
                },
                {
                    anchorLink: '/data-export',
                    icon: 'icon-export',
                    menuLabel: 'Data Export',
                },
            ],
        }
    }, // End of Component > data

    /*
        |--------------------------------------------------------------------------
        | Component > computed
        |--------------------------------------------------------------------------
        */
    computed: {}, // End of Component > computed

    /*
        |--------------------------------------------------------------------------
        | Component > methods
        |--------------------------------------------------------------------------
        */
    methods: {}, // End of Component > methods

    /*
        |--------------------------------------------------------------------------
        | Component > mounted
        |--------------------------------------------------------------------------
        */
    mounted() {}, // End of Component > mounted
} // End of export default
</script>
