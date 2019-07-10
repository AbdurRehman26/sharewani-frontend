<template>
    <div class="wrap-content">
        <div class="filter-section">
            <div class="row">
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

        <!-- user management table -->
        <div class="table-section">
            <b-table :items="items" :fields="fields">
                <template slot="profile" slot-scope="data">
                    <div class="profile-area">
                        <router-link to="/customer-information">
                            <div
                                class="profile-pic"
                                :style="{
                                    'background-image':
                                        'url(' +
                                        require('@/assets/images/members/' +
                                            data.value +
                                            '') +
                                        ')',
                                }"
                            ></div>
                        </router-link>
                    </div>
                </template>

                <template slot="customer" slot-scope="data">
                    <div class="customer-link">
                        <router-link to="/customer-information">
                            <span>{{ data.value }}</span>
                        </router-link>
                    </div>
                </template>

                <template slot="full_name" slot-scope="data">
                    <div class="customer-link">
                        <router-link to="/customer-information">
                            <span>{{ data.value }}</span>
                        </router-link>
                    </div>
                </template>

                <template slot="status" slot-scope="data">
                    <div
                        class="pending status-view"
                        v-if="data.value == 'pending'"
                    >
                        <i class="icon-loading"></i>
                        <span>Pending</span>
                    </div>
                    <div
                        class="approved status-view"
                        v-if="data.value == 'approved'"
                    >
                        <i class="icon-check"></i> <span>Approved</span>
                    </div>
                    <div
                        class="rejected status-view"
                        v-if="data.value == 'rejected'"
                    >
                        <i class="icon-wrong"></i> <span>Rejected</span>
                    </div>
                </template>
                <template slot="action" slot-scope="data">
                    <div class="action-review">
                        <router-link to="/customer-information">
                            <i class="icon-eye-view"></i>
                            <span>{{ data.value }}</span>
                        </router-link>
                    </div>
                </template>
            </b-table>
        </div>
        <pagination></pagination>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
            selected: '1',
            fields: [],
            items: [],
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
        }
    }, // End of Component > data

    /*
    |--------------------------------------------------------------------------
    | Component > computed
    |--------------------------------------------------------------------------
    */
    computed: {
        ...mapGetters(['systemUserTable']),
    }, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        initializeData() {
            //system log table
            let systemUserTableFields = this.systemUserTable.users.fields //get user data from store
            this.fields = systemUserTableFields //push data into array
            let systemUserTableitems = this.systemUserTable.users.items //get user data from store
            this.items = systemUserTableitems //push data into array
        },
    }, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {
        this.initializeData()
    }, // End of Component > mounted
} // End of export default
</script>
