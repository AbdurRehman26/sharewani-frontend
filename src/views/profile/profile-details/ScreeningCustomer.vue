<template>
    <div>
        <div class="card customer-info screen-section">
            <customer-information
                profilePic="image5.png"
                :customerDetails="customerDetails"
            ></customer-information>
        </div>

        <div class="filter-section sub-filter">
            <h2>Name Screening Hit Details</h2>
        </div>
        <div class="table-section">
            <b-table :items="items" :fields="fields">
                <template slot="sanction" slot-scope="data">
                    <status-type-icon
                        :statusType="data.value"
                        class="cursor-pointer"
                        v-b-modal.screening-detail-popup
                    ></status-type-icon>
                </template>
                <template slot="rep" slot-scope="data">
                    <status-type-icon
                        :statusType="data.value"
                        v-b-modal.screening-detail-popup
                    ></status-type-icon>
                </template>
                <template slot="enforcement" slot-scope="data">
                    <status-type-icon
                        :statusType="data.value"
                        v-b-modal.screening-detail-popup
                    ></status-type-icon>
                </template>
                <template slot="blackList" slot-scope="data">
                    <status-type-icon
                        :statusType="data.value"
                        v-b-modal.screening-detail-popup
                    ></status-type-icon>
                </template>
                <template slot="hit" slot-scope="data">
                    <base-status :statusType="data.value"></base-status>
                </template>
            </b-table>
        </div>
        <div class="filter-section sub-filter">
            <h2>Adverse Media Search</h2>
        </div>
        <div class="card iframe-section">
            <div class="scrollable" id="style-2">
                <!-- google search -->
                <div>
                    <div class="gcse-searchbox"></div>
                    <div class="gcse-searchresults"></div>
                </div>
                <!-- google search end-->
            </div>
        </div>
        <cancel-review-process-popup></cancel-review-process-popup>
        <kyc-status-review-popup></kyc-status-review-popup>
        <screening-detail-popup></screening-detail-popup>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import customerInformation from '@/components/CustomerInfo.vue'
import kycStatusReviewPopup from '@/components/popups/KYCStatusReviewPopup.vue'
import cancelReviewProcessPopup from '@/components/popups/CancelReviewProcessPopup.vue'
import screeningDetailPopup from '@/components/popups/ScreeningDetailPopup.vue'
import statusTypeIcon from '@/components/AlertType.vue'

export default {
    components: {
        customerInformation,
        kycStatusReviewPopup,
        cancelReviewProcessPopup,
        screeningDetailPopup,
        statusTypeIcon,
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

            fields: [],
            items: [],
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
            let customerDetails = this.profile.screenCustomer.customerDetails //get user data from store
            this.customerDetails = customerDetails //push data into array

            let fields = this.profile.screenCustomer.fields //get user data from store
            this.fields = fields //push data into array

            let items = this.profile.screenCustomer.items //get user data from store
            this.items = items //push data into array
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
