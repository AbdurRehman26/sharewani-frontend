<template>
    <div class="wrap-content">
        <div class="filter-section">
            <div class="row">
                <!--                 <div class="col-md-4">
                    <h2>System Users</h2>
                </div> -->
                <div class="col-md-12 text-right">
                    <ul>
                        <li>
                            <h2>System Users</h2>
                        </li>
                        <li>
                            <base-search></base-search>
                        </li>
                        <li>
                            <b-form-group>
                                <b-form-select
                                    id="input-3"
                                    class="form-control"
                                    v-model="filterByUserRoles"
                                    :options="filterUserRoles"
                                    required
                                ></b-form-select>
                            </b-form-group>
                        </li>
                        <li>
                            <b-form-group>
                                <b-form-select
                                    id="input-3"
                                    class="form-control"
                                    v-model="filterByBranch"
                                    :options="filterByBranches"
                                    required
                                ></b-form-select>
                            </b-form-group>
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
        <alertTable :listItems="items" :listFields="fields"></alertTable>
        <pagination></pagination>
    </div>
</template>

<script>
import alertTable from '@/components/tables/AlertTable.vue'
import pagination from '@/components/Pagination.vue'
export default {
    components: {
        alertTable,
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
            selected: '1',

            options: [
                { text: 'All', value: '1' },
                { text: 'Pending', value: '2' },
                { text: 'In Review', value: '3' },
            ],

            filterByUserRoles: null,

            filterUserRoles: [
                { text: 'Filter by user roles', value: null },
                'Name Screening',
                'Documentation',
                'Risk Rating',
                'Status',
            ],
            filterByBranch: null,

            filterByBranches: [
                { text: 'Filter by branch', value: null },
                'Name Screening',
                'Documentation',
                'Risk Rating',
                'Status',
            ],
            fields: [
                {
                    key: 'profile',
                    label: '',
                },
                {
                    key: 'customer',
                    label: 'CUSTOMER',
                },
                {
                    key: 'full_name',
                    label: 'FULL NAME',
                },
                {
                    key: 'nationality',
                    label: 'NATIONALITY',
                },
                {
                    key: 'name_screening',
                    label: 'NAME SCREENING',
                    thClass: 'person-icon',
                },
                {
                    key: 'documentation',
                    label: 'DOCUMENTATION',
                    thClass: 'document-icon',
                },
                {
                    key: 'risk_rating',
                    label: 'RISK RATING',
                    thClass: 'graph-icon',
                },
                {
                    key: 'status',
                    label: 'STATUS',
                },
            ],
            items: [
                {
                    profile: 'member-1.png',
                    customer: '1250976',
                    full_name: 'Zeng Wen',
                    nationality: 'British',
                    name_screening: 'pending',
                    documentation: 'inreview',
                    risk_rating: 'reject',
                    status: 'lock',
                },
                {
                    profile: 'member-2.png',
                    customer: '1250976',
                    full_name: 'Edward Lindgren',
                    nationality: 'British',
                    name_screening: 'inreview',
                    documentation: 'pending',
                    risk_rating: 'pending',
                    status: 'review',
                },
                {
                    profile: 'member-3.png',
                    customer: '3282345',
                    full_name: 'Christian Russell',
                    nationality: 'American',
                    name_screening: 'pending',
                    documentation: 'inreview',
                    risk_rating: 'reject',
                    status: 'lock',
                },
                {
                    profile: 'member-4.png',
                    customer: '3312353',
                    full_name: 'Fua Lamba',
                    nationality: 'Singaporean',
                    name_screening: 'reject',
                    documentation: 'pending',
                    risk_rating: 'inreview',
                    status: 'lock',
                },
                {
                    profile: 'member-5.png',
                    customer: '1250976',
                    full_name: 'Alexander Ljung',
                    nationality: 'Greek',
                    name_screening: 'pending',
                    documentation: 'pending',
                    risk_rating: 'inreview',
                    status: 'review',
                },
                {
                    profile: 'member-6.png',
                    customer: '2489573',
                    full_name: 'Chukwudi Udo',
                    nationality: 'Mexican',
                    name_screening: 'pending',
                    documentation: 'inreview',
                    risk_rating: 'pending',
                    status: 'review',
                },
                {
                    profile: 'member-7.png',
                    customer: '3312353',
                    full_name: 'Linzell Bowman',
                    nationality: 'British',
                    name_screening: 'pending',
                    documentation: 'inreview',
                    risk_rating: 'reject',
                    status: 'review',
                },
                {
                    profile: 'member-8.png',
                    customer: '3282345',
                    full_name: 'Vương Mộng Nhi',
                    nationality: 'Chinese',
                    name_screening: 'reject',
                    documentation: 'pending',
                    risk_rating: 'pending',
                    status: 'review',
                },
                {
                    profile: 'member-9.png',
                    customer: '2321345',
                    full_name: 'Lew Silverton',
                    nationality: 'British',
                    name_screening: 'pending',
                    documentation: 'reject',
                    risk_rating: 'inreview',
                    status: 'review',
                },
                {
                    profile: 'member-10.png',
                    customer: '2223535',
                    full_name: 'Xun Guiying',
                    nationality: 'Chinese',
                    name_screening: 'inreview',
                    documentation: 'pending',
                    risk_rating: 'pending',
                    status: 'review',
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
