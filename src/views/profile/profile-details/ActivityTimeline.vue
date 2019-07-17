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

            yearDetails: [
                {
                    days: 'Today',
                    describe: [
                        {
                            image: 'member-4.png',
                            name: 'Jacqueline Asong',
                            subHeading: 'Approver',
                            date: 'July 4, 2019 10:45 a.m.',
                            details:
                                'Submitted KYC Review Status and changed KYC Status to Approved with the following comment, \n \nSubmitted KYC Review Status and changed KYC Status to Approved with the following comment,',
                        },
                        {
                            image: 'member-4.png',
                            name: 'Jacqueline Asong',
                            subHeading: 'Approver',
                            date: 'July 4, 2019 10:15 a.m.',
                            details: 'Initiated KYC Review process related to,',
                            blockTags: {
                                headings: 'Sanctioned',
                                icon: 'icon-graph',
                                actions: 'Rejected',
                            },
                        },
                    ],
                },
                {
                    days: 'June 3, 2019',
                    describe: [
                        {
                            image: 'idenfo.png',
                            name: 'IDENFO',
                            subHeading: 'System Activity',
                            date: 'July 3, 2019 12:10 p.m.',
                            details:
                                'Generated system alert related to following factor,',
                            blockTags: {
                                headings: 'Sanctioned',
                                icon: 'icon-graph',
                                actions: 'Rejected',
                            },
                        },
                    ],
                },
                {
                    days: 'June 1, 2019',
                    describe: [
                        {
                            image: 'idenfo.png',
                            name: 'IDENFO',
                            subHeading: 'System Activity',
                            date: 'July 1, 2019 11:10 a.m.',
                            details:
                                'Completed liveness detection process with the Matched result.',
                        },
                        {
                            image: 'idenfo.png',
                            name: 'IDENFO',
                            subHeading: 'System Activity',
                            date: 'July 1, 2019 11:10 a.m.',
                            details:
                                'Completed liveness detection process with the Matched result.',
                        },
                        {
                            image: 'member-5.png',
                            name: 'Cvita Doleschall',
                            subHeading: 'Relationship Manager',
                            date: 'July 1, 2019 11:05 a.m.',
                            details:
                                'Registered new customer in to the system and uploaded required documents. ',
                        },
                    ],
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
