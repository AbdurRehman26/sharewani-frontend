<template>
    <div class="table-pagination">
        <div class="row">
            <div class="col-md-7">
                <div class="record-shown">
                    <b-form-group
                        :class="
                            selectPaginationDisable == true ? 'disable' : ''
                        "
                    >
                        <b-form-select
                            id="input-3"
                            class="form-control"
                            v-model="record"
                            :options="showRecords"
                            required
                        ></b-form-select>
                    </b-form-group>
                    <p>{{ totalRecords }}</p>
                </div>
            </div>
            <div class="col-md-5">
                <div class="next-previous-pagination">
                    <b-button type="submit" class="disable" variant="primary"
                        >PREVIOUS</b-button
                    >
                    <b-button
                        type="submit"
                        variant="primary"
                        :class="nextBtnDisable == true ? 'disable' : ''"
                        >NEXT</b-button
                    >
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
        totalRecords: {
            type: String,
            default: null,
        },
        nextBtnDisable: {
            type: Boolean,
            default: null,
        },
        selectPaginationDisable: {
            type: Boolean,
            default: null,
        },
        showRecords: {
            type: Array,
            default: null,
        },
    }, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            defaultsShowRecords: [
                { text: 'Show 10 records', value: null },
                { text: 'Show 20 records', value: 20 },
                { text: 'Show 50 records', value: 50 },
            ],
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
