<template>
    <div class="customer-profile">
        <div class="content-area">
            <base-header :menuListing="menuListing" stepStyle></base-header>
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
                    anchorLink: '/register-customer/upload-document',
                    menuLabel: 'Upload Documents',
                    sessionStep: '1',
                },
                {
                    anchorLink: '/register-customer/record-video',
                    menuLabel: 'Record Video',
                    sessionStep: '2',
                },
                {
                    anchorLink: '/register-customer/setup-profile',
                    menuLabel: 'Setup Profile',
                    sessionStep: '3',
                },
                {
                    anchorLink: '/register-customer/account-info',
                    menuLabel: 'Account Info',
                    sessionStep: '4',
                },
                {
                    anchorLink: '/register-customer/finish',
                    menuLabel: 'Finish',
                    sessionStep: '5',
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
