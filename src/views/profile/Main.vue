<template>
    <div class="customer-profile">
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
                    anchorLink: '/customer-profiles/all-customer',
                    menuLabel: 'All Customers',
                    name: 'all-customer',
                },
                {
                    anchorLink: '/customer-profiles/advance-search',
                    menuLabel: 'Advance Search',
                    name: 'advance-search',
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
