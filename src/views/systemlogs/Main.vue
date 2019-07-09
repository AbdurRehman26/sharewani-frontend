<template>
    <div class="dashboard">
        <base-sidebar></base-sidebar>
        <div class="content-area">
            <base-header :menuListing="menuListing"></base-header>
            <div class="right-panel">
                <div class="wrap-content">
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
            fields: [],
            items: [],
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
