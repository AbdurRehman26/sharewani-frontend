<template>
    <div class="wrap-content">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-3">
                    <h2>{{ filterHeading }}</h2>
                </div>
                <div class="col-md-9 text-right">
                    <ul>
                        <li>
                            <b-form-group>
                                <b-form-radio-group
                                    :id="index"
                                    v-model="selected"
                                    :options="options"
                                    buttons
                                    button-variant="outline-primary"
                                    :name="filterName"
                                ></b-form-radio-group>
                            </b-form-group>
                        </li>
                        <li>
                            <base-search></base-search>
                        </li>
                        <li>
                            <b-button type="button" variant="primary"
                                >Apply</b-button
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <b-table :items="items"></b-table>
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
            selected: '1',

            options: [
                { text: 'All', value: '1' },
                { text: 'Pending Review', value: '2' },
                { text: 'Approved', value: '3' },
                { text: 'Rejected', value: '4' },
            ],
            items: [
                {
                    age: 40,
                    file_name: 'asdasd',
                    first_name: 'Dickerson',
                    last_name: 'Macdonald',
                },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' },
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
