<template>
    <div>
        <div class="card customer-info screen-section">
            <customer-information
                profilePic="image5.png"
                :customerDetails="customerDetails"
            ></customer-information>
        </div>

        <documents-submitted
            @click="popup"
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
                                                class="secondary"
                                                @click="
                                                    addModify(
                                                        vacation.heading +
                                                            ' Result'
                                                    )
                                                "
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
                                            class="danger"
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
        <cancel-review-process-popup></cancel-review-process-popup>
        <kyc-status-review-popup></kyc-status-review-popup>
        <overwrite-result-popup :label="label"></overwrite-result-popup>
        <manual-alert-popup></manual-alert-popup>
        <document-preview-popup></document-preview-popup>
        <picture-preview-popup></picture-preview-popup>
        <id-card-preview-popup></id-card-preview-popup>
        <bill-preview-popup></bill-preview-popup>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import customerInformation from '@/components/CustomerInfo.vue'
import documentsSubmitted from '@/components/DocumentsSubmitted.vue'
import kycStatusReviewPopup from '@/components/popups/KYCStatusReviewPopup.vue'
import cancelReviewProcessPopup from '@/components/popups/CancelReviewProcessPopup.vue'
import overwriteResultPopup from '@/components/popups/OverwriteResultPopup.vue'
import documentPreviewPopup from '@/components/popups/DocumentPreviewPopup.vue'
import picturePreviewPopup from '@/components/popups/PicturePreviewPopup.vue'
import idCardPreviewPopup from '@/components/popups/IDCardPreviewPopup.vue'
import billPreviewPopup from '@/components/popups/BillPreviewPopup.vue'
import manualAlertPopup from '@/components/popups/ManualAlertPopup.vue'

export default {
    components: {
        customerInformation,
        documentsSubmitted,
        kycStatusReviewPopup,
        cancelReviewProcessPopup,
        overwriteResultPopup,
        documentPreviewPopup,
        picturePreviewPopup,
        idCardPreviewPopup,
        billPreviewPopup,
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

            vacationDetails: [],

            uploadDetails: [],

            label: '',
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
            let doccustomerDetails = this.profile.documentVerification
                .customerDetails //get user data from store
            this.customerDetails = doccustomerDetails //push data into array

            let docvacationDetails = this.profile.documentVerification
                .vacationDetails //get user data from store
            this.vacationDetails = docvacationDetails //push data into array

            let docuploadDetails = this.profile.documentVerification
                .uploadDetails //get user data from store
            this.uploadDetails = docuploadDetails //push data into array
        },

        popup(newVar) {
            if (newVar == 'pic') {
                this.$bvModal.show('picture-preview-popup')
            } else if (newVar == 'video') {
                this.$bvModal.show('document-preview-popup')
            } else if (newVar == 'card') {
                this.$bvModal.show('id-card-preview-popup')
            } else if (newVar == 'bill') {
                this.$bvModal.show('bill-preview-popup')
            }
        },

        addModify(e) {
            this.label = e
            this.$bvModal.show('overwrite-result-popup')
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
