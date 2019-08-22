<template>
    <b-form class="step-form">
        <div class="row">
            <div class="col-lg-12">
                <h3>Step 1: Upload Documents</h3>
            </div>
            <div class="col-lg-8">
                <div class="row form-options">
                    <div class="col-lg-6">
                        <b-form-group
                            id="input-group-5"
                            label="ID Document Type"
                            label-for="documentType"
                        >
                            <b-form-select
                                class="form-control"
                                v-model="form.documentType"
                                :options="form.docTypeOption"
                            ></b-form-select>
                        </b-form-group>
                    </div>
                    <div class="col-lg-6">
                        <b-form-group
                            id="input-group-6"
                            label="DOCUMENT SCAN COPY"
                            label-for="documentScan"
                        >
                            <b-form-file
                                v-model="form.documentScanCopy"
                                accept="image/jpeg, image/png"
                                placeholder="Select scan copy (JPG, PNG or TIFF file)"
                                drop-placeholder="Drop file here..."
                            ></b-form-file>
                        </b-form-group>
                    </div>
                    <div class="col-lg-6">
                        <b-form-group
                            id="input-group-7"
                            label="UTILITY BILL SCAN COPY"
                            label-for="utilityscan"
                        >
                            <b-form-file
                                v-model="form.utilityScanCopy"
                                accept="image/jpeg, image/png"
                                placeholder="Select scan copy (JPG, PNG or TIFF file)"
                                drop-placeholder="Drop file here..."
                            ></b-form-file>
                        </b-form-group>
                    </div>
                    <div class="col-lg-6"></div>
                    <div class="col-lg-6">
                        <base-button
                            btnType="submit"
                            btnVariant="primary"
                            btnLabel="CONTINUE"
                            @preventFunction="linking()"
                        ></base-button>
                    </div>
                </div>
            </div>
            <div class="col-lg-4"></div>
        </div>
    </b-form>
</template>
<script>
export default {
    components: {},

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
            form: {
                documentType: null,
                documentScanCopy: null,
                utilityScanCopy: null,
                docTypeOption: [
                    { value: null, text: 'Select document type' },
                    'National ID Card',
                    'Driving Licence',
                    'Passport',
                ],
            },
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
    methods: {
        linking() {
            if (this.$route.meta.publicRegistration === true) {
                this.$router.push('/public-registration/record-video')
            } else {
                this.$router.push('/register-customer/record-video')
            }
        },
    }, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {}, // End of Component > mounted
} // End of export default
</script>
