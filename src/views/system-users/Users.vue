<template>
    <div class="wrap-content system-users-section">
        <div class="filter-section row-min-space">
            <div class="row">
                <div class="col-md-12">
                    <h2>System Users</h2>
                </div>

                <div class="col-md-12 ">
                    <div class="row">
                        <div class="col-xs-12 col-md-9">
                            <div class="row">
                                <div class="col-xs-12 col-md-3">
                                    <base-search
                                        placeholder="Search user"
                                    ></base-search>
                                </div>
                                <div class="col-xs-12 col-md-3">
                                    <b-form-group>
                                        <b-form-select
                                            id="input-3"
                                            class="form-control"
                                            v-model="filterByUserRoles"
                                            :options="filterUserRoles"
                                            required
                                        ></b-form-select>
                                    </b-form-group>
                                </div>
                                <div class="col-xs-12 col-md-3">
                                    <b-form-group>
                                        <b-form-select
                                            id="input-3"
                                            class="form-control"
                                            v-model="filterByBranch"
                                            :options="filterByBranches"
                                            required
                                        ></b-form-select>
                                    </b-form-group>
                                </div>
                                <div class="col-xs-12 col-md-3">
                                    <b-form-group>
                                        <b-form-select
                                            id="input-3"
                                            class="form-control"
                                            v-model="filterByStatus"
                                            :options="filterByStatusOption"
                                            required
                                        ></b-form-select>
                                    </b-form-group>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-3">
                            <div class="row">
                                <div class="col-xs-12 col-md-5">
                                    <base-button
                                        btnLabel="Apply"
                                        btnType="submit"
                                        btnVariant="primary"
                                        class="btn-block"
                                    ></base-button>
                                </div>
                                <div class="col-xs-12 col-md-7">
                                    <base-button
                                        @click="addModify('Add System User')"
                                        btnLabel="+ Add User"
                                        btnType="submit"
                                        btnVariant="secondary"
                                        class="secondary-add-btn"
                                    ></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- user management table -->
        <div class="table-section table-min-width mobile-table-responsive ">
            <b-table :items="items" :fields="fields">
                <template slot="profile" slot-scope="data">
                    <div class="profile-area">
                        <router-link
                            to="/customer-profiles/customer-information"
                        >
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

                <!-- status slot -->
                <template slot="status" slot-scope="data">
                    <base-status :statusType="data.value"></base-status>
                </template>
                <!-- action slot -->
                <template slot="action" slot-scope="data">
                    <div class="action-review">
                        <!-- if action modify -->
                        <base-action
                            v-if="
                                data.value == 'active' ||
                                    data.value == 'activate'
                            "
                            icon="icon-edit"
                            label="Modify"
                            @click="addModify('Modify System User')"
                        ></base-action>
                        <!-- if action archive -->
                        <base-action
                            v-if="data.value == 'active'"
                            icon="icon-trash"
                            label="Archive"
                            v-b-modal.archive-popup
                        ></base-action>
                        <!-- if action activate -->
                        <base-action
                            v-if="data.value == 'activate'"
                            icon="icon-done"
                            label="Activate"
                            v-b-modal.archive-popup
                        ></base-action>
                    </div>
                </template>
            </b-table>
        </div>
        <pagination
            totalRecords="Showing 1 to 10 of 32 records"
            :showRecords="recordShow"
        ></pagination>
        <add-system-user-popup :title="title"></add-system-user-popup>
        <archive-popup
            title="Archive User"
            description="Are you sure you want to archive this user? You can re-activate account later."
        ></archive-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import pagination from '@/components/Pagination.vue'
import addSystemUserPopup from '@/components/popups/AddSystemUserPopup.vue'
import archivePopup from '@/components/popups/ArchivePopup.vue'
export default {
    components: {
        pagination,
        addSystemUserPopup,
        archivePopup,
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
            title: '',
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
                'Super Admin',
                'Maker',
                'Checker',
                'Approver',
                'Relationship Manager',
            ],
            filterByBranch: null,

            filterByBranches: [
                { text: 'Filter by data segment', value: null },
                'All',
                'United Arab Emirates',
                'Pakistan',
                'United Kingdom',
                'United States of America',
            ],
            filterByStatus: null,

            filterByStatusOption: [
                { text: 'Filter by status', value: null },
                'Active',
                'Pending',
                'Archived',
            ],
            recordShow: [
                { text: 'Show 10 records', value: null },
                { text: 'Show 20 records', value: 20 },
                { text: 'Show 30 records', value: 30 },
                { text: 'Show 40 records', value: 40 },
            ],
        }
    }, // End of Component > data

    /*
    |--------------------------------------------------------------------------
    | Component > computed
    |--------------------------------------------------------------------------
    */
    computed: {
        ...mapGetters(['systemUsersData']),
    }, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        initializeData() {
            //system log table
            let tableFields = this.systemUsersData.users.fields //get user data from store
            this.fields = tableFields //push data into array
            let tableItems = this.systemUsersData.users.items //get user data from store
            this.items = tableItems //push data into array
        },

        addModify(e) {
            this.title = e
            this.$bvModal.show('add-system-user-popup')
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
