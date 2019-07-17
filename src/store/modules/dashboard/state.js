export default {
    dashboardData: {
        //user request
        userRequest: [
            {
                title: 'Customers Onboarded',
                value: '2,859',
            },
            {
                title: 'Verification Pending',
                value: '88',
            },
            {
                title: 'APPROVED',
                value: '1,635',
            },
            {
                title: 'REJECTED',
                value: '1,136',
            },
        ],
        //activity timeline chart
        activityTimelineData: {
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
                    balloonText: 'Onboard on [[category]]: <b>[[value]]</b>',
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
                    balloonText: 'Approved on [[category]]: <b>[[value]]</b>',
                    bullet: 'round',
                    id: 'AmGraph-2',
                    lineThickness: 2,
                    title: 'graph 2',
                    valueField: 'column-2',
                    type: 'smoothedLine',
                },
                {
                    accessibleLabel: '[[category]]: [[value]]',
                    balloonText: 'Rejected on [[category]]: <b>[[value]]</b>',
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
            balloon: {},
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
        },
        //alerts by type chart
        alertsByTypeData: {
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
        },
        //screening hit by type chart
        screeningHitByTypeData: {
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
                markerLabelGap: 12,
                markerSize: 20,
                spacing: 8,
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
        },
        //customer by age chart
        customerByAge: {
            type: 'pie',
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
            },
            legend: {
                enabled: true,
                align: 'center',
                markerBorderAlpha: 0.27,
                markerBorderThickness: 0,
                markerCorner: 12,
                markerLabelGap: 12,
                markerSize: 20,
                spacing: 8,
                labelText: '[[title]]',
                valueText: '[[percents]]%',
                verticalGap: 20,
            },
            titles: [],
            dataProvider: [
                {
                    category: '18 - 24',
                    'column-1': '800',
                },
                {
                    category: '25 - 34',
                    'column-1': '600',
                },
                {
                    category: '45 - 54',
                    'column-1': '200',
                },
                {
                    category: '55 - 64',
                    'column-1': '950',
                },
                {
                    category: '65 - 74',
                    'column-1': '400',
                },
                {
                    category: '75+',
                    'column-1': '200',
                },
            ],
        },
        //customer by gender chart
        customersByGender: {
            type: 'pie',
            balloonText: '[[title]]: <b>[[value]]</b> [[percents]]%',
            innerRadius: '80%',
            pullOutRadius: '0%',
            colors: [
                '#00a4f2',
                '#f8508c',
                '#00c535',
                '#eb8300',
                '#f4c200',
                '#c1c1c1',
            ],
            gradientRatio: [],
            labelColorField: '#1B1B1E',
            labelsEnabled: false,
            labelTickAlpha: 0,
            labelTickColor: '#1B1B1E',
            marginBottom: 0,
            marginTop: 0,
            maxLabelWidth: 0,
            outlineAlpha: 1,
            outlineThickness: 2,
            titleField: 'category',
            valueField: 'column-1',
            accessible: false,
            color: '#1B1B1E',
            fontFamily: 'Proxima Nova',
            fontSize: 14,
            allLabels: [],
            balloon: {
                color: '#1B1B1E',
                fillAlpha: 1,
            },
            titles: [],
            legend: {
                enabled: true,
                align: 'center',
                markerBorderAlpha: 0.27,
                markerBorderThickness: 0,
                markerCorner: 12,
                markerLabelGap: 12,
                markerSize: 20,
                spacing: 8,
                labelText: '[[title]]',
                valueText: '[[percents]]%',
                verticalGap: 20,
            },
            dataProvider: [
                {
                    category: 'Male',
                    'column-1': '2173',
                },
                {
                    category: 'Female',
                    'column-1': '980',
                },
            ],
        },
        //customer by work type
        customersByWorkType: {
            type: 'serial',
            categoryField: 'category',
            colors: [
                '#7f1ec5',
                '#00a4f2',
                '#00c535',
                '#eb8300',
                '#f4c200',
                '#c1c1c1',
            ],
            rotate: true,
            startDuration: 1,
            color: '#1B1B1E',
            fontFamily: 'Proxima Nova',
            fontSize: 14,
            categoryAxis: {
                gridPosition: 'start',
                axisColor: '#1B1B1E',
                gridAlpha: 1,
                gridColor: '#F2F2F6',
            },
            trendLines: [],
            graphs: [
                {
                    accessibleLabel: '[[category]]: [[value]]',
                    balloonText: '[[category]]: [[value]]',
                    id: 'AmGraph-1',
                    title: 'graph 1',
                    type: 'column',
                    valueField: 'column-1',
                    lineColorField: 'color',
                    fillColorsField: 'color',
                    fillAlphas: 1,
                },
            ],
            guides: [],
            valueAxes: [
                {
                    id: 'ValueAxis-1',
                    axisColor: '#1B1B1E',
                    gridAlpha: 1,
                    gridColor: '#F2F2F6',
                    title: '',
                    titleFontSize: 14,
                    titleRotation: 0,
                },
            ],
            allLabels: [],
            balloon: {
                fillAlpha: 1,
            },
            titles: [
                {
                    bold: false,
                    id: 'Title-1',
                    size: 0,
                    text: '',
                },
            ],
            dataProvider: [
                {
                    category: 'Self Employed',
                    'column-1': '800',
                    color: '#7f1ec5',
                },
                {
                    category: 'Salaried (Executive)',
                    'column-1': '600',
                    color: '#00a4f2',
                },
                {
                    category: 'Salaried (General)',
                    'column-1': '200',
                    color: '#00c535',
                },
                {
                    category: 'Unemployed',
                    'column-1': '300',
                    color: '#eb8300',
                },
                {
                    category: 'Retired',
                    'column-1': '400',
                    color: '#f4c200',
                },
                {
                    category: 'Student',
                    'column-1': '100',
                    color: '#c1c1c1',
                },
                {
                    category: 'Homemaker',
                    'column-1': '200',
                    color: '#F8508C',
                },
            ],
        },
        //customer accoutn by month chart
        customersAccountByMonth: {
            type: 'serial',
            categoryField: 'category',
            colors: [
                '#7f1ec5',
                '#00a4f2',
                '#00c535',
                '#eb8300',
                '#f4c200',
                '#c1c1c1',
            ],
            rotate: true,
            startDuration: 1,
            color: '#1B1B1E',
            fontFamily: 'Proxima Nova',
            fontSize: 14,
            categoryAxis: {
                gridPosition: 'start',
                axisColor: '#1B1B1E',
                gridAlpha: 1,
                gridColor: '#F2F2F6',
            },
            trendLines: [],
            graphs: [
                {
                    accessibleLabel: '[[category]]: [[value]]',
                    balloonText: '[[category]]: [[value]]',
                    id: 'AmGraph-1',
                    title: 'graph 1',
                    type: 'column',
                    valueField: 'column-1',
                    lineColorField: 'color',
                    fillColorsField: 'color',
                    fillAlphas: 1,
                },
            ],
            guides: [],
            valueAxes: [
                {
                    id: 'ValueAxis-1',
                    axisColor: '#1B1B1E',
                    gridAlpha: 1,
                    gridColor: '#F2F2F6',
                    title: '',
                    titleFontSize: 14,
                    titleRotation: 0,
                },
            ],
            allLabels: [],
            balloon: {
                fillAlpha: 1,
            },
            titles: [
                {
                    bold: false,
                    id: 'Title-1',
                    size: 0,
                    text: '',
                },
            ],
            dataProvider: [
                {
                    category: 'January',
                    'column-1': '300',
                    color: '#7f1ec5',
                },
                {
                    category: 'February',
                    'column-1': '240',
                    color: '#00a4f2',
                },
                {
                    category: 'March',
                    'column-1': '450',
                    color: '#00c535',
                },
                {
                    category: 'April',
                    'column-1': '570',
                    color: '#eb8300',
                },
                {
                    category: 'May',
                    'column-1': '640',
                    color: '#f4c200',
                },
                {
                    category: 'June',
                    'column-1': '720',
                    color: '#c1c1c1',
                },
                {
                    category: 'July',
                    'column-1': '655',
                    color: '#F8508C',
                },
                {
                    category: 'August',
                    'column-1': '740',
                    color: '#00b1a5',
                },
                {
                    category: 'September',
                    'column-1': '480',
                    color: '#84dc2b',
                },
                {
                    category: 'October',
                    'column-1': '380',
                    color: '#5172fa',
                },
                {
                    category: 'November',
                    'column-1': '290',
                    color: '#798bb0',
                },
                {
                    category: 'December',
                    'column-1': '180',
                    color: '#b31493',
                },
            ],
        },
        //customer by industry chart
        customersByIndustry: {
            type: 'serial',
            categoryField: 'category',
            colors: [
                '#7f1ec5',
                '#00a4f2',
                '#00c535',
                '#eb8300',
                '#f4c200',
                '#c1c1c1',
            ],
            rotate: false,
            startDuration: 1,
            color: '#1B1B1E',
            fontFamily: 'Proxima Nova',
            fontSize: 14,
            categoryAxis: {
                gridPosition: 'start',
                axisColor: '#1B1B1E',
                gridAlpha: 1,
                gridColor: '#F2F2F6',
                labelRotation: 45,
            },
            trendLines: [],
            graphs: [
                {
                    accessibleLabel: '[[category]]: [[value]]',
                    balloonText: '[[category]]: [[value]]',
                    id: 'AmGraph-1',
                    title: 'graph 1',
                    type: 'column',
                    valueField: 'column-1',
                    fillAlphas: 1,
                    lineColorField: 'color',
                    fillColorsField: 'color',
                },
            ],
            guides: [],
            valueAxes: [
                {
                    id: 'ValueAxis-1',
                    axisColor: '#1B1B1E',
                    gridAlpha: 1,
                    gridColor: '#F2F2F6',
                    title: '',
                    titleFontSize: 14,
                    titleRotation: 0,
                },
            ],
            allLabels: [],
            balloon: {
                fillAlpha: 1,
            },
            titles: [
                {
                    bold: false,
                    id: 'Title-1',
                    size: 0,
                    text: '',
                },
            ],
            dataProvider: [
                {
                    category: 'Agriculture',
                    'column-1': '300',
                    color: '#7f1ec5',
                },
                {
                    category: 'Electronics',
                    'column-1': '240',
                    color: '#00a4f2',
                },
                {
                    category: 'Chemical',
                    'column-1': '450',
                    color: '#00c535',
                },
                {
                    category: 'Commerce',
                    'column-1': '570',
                    color: '#eb8300',
                },
                {
                    category: 'Construction',
                    'column-1': '640',
                    color: '#f4c200',
                },
                {
                    category: 'Education',
                    'column-1': '720',
                    color: '#c1c1c1',
                },
                {
                    category: 'Financial Services',
                    'column-1': '655',
                    color: '#F8508C',
                },
                {
                    category: 'Food & Drink',
                    'column-1': '740',
                    color: '#00b1a5',
                },
                {
                    category: 'Forestry',
                    'column-1': '480',
                    color: '#84dc2b',
                },
                {
                    category: 'Health Services',
                    'column-1': '380',
                    color: '#5172fa',
                },
                {
                    category: 'Tourism & Hotels',
                    'column-1': '290',
                    color: '#798bb0',
                },
                {
                    category: 'Mining',
                    'column-1': '180',
                    color: '#b31493',
                },
                {
                    category: 'Engineering',
                    'column-1': '150',
                    color: '#7000f7',
                },
                {
                    category: 'Media & Culture',
                    'column-1': '541',
                    color: '#4a005e',
                },
                {
                    category: 'Oil & Gas',
                    'column-1': '321',
                    color: '#a388b0',
                },
                {
                    category: 'Telecommunications',
                    'column-1': '487',
                    color: '#770d42',
                },
                {
                    category: 'Public Service',
                    'column-1': '380',
                    color: '#388b79',
                },
                {
                    category: 'Shipping',
                    'column-1': '630',
                    color: '#fc7400',
                },
                {
                    category: 'Textiles',
                    'column-1': '420',
                    color: '#ff87e6',
                },
                {
                    category: 'Utilities',
                    'column-1': '370',
                    color: '#f8e08e',
                },
            ],
        },
        //customer by nationality chart
        customersByNationality: {
            type: 'serial',
            categoryField: 'category',
            colors: [
                '#7f1ec5',
                '#00a4f2',
                '#00c535',
                '#eb8300',
                '#f4c200',
                '#c1c1c1',
            ],
            rotate: false,
            startDuration: 1,
            color: '#1B1B1E',
            fontFamily: 'Proxima Nova',
            fontSize: 14,
            categoryAxis: {
                gridPosition: 'start',
                axisColor: '#1B1B1E',
                gridAlpha: 1,
                gridColor: '#F2F2F6',
                labelRotation: 45,
            },
            trendLines: [],
            graphs: [
                {
                    accessibleLabel: '[[category]]: [[value]]',
                    balloonText: '[[category]]: [[value]]',
                    id: 'AmGraph-1',
                    title: 'graph 1',
                    type: 'column',
                    valueField: 'column-1',
                    fillAlphas: 1,
                    lineColorField: 'color',
                    fillColorsField: 'color',
                },
            ],
            guides: [],
            valueAxes: [
                {
                    id: 'ValueAxis-1',
                    axisColor: '#1B1B1E',
                    gridAlpha: 1,
                    gridColor: '#F2F2F6',
                    title: '',
                    titleFontSize: 14,
                    titleRotation: 0,
                },
            ],
            allLabels: [],
            balloon: {},
            titles: [
                {
                    bold: false,
                    id: 'Title-1',
                    size: 0,
                    text: '',
                },
            ],
            dataProvider: [
                {
                    category: 'Australia',
                    'column-1': '300',
                    color: '#7f1ec5',
                },
                {
                    category: 'Bangladesh',
                    'column-1': '240',
                    color: '#00a4f2',
                },
                {
                    category: 'Belgium',
                    'column-1': '450',
                    color: '#00c535',
                },
                {
                    category: 'UK',
                    'column-1': '570',
                    color: '#eb8300',
                },
                {
                    category: 'USA',
                    'column-1': '640',
                    color: '#f4c200',
                },
                {
                    category: 'India',
                    'column-1': '720',
                    color: '#c1c1c1',
                },
                {
                    category: 'Canada',
                    'column-1': '655',
                    color: '#F8508C',
                },
                {
                    category: 'China',
                    'column-1': '740',
                    color: '#00b1a5',
                },
                {
                    category: 'Netherlands',
                    'column-1': '480',
                    color: '#84dc2b',
                },
                {
                    category: 'Greece',
                    'column-1': '380',
                    color: '#5172fa',
                },
                {
                    category: 'Japan',
                    'column-1': '290',
                    color: '#798bb0',
                },
                {
                    category: 'Mexico',
                    'column-1': '180',
                    color: '#b31493',
                },
                {
                    category: 'Pakistan',
                    'column-1': '150',
                    color: '#7000f7',
                },
                {
                    category: 'Russia',
                    'column-1': '541',
                    color: '#4a005e',
                },
                {
                    category: 'Turkey',
                    'column-1': '321',
                    color: '#a388b0',
                },
                {
                    category: 'Malaysia',
                    'column-1': '487',
                    color: '#770d42',
                },
                {
                    category: 'Lebnan',
                    'column-1': '380',
                    color: '#388b79',
                },
                {
                    category: 'Japan',
                    'column-1': '630',
                    color: '#fc7400',
                },
                {
                    category: 'Sweden',
                    'column-1': '420',
                    color: '#ff87e6',
                },
                {
                    category: 'Germany',
                    'column-1': '370',
                    color: '#f8e08e',
                },
            ],
        },
        //dashboard alerts table
        alertsTable: {
            fields: [
                {
                    key: 'profile',
                    label: '',
                },
                {
                    key: 'customer',
                    label: 'CUSTOMER',
                },
                {
                    key: 'full_name',
                    label: 'FULL NAME',
                },
                {
                    key: 'nationality',
                    label: 'NATIONALITY',
                },
                {
                    key: 'name_screening',
                    label: 'NAME SCREENING',
                    thClass: 'with-icon person-icon text-center',
                    tdClass: 'text-center',
                },
                {
                    key: 'documentation',
                    label: 'DOCUMENTATION',
                    thClass: 'with-icon document-icon text-center',
                    tdClass: 'text-center',
                },
                {
                    key: 'risk_rating',
                    label: 'RISK RATING',
                    thClass: 'with-icon text-center graph-icon',
                    tdClass: 'text-center',
                },
                {
                    key: 'action',
                    label: 'STATUS',
                },
            ],
            items: [
                {
                    profile: 'member-1.png',
                    customer: '1250976',
                    full_name: 'Zeng Wen',
                    nationality: 'British',
                    name_screening: [
                        {
                            cssClass: 'icon-cross-with-circle danger',
                        },
                    ],
                    documentation: [
                        {
                            cssClass: 'icon-tick-with-circle',
                        },
                    ],
                    risk_rating: [
                        {
                            cssClass: 'icon-cross-with-circle pending',
                        },
                    ],
                    action: 'in review',
                },
                {
                    profile: 'member-2.png',
                    customer: '1250976',
                    full_name: 'Edward Lindgren',
                    nationality: 'British',
                    name_screening: [
                        {
                            cssClass: 'icon-cross-with-circle pending',
                        },
                    ],
                    documentation: [
                        {
                            cssClass: 'icon-tick-with-circle pending',
                        },
                    ],
                    risk_rating: [
                        {
                            cssClass: 'icon-cross-with-circle pending',
                        },
                    ],
                    action: 'review',
                },
                {
                    profile: 'member-3.png',
                    customer: '3282345',
                    full_name: 'Christian Russell',
                    nationality: 'American',
                    name_screening: [
                        {
                            cssClass: 'icon-cross-with-circle pending',
                        },
                    ],
                    documentation: [
                        {
                            cssClass: 'icon-tick-with-circle ',
                        },
                    ],
                    risk_rating: [
                        {
                            cssClass: 'icon-cross-with-circle pending',
                        },
                    ],
                    action: 'in review',
                },
                {
                    profile: 'member-4.png',
                    customer: '3312353',
                    full_name: 'Fua Lamba',
                    nationality: 'Singaporean',
                    name_screening: [
                        {
                            cssClass: 'icon-cross-with-circle pending',
                        },
                    ],
                    documentation: [
                        {
                            cssClass: 'icon-tick-with-circle pending',
                        },
                    ],
                    risk_rating: [
                        {
                            cssClass: 'icon-cross-with-circle danger',
                        },
                    ],
                    action: 'in review',
                },
                {
                    profile: 'member-5.png',
                    customer: '1250976',
                    full_name: 'Alexander Ljung',
                    nationality: 'Greek',
                    name_screening: [
                        {
                            cssClass: 'icon-cross-with-circle danger',
                        },
                    ],
                    documentation: [
                        {
                            cssClass: 'icon-tick-with-circle pending',
                        },
                    ],
                    risk_rating: [
                        {
                            cssClass: 'icon-cross-with-circle pending',
                        },
                    ],
                    action: 'in review',
                },
                {
                    profile: 'member-6.png',
                    customer: '2489573',
                    full_name: 'Chukwudi Udo',
                    nationality: 'Mexican',
                    name_screening: [
                        {
                            cssClass: 'icon-cross-with-circle pending',
                        },
                    ],
                    documentation: [
                        {
                            cssClass: 'icon-tick-with-circle pending',
                        },
                    ],
                    risk_rating: [
                        {
                            cssClass: 'icon-cross-with-circle danger',
                        },
                    ],
                    action: 'review',
                },
                {
                    profile: 'member-7.png',
                    customer: '3312353',
                    full_name: 'Linzell Bowman',
                    nationality: 'British',
                    name_screening: [
                        {
                            cssClass: 'icon-cross-with-circle pending',
                        },
                    ],
                    documentation: [
                        {
                            cssClass: 'icon-tick-with-circle pending',
                        },
                    ],
                    risk_rating: [
                        {
                            cssClass: 'icon-cross-with-circle danger',
                        },
                    ],
                    action: 'review',
                },
                {
                    profile: 'member-8.png',
                    customer: '3282345',
                    full_name: 'Vương Mộng Nhi',
                    nationality: 'Chinese',
                    name_screening: [
                        {
                            cssClass: 'icon-cross-with-circle danger',
                        },
                    ],
                    documentation: [
                        {
                            cssClass: 'icon-tick-with-circle ',
                        },
                    ],
                    risk_rating: [
                        {
                            cssClass: 'icon-cross-with-circle ',
                        },
                    ],
                    action: 'review',
                },
                {
                    profile: 'member-9.png',
                    customer: '2321345',
                    full_name: 'Lew Silverton',
                    nationality: 'British',
                    name_screening: [
                        {
                            cssClass: 'icon-cross-with-circle danger',
                        },
                    ],
                    documentation: [
                        {
                            cssClass: 'icon-tick-with-circle pending',
                        },
                    ],
                    risk_rating: [
                        {
                            cssClass: 'icon-cross-with-circle ',
                        },
                    ],
                    action: 'review',
                },
                {
                    profile: 'member-10.png',
                    customer: '2223535',
                    full_name: 'Xun Guiying',
                    nationality: 'Chinese',
                    name_screening: [
                        {
                            cssClass: 'icon-cross-with-circle danger',
                        },
                    ],
                    documentation: [
                        {
                            cssClass: 'icon-tick-with-circle pending',
                        },
                    ],
                    risk_rating: [
                        {
                            cssClass: 'icon-cross-with-circle ',
                        },
                    ],
                    action: 'review',
                },
            ],
        },
    },
}
