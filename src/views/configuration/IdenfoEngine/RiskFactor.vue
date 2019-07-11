<template>
    <div class="infoengine">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-6">
                    <h2>Risk Factor & Weightage</h2>
                </div>
            </div>
        </div>
        <div class="table-section m-b-30">
            <b-table :items="items" :fields="fields">
                <template slot="scorescale" slot-scope="data">
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
                    key: 'riskCode',
                    label: 'Risk Factor',
                    class: 'w-320px',
                },
                {
                    key: 'weight',
                    label: 'WEIGHT',
                    class: 'text-center',
                },
                {
                    key: 'overrideTo',
                    label: 'OVERRIDE TO',
                    class: 'text-center',
                },
                {
                    key: 'scorescale',
                    label: 'Score Scale',
                },
                {
                    key: 'action',
                    label: 'ACTION',
                    class: 'single-list',
                },
            ],
            items: [
                {
                    riskCode: 'Address in High Risk Country',
                    weight: 15,
                    overrideTo: 'N/A',
                    scorescale: 'View Score Scale',
                    action: [
                        {
                            text: 'Modify',
                        },
                    ],
                },
                {
                    riskCode: 'Nationality',
                    weight: 10,
                    overrideTo: 'N/A',
                    scorescale: 'View Score Scale',
                    action: [
                        {
                            text: 'Modify',
                        },
                    ],
                },
                {
                    riskCode: 'State',
                    weight: 0,
                    overrideTo: 'N/A',
                    scorescale: 'View Score Scale',
                    action: [
                        {
                            text: 'Modify',
                        },
                    ],
                },
                {
                    riskCode: 'Work Status',
                    weight: 10,
                    overrideTo: 'N/A',
                    scorescale: 'View Score Scale',
                    action: [
                        {
                            text: 'Modify',
                        },
                    ],
                },
                {
                    riskCode: 'Length of Relationship',
                    weight: 5,
                    overrideTo: 'N/A',
                    scorescale: 'View Score Scale',
                    action: [
                        {
                            text: 'Modify',
                        },
                    ],
                },
                {
                    riskCode: 'Channel Type',
                    weight: 5,
                    overrideTo: 'N/A',
                    scorescale: 'View Score Scale',
                    action: [
                        {
                            text: 'Modify',
                        },
                    ],
                },
                {
                    riskCode: 'Product',
                    weight: 10,
                    overrideTo: 'N/A',
                    scorescale: 'View Score Scale',
                    action: [
                        {
                            text: 'Modify',
                        },
                    ],
                },
                {
                    riskCode: 'PEP Hit',
                    weight: 15,
                    overrideTo: 'High',
                    scorescale: 'View Score Scale',
                    action: [
                        {
                            text: 'Modify',
                        },
                    ],
                },
                {
                    riskCode: 'Enforcement Hit',
                    weight: 15,
                    overrideTo: 'High',
                    scorescale: 'View Score Scale',
                    action: [
                        {
                            text: 'Modify',
                        },
                    ],
                },
                {
                    riskCode: 'Blacklist Hit',
                    weight: 15,
                    overrideTo: 'High',
                    scorescale: 'View Score Scale',
                    action: [
                        {
                            text: 'Modify',
                        },
                    ],
                },
                {
                    riskCode: 'Sanction Hit',
                    weight: 0,
                    overrideTo: 'Sanction',
                    scorescale: 'View Score Scale',
                    action: [
                        {
                            text: 'Modify',
                        },
                    ],
                },
                {
                    riskCode: 'Document Verification',
                    weight: 0,
                    overrideTo: 'High',
                    scorescale: 'View Score Scale',
                    action: [
                        {
                            text: 'Modify',
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
