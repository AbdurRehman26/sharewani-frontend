<template>
    <div class="wrap-content customer-section">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-3">
                    <h2>Customer Profile</h2>
                </div>
                <div class="col-md-9 text-right">
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
        <div class="card customer-info">
            <customer-information
                profilePic="image5.png"
                :customerDetails="customerDetails"
            ></customer-information>
        </div>
        <div class="filter-section sub-filter">
            <h2>KYC Status Summary</h2>
        </div>
        <div class="card customer-info kyc-status-section">
            <div class="row">
                <div class="col-md-12">
                    <h3>Name Screening</h3>
                </div>
                <div
                    class="col-md-6"
                    v-for="(list, index) in tags"
                    :key="index"
                >
                    <div class="row">
                        <div
                            class="col-md-6"
                            v-for="(description, index) in list.description"
                            :key="index"
                        >
                            <tags
                                :statusType="description.actions"
                                :tagIcon="description.icon"
                                :tagHeading="description.headings"
                            ></tags>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <div class="row">
                <div
                    class="col-md-6"
                    v-for="(list, index) in tagsList"
                    :key="index"
                >
                    <h3>{{ list.statusHeading }}</h3>
                    <div class="row">
                        <div
                            class="col-md-6"
                            v-for="(description, index) in list.description"
                            :key="index"
                        >
                            <tags
                                :statusType="description.actions"
                                :tagIcon="description.icon"
                                :tagHeading="description.headings"
                            ></tags>
                        </div>
                    </div>
                </div>
            </div>
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
import tags from '@/components/Tags.vue'
export default {
    components: {
        customerInformation,
        tags,
        cancelReviewProcessPopup,
        kycStatusReviewPopup,
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

            tags: [],

            tagsList: [],
        }
    }, // End of Component > data

    /*
    |--------------------------------------------------------------------------
    | Component > computed
    |--------------------------------------------------------------------------
    */
    computed: { ...mapGetters(['profile']) }, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        initializeData() {
            let customerDetails = this.profile.customerInformation
                .customerDetails //get user data from store
            this.customerDetails = customerDetails //push data into array
            let tags = this.profile.customerInformation.tags //get user data from store
            this.tags = tags //push data into array
            let tagsList = this.profile.customerInformation.tagsList //get user data from store
            this.tagsList = tagsList //push data into array
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
