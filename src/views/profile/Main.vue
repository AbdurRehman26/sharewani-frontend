<template>
    <div class="dashboard">
        <base-sidebar
            :countryListing="countryListing"
            :sidelinksListing="sidelinksListing"
        ></base-sidebar>
        <div class="content-area">
            <base-header :menuListing="menuListing"></base-header>
            <div class="right-panel">
                <b-table :items="items"></b-table>
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
            items: [
                {
                    age: 40,
                    file_name: 'asdasd',
                    first_name: 'Dickerson',
                    last_name: 'Macdonald',
                },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' },
            ],

            menuListing: [
                {
                    anchorLink: '/dashboard',
                    menuLabel: 'Alerts',
                },
                {
                    anchorLink: '/',
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
                    icon: 'icon-Customer-Profil',
                    menuLabel: 'Customer Profiles',
                },
                {
                    anchorLink: '/',
                    icon: 'icon-Add-Customer',
                    menuLabel: 'Register Customer',
                },
                {
                    anchorLink: '/',
                    icon: 'icon-world',
                    menuLabel: 'Search People',
                },
                {
                    anchorLink: '/',
                    icon: 'icon-Configurations',
                    menuLabel: 'Configurations',
                },
                {
                    anchorLink: '/',
                    icon: 'icon-System-Users',
                    menuLabel: 'System Users',
                },
                {
                    anchorLink: '/',
                    icon: 'icon-System-Log',
                    menuLabel: 'System Logs',
                },
                {
                    anchorLink: '/',
                    icon: 'icon-Export',
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
