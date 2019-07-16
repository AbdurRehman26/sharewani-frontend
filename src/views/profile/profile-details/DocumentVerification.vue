<template>
    <div class="wrap-content doc-verify-section">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-6">
                    <h2>Document Verification</h2>
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

        <documents-submitted
            v-b-modal.document-preview
            :uploadDetails="uploadDetails"
        ></documents-submitted>

        <div class="filter-section sub-filter">
            <h2>Verification Status</h2>
        </div>
        <div class="card customer-info verify-status">
            <ul>
                <li>
                    <div class="seprator-section">
                        <div class="row">
                            <div
                                class="col-md-6"
                                v-for="(vacation, index) in vacationDetails"
                                :key="index"
                            >
                                <h3>{{ vacation.heading }}</h3>
                                <ul
                                    class="row"
                                    v-for="(descriptions,
                                    index) in vacation.descriptions"
                                    :key="index"
                                >
                                    <li class="col-md-6">
                                        <label>
                                            <a
                                                href="javascript:void(0)"
                                                v-b-modal.overwrite-result
                                                v-if="
                                                    descriptions.title ==
                                                        'Manually Overwrite Result'
                                                "
                                                >{{ descriptions.title }}</a
                                            ></label
                                        >
                                        <label
                                            v-if="
                                                descriptions.title !=
                                                    'Manually Overwrite Result'
                                            "
                                        >
                                            {{ descriptions.title }}</label
                                        >
                                    </li>
                                    <li class="col-md-6">
                                        <span
                                            v-if="
                                                descriptions.detail ==
                                                    'Not Matched'
                                            "
                                            class="text-danger"
                                        >
                                            {{ descriptions.detail }}
                                        </span>
                                        <span
                                            v-if="
                                                descriptions.detail !=
                                                    'Not Matched'
                                            "
                                        >
                                            {{ descriptions.detail }}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <cancel-review-process></cancel-review-process>
        <kyc-status-review></kyc-status-review>
        <overwrite-result></overwrite-result>
        <document-preview></document-preview>
    </div>
</template>
<script>
import customerInformation from '@/components/CustomerInfo.vue'
import documentsSubmitted from '@/components/DocumentsSubmitted.vue'
import kycStatusReview from '@/components/popups/KYCStatusReviewPopup.vue'
import cancelReviewProcess from '@/components/popups/CancelReviewProcessPopup.vue'
import overwriteResult from '@/components/popups/OverwriteResultPopup.vue'
import documentPreview from '@/components/popups/DocumentPreviewPopup.vue'

export default {
    components: {
        customerInformation,
        documentsSubmitted,
        kycStatusReview,
        cancelReviewProcess,
        overwriteResult,
        documentPreview,
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

            vacationDetails: [
                {
                    heading: 'Liveness Detection',
                    descriptions: [
                        {
                            title: 'Verification Timestamp:',
                            detail: 'June 1, 2019 10:45 am',
                        },
                        {
                            title: 'Score:',
                            detail: '78.5',
                        },
                        {
                            title: 'Result:',
                            detail: 'Matched',
                        },
                        {
                            title: 'Is Manually Overwrited:',
                            detail: 'No',
                        },
                        {
                            title: 'Manually Overwrite Result',
                            detail: '',
                        },
                    ],
                },
                {
                    heading: 'Face Comparision',
                    descriptions: [
                        {
                            title: 'Verification Timestamp:',
                            detail: 'June 1, 2019 10:52 am',
                        },
                        {
                            title: 'Score:',
                            detail: '54.5',
                        },
                        {
                            title: 'Result:',
                            detail: 'Not Matched',
                        },
                        {
                            title: 'Is Manually Overwrited:',
                            detail:
                                'Yes, overwrited by Greg Eliss on June 2, 2019',
                        },
                        {
                            title: 'Manually Overwrite Result',
                            detail: '',
                        },
                    ],
                },
            ],

            uploadDetails: [
                {
                    image: 'bill.png',
                    thumbnail: 'thumbnail-jpg.png',
                    title: 'Utility Bill',
                    uploadDate: 'Uploaded June 1, 2019',
                },
                {
                    image: 'nic.png',
                    thumbnail: 'thumbnail-jpg.png',
                    title: 'ID Card',
                    uploadDate: 'Uploaded June 1, 2019',
                },
                {
                    image: 'image5.png',
                    thumbnail: 'thumbnail-jpg.png',
                    title: 'Selfie From Video',
                    uploadDate: 'Uploaded June 1, 2019',
                },
                {
                    image: 'video.png',
                    thumbnail: 'thumbnail-mp4.png',
                    title: 'Recorded Video',
                    uploadDate: 'Uploaded June 1, 2019',
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
