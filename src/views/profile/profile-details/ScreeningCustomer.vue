<template>
    <div class="wrap-content screen-customer">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-3">
                    <h2>Name Screening</h2>
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
                                v-b-modal.cancel-review-process
                                type="button"
                                variant="link font-semibold"
                            >
                                Cancel Review Process
                            </b-button>
                        </li>
                        <li>
                            <b-button
                                v-b-modal.kyc-status-review
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

        <div class="filter-section sub-filter">
            <h2>Name Screening Hit Details</h2>
        </div>
        <div class="table-section">
            <b-table :items="items" :fields="fields">
                <template slot="sanction" slot-scope="data">
                    <a href="javascript:void(0);" v-b-modal.screening-detail>
                        <div
                            class="pending indication-icons"
                            v-if="data.value == 'disabled'"
                        >
                            <i class="icon-check"></i>
                        </div>
                        <div
                            class="inreview indication-icons"
                            v-if="data.value == 'pending'"
                        >
                            <i class="icon-wrong"></i>
                        </div>
                        <div
                            class="reject indication-icons"
                            v-if="data.value == 'reject'"
                        >
                            <i class="icon-wrong"></i>
                        </div>
                        <div
                            class="pending indication-icons"
                            v-if="data.value == 'wait'"
                        >
                            <i class="icon-loading"></i>
                        </div>
                    </a>
                </template>
                <template slot="rep" slot-scope="data">
                    <a href="javascript:void(0);" v-b-modal.screening-detail>
                        <div
                            class="pending indication-icons"
                            v-if="data.value == 'disabled'"
                        >
                            <i class="icon-check"></i>
                        </div>
                        <div
                            class="inreview indication-icons"
                            v-if="data.value == 'pending'"
                        >
                            <i class="icon-wrong"></i>
                        </div>
                        <div
                            class="reject indication-icons"
                            v-if="data.value == 'reject'"
                        >
                            <i class="icon-wrong"></i>
                        </div>
                        <div
                            class="pending indication-icons"
                            v-if="data.value == 'wait'"
                        >
                            <i class="icon-loading"></i>
                        </div>
                    </a>
                </template>
                <template slot="enforcement" slot-scope="data">
                    <a href="javascript:void(0);" v-b-modal.screening-detail>
                        <div
                            class="pending indication-icons"
                            v-if="data.value == 'disabled'"
                        >
                            <i class="icon-check"></i>
                        </div>
                        <div
                            class="inreview indication-icons"
                            v-if="data.value == 'pending'"
                        >
                            <i class="icon-wrong"></i>
                        </div>
                        <div
                            class="reject indication-icons"
                            v-if="data.value == 'reject'"
                        >
                            <i class="icon-wrong"></i>
                        </div>
                        <div
                            class="pending indication-icons"
                            v-if="data.value == 'wait'"
                        >
                            <i class="icon-loading"></i>
                        </div>
                    </a>
                </template>
                <template slot="blackList" slot-scope="data">
                    <a href="javascript:void(0);" v-b-modal.screening-detail>
                        <div
                            class="pending indication-icons"
                            v-if="data.value == 'disabled'"
                        >
                            <i class="icon-check"></i>
                        </div>
                        <div
                            class="inreview indication-icons"
                            v-if="data.value == 'pending'"
                        >
                            <i class="icon-wrong"></i>
                        </div>
                        <div
                            class="reject indication-icons"
                            v-if="data.value == 'reject'"
                        >
                            <i class="icon-wrong"></i>
                        </div>
                        <div
                            class="pending indication-icons"
                            v-if="data.value == 'wait'"
                        >
                            <i class="icon-loading"></i>
                        </div>
                    </a>
                </template>
                <template slot="hit" slot-scope="data">
                    <div
                        class="pending status-view"
                        v-if="data.value == 'pending'"
                    >
                        <i class="icon-loading"></i>
                        <span>Pending</span>
                    </div>
                    <div
                        class="approved status-view"
                        v-if="data.value == 'notHit'"
                    >
                        <i class="icon-check"></i> <span>Not Hit</span>
                    </div>
                    <div
                        class="rejected status-view"
                        v-if="data.value == 'hit'"
                    >
                        <i class="icon-wrong"></i> <span>Hit</span>
                    </div>
                </template>
            </b-table>
        </div>
        <div class="filter-section sub-filter">
            <h2>Adverse Media Search</h2>
        </div>
        <div class="card iframe-section">
            <div class="scrollable" id="style-2">
                <img :src="require('@/assets/images/dummy/google-pic.png')" />
            </div>
        </div>
        <cancel-review-process></cancel-review-process>
        <kyc-status-review></kyc-status-review>
        <screening-detail></screening-detail>
    </div>
</template>
<script>
import customerInformation from '@/components/CustomerInfo.vue'
import kycStatusReview from '@/components/popups/KYCStatusReviewPopup.vue'
import cancelReviewProcess from '@/components/popups/CancelReviewProcessPopup.vue'
import screeningDetail from '@/components/popups/ScreeningDetailPopup.vue'

export default {
    components: {
        customerInformation,
        kycStatusReview,
        cancelReviewProcess,
        screeningDetail,
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
            customerDetails: [
                {
                    heading: 'Basic Information',
                    descriptions: [
                        {
                            title: 'Customer ID:',
                            detail: '210345',
                        },
                        {
                            title: 'First Name:',
                            detail: 'Henk',
                        },
                        {
                            title: 'Middle Name:',
                            detail: 'John',
                        },
                        {
                            title: 'Last Name:',
                            detail: 'Fortuin',
                        },
                        {
                            title: 'Gender:',
                            detail: 'Male',
                        },
                        {
                            title: 'Date of Birth:',
                            detail: 'June 24, 1984',
                        },
                        {
                            title: 'Nationality:',
                            detail: 'American',
                        },
                        {
                            title: 'Country of Residence:',
                            detail: 'United Kingdom',
                        },
                    ],
                },
            ],

            fields: [
                {
                    key: 'full_name',
                    label: 'FULL NAME',
                },
                {
                    key: 'country',
                    label: 'COUNTRY',
                },
                {
                    key: 'associates',
                    label: 'Associates',
                },
                {
                    key: 'sanction',
                    label: 'SANCTION',
                    thClass: 'sanction-icon',
                },
                {
                    key: 'rep',
                    label: 'REP',
                    thClass: 'rep-icon',
                },
                {
                    key: 'enforcement',
                    label: 'Enforcement',
                    thClass: 'enforcement-icon',
                },
                {
                    key: 'blackList',
                    label: 'Client Black List',
                    thClass: 'blacklist-icon',
                },
                {
                    key: 'hit',
                    label: 'HIT determination',
                },
            ],
            items: [
                {
                    full_name: 'Henk Fortuin',
                    country: 'United Kingdom',
                    associates: 'N/A',
                    sanction: 'reject',
                    rep: 'disabled',
                    enforcement: 'disabled',
                    blackList: 'disabled',
                    hit: 'notHit',
                },
                {
                    full_name: 'Henk John Fortuin',
                    country: 'United Kingdom',
                    associates: 'Robert W & 2 more',
                    sanction: 'reject',
                    rep: 'pending',
                    enforcement: 'disabled',
                    blackList: 'disabled',
                    hit: 'hit',
                },
                {
                    full_name: 'Henk John Fortuin',
                    country: 'United Kingdom',
                    associates: 'N/A',
                    sanction: 'wait',
                    rep: 'wait',
                    enforcement: 'wait',
                    blackList: 'wait',
                    hit: 'pending',
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
