<template>
    <div class="dashboard">
        <base-sidebar
            :countryListing="countryListing"
            :sidelinksListing="sidelinksListing"
        ></base-sidebar>
        <div class="content-area">
            <base-header :menuListing="menuListing"></base-header>
            <div class="right-panel">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

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
            menuListing: [
                {
                    anchorLink: '/dashboard',
                    menuLabel: 'Alerts',
                },
                {
                    anchorLink: '/dashboard/activity',
                    menuLabel: 'Activity Dashboard',
                },
                {
                    anchorLink: '/',
                    menuLabel: 'Customer Statistics',
                },
            ],
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
                    anchorLink: '/',
                    icon: 'icon-add-customer',
                    menuLabel: 'Register Customer',
                },
                {
                    anchorLink: '/',
                    icon: 'icon-world',
                    menuLabel: 'Search People',
                },
                {
                    anchorLink: '/',
                    icon: 'icon-configurations',
                    menuLabel: 'Configurations',
                },
                {
                    anchorLink: '/system-users',
                    icon: 'icon-system-users',
                    menuLabel: 'System Users',
                },
                {
                    anchorLink: '/',
                    icon: 'icon-system-log',
                    menuLabel: 'System Logs',
                },
                {
                    anchorLink: '/',
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
