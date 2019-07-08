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
            <div class="col-xs-12 col-md-3">
                <div
                    class="card dashboard-card sm-radius text-center dashbaord-stastics"
                >
                    <h2>Customers Onboarded</h2>
                    <p>2,859</p>
                </div>
            </div>
            <div class="col-xs-12 col-md-3">
                <div
                    class="card dashboard-card sm-radius text-center dashbaord-stastics"
                >
                    <h2>Verification Pending</h2>
                    <p>88</p>
                </div>
            </div>
            <div class="col-xs-12 col-md-3">
                <div
                    class="card dashboard-card sm-radius text-center dashbaord-stastics"
                >
                    <h2>APPROVED</h2>
                    <p>1,635</p>
                </div>
            </div>
            <div class="col-xs-12 col-md-3">
                <div
                    class="card dashboard-card sm-radius text-center dashbaord-stastics"
                >
                    <h2>REJECTED</h2>
                    <p>1,136</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-md-12">
                <div class="card dashboard-card sm-radius">
                    <h2 class="heading">Activity Timeline</h2>
                    <div
                        id="activity-timeline-report"
                        class="dashboard-charts activity-timeline-report"
                    ></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-md-6">
                <div class="card dashboard-card sm-radius">
                    <h2 class="heading">KYC Alters by Type</h2>
                    <div
                        id="alerts-by-type"
                        class="dashboard-charts alerts-by-type"
                    ></div>
                </div>
            </div>
            <div class="col-xs-12 col-md-6">
                <div class="card dashboard-card sm-radius">
                    <h2 class="heading">Name Screening Hit by Type</h2>
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
</template>

