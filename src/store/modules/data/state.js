export default {
    dashboardUserRequest: [
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
    //system logs page
    logsTotalActions: {
        type: 'serial',
        categoryField: 'category',
        dataDateFormat: 'YYYY-MM-DD',
        autoMarginOffset: 0,
        colors: [
            '#3c1559',
            '#FCD202',
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
        categoryAxis: {
            gridPosition: 'start',
            parseDates: true,
            gridAlpha: 0,
        },
        chartCursor: {
            enabled: true,
        },
        trendLines: [],
        graphs: [
            {
                fillAlphas: 1,
                id: 'AmGraph-1',
                title: 'graph 1',
                type: 'column',
                valueField: 'column-1',
            },
        ],
        guides: [],
        valueAxes: [
            {
                id: 'ValueAxis-1',
                gridAlpha: 0.04,
                minorGridAlpha: 0,
                minVerticalGap: 31,
                title: 'Axis title',
            },
        ],
        allLabels: [],
        balloon: {},
        titles: [
            {
                id: 'Title-1',
                size: 15,
                text: '',
            },
        ],
        dataProvider: [
            {
                category: '2014-03-01',
                'column-1': 8,
            },
            {
                category: '2014-03-02',
                'column-1': 16,
            },
            {
                category: '2014-03-03',
                'column-1': 2,
            },
            {
                category: '2014-03-04',
                'column-1': 7,
            },
            {
                category: '2014-03-05',
                'column-1': 5,
            },
            {
                category: '2014-03-06',
                'column-1': 9,
            },
            {
                category: '2014-03-07',
                'column-1': 4,
            },
            {
                category: '2014-03-08',
                'column-1': 15,
            },
            {
                category: '2014-03-09',
                'column-1': 12,
            },
            {
                category: '2014-03-10',
                'column-1': 17,
            },
            {
                category: '2014-03-11',
                'column-1': 18,
            },
            {
                category: '2014-03-12',
                'column-1': 21,
            },
            {
                category: '2014-03-13',
                'column-1': 24,
            },
            {
                category: '2014-03-14',
                'column-1': 23,
            },
            {
                category: '2014-03-15',
                'column-1': 24,
            },
        ],
    },
    //table
    systemLogsTable: {
        fields: [
            {
                key: 'user',
                label: 'User',
            },
            {
                key: 'module',
                label: 'Module',
            },
            {
                key: 'action_type',
                label: 'Action',
            },
            {
                key: 'time_stamp',
                label: 'Timestamp',
            },
        ],
        items: [
            {
                user: 'Ishaaq El Vohra',
                module: 'Customer Registration',
                action_type: 'Create New Customer',
                time_stamp: 'Wed, Oct 17, 2018 01:08:15',
            },
        ],
    },
    systemUserTable: {
        alerts: {
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
                    thClass: 'person-icon',
                },
                {
                    key: 'documentation',
                    label: 'DOCUMENTATION',
                    thClass: 'document-icon',
                },
                {
                    key: 'risk_rating',
                    label: 'RISK RATING',
                    thClass: 'graph-icon',
                },
                {
                    key: 'status',
                    label: 'STATUS',
                },
            ],
            items: [
                {
                    profile: 'member-1.png',
                    customer: '1250976',
                    full_name: 'Zeng Wen',
                    nationality: 'British',
                    name_screening: 'pending',
                    documentation: 'inreview',
                    risk_rating: 'reject',
                    status: 'lock',
                },
                {
                    profile: 'member-2.png',
                    customer: '1250976',
                    full_name: 'Edward Lindgren',
                    nationality: 'British',
                    name_screening: 'inreview',
                    documentation: 'pending',
                    risk_rating: 'pending',
                    status: 'review',
                },
                {
                    profile: 'member-3.png',
                    customer: '3282345',
                    full_name: 'Christian Russell',
                    nationality: 'American',
                    name_screening: 'pending',
                    documentation: 'inreview',
                    risk_rating: 'reject',
                    status: 'lock',
                },
                {
                    profile: 'member-4.png',
                    customer: '3312353',
                    full_name: 'Fua Lamba',
                    nationality: 'Singaporean',
                    name_screening: 'reject',
                    documentation: 'pending',
                    risk_rating: 'inreview',
                    status: 'lock',
                },
                {
                    profile: 'member-5.png',
                    customer: '1250976',
                    full_name: 'Alexander Ljung',
                    nationality: 'Greek',
                    name_screening: 'pending',
                    documentation: 'pending',
                    risk_rating: 'inreview',
                    status: 'review',
                },
                {
                    profile: 'member-6.png',
                    customer: '2489573',
                    full_name: 'Chukwudi Udo',
                    nationality: 'Mexican',
                    name_screening: 'pending',
                    documentation: 'inreview',
                    risk_rating: 'pending',
                    status: 'review',
                },
                {
                    profile: 'member-7.png',
                    customer: '3312353',
                    full_name: 'Linzell Bowman',
                    nationality: 'British',
                    name_screening: 'pending',
                    documentation: 'inreview',
                    risk_rating: 'reject',
                    status: 'review',
                },
                {
                    profile: 'member-8.png',
                    customer: '3282345',
                    full_name: 'Vương Mộng Nhi',
                    nationality: 'Chinese',
                    name_screening: 'reject',
                    documentation: 'pending',
                    risk_rating: 'pending',
                    status: 'review',
                },
                {
                    profile: 'member-9.png',
                    customer: '2321345',
                    full_name: 'Lew Silverton',
                    nationality: 'British',
                    name_screening: 'pending',
                    documentation: 'reject',
                    risk_rating: 'inreview',
                    status: 'review',
                },
                {
                    profile: 'member-10.png',
                    customer: '2223535',
                    full_name: 'Xun Guiying',
                    nationality: 'Chinese',
                    name_screening: 'inreview',
                    documentation: 'pending',
                    risk_rating: 'pending',
                    status: 'review',
                },
            ],
        },
        users: {
            fields: [
                {
                    key: 'profile',
                    label: '',
                },
                {
                    key: 'user',
                    label: 'User',
                },
                {
                    key: 'role',
                    label: 'Role',
                },
                {
                    key: 'date_segments',
                    label: 'Date Segments',
                },
                {
                    key: 'join_date',
                    label: 'Join Date',
                },
                {
                    key: 'status',
                    label: 'Status',
                },
                {
                    key: 'action',
                    label: 'ACTION',
                },
            ],
            items: [
                {
                    profile: 'member-1.png',
                    user: 'Chineze Afamefuna',
                    role: 'Super Admin',
                    date_segments: 'All',
                    join_date: 'Jun 10, 2019 6:35 p.m.',
                    status: 'Active',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
                {
                    profile: 'member-2.png',
                    user: 'Regina Pollastro',
                    role: 'Maker',
                    date_segments: 'PK',
                    join_date: 'Jun 10, 2019 6:35 p.m.',
                    status: 'Active',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
                {
                    profile: 'member-3.png',
                    user: 'Boris Ukhtomsky',
                    role: 'Checker',
                    date_segments: 'PK',
                    join_date: 'Jun 10, 2019 6:35 p.m.',
                    status: 'Pending',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
                {
                    profile: 'member-4.png',
                    user: 'Kimmy McIlmorie',
                    role: 'Maker',
                    date_segments: 'PK',
                    join_date: 'Jun 9, 2019 6:35 p.m.',
                    status: 'Active',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
                {
                    profile: 'member-5.png',
                    user: 'Noell Blue',
                    role: 'Checker',
                    date_segments: 'UAE',
                    join_date: 'Jun 9, 2019 6:35 p.m.',
                    status: 'Active',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
                {
                    profile: 'member-6.png',
                    user: 'Qin Shi',
                    role: 'Maker',
                    date_segments: 'UAE',
                    join_date: 'Jun 9, 2019 6:35 p.m.',
                    status: 'Active',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
                {
                    profile: 'member-7.png',
                    user: 'Julian Gruber',
                    role: 'Maker',
                    date_segments: 'UAE',
                    join_date: 'Jun 8, 2019 6:35 p.m.',
                    status: 'Active',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
                {
                    profile: 'member-8.png',
                    user: 'Mathijn Agter',
                    role: 'Approver',
                    date_segments: 'UK',
                    join_date: 'Jun 8, 2019 6:35 p.m.',
                    status: 'Active',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
                {
                    profile: 'member-9.png',
                    user: 'Shadrias Pearson',
                    role: 'Relationship Manager',
                    date_segments: 'UK',
                    join_date: 'Jun 9, 2019 6:35 p.m.',
                    status: 'Active',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
                {
                    profile: 'member-10.png',
                    user: 'Boris Ukhtomsky',
                    role: 'Maker',
                    date_segments: 'PK',
                    join_date: 'Jun 7, 2019 6:35 p.m.',
                    status: 'Archived',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
            ],
        },
        roles: {
            fields: [
                {
                    key: 'role_title',
                    label: 'Role Title',
                },
                {
                    key: 'associate_users',
                    label: 'Associate Users',
                    class: 'text-center',
                },
                {
                    key: 'status',
                    label: 'Status',
                    class: 'text-center',
                },
                {
                    key: 'action',
                    label: 'Action',
                    tdClass: 'user-roles-action',
                },
            ],
            items: [
                {
                    role_title: 'Super Admin',
                    associate_users: '2',
                    status: 'locked',
                    action: '',
                },
                {
                    role_title: 'Maker',
                    associate_users: '5',
                    status: 'locked',
                    action: '',
                },
                {
                    role_title: 'Checker',
                    associate_users: '3',
                    status: 'locked',
                    action: '',
                },
                {
                    role_title: 'Approver',
                    associate_users: '2',
                    status: 'locked',
                    action: '',
                },
                {
                    role_title: 'Relationship Manager',
                    associate_users: '3',
                    status: 'active',
                    action: '',
                },
                {
                    role_title: 'System Analyst',
                    associate_users: '0',
                    status: 'archived',
                    action: '',
                },
            ],
        },
        branches: {
            fields: [
                {
                    key: 'branch_title',
                    label: 'Branch Title',
                },
                {
                    key: 'short_code',
                    label: 'Short Code',
                    class: 'text-center',
                },
                {
                    key: 'status',
                    label: 'Status',
                },
                {
                    key: 'action',
                    label: 'Action',
                    tdClass: 'user-roles-action',
                },
            ],
            items: [
                {
                    branch_title: 'United Arab Emirates',
                    short_code: 'UAE',
                    status: 'Active',
                    action: '',
                },
                {
                    branch_title: 'Pakistan',
                    short_code: 'PK',
                    status: 'Active',
                    action: '',
                },
                {
                    branch_title: 'United Kingdom',
                    short_code: 'UK',
                    status: 'Active',
                    action: '',
                },
                {
                    branch_title: 'United States of America',
                    short_code: 'USA',
                    status: 'Archived',
                    action: '',
                },
            ],
        },
        applications: {
            fields: [
                {
                    key: 'application_title',
                    label: 'Application Title',
                },
                {
                    key: 'branches',
                    label: 'BRANCHES',
                },
                {
                    key: 'status',
                    label: 'Status',
                },
                {
                    key: 'action',
                    label: 'Action',
                    tdClass: 'user-roles-action',
                },
            ],
            items: [
                {
                    application_title: 'Core Banking System',
                    branches: 'PK, UAE',
                    status: 'Active',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
                {
                    application_title: 'Financial Reporting System',
                    branches: 'PK',
                    status: 'Active',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
                {
                    application_title: 'Banking CRM',
                    branches: 'PK, UAE, UK',
                    status: 'Active',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
                {
                    application_title: 'Testing App',
                    branches: 'USA',
                    status: 'Archived',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Archive',
                        },
                    ],
                },
            ],
        },
    },

    configuration: {
        idenfoEngine: {
            nationality: {
                fields: [
                    {
                        key: 'countrycode',
                        label: 'Country Code',
                    },
                    {
                        key: 'countrytitle',
                        label: 'Country Title',
                    },
                    {
                        key: 'rating',
                        label: 'RATING',
                        class: 'text-center rating-field',
                    },
                    {
                        key: 'isSanction',
                        label: 'IS SANCTION',
                        class: 'text-center',
                    },
                    {
                        key: 'action',
                        label: 'ACTION',
                        class: 'two-list',
                    },
                ],
                items: [
                    {
                        countrycode: 'AF',
                        countrytitle: 'Afghanistan',
                        rating: 'High Risk',
                        isSanction: 'No',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        countrycode: 'AX',
                        countrytitle: 'Aland Islands',
                        rating: 'High Risk',
                        isSanction: 'No',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        countrycode: 'AL',
                        countrytitle: 'Albania',
                        rating: 'High Risk',
                        isSanction: 'No',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        countrycode: 'DZ',
                        countrytitle: 'Algeria',
                        rating: 'High Risk',
                        isSanction: 'No',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        countrycode: 'AS',
                        countrytitle: 'American Samoa',
                        rating: 'High Risk',
                        isSanction: 'No',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        countrycode: 'AD',
                        countrytitle: 'Andorra',
                        rating: 'High Risk',
                        isSanction: 'No',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        countrycode: 'AO',
                        countrytitle: 'Angola',
                        rating: 'High Risk',
                        isSanction: 'No',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        countrycode: 'AI',
                        countrytitle: 'Anguilla',
                        rating: 'High Risk',
                        isSanction: 'No',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        countrycode: 'AQ',
                        countrytitle: 'Antarctica',
                        rating: 'High Risk',
                        isSanction: 'No',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        countrycode: 'AG',
                        countrytitle: 'Antigua and Barbuda',
                        rating: 'High Risk',
                        isSanction: 'No',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                ],
            },
            workfactor: {
                fields: [
                    {
                        key: 'worktypecode',
                        label: 'Work Type Code',
                    },
                    {
                        key: 'worktypetitle',
                        label: 'Work Type Title',
                    },
                    {
                        key: 'action',
                        label: 'ACTION',
                        class: 'two-list',
                    },
                ],
                items: [
                    {
                        worktypecode: 1,
                        worktypetitle: 'Self-Employed / Business Owner',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        worktypecode: 2,
                        worktypetitle: 'Salaried-Executive Level',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        worktypecode: 3,
                        worktypetitle: 'Salaried-General',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        worktypecode: 4,
                        worktypetitle: 'Homemaker',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        worktypecode: 5,
                        worktypetitle: 'Student',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        worktypecode: 6,
                        worktypetitle: 'Unemployed',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        worktypecode: 7,
                        worktypetitle: 'Retired',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                ],
            },
            industry: {
                fields: [
                    {
                        key: 'industrycode',
                        label: 'Industry Code',
                        class: 'text-center w-150px',
                    },
                    {
                        key: 'industrytitle',
                        label: 'Industry Title',
                    },
                    {
                        key: 'worktypeimpact',
                        label: 'WORK TYPE IMPACT',
                    },
                    {
                        key: 'action',
                        label: 'ACTION',
                        class: 'two-list',
                    },
                ],
                items: [
                    {
                        industrycode: 1,
                        industrytitle: 'Agriculture, forestry and fishing',
                        worktypeimpact: 'View Work Type Impact',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        industrycode: 2,
                        industrytitle: 'Mining and quarrying',
                        worktypeimpact: 'View Work Type Impact',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        industrycode: 3,
                        industrytitle: 'Manufacturing',
                        worktypeimpact: 'View Work Type Impact',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        industrycode: 4,
                        industrytitle:
                            'Electricity, gas, steam and air conditioning supply',
                        worktypeimpact: 'View Work Type Impact',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        industrycode: 5,
                        industrytitle:
                            'Water supply; sewerage, waste management',
                        worktypeimpact: 'View Work Type Impact',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        industrycode: 6,
                        industrytitle: 'Construction',
                        worktypeimpact: 'View Work Type Impact',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        industrycode: 7,
                        industrytitle:
                            'Wholesale and retail trade; repair of motor vehicles',
                        worktypeimpact: 'View Work Type Impact',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        industrycode: 8,
                        industrytitle: 'Transportation and storage',
                        worktypeimpact: 'View Work Type Impact',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        industrycode: 9,
                        industrytitle:
                            'Accommodation and food service activities',
                        worktypeimpact: 'View Work Type Impact',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        industrycode: 10,
                        industrytitle: 'Information and communication',
                        worktypeimpact: 'View Work Type Impact',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                ],
            },

            productFactor: {
                fields: [
                    {
                        key: 'productCode',
                        label: 'PRODUCT CODE',
                        class: 'text-center w-150px',
                    },
                    {
                        key: 'productIndustry',
                        label: 'Product Title',
                    },
                    {
                        key: 'rating',
                        label: 'RATING',
                        class: 'text-center',
                    },
                    {
                        key: 'action',
                        label: 'ACTION',
                        class: 'two-list',
                    },
                ],
                items: [
                    {
                        productCode: 1501,
                        productIndustry: 'Virtual Currency Wallet',
                        rating: 'High Risk',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        productCode: 1502,
                        productIndustry: 'Virtual Currency Exchange',
                        rating: 'High Risk',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        productCode: 1503,
                        productIndustry: 'Current Account',
                        rating: 'High Risk',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        productCode: 1504,
                        productIndustry: 'Saving Account',
                        rating: 'High Risk',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        productCode: 1505,
                        productIndustry: 'Credit Card',
                        rating: 'Medium Risk',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        productCode: 1506,
                        productIndustry: 'Short Term Loan',
                        rating: 'Medium Risk',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        productCode: 1507,
                        productIndustry: 'Financial Investment',
                        rating: 'High Risk',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                ],
            },

            stateFactor: {
                fields: [
                    {
                        key: 'stateCode',
                        label: 'STATE CODE',
                        class: 'text-center w-150px',
                    },
                    {
                        key: 'stateTitle',
                        label: 'STATE TITLE',
                    },
                    {
                        key: 'rating',
                        label: 'RATING',
                        class: 'text-center',
                    },
                    {
                        key: 'action',
                        label: 'ACTION',
                        class: 'two-list',
                    },
                ],
                items: [
                    {
                        stateCode: 1,
                        stateTitle: 'Sindh',
                        rating: 'Medium Risk',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        stateCode: 2,
                        stateTitle: 'Punjab',
                        rating: 'Medium Risk',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        stateCode: 3,
                        stateTitle: 'Khyber Pakhtunkhwa',
                        rating: 'Low Risk',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        stateCode: 4,
                        stateTitle: 'Balochistan',
                        rating: 'High Risk',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        stateCode: 5,
                        stateTitle: 'Gilgit Baltistan',
                        rating: 'High Risk',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                ],
            },

            relationshipData: {
                fields: [
                    {
                        key: 'rule',
                        label: 'RULE',
                    },
                    {
                        key: 'relationshipLength',
                        label: 'RELATIONSHIP LENGTH TITLE',
                    },
                    {
                        key: 'rating',
                        label: 'RATING',
                        class: 'text-center',
                    },
                    {
                        key: 'action',
                        label: 'ACTION',
                        class: 'two-list',
                    },
                ],
                items: [
                    {
                        rule: '0 Months to 24 Months',
                        relationshipLength: 'Less than 24 months',
                        rating: 'High Risk',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        rule: '24 Months to 48 Months',
                        relationshipLength: 'Between 24 months to 48 months',
                        rating: 'Medium Risk',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                    {
                        rule: '48 Months to 1000 Months',
                        relationshipLength: 'More than 48 months',
                        rating: 'Low Risk',
                        action: [
                            {
                                text: 'Modify',
                            },
                            {
                                text: 'Archive',
                            },
                        ],
                    },
                ],
            },

            channelFactor: {
                fields: [
                    {
                        key: 'chanelTypeCode',
                        label: 'CHANNEL TYPE CODE',
                    },
                    {
                        key: 'chanelTypeTitle',
                        label: 'CHANNEL TYPE TITLE',
                    },
                    {
                        key: 'rating',
                        label: 'RATING',
                        class: 'text-center',
                    },
                    {
                        key: 'action',
                        label: 'ACTION',
                        class: 'single-list',
                    },
                ],
                items: [
                    {
                        chanelTypeCode: 'F2F',
                        chanelTypeTitle: 'Face to Face',
                        rating: 'Low Risk',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                    {
                        chanelTypeCode: 'NF2F',
                        chanelTypeTitle: 'Non Face to Face',
                        rating: 'High Risk',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                ],
            },

            riskFactor: {
                fields: [
                    {
                        key: 'riskCode',
                        label: 'Risk Factor',
                        class: 'w-320px',
                    },
                    {
                        key: 'weight',
                        label: 'WEIGHT',
                        class: 'text-center',
                    },
                    {
                        key: 'overrideTo',
                        label: 'OVERRIDE TO',
                        class: 'text-center',
                    },
                    {
                        key: 'scorescale',
                        label: 'Score Scale',
                    },
                    {
                        key: 'action',
                        label: 'ACTION',
                        class: 'single-list',
                    },
                ],
                items: [
                    {
                        riskCode: 'Address in High Risk Country',
                        weight: 15,
                        overrideTo: 'N/A',
                        scorescale: 'View Score Scale',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                    {
                        riskCode: 'Nationality',
                        weight: 10,
                        overrideTo: 'N/A',
                        scorescale: 'View Score Scale',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                    {
                        riskCode: 'State',
                        weight: 0,
                        overrideTo: 'N/A',
                        scorescale: 'View Score Scale',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                    {
                        riskCode: 'Work Status',
                        weight: 10,
                        overrideTo: 'N/A',
                        scorescale: 'View Score Scale',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                    {
                        riskCode: 'Length of Relationship',
                        weight: 5,
                        overrideTo: 'N/A',
                        scorescale: 'View Score Scale',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                    {
                        riskCode: 'Channel Type',
                        weight: 5,
                        overrideTo: 'N/A',
                        scorescale: 'View Score Scale',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                    {
                        riskCode: 'Product',
                        weight: 10,
                        overrideTo: 'N/A',
                        scorescale: 'View Score Scale',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                    {
                        riskCode: 'PEP Hit',
                        weight: 15,
                        overrideTo: 'High',
                        scorescale: 'View Score Scale',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                    {
                        riskCode: 'Enforcement Hit',
                        weight: 15,
                        overrideTo: 'High',
                        scorescale: 'View Score Scale',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                    {
                        riskCode: 'Blacklist Hit',
                        weight: 15,
                        overrideTo: 'High',
                        scorescale: 'View Score Scale',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                    {
                        riskCode: 'Sanction Hit',
                        weight: 0,
                        overrideTo: 'Sanction',
                        scorescale: 'View Score Scale',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                    {
                        riskCode: 'Document Verification',
                        weight: 0,
                        overrideTo: 'High',
                        scorescale: 'View Score Scale',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                ],
            },

            riskRating: {
                fields: [
                    {
                        key: 'pointscore',
                        label: 'POINT SCORE / CASE',
                        class: 'w-320px',
                    },
                    {
                        key: 'rating',
                        label: 'RATING',
                        class: 'text-center',
                    },
                    {
                        key: 'reviewperiod',
                        label: 'REVIEW PERIOD',
                        class: 'text-center',
                    },
                    {
                        key: 'alert',
                        label: 'Alert',
                        class: 'text-center',
                    },
                    {
                        key: 'action',
                        label: 'ACTION',
                        class: 'single-list',
                    },
                ],
                items: [
                    {
                        pointscore: '0 to 40 Points',
                        rating: 'Low Risk',
                        reviewperiod: '6 Years',
                        alert: 'No',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                    {
                        pointscore: '41 to 69 Points',
                        rating: 'Medium Risk',
                        reviewperiod: '3 Years',
                        alert: 'No',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                    {
                        pointscore: '70 to 100 Points',
                        rating: 'High Risk',
                        reviewperiod: '1 Year',
                        alert: 'Yes',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                    {
                        pointscore: 'PEP Hit',
                        rating: 'High Risk',
                        reviewperiod: 'Rejected',
                        alert: 'Yes',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                    {
                        pointscore: 'Enforcement Hit',
                        rating: 'High Risk',
                        reviewperiod: 'Rejected',
                        alert: 'Yes',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                    {
                        pointscore: 'Client Blacklist Hit',
                        rating: 'High Risk',
                        reviewperiod: 'Rejected',
                        alert: 'Yes',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                    {
                        pointscore: 'Sanction Hit',
                        rating: 'High Risk',
                        reviewperiod: 'Rejected',
                        alert: 'Yes',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                    {
                        pointscore: 'Document Verification Mismatch ',
                        rating: 'High Risk',
                        reviewperiod: 'Rejected',
                        alert: 'Yes',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                    {
                        pointscore: 'If Residence Country is Sanctioned',
                        rating: 'High Risk',
                        reviewperiod: 'Rejected',
                        alert: 'Yes',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },

                    {
                        pointscore: 'If Nationality Country is Sanctioned',
                        rating: 'High Risk',
                        reviewperiod: 'Rejected',
                        alert: 'Yes',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                    {
                        pointscore: 'If Contact No. Code Country is Sanctioned',
                        rating: 'High Risk',
                        reviewperiod: 'Rejected',
                        alert: 'Yes',
                        action: [
                            {
                                text: 'Modify',
                            },
                        ],
                    },
                ],
            },
        },
        importData: [
            {
                logo: 'logo1.png',
                name: 'Do Jones Data',
                lastUpdate: 'Last updated: June 10, 2019',
                totalRecord: 'Total Records: 45,650',
            },
            {
                logo: 'logo2.png',
                name: 'World Bank Data',
                lastUpdate: 'Last updated: June 9, 2019',
                totalRecord: 'Total Records: 23,956',
            },
            {
                logo: 'logo3.png',
                name: 'Client Blacklist Data',
                lastUpdate: 'Last updated: June 12, 2019',
                totalRecord: 'Total Records: 2,450',
            },
        ],
    },
}
