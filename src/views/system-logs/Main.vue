<template>
    <div class="dashboard">
        <div class="content-area">
            <base-header
                @sidemenu="$emit('responsiveSideBar')"
                :menuListing="menuListing"
            ></base-header>
            <div class="right-panel">
                <div class="wrap-content">
                    <div class="filter-section row-min-space">
                        <div class="row">
                            <div class="col-xs-12 col-md-12">
                                <h2>System Log</h2>
                            </div>
                            <div class="col-xs-12 col-md-12">
                                <div class="row">
                                    <div class="col-xs-12 col-md-9">
                                        <div class="row">
                                            <div class="col-xs-12 col-md-5">
                                                <div class="row">
                                                    <div
                                                        class="col-xs-12 col-md-6"
                                                    >
                                                        <div
                                                            class="form-group "
                                                        >
                                                            <date-time-picker
                                                                dateFormat="ll"
                                                                placeholder="Start date"
                                                                date
                                                                close
                                                                noFooter
                                                            ></date-time-picker>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="col-xs-12 col-md-6"
                                                    >
                                                        <div
                                                            class="form-group "
                                                        >
                                                            <date-time-picker
                                                                dateFormat="ll"
                                                                placeholder="End date"
                                                                date
                                                                close
                                                                noFooter
                                                            ></date-time-picker>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-12 col-md-7">
                                                <div class="row">
                                                    <div
                                                        class="col-xs-12 col-md-4"
                                                    >
                                                        <b-form-group>
                                                            <b-form-select
                                                                id="input-3"
                                                                class="form-control"
                                                                v-model="
                                                                    filterByModule
                                                                "
                                                                :options="
                                                                    filterModule
                                                                "
                                                                required
                                                            ></b-form-select>
                                                        </b-form-group>
                                                    </div>
                                                    <div
                                                        class="col-xs-12 col-md-4"
                                                    >
                                                        <b-form-group>
                                                            <b-form-select
                                                                id="input-3"
                                                                class="form-control"
                                                                v-model="
                                                                    filterByAction
                                                                "
                                                                :options="
                                                                    filterAction
                                                                "
                                                                required
                                                            ></b-form-select>
                                                        </b-form-group>
                                                    </div>
                                                    <div
                                                        class="col-xs-12 col-md-4"
                                                    >
                                                        <b-form-group>
                                                            <b-form-select
                                                                id="input-3"
                                                                class="form-control"
                                                                v-model="
                                                                    filterByUser
                                                                "
                                                                :options="
                                                                    filterUser
                                                                "
                                                                required
                                                            ></b-form-select>
                                                        </b-form-group>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-3">
                                        <div class="row">
                                            <div class="col-xs-12 col-md-6">
                                                <base-button
                                                    btnLabel="Apply"
                                                    btnType="submit"
                                                    btnVariant="primary"
                                                    class="btn-block"
                                                ></base-button>
                                            </div>
                                            <div class="col-xs-12 col-md-6">
                                                <base-button
                                                    v-b-modal.export-process-popup
                                                    btnLabel="Export"
                                                    btnType="submit"
                                                    btnVariant="secondary"
                                                ></base-button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                            <div
                                class="table-section table-min-width system-logs-table"
                            >
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
        <export-process-popup
            title="Export System Log"
            totalExport="Total Records Exported: 1,340"
        ></export-process-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
require('amcharts3')
require('amcharts3/amcharts/serial')
require('amcharts3/amcharts/pie')
import pagination from '@/components/Pagination.vue'
import dateTimePicker from '@/components/DateTimePicker.vue'
import exportProcessPopup from '@/components/popups/ExportProcessPopup.vue'
export default {
    components: {
        pagination,
        exportProcessPopup,
        dateTimePicker,
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
            menuListing: [
                // {
                //     anchorLink: '/system-logs',
                //     menuLabel: 'System Log',
                // },
            ],
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
                'Create new customer',
                'Initiate review',
                'Login',
                'Modify work type',
                'Submited review',
                'New alert',
                'Create new industry',
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
        ...mapGetters(['systemLogsData', 'logsTotalActions']),
    }, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        initializeData() {
            //alerts by type  data
            let logsTotalActions = this.systemLogsData.totalActions
            window.AmCharts.makeChart('logs-total-actions', logsTotalActions)

            //system log table
            let tableFields = this.systemLogsData.logs.fields //get user data from store
            this.fields = tableFields //push data into array
            let tableItems = this.systemLogsData.logs.items //get user data from store
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
