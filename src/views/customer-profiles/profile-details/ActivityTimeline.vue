<template>
    <div>
        <div class="card customer-info screen-section">
            <customer-information
                profilePic="image5.png"
                :customerDetails="customerDetails"
            ></customer-information>
        </div>

        <div class="export-timeline">
            <base-button
                v-b-modal.export-process-popup
                btnLabel="Export Timeline"
                btnType="button"
                btnVariant="secondary"
            ></base-button>
        </div>

        <time-line :yearDetails="yearDetails"></time-line>
        <manual-alert-popup></manual-alert-popup>
        <cancel-review-process-popup></cancel-review-process-popup>
        <kyc-status-review-popup></kyc-status-review-popup>
        <export-process-popup
            title="Export Activity Timeline"
            totalExport="Total Activities Exported: 145"
        ></export-process-popup>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import timeLine from '@/components/TimeLine.vue'
import manualAlertPopup from '@/components/popups/ManualAlertPopup.vue'
import customerInformation from '@/components/CustomerInfo.vue'
import kycStatusReviewPopup from '@/components/popups/KYCStatusReviewPopup.vue'
import exportProcessPopup from '@/components/popups/ExportProcessPopup.vue'
import cancelReviewProcessPopup from '@/components/popups/CancelReviewProcessPopup.vue'
export default {
    components: {
        customerInformation,
        kycStatusReviewPopup,
        cancelReviewProcessPopup,
        timeLine,
        exportProcessPopup,
        manualAlertPopup,
    },

    /*
    |--------------------------------------------------------------------------
    | Component > props
    |--------------------------------------------------------------------------
    */
    props: {}, // End of Component > props

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
