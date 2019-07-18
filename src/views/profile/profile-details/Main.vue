<template>
    <div class="customer-profile">
        <div class="content-area">
            <base-header :menuListing="menuListing"></base-header>
            <div class="right-panel">
                <div class="wrap-content">
                    <div class="filter-section">
                        <div class="row">
                            <div class="col-md-6">
                                <h2>{{ $route.meta.name }}</h2>
                            </div>
                            <div class="col-md-6 text-right">
                                <ul>
                                    <li>
                                        <b-button type="button" variant="link">
                                            <i class="icon-caret-left"></i> Go
                                            back</b-button
                                        >
                                    </li>
                                    <li>
                                        <b-button
                                            v-b-modal.cancel-review-process-popup
                                            type="button"
                                            variant="link font-semibold"
                                        >
                                            Cancel Review Process
                                        </b-button>
                                    </li>
                                    <li>
                                        <b-button
                                            v-b-modal.kyc-status-review-popup
                                            type="button"
                                            variant="primary"
                                        >
                                            KYC STATUS REVIEW</b-button
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <router-view></router-view>
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
                    anchorLink: '/customer-information',
                    menuLabel: 'Customer Profile',
                },
                {
                    anchorLink: '/screening-customer',
                    menuLabel: 'Name Screening',
                },
                {
                    anchorLink: '/document-verification',
                    menuLabel: 'Document Verification',
                },
                {
                    anchorLink: '/kyc-risk-rating',
                    menuLabel: 'KYC Risk Rating',
                },
                {
                    anchorLink: '/activity-timeline',
                    menuLabel: 'Activity Timeline',
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
