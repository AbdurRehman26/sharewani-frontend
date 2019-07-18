<template>
    <div>
        <div class="card customer-info screen-section">
            <customer-information
                profilePic="image5.png"
                :customerDetails="customerDetails"
            ></customer-information>
        </div>
        <div class="filter-section sub-filter">
            <h2>Risk Factor Matrix</h2>
        </div>
        <div class="table-section risk-factor-table">
            <b-table :items="items" :fields="fields">
                <template slot="risk_level" slot-scope="data">
                    <base-status :statusType="data.value"></base-status>
                </template>
            </b-table>
        </div>

        <div class="table-section">
            <b-table :items="overrideList" :fields="overrideFields">
                <template slot="risk_level" slot-scope="data">
                    <base-status :statusType="data.value"></base-status>
                </template>
            </b-table>
        </div>

        <cancel-review-process-popup></cancel-review-process-popup>
        <kyc-status-review-popup></kyc-status-review-popup>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import customerInformation from '@/components/CustomerInfo.vue'
import kycStatusReviewPopup from '@/components/popups/KYCStatusReviewPopup.vue'
import cancelReviewProcessPopup from '@/components/popups/CancelReviewProcessPopup.vue'
export default {
    components: {
        customerInformation,
        kycStatusReviewPopup,
        cancelReviewProcessPopup,
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

            overrideFields: [],

            overrideList: [],
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
            let customerDetails = this.profile.kycData.customerDetails //get user data from store
            this.customerDetails = customerDetails //push data into array

            let fields = this.profile.kycData.fields //get user data from store
            this.fields = fields //push data into array

            let items = this.profile.kycData.items //get user data from store
            this.items = items //push data into array

            let overrideFields = this.profile.kycData.overrideFields //get user data from store
            this.overrideFields = overrideFields //push data into array

            let overrideList = this.profile.kycData.overrideList //get user data from store
            this.overrideList = overrideList //push data into array
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
