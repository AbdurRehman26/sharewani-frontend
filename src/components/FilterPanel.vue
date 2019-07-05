<template>
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
                                v-model="filterSelected"
                                :options="filterList"
                                buttons
                                button-variant="outline-primary"
                                :name="filterName"
                            ></b-form-radio-group>
                        </b-form-group>
                    </li>
                    <li>
                        <div class="form-group search-input">
                            <i class="icon-Search"></i>
                            <b-form-input placeholder="Search"></b-form-input>
                        </div>
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
</template>
<script>
export default {
    /*
        |--------------------------------------------------------------------------
        | Component > props
        |--------------------------------------------------------------------------
        */
    props: {
        filterList: {
            type: Array,
            default: null,
        },
        filterSelected: {
            type: String,
            default: 'radio',
        },

        filterHeading: {
            type: String,
            default: null,
        },
    }, // End of Component > props

    /*
        |--------------------------------------------------------------------------
        | Component > data
        |--------------------------------------------------------------------------
        */
    data() {
        return {}
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
