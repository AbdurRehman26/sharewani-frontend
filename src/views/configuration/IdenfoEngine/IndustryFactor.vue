<template>
    <div class="infoengine">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-4">
                    <h2>Industry Factor</h2>
                </div>
                <div class="col-md-8 text-right">
                    <ul>
                        <li>
                            <base-search
                                :placeholder="'Search industry'"
                            ></base-search>
                        </li>
                        <li>
                            <b-button type="button" variant="primary"
                                >Apply</b-button
                            >
                        </li>
                        <li>
                            <b-button type="button" variant="secondary"
                                >+ Add Industry</b-button
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
                    key: 'industrycode',
                    label: 'Industry Code',
                    class: 'text-center',
                },
                {
                    key: 'industrytitle',
                    label: 'Industry Title',
                },
                {
                    key: 'worktypeimpact',
                    label: 'WORK TYPE IMPACT',
                },
                {
                    key: 'action',
                    label: 'ACTION',
                    class: 'two-list',
                },
            ],
            items: [
                {
                    industrycode: 1,
                    industrytitle: 'Agriculture, forestry and fishing',
                    worktypeimpact: 'View Work Type Impact',
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
                    industrycode: 2,
                    industrytitle: 'Mining and quarrying',
                    worktypeimpact: 'View Work Type Impact',
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
                    industrycode: 3,
                    industrytitle: 'Manufacturing',
                    worktypeimpact: 'View Work Type Impact',
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
                    industrycode: 4,
                    industrytitle:
                        'Electricity, gas, steam and air conditioning supply',
                    worktypeimpact: 'View Work Type Impact',
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
                    industrycode: 5,
                    industrytitle: 'Water supply; sewerage, waste management',
                    worktypeimpact: 'View Work Type Impact',
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
                    industrycode: 6,
                    industrytitle: 'Construction',
                    worktypeimpact: 'View Work Type Impact',
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
                    industrycode: 7,
                    industrytitle:
                        'Wholesale and retail trade; repair of motor vehicles',
                    worktypeimpact: 'View Work Type Impact',
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
                    industrycode: 8,
                    industrytitle: 'Transportation and storage',
                    worktypeimpact: 'View Work Type Impact',
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
                    industrycode: 9,
                    industrytitle: 'Accommodation and food service activities',
                    worktypeimpact: 'View Work Type Impact',
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
                    industrycode: 10,
                    industrytitle: 'Information and communication',
                    worktypeimpact: 'View Work Type Impact',
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
