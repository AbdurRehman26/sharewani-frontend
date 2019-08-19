<template>
    <div class="wrap-content ocr-config-page">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-4">
                    <h2>OCR Configuration</h2>
                </div>
            </div>
        </div>

        <div class="config-card-switch">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card custom-card">
                        <div class="fields-area">
                            <div class="brand-color-area">
                                <h5 class="m-b-30">
                                    OCR Switch
                                </h5>
                                <div class="row">
                                    <div class="col-lg-12 form-radio">
                                        <b-form-group
                                            id="populatedata"
                                            label="Use OCR to populate Data in Registration Form"
                                            label-for="populatedata"
                                        >
                                            <b-form-radio-group
                                                v-model="form.populateData"
                                                :options="
                                                    form.populateDataOption
                                                "
                                                name="populatedata"
                                            ></b-form-radio-group>
                                        </b-form-group>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12">
                                <base-button
                                    btnVariant="primary"
                                    btnLabel="UPDATE"
                                ></base-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},

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
            form: {
                populateData: null,
                populateDataOption: [{ text: 'Yes', value: null }, 'No'],
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
    methods: {}, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {}, // End of Component > mounted
} // End of export default
</script>
