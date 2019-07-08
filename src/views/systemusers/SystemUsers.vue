<template>
    <div class="wrap-content">
        <div class="filter-section">
            <div class="row">
                <!-- <div class="col-md-3">
                    <h2>System Users</h2>
                </div> -->
                <div class="col-md-12 system-user-filter">
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
                            <b-form-group>
                                <b-form-select
                                    id="input-3"
                                    class="form-control"
                                    v-model="filterByStatus"
                                    :options="filterByStatusOption"
                                    required
                                ></b-form-select>
                            </b-form-group>
                        </li>
                        <li>
                            <b-button type="button" variant="primary"
                                >Apply</b-button
                            >
                        </li>
                        <li>
                            <b-button type="button" variant="secondary"
                                >+ Add User</b-button
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <customers-table
            :listItems="items"
            :listFields="fields"
        ></customers-table>
        <pagination></pagination>
    </div>
</template>

<script>
import customersTable from '@/components/tables/CustomersTable.vue'
import pagination from '@/components/Pagination.vue'
export default {
    components: {
        customersTable,
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
            filterByStatus: null,

            filterByStatusOption: [
                { text: 'Filter by status', value: null },
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
                    key: 'residence',
                    label: 'RESIDENCE',
                },
                {
                    key: 'registration_date',
                    label: 'Registration Date',
                },
                {
                    key: 'status',
                    label: 'Status',
                },
                {
                    key: 'action',
                    label: 'ACTION',
                },
            ],
            items: [
                {
                    profile: 'member-1.png',
                    customer: '296192',
                    full_name: 'Chineze Afamefuna',
                    nationality: 'Indian',
                    residence: 'United Kingdom',
                    registration_date: 'Jun 10, 2019 6:35 p.m.',
                    status: 'pending',
                    action: 'View Profile',
                },
                {
                    profile: 'member-2.png',
                    customer: '221021',
                    full_name: 'Alex Edwards',
                    nationality: 'Pakistani',
                    residence: 'Pakistan',
                    registration_date: 'Jun 10, 2019 10:30 p.m.',
                    status: 'approved',
                    action: 'View Profile',
                },
                {
                    profile: 'member-3.png',
                    customer: '236912',
                    full_name: 'Regina Pollastro',
                    nationality: 'British',
                    residence: 'United Kingdom',
                    registration_date: 'Jun 9, 2019 10:45 a.m.',
                    status: 'rejected',
                    action: 'View Profile',
                },
                {
                    profile: 'member-4.png',
                    customer: '266171',
                    full_name: 'Boris Ukhtomsky',
                    nationality: 'American',
                    residence: 'United Kingdom',
                    registration_date: 'Jun 9, 2019 9:30 p.m.',
                    status: 'approved',
                    action: 'View Profile',
                },
                {
                    profile: 'member-5.png',
                    customer: '284619',
                    full_name: 'Kimmy McIlmorie',
                    nationality: 'Algerian',
                    residence: 'United Kingdom',
                    registration_date: 'Jun 9, 2019 9:10 p.m.',
                    status: 'approved',
                    action: 'View Profile',
                },
                {
                    profile: 'member-6.png',
                    customer: '299488',
                    full_name: 'Noell Blue',
                    nationality: 'Belgian',
                    residence: 'United Kingdom',
                    registration_date: 'Jun 8, 2019 6:45 p.m.',
                    status: 'approved',
                    action: 'View Profile',
                },
                {
                    profile: 'member-7.png',
                    customer: '297438',
                    full_name: 'Qin Shi',
                    nationality: 'Colombian',
                    residence: 'United Kingdom',
                    registration_date: 'Jun 8, 2019 4:24 p.m.',
                    status: 'rejected',
                    action: 'View Profile',
                },
                {
                    profile: 'member-8.png',
                    customer: '275731',
                    full_name: 'Julian Gruber',
                    nationality: 'British',
                    residence: 'Pakistan',
                    registration_date: 'Jun 8, 2019 3:10 p.m.',
                    status: 'pending',
                    action: 'View Profile',
                },
                {
                    profile: 'member-9.png',
                    customer: '217831',
                    full_name: 'Mathijn Agter',
                    nationality: 'Indian',
                    residence: 'Indian',
                    registration_date: 'Jun 8, 2019 11:32 p.m.',
                    status: 'approved',
                    action: 'View Profile',
                },
                {
                    profile: 'member-10.png',
                    customer: '293397',
                    full_name: 'Shadrias Pearson',
                    nationality: 'Pakistani',
                    residence: 'Pakistan',
                    registration_date: 'Jun 7, 2019 5:45 p.m.',
                    status: 'approved',
                    action: 'View Profile',
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
