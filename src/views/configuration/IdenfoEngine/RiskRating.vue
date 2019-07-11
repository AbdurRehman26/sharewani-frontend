<template>
    <div class="infoengine">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-6">
                    <h2>Risk Rating Score</h2>
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
                    key: 'pointscore',
                    label: 'POINT SCORE / CASE',
                    class: 'w-320px',
                },
                {
                    key: 'rating',
                    label: 'RATING',
                    class: 'text-center',
                },
                {
                    key: 'reviewperiod',
                    label: 'REVIEW PERIOD',
                    class: 'text-center',
                },
                {
                    key: 'alert',
                    label: 'Alert',
                    class: 'text-center',
                },
                {
                    key: 'action',
                    label: 'ACTION',
                    class: 'single-list',
                },
            ],
            items: [
                {
                    pointscore: '0 to 40 Points',
                    rating: 'Low Risk',
                    reviewperiod: '6 Years',
                    alert: 'No',
                    action: [
                        {
                            text: 'Modify',
                        },
                    ],
                },
                {
                    pointscore: '41 to 69 Points',
                    rating: 'Medium Risk',
                    reviewperiod: '3 Years',
                    alert: 'No',
                    action: [
                        {
                            text: 'Modify',
                        },
                    ],
                },
                {
                    pointscore: '70 to 100 Points',
                    rating: 'High Risk',
                    reviewperiod: '1 Year',
                    alert: 'Yes',
                    action: [
                        {
                            text: 'Modify',
                        },
                    ],
                },
                {
                    pointscore: 'PEP Hit',
                    rating: 'High Risk',
                    reviewperiod: 'Rejected',
                    alert: 'Yes',
                    action: [
                        {
                            text: 'Modify',
                        },
                    ],
                },
                {
                    pointscore: 'Enforcement Hit',
                    rating: 'High Risk',
                    reviewperiod: 'Rejected',
                    alert: 'Yes',
                    action: [
                        {
                            text: 'Modify',
                        },
                    ],
                },
                {
                    pointscore: 'Client Blacklist Hit',
                    rating: 'High Risk',
                    reviewperiod: 'Rejected',
                    alert: 'Yes',
                    action: [
                        {
                            text: 'Modify',
                        },
                    ],
                },
                {
                    pointscore: 'Sanction Hit',
                    rating: 'High Risk',
                    reviewperiod: 'Rejected',
                    alert: 'Yes',
                    action: [
                        {
                            text: 'Modify',
                        },
                    ],
                },
                {
                    pointscore: 'Document Verification Mismatch ',
                    rating: 'High Risk',
                    reviewperiod: 'Rejected',
                    alert: 'Yes',
                    action: [
                        {
                            text: 'Modify',
                        },
                    ],
                },
                {
                    pointscore: 'If Residence Country is Sanctioned',
                    rating: 'High Risk',
                    reviewperiod: 'Rejected',
                    alert: 'Yes',
                    action: [
                        {
                            text: 'Modify',
                        },
                    ],
                },

                {
                    pointscore: 'If Nationality Country is Sanctioned',
                    rating: 'High Risk',
                    reviewperiod: 'Rejected',
                    alert: 'Yes',
                    action: [
                        {
                            text: 'Modify',
                        },
                    ],
                },
                {
                    pointscore: 'If Contact No. Code Country is Sanctioned',
                    rating: 'High Risk',
                    reviewperiod: 'Rejected',
                    alert: 'Yes',
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
