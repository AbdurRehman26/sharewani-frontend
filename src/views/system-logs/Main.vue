<template>
    <div class="dashboard">
        <div class="content-area">
            <base-header :menuListing="menuListing"></base-header>
            <div class="right-panel">
                <div class="wrap-content">
                    <div class="filter-section">
                        <div class="row">
                            <div class="col-md-12 system-user-filter">
                                <ul>
                                    <li>
                                        <h2>System Log</h2>
                                    </li>
                                    <li>
                                        <div class="form-group date-pickers">
                                            <i class="icon-calendar"></i>
                                            <datepicker
                                                placeholder="Start Date"
                                            ></datepicker>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="form-group date-pickers">
                                            <i class="icon-calendar"></i>
                                            <datepicker
                                                placeholder="End Date"
                                            ></datepicker>
                                        </div>
                                    </li>
                                    <li>
                                        <b-form-group>
                                            <b-form-select
                                                id="input-3"
                                                class="form-control"
                                                v-model="filterByModule"
                                                :options="filterModule"
                                                required
                                            ></b-form-select>
                                        </b-form-group>
                                    </li>
                                    <li>
                                        <b-form-group>
                                            <b-form-select
                                                id="input-3"
                                                class="form-control"
                                                v-model="filterByAction"
                                                :options="filterAction"
                                                required
                                            ></b-form-select>
                                        </b-form-group>
                                    </li>
                                    <li>
                                        <b-form-group>
                                            <b-form-select
                                                id="input-3"
                                                class="form-control"
                                                v-model="filterByUser"
                                                :options="filterUser"
                                                required
                                            ></b-form-select>
                                        </b-form-group>
                                    </li>
                                    <li>
                                        <b-button
                                            type="button"
                                            variant="primary"
                                            >Apply</b-button
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-md-12">
                            <!-- system logs total actions -->
                            <div
                                id="logs-total-actions"
                                class="amcharts-div logs-total-actions"
                            ></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-md-12">
                            <div class="table-section system-logs-table">
                                <b-table
                                    :fields="fields"
                                    :items="items"
                                ></b-table>
                            </div>
                            <pagination></pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
require('amcharts3')
require('amcharts3/amcharts/serial')
require('amcharts3/amcharts/pie')
import pagination from '@/components/Pagination.vue'
import Datepicker from 'vuejs-datepicker'
export default {
    components: {
        pagination,
        Datepicker,
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
            filterByModule: null,
            filterByAction: null,
            filterByUser: null,

            filterModule: [
                { text: 'Filter by module', value: null },
                'Customer Registration',
                'KYC Status Review',
                'Authentication',
                'Configuration',
                'System User',
            ],

            filterAction: [
                { text: 'Filter by action', value: null },
                'Alex Tonorio logged in',
            ],

            filterUser: [
                { text: 'Filter by user', value: null },
                'Ishaaq El Vohra',
                'Lucas Pacheco',
                'Sofie Hubert',
                'Ingo Schimpff',
            ],
        }
    }, // End of Component > data

    /*
    |--------------------------------------------------------------------------
    | Component > computed
    |--------------------------------------------------------------------------
    */
    computed: {
        ...mapGetters(['logsTotalActions', 'systemLogsTable']),
    }, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        initializeData() {
            //alerts by type  data
            let logsTotalActions = this.logsTotalActions
            window.AmCharts.makeChart('logs-total-actions', logsTotalActions)

            //system log table
            let logsTableFields = this.systemLogsTable.fields //get user data from store
            this.fields = logsTableFields //push data into array
            let logsTableItems = this.systemLogsTable.items //get user data from store
            this.items = logsTableItems //push data into array
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
