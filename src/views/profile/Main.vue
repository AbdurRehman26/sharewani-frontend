<template>
    <div class="customer-profile">
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
                    anchorLink: '/customer-profile',
                    menuLabel: 'All Customer',
                },
                {
                    anchorLink: '/advance-search',
                    menuLabel: 'Advance Search',
                },
            ],
            countryListing: [
                {
                    anchorLink: '/',
                    menuLabel: 'UAE',
                },
                {
                    anchorLink: '/customer-profile',
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
                    anchorLink: '/',
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
                    anchorLink: '/',
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

            selected: '1',

            options: [
                { text: 'All', value: '1' },
                { text: 'Pending Review', value: '2' },
                { text: 'Approved', value: '3' },
                { text: 'Rejected', value: '4' },
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
