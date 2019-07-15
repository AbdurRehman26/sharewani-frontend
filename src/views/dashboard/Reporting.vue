<template>
    <div class="wrap-content">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-4">
                    <h2>Customer Statistics</h2>
                </div>
                <div class="col-md-8 text-right">
                    <ul>
                        <li>
                            <base-button
                                v-b-modal.export-report
                                btnLabel="Export"
                                btnType="submit"
                                btnVariant="secondary"
                            ></base-button>
                        </li>
                    </ul>
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
                                <div
                                    id="customer-by-age"
                                    class="amcharts-div customer-by-age"
                                ></div>
                                <div class="chart-highest-record">
                                    <h2>HIGHEST</h2>
                                    <p>55 - 64: <strong>950</strong> (30.1%)</p>
                                </div>
                                <!-- customers by age group end-->
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <div class="card dashboard-card  sm-radius">
                            <div class="dashboard-charts">
                                <h2 class="heading">Customers by Gender</h2>
                                <!-- customers by age group -->
                                <div
                                    id="customers-by-gender"
                                    class="amcharts-div customer-by-gender"
                                ></div>
                                <div class="chart-highest-record">
                                    <h2>HIGHEST</h2>
                                    <p>Male: <strong>2173</strong> (68.9%)</p>
                                </div>
                                <!-- customers by age group end-->
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
                                <div
                                    id="customers-by-work-type"
                                    class="amcharts-div customers-by-work-type"
                                ></div>
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
                                <div
                                    id="customers-account-by-month"
                                    class="amcharts-div customers-account-by-month"
                                ></div>
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
                                <div
                                    id="customers-by-industry"
                                    class="amcharts-div customers-by-industry"
                                ></div>
                                <!-- Customers by Industry end -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-md-12">
                        <div class="card dashboard-card  sm-radius">
                            <div class="dashboard-charts">
                                <h2 class="heading">
                                    Customers by Nationality
                                </h2>
                                <!-- Customers by Industry -->
                                <div
                                    id="customers-by-nationality"
                                    class="amcharts-div customers-by-nationality"
                                ></div>
                                <!-- Customers by Industry end -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <export-report></export-report>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
require('amcharts3')
require('amcharts3/amcharts/serial')
import exportReport from '@/components/popups/ExportReportPopup.vue'
require('amcharts3/amcharts/pie')
export default {
    components: {
        exportReport,
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
        }
    }, // End of Component > data

    /*
    |--------------------------------------------------------------------------
    | Component > computed
    |--------------------------------------------------------------------------
    */
    computed: {
        ...mapGetters([
            'customerByAge',
            'customersByGender',
            'customersByWorkType',
            'customersAccountByMonth',
            'customersByIndustry',
            'customersByNationality',
        ]),
    }, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        initializeData() {
            //Customers by Age Group
            let customerByAge = this.customerByAge
            window.AmCharts.makeChart('customer-by-age', customerByAge)
            //Customers by Gender
            let customersByGender = this.customersByGender
            window.AmCharts.makeChart('customers-by-gender', customersByGender)
            //customers-by-work-type
            let customersByWorkType = this.customersByWorkType
            window.AmCharts.makeChart(
                'customers-by-work-type',
                customersByWorkType
            )
            //customers by work type
            let customersAccountByMonth = this.customersAccountByMonth
            window.AmCharts.makeChart(
                'customers-account-by-month',
                customersAccountByMonth
            )
            //customers by industry
            let customersByIndustry = this.customersByIndustry
            window.AmCharts.makeChart(
                'customers-by-industry',
                customersByIndustry
            )
            //customers by industry
            let customersByNationality = this.customersByNationality
            window.AmCharts.makeChart(
                'customers-by-nationality',
                customersByNationality
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
