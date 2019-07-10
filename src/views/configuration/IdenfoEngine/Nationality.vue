<template>
    <div class="infoengine">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-4">
                    <h2>Nationality Factor</h2>
                </div>
                <div class="col-md-8 text-right">
                    <ul>
                        <li>
                            <base-search></base-search>
                        </li>
                        <li>
                            <b-button type="button" variant="primary"
                                >Apply</b-button
                            >
                        </li>
                        <li>
                            <b-button type="button" variant="secondary"
                                >+ Add Nationality</b-button
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="table-section m-b-30">
            <b-table :items="items" :fields="fields">
                <template slot="rating" slot-scope="data">
                    <div class="rejected status-view">
                        <i class="icon-high-risk"></i>
                        <span>{{ data.value }}</span>
                    </div>
                </template>

                <template slot="action" slot-scope="data">
                    <div class="action-review">
                        <a
                            href="/"
                            v-for="(list, index) in data.value"
                            :key="index"
                        >
                            <div v-if="list.text === 'Modify'">
                                <i class="icon-edit"></i>
                                <span>{{ list.text }}</span>
                            </div>
                            <div v-if="list.text === 'Archive'">
                                <i class="icon-trash"></i>
                                <span>{{ list.text }}</span>
                            </div>
                        </a>
                    </div>
                </template>
            </b-table>
        </div>
        <pagination></pagination>
    </div>
</template>

<script>
import pagination from '@/components/Pagination.vue'
export default {
    components: {
        pagination,
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
            fields: [
                {
                    key: 'countrycode',
                    label: 'Country Code',
                },
                {
                    key: 'countrytitle',
                    label: 'Country Title',
                },
                {
                    key: 'rating',
                    label: 'RATING',
                    class: 'text-center rating-field',
                },
                {
                    key: 'isSanction',
                    label: 'IS SANCTION',
                    class: 'text-center',
                },
                {
                    key: 'action',
                    label: 'ACTION',
                    class: 'two-list',
                },
            ],
            items: [
                {
                    countrycode: 'AF',
                    countrytitle: 'Afghanistan',
                    rating: 'High Risk',
                    isSanction: 'No',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
                {
                    countrycode: 'AX',
                    countrytitle: 'Aland Islands',
                    rating: 'High Risk',
                    isSanction: 'No',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
                {
                    countrycode: 'AL',
                    countrytitle: 'Albania',
                    rating: 'High Risk',
                    isSanction: 'No',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
                {
                    countrycode: 'DZ',
                    countrytitle: 'Algeria',
                    rating: 'High Risk',
                    isSanction: 'No',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
                {
                    countrycode: 'AS',
                    countrytitle: 'American Samoa',
                    rating: 'High Risk',
                    isSanction: 'No',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
                {
                    countrycode: 'AD',
                    countrytitle: 'Andorra',
                    rating: 'High Risk',
                    isSanction: 'No',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
                {
                    countrycode: 'AO',
                    countrytitle: 'Angola',
                    rating: 'High Risk',
                    isSanction: 'No',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
                {
                    countrycode: 'AI',
                    countrytitle: 'Anguilla',
                    rating: 'High Risk',
                    isSanction: 'No',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
                {
                    countrycode: 'AQ',
                    countrytitle: 'Antarctica',
                    rating: 'High Risk',
                    isSanction: 'No',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
                {
                    countrycode: 'AG',
                    countrytitle: 'Antigua and Barbuda',
                    rating: 'High Risk',
                    isSanction: 'No',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
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
