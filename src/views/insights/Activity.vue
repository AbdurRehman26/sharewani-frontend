<template>
    <div class="wrap-content activity-dashboard-page">
        <div class="filter-section row-min-space">
            <div class="row">
                <div class="col-md-4 title-detail filter-title-section">
                    <h2>Activity Dashboard</h2>
                </div>
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-4 col-xs-12">
                            <div class="form-group">
                                <date-time-picker
                                    dateFormat="ll"
                                    placeholder="Start date"
                                    date
                                    close
                                    noFooter
                                ></date-time-picker>
                            </div>
                        </div>
                        <div class="col-md-4 col-xs-12">
                            <div class="form-group">
                                <date-time-picker
                                    dateFormat="ll"
                                    placeholder="End date"
                                    date
                                    close
                                    noFooter
                                ></date-time-picker>
                            </div>
                        </div>
                        <div class="col-md-4 col-xs-12">
                            <div class="row">
                                <div class="col-xs-12 col-md-5 btn-section">
                                    <div class="form-group">
                                        <base-button
                                            btnLabel="Apply"
                                            btnType="submit"
                                            btnVariant="primary"
                                        ></base-button>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-7 btn-section">
                                    <div class="form-group">
                                        <base-button
                                            v-b-modal.export-report-popup
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
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="row stastics-section">
                    <div
                        class="col-xs-12 col-md-3"
                        v-for="(list, index) in userListing"
                        :key="index"
                    >
                        <div
                            class="card dashboard-card sm-radius text-center dashbaord-stastics"
                        >
                            <h2>{{ list.title }}</h2>
                            <p>{{ list.value }}</p>
                            <i
                                class="icon-error_outline"
                                v-if="list.icon"
                                v-b-tooltip.hover
                                :title="
                                    ' Average time from when customer details are submitted till when they are approved / rejected. '
                                "
                            ></i>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-md-12">
                        <div
                            class="card dashboard-card activity-timeline-graph sm-radius"
                        >
                            <div class="dashboard-charts">
                                <h2 class="heading">Activity Timeline</h2>
                                <!-- activity timeline dashboard chart -->
                                <div
                                    id="activity-timeline-report"
                                    class="amcharts-div activity-timeline-report"
                                ></div>
                                <!-- activity timeline dashboard chart end-->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-md-6">
                        <div class="card dashboard-card  sm-radius">
                            <div class="dashboard-charts">
                                <h2 class="heading">
                                    KYC Alerts by Screening Type
                                </h2>
                                <!-- dashboard alerts report -->
                                <div
                                    id="alerts-by-type"
                                    class="amcharts-div alerts-by-type"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <div class="card dashboard-card sm-radius">
                            <div
                                class="dashboard-charts single-line-dashboard-chart"
                            >
                                <h2 class="heading">
                                    KYC Alerts by Alert Type
                                </h2>
                                <!-- screening hit by type report -->
                                <div
                                    id="screening-by-type"
                                    class="amcharts-div pie-charts screening-by-type"
                                ></div>
                                <div
                                    id="alertTypesLegend"
                                    class="custom-legend-wrapper"
                                ></div>
                                <div class="chart-highest-record">
                                    <h2>HIGHEST</h2>
                                    <p>
                                        Periodic Alerts:
                                        <strong>420</strong> (44.9%)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-md-6">
                        <div class="card dashboard-card  sm-radius">
                            <div
                                class="dashboard-charts activy-dashboard-chart"
                            >
                                <h2 class="heading">
                                    Name Screening Hit by Type
                                </h2>
                                <!-- dashboard alerts report -->
                                <div
                                    id="screen-hit-by-type"
                                    class="amcharts-div pie-charts alerts-by-type"
                                ></div>
                                <div
                                    id="screenHitByTypeLegend"
                                    class="custom-legend-wrapper"
                                ></div>
                                <div class="chart-highest-record">
                                    <h2>HIGHEST</h2>
                                    <p>PEP Hit: <strong>320</strong> (44.9%)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <div class="card dashboard-card  sm-radius">
                            <div
                                class="dashboard-charts single-line-dashboard-chart"
                            >
                                <h2 class="heading">
                                    Customer Onboarding With / Without Alert
                                </h2>
                                <!-- dashboard alerts report -->
                                <div
                                    id="on-board-issue"
                                    class="amcharts-div pie-charts alerts-by-type"
                                ></div>
                                <div
                                    id="onBoardIssueLegend"
                                    class="custom-legend-wrapper"
                                ></div>
                                <div class="chart-highest-record">
                                    <h2>HIGHEST</h2>
                                    <p>
                                        Without Alert:
                                        <strong>2173</strong> (68.9%)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-12 col-md-6">
                        <div class="card dashboard-card  sm-radius">
                            <div class="dashboard-charts">
                                <h2 class="heading">
                                    Aging by Alert Type
                                </h2>
                                <!-- dashboard alerts report -->
                                <div
                                    id="aging-by-alert-type"
                                    class="amcharts-div alerts-by-type"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <export-report-popup></export-report-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
require('amcharts3')
require('amcharts3/amcharts/serial')
require('amcharts3/amcharts/pie')
import dateTimePicker from '@/components/DateTimePicker.vue'
import exportReportPopup from '@/components/popups/ExportReportPopup.vue'
export default {
    components: {
        exportReportPopup,
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
            selected: null,
            userListing: [],
        }
    }, // End of Component > data

    /*
    |--------------------------------------------------------------------------
    | Component > computed
    |--------------------------------------------------------------------------
    */
    computed: {
        ...mapGetters(['dashboardData']),
    }, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        initializeData() {
            //user request list
            let requestList = this.dashboardData.userRequest
            this.userListing = requestList

            //activity timeline chart data
            let activityTimelineData = this.dashboardData.activityTimelineData
            window.AmCharts.makeChart(
                'activity-timeline-report',
                activityTimelineData
            )

            //alerts by type  data
            let alertsByTypeData = this.dashboardData.alertsByTypeData
            window.AmCharts.makeChart('alerts-by-type', alertsByTypeData)

            //alerts by type  data
            let screeningHitByTypeData = this.dashboardData.alertByAlertType
            window.AmCharts.makeChart(
                'screening-by-type',
                screeningHitByTypeData
            )

            let screenHitByTypeChart = this.dashboardData.screenHitByTypeChart
            window.AmCharts.makeChart(
                'screen-hit-by-type',
                screenHitByTypeChart
            )

            let onBoardingIssue = this.dashboardData.onBoardingIssue
            window.AmCharts.makeChart('on-board-issue', onBoardingIssue)

            let agingByAlertType = this.dashboardData.agingByAlertType
            window.AmCharts.makeChart('aging-by-alert-type', agingByAlertType)
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
