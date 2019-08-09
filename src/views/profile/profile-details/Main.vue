<template>
    <div class="customer-profile">
        <div class="content-area">
            <base-header
                @sidemenu="$emit('responsiveSideBar')"
                :menuListing="menuListing"
            ></base-header>
            <div class="right-panel">
                <div class="wrap-content">
                    <div class="filter-section row-min-space profile-filter">
                        <div class="row">
                            <div class="col-md-3 filter-title-section">
                                <h2>{{ $route.meta.name }}</h2>
                            </div>
                            <div class="col-md-9">
                                <div class="row">
                                    <div
                                        class="col-md-2 text-right go-back-profile"
                                    >
                                        <router-link
                                            to="/customer-profiles"
                                            class="btn btn-link go-back-btn"
                                        >
                                            <span>
                                                <i class="icon-caret-left"></i>
                                            </span>
                                            <span>Go back</span>
                                        </router-link>
                                    </div>
                                    <div class="col-md-3 text-center">
                                        <base-button
                                            v-b-modal.cancel-review-process-popup
                                            btnLabel="Cancel Review Process"
                                            btnType="button"
                                            btnVariant="link font-semibold"
                                        ></base-button>
                                    </div>
                                    <div class="col-md-3">
                                        <base-button
                                            v-b-modal.kyc-status-review-popup
                                            btnLabel="KYC STATUS REVIEW"
                                            btnType="button"
                                            btnVariant="primary"
                                        ></base-button>
                                    </div>
                                    <div class="col-md-4">
                                        <base-button
                                            v-b-modal.manual-alert-popup
                                            btnLabel="Create Manual Alert"
                                            btnType="button"
                                            btnVariant="secondary"
                                        ></base-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script async src="https://cse.google.com/cse.js?cx=123:456"></script>
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
                    anchorLink: '/customer-profiles/customer-information',
                    menuLabel: 'Customer Profile',
                    name: 'customer-information',
                },
                {
                    anchorLink:
                        '/customer-profiles/name-screening?q=%27Henk%20John%27%20corruption%20OR%20trafficking',
                    menuLabel: 'Name Screening',
                    name: 'screening-customer',
                },
                {
                    anchorLink: '/customer-profiles/document-verification',
                    menuLabel: 'Document Verification',
                    name: 'document-verification',
                },
                {
                    anchorLink: '/customer-profiles/kyc-risk-rating',
                    menuLabel: 'KYC Risk Rating',
                    name: 'kyc-risk-rating',
                },
                {
                    anchorLink: '/customer-profiles/activity-timeline',
                    menuLabel: 'Activity Timeline',
                    name: 'activity-timeline',
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
