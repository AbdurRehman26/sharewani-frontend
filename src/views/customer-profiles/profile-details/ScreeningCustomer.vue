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
        <div class="table-section table-min-width">
            <b-table :items="items" :fields="fields">
                <template slot="full_name" slot-scope="data">
                    <a
                        href="javascript:void(0);"
                        class="cursor-pointer"
                        v-b-modal.screening-detail-popup
                        >{{ data.value }}</a
                    >
                </template>

                <template slot="country" slot-scope="data">
                    <a
                        href="javascript:void(0);"
                        class="cursor-pointer"
                        v-b-modal.screening-detail-popup
                        >{{ data.value }}</a
                    >
                </template>

                <template slot="associates" slot-scope="data">
                    <a
                        href="javascript:void(0);"
                        class="cursor-pointer"
                        v-b-modal.screening-detail-popup
                        >{{ data.value }}</a
                    >
                </template>

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
                    <div class="gcse-search"></div>
                    <!--                     <div class="gcse-searchresults-only"></div> -->
                </div>
                <!-- google search end-->
            </div>
        </div>
        <cancel-review-process-popup></cancel-review-process-popup>
        <kyc-status-review-popup></kyc-status-review-popup>
        <screening-detail-popup></screening-detail-popup>
        <manual-alert-popup></manual-alert-popup>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import customerInformation from '@/components/CustomerInfo.vue'
import kycStatusReviewPopup from '@/components/popups/KYCStatusReviewPopup.vue'
import cancelReviewProcessPopup from '@/components/popups/CancelReviewProcessPopup.vue'
import screeningDetailPopup from '@/components/popups/ScreeningDetailPopup.vue'
import statusTypeIcon from '@/components/AlertType.vue'
import manualAlertPopup from '@/components/popups/ManualAlertPopup.vue'

export default {
    components: {
        customerInformation,
        kycStatusReviewPopup,
        cancelReviewProcessPopup,
        screeningDetailPopup,
        statusTypeIcon,
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
