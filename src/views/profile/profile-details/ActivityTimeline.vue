<template>
    <div class="wrap-content activity-timeline-section">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-6">
                    <h2>KYC Risk Rating</h2>
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
        <div class="card customer-info screen-section">
            <customer-information
                profilePic="image5.png"
                :customerDetails="customerDetails"
            ></customer-information>
        </div>

        <time-line :yearDetails="yearDetails"></time-line>
        <cancel-review-process-popup></cancel-review-process-popup>
        <kyc-status-review-popup></kyc-status-review-popup>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import timeLine from '@/components/TimeLine.vue'
import customerInformation from '@/components/CustomerInfo.vue'
import kycStatusReviewPopup from '@/components/popups/KYCStatusReviewPopup.vue'
import cancelReviewProcessPopup from '@/components/popups/CancelReviewProcessPopup.vue'
export default {
    components: {
        customerInformation,
        kycStatusReviewPopup,
        cancelReviewProcessPopup,
        timeLine,
    },

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
            customerDetails: [],

            yearDetails: [],
        }
    }, // End of Component > data

    /*
    |--------------------------------------------------------------------------
    | Component > computed
    |--------------------------------------------------------------------------
    */
    computed: {
        ...mapGetters(['profile']),
    }, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        initializeData() {
            //system log table
            let doccustomerDetails = this.profile.activityTimeline
                .customerDetails //get user data from store
            this.customerDetails = doccustomerDetails //push data into array

            let docvyearDetails = this.profile.activityTimeline.yearDetails //get user data from store
            this.yearDetails = docvyearDetails //push data into array
        },
    }, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {
        this.initializeData()
    }, // End of Component > mounted
} // End of export default
</script>
