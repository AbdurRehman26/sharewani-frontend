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
                                v-b-modal.export-report-popup
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
                                        <b-table
                                            :items="countryResidence.items"
                                            :fields="countryResidence.fields"
                                            thead-class="hidden_header"
                                        >
                                            <!-- status slot -->
                                            <template
                                                slot="color"
                                                slot-scope="data"
                                            >
                                                <div
                                                    class="color-pallet"
                                                    v-bind:style="{
                                                        'background-color':
                                                            '' +
                                                            data.value +
                                                            '',
                                                    }"
                                                ></div>
                                            </template>
                                            <!-- action slot -->
                                            <template
                                                slot="residence_percentage"
                                                slot-scope="data"
                                            >
                                                <strong>{{
                                                    data.value
                                                }}</strong>
                                            </template>
                                        </b-table>
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
                                        <b-table
                                            :items="countryResidence.items"
                                            :fields="countryResidence.fields"
                                            thead-class="hidden_header"
                                        >
                                            <!-- status slot -->
                                            <template
                                                slot="color"
                                                slot-scope="data"
                                            >
                                                <div
                                                    class="color-pallet"
                                                    v-bind:style="{
                                                        'background-color':
                                                            '' +
                                                            data.value +
                                                            '',
                                                    }"
                                                ></div>
                                            </template>
                                            <!-- action slot -->
                                            <template
                                                slot="residence_percentage"
                                                slot-scope="data"
                                            >
                                                <strong>{{
                                                    data.value
                                                }}</strong>
                                            </template>
                                        </b-table>
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
                fields: [
                    {
                        key: 'color',
                        label: 'Color',
                    },
                    {
                        key: 'country_name',
                        label: 'Country Name',
                        class: 'w-320px p-l-20',
                    },
                    {
                        key: 'country_residence',
                        label: 'Country Residence',
                    },
                    {
                        key: 'residence_percentage',
                        label: 'Residence Percentage',
                    },
                ],
                items: [
                    {
                        color: '#111',
                        country_name: 'Australia',
                        country_residence: 300,
                        residence_percentage: '1.6%',
                    },
                    {
                        color: '#7f1ec5',
                        country_name: 'Bangladesh',
                        country_residence: 240,
                        residence_percentage: '1.3%',
                    },
                    {
                        color: '#00a4f2',
                        country_name: 'Belgium',
                        country_residence: 450,
                        residence_percentage: '2.5%',
                    },
                    {
                        color: '#00c535',
                        country_name: 'United Kingdom',
                        country_residence: 720,
                        residence_percentage: '4.0%',
                    },
                    {
                        color: '#eb8300',
                        country_name: 'United States of America',
                        country_residence: 640,
                        residence_percentage: '3.5%',
                    },
                    {
                        color: '#f4c200',
                        country_name: 'India',
                        country_residence: 450,
                        residence_percentage: '3.1%',
                    },
                    {
                        color: '#c1c1c1',
                        country_name: 'Canada',
                        country_residence: 655,
                        residence_percentage: '3.5%',
                    },
                    {
                        color: '#f8508c',
                        country_name: 'China',
                        country_residence: 710,
                        residence_percentage: '3.9%',
                    },
                    {
                        color: '#00b1a5',
                        country_name: 'Netherlands',
                        country_residence: 89,
                        residence_percentage: '0.3%',
                    },
                    {
                        color: '#84dc2b',
                        country_name: 'Bangladesh',
                        country_residence: 240,
                        residence_percentage: '1.3%',
                    },
                    {
                        color: '#5172fa',
                        country_name: 'Bangladesh',
                        country_residence: 240,
                        residence_percentage: '1.3%',
                    },
                    {
                        color: '#798bb0',
                        country_name: 'Bangladesh',
                        country_residence: 240,
                        residence_percentage: '1.3%',
                    },
                    {
                        color: '#b31493',
                        country_name: 'Bangladesh',
                        country_residence: 240,
                        residence_percentage: '1.3%',
                    },
                ],
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
