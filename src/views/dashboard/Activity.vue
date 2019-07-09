<template>
    <div class="wrap-content">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-4">
                    <h2>Activity Dashboard</h2>
                </div>
                <div class="col-md-8 text-right">
                    <ul>
                        <li>
                            <div class="form-group">
                                <datepicker
                                    placeholder="Start date"
                                ></datepicker>
                            </div>
                        </li>
                        <li>
                            <div class="form-group">
                                <datepicker placeholder="End date"></datepicker>
                            </div>
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
        <div class="row">
            <div class="col-md-12">
                <div class="row">
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
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-md-12">
                        <div class="card dashboard-card sm-radius">
                            <h2 class="heading">Activity Timeline</h2>
                            <!-- activity timeline dashboard chart -->
                            <div
                                id="activity-timeline-report"
                                class="dashboard-charts activity-timeline-report"
                            ></div>
                            <!-- activity timeline dashboard chart end-->
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-md-6">
                        <div class="card dashboard-card sm-radius">
                            <h2 class="heading">KYC Alters by Type</h2>
                            <!-- dashboard alerts report -->
                            <div
                                id="alerts-by-type"
                                class="dashboard-charts alerts-by-type"
                            ></div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <div class="card dashboard-card sm-radius">
                            <h2 class="heading">
                                Name Screening Hit by Type
                            </h2>
                            <!-- screening hit by type report -->
                            <div
                                id="screening-by-type"
                                class="dashboard-charts screening-by-type"
                            ></div>
                            <div class="chart-highest-record">
                                <h2>HIGHEST</h2>
                                <p>PEP Hit: <strong>320</strong> (44.9%)</p>
                            </div>
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
import Datepicker from 'vuejs-datepicker'
export default {
    components: {
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
        ...mapGetters([
            'dashboardUserRequest',
            'activityTimelineData',
            'alertsByTypeData',
            'screeningHitByTypeData',
        ]),
    }, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        initializeData() {
            let dashboardUserRequest = this.dashboardUserRequest //get user data from store
            this.userListing = dashboardUserRequest //push data into array

            //activity timeline chart data
            let activityTimelineData = this.activityTimelineData
            window.AmCharts.makeChart(
                'activity-timeline-report',
                activityTimelineData
            )

            //alerts by type  data
            let alertsByTypeData = this.alertsByTypeData
            window.AmCharts.makeChart('alerts-by-type', alertsByTypeData)

            //alerts by type  data
            let screeningHitByTypeData = this.screeningHitByTypeData
            window.AmCharts.makeChart(
                'screening-by-type',
                screeningHitByTypeData
            )
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
