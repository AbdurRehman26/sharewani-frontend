<template>
    <div class="wrap-content customer-statistics-page">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-10 filter-title-section">
                    <h2>Customer Statistics</h2>
                </div>
                <div class="col-md-2 text-right">
                    <b-form-group>
                        <base-button
                            v-b-modal.export-report-popup
                            btnLabel="Export"
                            btnType="submit"
                            btnVariant="secondary"
                            class="btn-sm"
                        ></base-button>
                    </b-form-group>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-xs-12 col-md-6">
                        <div class="card dashboard-card sm-radius">
                            <div class="dashboard-charts">
                                <h2 class="heading">Customers by Age Group</h2>
                                <!-- customers by age group -->
                                <div class="pie-chart-inner-table">
                                    <div
                                        id="customer-by-age"
                                        class="amcharts-div pie-charts customer-by-age"
                                    ></div>
                                    <div class="chart-highest-record">
                                        <h2>HIGHEST</h2>
                                        <p>
                                            55 - 64:
                                            <strong>950</strong> (30.1%)
                                        </p>
                                    </div>
                                </div>
                                <div
                                    id="customerByAgeLegend"
                                    class="custom-legend-wrapper cols-3"
                                ></div>

                                <!-- customers by age group end-->
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <div class="card dashboard-card  sm-radius">
                            <div class="dashboard-charts">
                                <h2 class="heading">Customers by Gender</h2>
                                <!-- customers by gender -->
                                <div class="pie-chart-inner-table">
                                    <div
                                        id="customers-by-gender"
                                        class="amcharts-div pie-charts customer-by-gender"
                                    ></div>
                                    <div class="chart-highest-record">
                                        <h2>HIGHEST</h2>
                                        <p>
                                            Male: <strong>2173</strong> (68.9%)
                                        </p>
                                    </div>
                                </div>
                                <div
                                    id="customersByGenderLegend"
                                    class="custom-legend-wrapper mob-cols-2"
                                ></div>

                                <!-- customers by gender end-->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-md-6">
                        <div class="card dashboard-card sm-radius">
                            <div class="dashboard-charts">
                                <h2 class="heading">Customers by Work Type</h2>
                                <!-- Customers by Work Type -->
                                <div class="chart-container">
                                    <div
                                        id="customers-by-work-type"
                                        class="amcharts-div customers-by-work-type"
                                    ></div>
                                </div>
                                <!-- Customers by Work Type end-->
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <div class="card dashboard-card  sm-radius">
                            <div class="dashboard-charts">
                                <h2 class="heading">
                                    Customers Account Opening by Month
                                </h2>
                                <!-- Customers Account Opening by Month -->
                                <div class="chart-container">
                                    <div
                                        id="customers-account-by-month"
                                        class="amcharts-div customers-account-by-month"
                                    ></div>
                                </div>
                                <!-- Customers Account Opening by Month -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-md-12">
                        <div class="card dashboard-card  sm-radius">
                            <div class="dashboard-charts">
                                <h2 class="heading">
                                    Customers by Industry
                                </h2>
                                <!-- Customers by Industry -->
                                <div class="chart-container">
                                    <div
                                        id="customers-by-industry"
                                        class="amcharts-div customers-by-industry"
                                    ></div>
                                </div>
                                <!-- Customers by Industry end -->
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-12 col-md-12">
                        <div
                            class="card dashboard-card sm-radius no-label-chart"
                        >
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="dashboard-charts">
                                        <h2 class="heading">
                                            Customers by Nationality
                                        </h2>
                                        <!-- customers by age group -->
                                        <div
                                            id="customers-by-nationality"
                                            class="amcharts-div customers-by-nationality"
                                        ></div>
                                        <div class="chart-highest-record">
                                            <h2>HIGHEST NATIONALITY GROUP</h2>
                                            <p>
                                                United Kingdom
                                                <strong>720</strong> (4.0%)
                                            </p>
                                        </div>
                                        <!-- customers by age group end-->
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div id="style-2" class="table-scroll">
                                        <div class="inner">
                                            <div
                                                id="customersByNationalityLegend"
                                                class="custom-legend-wrapper table-style cols-full"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-12 col-md-12">
                        <div
                            class="card dashboard-card sm-radius no-label-chart"
                        >
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="dashboard-charts">
                                        <h2 class="heading">
                                            Customers by Country of Residence
                                        </h2>
                                        <!-- customers by age group -->
                                        <div
                                            id="customers-by-residence"
                                            class="amcharts-div customers-by-nationality"
                                        ></div>
                                        <div class="chart-highest-record">
                                            <h2>
                                                HIGHEST COUNTRY OF RESIDENCE
                                            </h2>
                                            <p>
                                                United Kingdom
                                                <strong>720</strong> (4.0%)
                                            </p>
                                        </div>
                                        <!-- customers by age group end-->
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div id="style-2" class="table-scroll">
                                        <div class="inner">
                                            <div
                                                id="customersbyResidenceLegend"
                                                class="custom-legend-wrapper table-style cols-full"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
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
import exportReportPopup from '@/components/popups/ExportReportPopup.vue'
require('amcharts3/amcharts/pie')
export default {
    components: {
        exportReportPopup,
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

            countryResidence: {
                fields: [],
                items: [],
            },
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
            //Customers by Age Group
            let customerByAge = this.dashboardData.customerByAge
            window.AmCharts.makeChart('customer-by-age', customerByAge)
            //Customers by Gender
            let customersByGender = this.dashboardData.customersByGender
            window.AmCharts.makeChart('customers-by-gender', customersByGender)
            //customers-by-work-type
            let customersByWorkType = this.dashboardData.customersByWorkType
            window.AmCharts.makeChart(
                'customers-by-work-type',
                customersByWorkType
            )
            //customers by work type
            let customersAccountByMonth = this.dashboardData
                .customersAccountByMonth
            window.AmCharts.makeChart(
                'customers-account-by-month',
                customersAccountByMonth
            )
            //customers by industry
            let customersByIndustry = this.dashboardData.customersByIndustry
            window.AmCharts.makeChart(
                'customers-by-industry',
                customersByIndustry
            )
            //customers by Nationality
            let customersByNationality = this.dashboardData
                .customersByNationality
            window.AmCharts.makeChart(
                'customers-by-nationality',
                customersByNationality
            )
            //customers by Country Residence
            let customersByResidence = this.dashboardData.customersByResidence
            window.AmCharts.makeChart(
                'customers-by-residence',
                customersByResidence
            )

            //system log table
            let tableFields = this.dashboardData.countryResidence.fields //get user data from store
            this.countryResidence.fields = tableFields //push data into array
            let tableItems = this.dashboardData.countryResidence.items //get user data from store
            this.countryResidence.items = tableItems //push data into array
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
