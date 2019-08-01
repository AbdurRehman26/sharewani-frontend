<template>
    <div class="wrap-content customer-section">
        <div class="filter-section row-min-space">
            <div class="row">
                <div class="col-md-3 filter-title-section">
                    <h2>All Customers</h2>
                </div>
                <div class="col-md-9 ">
                    <div class="row">
                        <div class="col-md-6">
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="filterSelected"
                                    :options="filterList"
                                    buttons
                                    button-variant="outline-primary"
                                    :name="filterName"
                                ></b-form-radio-group>
                            </b-form-group>
                        </div>
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-6">
                                    <base-search></base-search>
                                </div>
                                <div class="col-md-3 text-right">
                                    <base-button
                                        btnLabel="Apply"
                                        btnType="submit"
                                        btnVariant="primary"
                                    ></base-button>
                                </div>
                                <div class="col-md-3 text-right">
                                    <base-button
                                        v-b-modal.export-process-popup
                                        btnLabel="Export"
                                        btnType="button"
                                        btnVariant="secondary"
                                    ></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="table-section table-min-width">
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
                        <router-link
                            to="/customer-profiles/customer-information"
                        >
                            <span>{{ data.value }}</span>
                        </router-link>
                    </div>
                </template>

                <template slot="full_name" slot-scope="data">
                    <div class="customer-link">
                        <router-link
                            to="/customer-profiles/customer-information"
                        >
                            <span>{{ data.value }}</span>
                        </router-link>
                    </div>
                </template>

                <template slot="status" slot-scope="data">
                    <base-status :statusType="data.value"></base-status>
                </template>
                <template slot="action">
                    <div class="action-review">
                        <base-action
                            icon="icon-eye-view"
                            label="View Profile"
                            @click="
                                $router.push(
                                    '/customer-profiles/customer-information'
                                )
                            "
                        ></base-action>
                    </div>
                </template>
            </b-table>
        </div>
        <pagination
            totalRecords="Showing 1 to 10 of 1,890 records"
            :showRecords="recordShow"
        ></pagination>
        <export-process-popup
            title="Export Customer's Data"
            totalExport="Total Records Exported: 1,890"
        ></export-process-popup>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import pagination from '@/components/Pagination.vue'
import exportProcessPopup from '@/components/popups/ExportProcessPopup.vue'
export default {
    components: {
        pagination,
        exportProcessPopup,
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
            fields: [],
            items: [],
            filterSelected: '1',
            filterName: 'fdafds',
            filterList: [
                { text: 'All', value: '1' },
                { text: 'Pending Review', value: '2' },
                { text: 'Approved', value: '3' },
                { text: 'Rejected', value: '4' },
            ],
            recordShow: [
                { text: 'Show 10 records', value: null },
                { text: 'Show 20 records', value: 20 },
                { text: 'Show 50 records', value: 50 },
            ],
        }
    }, // End of Component > data

    /*
    |--------------------------------------------------------------------------
    | Component > computed
    |--------------------------------------------------------------------------
    */
    computed: { ...mapGetters(['customersData']) }, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        initializeData() {
            //system log table
            let tableFields = this.customersData.customers.fields //get user data from store
            this.fields = tableFields //push data into array
            let tableItems = this.customersData.customers.items //get user data from store
            this.items = tableItems //push data into array
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
