<template>
    <div class="infoengine">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-4">
                    <h2>Product Factor</h2>
                </div>
                <div class="col-md-8 text-right">
                    <ul>
                        <li>
                            <base-search
                                :placeholder="'Search Product'"
                            ></base-search>
                        </li>
                        <li>
                            <b-button type="button" variant="primary"
                                >Apply</b-button
                            >
                        </li>
                        <li>
                            <b-button type="button" variant="secondary"
                                >+ Add Product</b-button
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="table-section m-b-30">
            <b-table :items="items" :fields="fields">
                <template slot="worktypeimpact" slot-scope="data">
                    <div class="work-impact">
                        <span>{{ data.value }}</span>
                        <i class="icon-caret-right"></i>
                    </div>
                </template>
                <template slot="rating" slot-scope="data">
                    <base-status :statusType="data.value"></base-status>
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
                    key: 'productCode',
                    label: 'PRODUCT CODE',
                    class: 'text-center w-150px',
                },
                {
                    key: 'productIndustry',
                    label: 'Product Title',
                },
                {
                    key: 'rating',
                    label: 'RATING',
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
                    productCode: 1501,
                    productIndustry: 'Virtual Currency Wallet',
                    rating: 'High Risk',
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
                    productCode: 1502,
                    productIndustry: 'Virtual Currency Exchange',
                    rating: 'High Risk',
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
                    productCode: 1503,
                    productIndustry: 'Current Account',
                    rating: 'High Risk',
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
                    productCode: 1504,
                    productIndustry: 'Saving Account',
                    rating: 'High Risk',
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
                    productCode: 1505,
                    productIndustry: 'Credit Card',
                    rating: 'Medium Risk',
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
                    productCode: 1506,
                    productIndustry: 'Short Term Loan',
                    rating: 'Medium Risk',
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
                    productCode: 1507,
                    productIndustry: 'Financial Investment',
                    rating: 'High Risk',
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
