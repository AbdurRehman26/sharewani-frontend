<template>
    <div>
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
                            Click here or drag & drop data file here to upload
                        </h5>
                        <p>Supported file formats are XLS, XLSX</p>
                    </div>
                </div>
            </b-form-group>
            <div class="file-activity">
                <div class="file-thumbnail">
                    <img :src="require('@/assets/images/xls.png')" />
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
        </b-form>
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
