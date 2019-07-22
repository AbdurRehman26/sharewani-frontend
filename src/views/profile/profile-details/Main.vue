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
                                        <router-link to="/customer-profiles">
                                            <span>
                                                <i class="icon-caret-left"></i>
                                            </span>
                                            <span>Go back</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <base-button
                                            v-b-modal.cancel-review-process-popup
                                            btnLabel="Cancel Review Process"
                                            btnType="button"
                                            btnVariant="link font-semibold"
                                        ></base-button>
                                    </li>
                                    <li>
                                        <base-button
                                            v-b-modal.kyc-status-review-popup
                                            btnLabel="KYC STATUS REVIEW"
                                            btnType="button"
                                            btnVariant="primary"
                                        ></base-button>
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
