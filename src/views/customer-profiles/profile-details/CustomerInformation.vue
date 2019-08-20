<template>
    <div>
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
                    class="col-md-6 win-small-full"
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
                            class="col-md-6 win-small-full"
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

        <div class="filter-section sub-filter">
            <h2>Last Review</h2>
            <div class="card customer-last-review">
                <div class="card-body">
                    <div
                        class="profile-pic"
                        :style="{
                            'background-image':
                                'url(' +
                                require('@/assets/images/members/' +
                                    image +
                                    '') +
                                ')',
                        }"
                    ></div>
                    <div class="details-section">
                        <h5>
                            {{ name }}
                        </h5>
                        <span class="status-types"> {{ subHeading }}</span>
                        <span class="status-types">{{ date }}</span>
                        <p class="date-content" v-html="content"></p>
                        <p>
                            {{ details }}
                        </p>

                        <div class="file-section">
                            <pdf-icon></pdf-icon>
                        </div>
                        <div class="file-attach">
                            <base-button
                                btnVariant="link"
                                btnLabel="Download Attachment"
                            ></base-button>
                        </div>
                    </div>
                    <base-status :statusType="status"></base-status>
                </div>
            </div>
        </div>
        <cancel-review-process-popup></cancel-review-process-popup>
        <kyc-status-review-popup></kyc-status-review-popup>
        <manual-alert-popup></manual-alert-popup>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import customerInformation from '@/components/CustomerInfo.vue'
import pdfIcon from '@/components/icons/PdfIcon.vue'
import kycStatusReviewPopup from '@/components/popups/KYCStatusReviewPopup.vue'
import cancelReviewProcessPopup from '@/components/popups/CancelReviewProcessPopup.vue'
import manualAlertPopup from '@/components/popups/ManualAlertPopup.vue'
import tags from '@/components/Tags.vue'
export default {
    components: {
        customerInformation,
        tags,
        cancelReviewProcessPopup,
        kycStatusReviewPopup,
        pdfIcon,
        manualAlertPopup,
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
            image: 'member-1.png',
            name: 'Jacqueline Asong',
            subHeading: 'Approver',
            date: 'July 4, 2019 10:45 a.m.',
            content:
                'Submitted KYC Review Status and changed KYC Status to <b>Approved</b> with the following comment,',
            details:
                '"I didn\'t found anything unusual with the profile. All records are clear and up to date."',

            status: [
                {
                    icon: 'icon-check',
                    label: 'Approved',
                    cssClass: 'approved',
                },
            ],
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
