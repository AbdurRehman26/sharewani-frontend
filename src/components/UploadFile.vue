<template>
    <div class="row">
        <div class="col-lg-12 m-b-20">
            <h3>Client's Black List Data</h3>
        </div>
        <div class="col-lg-8">
            <b-form>
                <b-form-group class="upload-files">
                    <b-form-file
                        v-model="file"
                        placeholder="Choose a file..."
                        drop-placeholder="Drop file here..."
                    ></b-form-file>

                    <div class="file-detail">
                        <div class="file-title">
                            <h5>
                                Click here or drag & drop data file here to
                                upload
                            </h5>
                            <p>Supported file formats are XLS, XLSX</p>
                        </div>
                    </div>
                </b-form-group>
                <div class="file-activity">
                    <div class="file-thumbnail">
                        <excel-icon></excel-icon>
                    </div>
                    <div class="file-progress">
                        <h6>Uploading</h6>
                        <b-progress
                            :value="value"
                            :max="max"
                            class="mb-3"
                        ></b-progress>
                        <span>65% completed</span>
                    </div>
                </div>
                <div class="file-upload-info">
                    <div class="file-last-update">
                        <p>Last updated on June 24,2019</p>
                    </div>
                    <div class="download-current-file">
                        <base-button
                            btnVariant="link"
                            btnLabel="Download Current Data File"
                            btnIcon="icon-export"
                        ></base-button>
                    </div>
                </div>
            </b-form>
        </div>

        <div class="col-lg-4">
            <div class="download-template">
                <h5>Download Template</h5>
                <p>
                    To upload the black list people records into the system,
                    please download the template file. This will help you
                    understand the fields required. You can fill up and upload
                    it back into the system.
                </p>
                <div class="link-action">
                    <div class="file-thumbnail">
                        <excel-icon></excel-icon>
                    </div>
                    <base-button
                        btnVariant="link"
                        btnLabel="Download Template"
                    ></base-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import excelIcon from '@/components/icons/ExcelIcon.vue'
export default {
    components: {
        excelIcon,
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
    }, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            value: 33.333333333,
            max: 50,
            form: {
                file: null,
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