<script>
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
            selected: '1',

            options: [
                { text: 'All', value: '1' },
                { text: 'Pending', value: '2' },
                { text: 'In Review', value: '3' },
            ],

            filterBy: null,

            filterOptions: [
                { text: 'Filter by', value: null },
                'Name Screening',
                'Documentation',
                'Risk Rating',
                'Status',
            ],
        }
    }, // End of Component > data

    /*
    |--------------------------------------------------------------------------
    | Component > computed
    |--------------------------------------------------------------------------
    */
    computed: {}, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        created() {
            window.AmCharts.makeChart('activity-timeline-report', {
                type: 'serial',
                pathToImages: 'https://www.amcharts.com/lib/3/images/',
                categoryField: 'date',
                dataDateFormat: 'YYYY-MM-DD',
                colors: ['#C1C1C1', '#00C535', '#C91F37'],
                color: '#1B1B1E',
                fontFamily: 'Proxima Nova',
                fontSize: 14,
                categoryAxis: {
                    parseDates: true,
                    gridAlpha: 1,
                    gridColor: '#F2F2F6',
                    title: '',
                },
                chartCursor: {
                    enabled: true,
                    bulletSize: 6,
                    cursorColor: '#662D91',
                },
                chartScrollbar: {
                    enabled: true,
                    backgroundColor: '#E8E8EF',
                    graphFillColor: '#D7D7E2',
                    graphLineColor: '#d7d7e2',
                    selectedBackgroundColor: '#F2F2F6',
                    tabIndex: 0,
                },
                trendLines: [],
                graphs: [
                    {
                        accessibleLabel: '[[category]]: [[value]]',
                        balloonText:
                            'Onboard on [[category]]: <b>[[value]]</b>',
                        bullet: 'none',
                        fillAlphas: 0.3,
                        id: 'AmGraph-1',
                        lineThickness: 0,
                        title: 'graph 1',
                        valueField: 'column-1',
                        type: 'column',
                    },
                    {
                        accessibleLabel: '[[category]]: [[value]]',
                        balloonText:
                            'Approved on [[category]]: <b>[[value]]</b>',
                        bullet: 'round',
                        id: 'AmGraph-2',
                        lineThickness: 2,
                        title: 'graph 2',
                        valueField: 'column-2',
                        type: 'smoothedLine',
                    },
                    {
                        accessibleLabel: '[[category]]: [[value]]',
                        balloonText:
                            'Rejected on [[category]]: <b>[[value]]</b>',
                        bullet: 'round',
                        id: 'AmGraph-3',
                        lineThickness: 2,
                        title: 'graph 3',
                        valueField: 'column-3',
                        type: 'smoothedLine',
                    },
                ],
                guides: [],
                valueAxes: [
                    {
                        id: 'ValueAxis-1',
                        gridAlpha: 1,
                        gridColor: '#F2F2F6',
                        title: 'Total Activities',
                    },
                ],
                allLabels: [],
                balloon: {
                    fillAlpha: 1,
                },
                titles: [],
                dataProvider: [
                    {
                        date: '2019-06-01',
                        'column-1': 8,
                        'column-2': '6',
                        'column-3': '2',
                    },
                    {
                        date: '2019-06-02',
                        'column-1': 6,
                        'column-2': '3',
                        'column-3': '3',
                    },
                    {
                        date: '2019-06-03',
                        'column-1': '12',
                        'column-2': '7',
                        'column-3': '5',
                    },
                    {
                        date: '2019-06-04',
                        'column-1': '14',
                        'column-2': '6',
                        'column-3': '8',
                    },
                    {
                        date: '2019-06-05',
                        'column-1': '19',
                        'column-2': '11',
                        'column-3': '8',
                    },
                    {
                        date: '2019-06-06',
                        'column-1': '13',
                        'column-2': '6',
                        'column-3': '7',
                    },
                    {
                        date: '2019-06-07',
                        'column-1': '16',
                        'column-2': '8',
                        'column-3': '8',
                    },
                    {
                        date: '2019-06-08',
                        'column-1': '19',
                        'column-2': '11',
                        'column-3': '8',
                    },
                    {
                        date: '2019-06-09',
                        'column-1': '13',
                        'column-2': '6',
                        'column-3': '7',
                    },
                    {
                        date: '2019-06-10',
                        'column-1': '16',
                        'column-2': '8',
                        'column-3': '8',
                    },
                    {
                        date: '2019-06-11',
                        'column-1': 18,
                        'column-2': '16',
                        'column-3': '2',
                    },
                    {
                        date: '2019-06-12',
                        'column-1': 16,
                        'column-2': '6',
                        'column-3': '10',
                    },
                    {
                        date: '2019-06-13',
                        'column-1': '12',
                        'column-2': '7',
                        'column-3': '6',
                    },
                    {
                        date: '2019-06-14',
                        'column-1': '18',
                        'column-2': '9',
                        'column-3': '9',
                    },
                    {
                        date: '2019-06-15',
                        'column-1': '14',
                        'column-2': '11',
                        'column-3': '3',
                    },
                    {
                        date: '2019-06-16',
                        'column-1': '13',
                        'column-2': '4',
                        'column-3': '9',
                    },
                    {
                        date: '2019-06-17',
                        'column-1': '16',
                        'column-2': '9',
                        'column-3': '7',
                    },
                    {
                        date: '2019-06-18',
                        'column-1': '20',
                        'column-2': '8',
                        'column-3': '12',
                    },
                    {
                        date: '2019-06-19',
                        'column-1': '14',
                        'column-2': '4',
                        'column-3': '10',
                    },
                    {
                        date: '2019-06-20',
                        'column-1': '13',
                        'column-2': '5',
                        'column-3': '8',
                    },
                    {
                        date: '2019-06-21',
                        'column-1': 18,
                        'column-2': '8',
                        'column-3': '10',
                    },
                    {
                        date: '2019-06-22',
                        'column-1': 6,
                        'column-2': '3',
                        'column-3': '3',
                    },
                    {
                        date: '2019-06-23',
                        'column-1': '12',
                        'column-2': '7',
                        'column-3': '5',
                    },
                    {
                        date: '2019-06-24',
                        'column-1': '14',
                        'column-2': '6',
                        'column-3': '8',
                    },
                    {
                        date: '2019-06-25',
                        'column-1': '14',
                        'column-2': '11',
                        'column-3': '3',
                    },
                    {
                        date: '2019-06-26',
                        'column-1': '19',
                        'column-2': '8',
                        'column-3': '11',
                    },
                    {
                        date: '2019-06-27',
                        'column-1': '16',
                        'column-2': '9',
                        'column-3': '7',
                    },
                    {
                        date: '2019-06-28',
                        'column-1': '19',
                        'column-2': '6',
                        'column-3': '13',
                    },
                    {
                        date: '2019-06-29',
                        'column-1': '20',
                        'column-2': '6',
                        'column-3': '14',
                    },
                    {
                        date: '2019-06-30',
                        'column-1': '14',
                        'column-2': '5',
                        'column-3': '9',
                    },
                ],
            })
            window.AmCharts.makeChart('alerts-by-type', {
                type: 'serial',
                categoryField: 'category',
                rotate: false,
                colors: [
                    '#C91F37',
                    '#1B1B1E',
                    '#B0DE09',
                    '#0D8ECF',
                    '#2A0CD0',
                    '#CD0D74',
                    '#CC0000',
                    '#00CC00',
                    '#0000CC',
                    '#DDDDDD',
                    '#999999',
                    '#333333',
                    '#990000',
                ],
                startDuration: 1,
                color: '#1B1B1E',
                fontFamily: 'Proxima Nova',
                fontSize: 14,
                categoryAxis: {
                    autoWrap: true,
                    gridPosition: 'start',
                    gridAlpha: 1,
                    gridColor: '#F2F2F6',
                },
                trendLines: [],
                graphs: [
                    {
                        balloonText: '[[title]] of [[category]]:[[value]]',
                        fillAlphas: 1,
                        id: 'AmGraph-1',
                        title: 'graph 1',
                        type: 'column',
                        valueField: 'column-1',
                    },
                    {
                        balloonText: '[[title]] of [[category]]:[[value]]',
                        fillAlphas: 1,
                        id: 'AmGraph-2',
                        title: 'graph 2',
                        type: 'column',
                        valueField: 'column-2',
                    },
                ],
                guides: [],
                valueAxes: [
                    {
                        id: 'ValueAxis-1',
                        gridAlpha: 1,
                        gridColor: '#F2F2F6',
                        title: '',
                    },
                ],
                allLabels: [],
                balloon: {},
                titles: [],
                dataProvider: [
                    {
                        category: 'Document Verification Hit',
                        'column-1': '80',
                        'column-2': '50',
                    },
                    {
                        category: 'Name Screening Hit',
                        'column-1': '60',
                        'column-2': '70',
                    },
                    {
                        category: 'Risk Rating Hit',
                        'column-1': '20',
                        'column-2': '30',
                    },
                ],
            })
            window.AmCharts.makeChart('screening-by-type', {
                type: 'pie',
                pathToImages: 'https://www.amcharts.com/lib/3/images/',
                innerRadius: '80%',
                colors: [
                    '#7f1ec5',
                    '#00a4f2',
                    '#00c535',
                    '#eb8300',
                    '#f4c200',
                    '#c1c1c1',
                ],
                labelsEnabled: false,
                pullOutRadius: '0%',
                balloonText: '[[title]]: <b>[[value]]</b> [[percents]]%',
                marginBottom: 0,
                marginTop: 0,
                outlineAlpha: 1,
                outlineThickness: 2,
                titleField: 'category',
                valueField: 'column-1',
                color: '#1B1B1E',
                fontFamily: 'Proxima Nova',
                fontSize: 14,
                allLabels: [],
                balloon: {
                    color: '#1B1B1E',
                    fillAlpha: 1,
                },

                legend: {
                    enabled: true,
                    align: 'center',
                    markerBorderAlpha: 0.27,
                    markerBorderThickness: 0,
                    markerCorner: 12,
                    markerLabelGap: 33,
                    markerSize: 20,
                    spacing: 9,
                    labelText: '[[title]]',
                    valueText: '[[percents]]%',
                    verticalGap: 20,
                },
                titles: [],
                dataProvider: [
                    {
                        category: 'Sanction Hit',
                        'column-1': '180',
                    },
                    {
                        category: 'PEP Hit',
                        'column-1': '320',
                    },
                    {
                        category: 'Enforcement Hit',
                        'column-1': '120',
                    },
                    {
                        category: 'Client Black List Hit',
                        'column-1': '92',
                    },
                ],
            })
        },
    }, // End of Component > methods
    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {
        this.created()
    }, // End of Component > mounted
} // End of export default
</script>
