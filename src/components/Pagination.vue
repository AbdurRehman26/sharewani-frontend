<template>
    <div class="table-pagination">
        <div class="row">
            <div class="col-lg-6">
                <div class="record-shown">
                    <b-form-group>
                        <b-form-select
                            id="input-3"
                            class="form-control"
                            v-model="record"
                            :options="showRecords"
                            required
                        ></b-form-select>
                    </b-form-group>
                    <p>Showing 1 to 10 of 18 records</p>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="next-previous-pagination">
                    <b-button type="submit" class="disable" variant="primary"
                        >PREVIOUS</b-button
                    >
                    <b-button type="submit" variant="primary">NEXT</b-button>
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
    }, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            showRecords: [{ text: 'Show 10 records', value: null }],
            record: null,
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
