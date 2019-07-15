<template>
    <div class="sidebar">
        <div class="sidebar-listing">
            <div class="country-selection">
                <ul>
                    <li v-for="(list, index) in countryListing" :key="index">
                        <router-link :to="list.anchorLink">
                            <span>{{ list.menuLabel }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="sidebar-nav">
                <div class="logo-container">
                    <base-logo></base-logo>
                </div>

                <div class="navigation">
                    <ul>
                        <li
                            v-for="(list, index) in sidelinksListing"
                            :key="index"
                        >
                            <router-link :to="list.anchorLink">
                                <i :class="list.icon"></i>
                                <span>{{ list.menuLabel }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
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
                // {
                //     anchorLink: '/data-export',
                //     icon: 'icon-export',
                //     menuLabel: 'Data Export',
                // },
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
