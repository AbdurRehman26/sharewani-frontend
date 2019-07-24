<template>
    <div class="customer-profile">
        <div class="content-area">
            <base-header :menuListing="menuListing" stepStyle></base-header>
            <div class="right-panel">
                <div class="wrap-content customer-section">
                    <div class="filter-section">
                        <div class="row">
                            <div class="col-md-12">
                                <h2>{{ $route.meta.name }}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <router-view></router-view>
                    </div>
                </div>
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
                    name: 'upload-document',
                },
                {
                    anchorLink: '/register-customer/record-video',
                    menuLabel: 'Record Video',
                    sessionStep: '2',
                    name: 'record-video',
                },
                {
                    anchorLink: '/register-customer/setup-profile',
                    menuLabel: 'Setup Profile',
                    sessionStep: '3',
                    name: 'setup-profile',
                },
                {
                    anchorLink: '/register-customer/account-info',
                    menuLabel: 'Account Info',
                    sessionStep: '4',
                    name: 'account-info',
                },
                {
                    anchorLink: '/register-customer/finish',
                    menuLabel: 'Finish',
                    sessionStep: '5',
                    name: 'finish',
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
