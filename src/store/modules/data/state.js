export default {
    /*    dashboardUserRequest: [
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
    ],*/
    /*    activityTimelineData: {
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
    },*/
    //table
    // configuration: {
    //     idenfoEngine: {
    //         nationality: {
    //             fields: [
    //                 {
    //                     key: 'countrycode',
    //                     label: 'Country Code',
    //                 },
    //                 {
    //                     key: 'countrytitle',
    //                     label: 'Country Title',
    //                 },
    //                 {
    //                     key: 'rating',
    //                     label: 'RATING',
    //                     class: 'text-center rating-field',
    //                 },
    //                 {
    //                     key: 'isSanction',
    //                     label: 'IS SANCTION',
    //                     class: 'text-center',
    //                 },
    //                 {
    //                     key: 'action',
    //                     label: 'ACTION',
    //                     class: 'two-list',
    //                 },
    //             ],
    //             items: [
    //                 {
    //                     countrycode: 'AF',
    //                     countrytitle: 'Afghanistan',
    //                     rating: 'High Risk',
    //                     isSanction: 'No',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     countrycode: 'AX',
    //                     countrytitle: 'Aland Islands',
    //                     rating: 'High Risk',
    //                     isSanction: 'No',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     countrycode: 'AL',
    //                     countrytitle: 'Albania',
    //                     rating: 'High Risk',
    //                     isSanction: 'No',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     countrycode: 'DZ',
    //                     countrytitle: 'Algeria',
    //                     rating: 'High Risk',
    //                     isSanction: 'No',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     countrycode: 'AS',
    //                     countrytitle: 'American Samoa',
    //                     rating: 'High Risk',
    //                     isSanction: 'No',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     countrycode: 'AD',
    //                     countrytitle: 'Andorra',
    //                     rating: 'High Risk',
    //                     isSanction: 'No',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     countrycode: 'AO',
    //                     countrytitle: 'Angola',
    //                     rating: 'High Risk',
    //                     isSanction: 'No',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     countrycode: 'AI',
    //                     countrytitle: 'Anguilla',
    //                     rating: 'High Risk',
    //                     isSanction: 'No',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     countrycode: 'AQ',
    //                     countrytitle: 'Antarctica',
    //                     rating: 'High Risk',
    //                     isSanction: 'No',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     countrycode: 'AG',
    //                     countrytitle: 'Antigua and Barbuda',
    //                     rating: 'High Risk',
    //                     isSanction: 'No',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //         workfactor: {
    //             fields: [
    //                 {
    //                     key: 'worktypecode',
    //                     label: 'Work Type Code',
    //                 },
    //                 {
    //                     key: 'worktypetitle',
    //                     label: 'Work Type Title',
    //                 },
    //                 {
    //                     key: 'action',
    //                     label: 'ACTION',
    //                     class: 'two-list',
    //                 },
    //             ],
    //             items: [
    //                 {
    //                     worktypecode: 1,
    //                     worktypetitle: 'Self-Employed / Business Owner',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     worktypecode: 2,
    //                     worktypetitle: 'Salaried-Executive Level',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     worktypecode: 3,
    //                     worktypetitle: 'Salaried-General',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     worktypecode: 4,
    //                     worktypetitle: 'Homemaker',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     worktypecode: 5,
    //                     worktypetitle: 'Student',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     worktypecode: 6,
    //                     worktypetitle: 'Unemployed',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     worktypecode: 7,
    //                     worktypetitle: 'Retired',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //         industry: {
    //             fields: [
    //                 {
    //                     key: 'industrycode',
    //                     label: 'Industry Code',
    //                     class: 'text-center w-150px',
    //                 },
    //                 {
    //                     key: 'industrytitle',
    //                     label: 'Industry Title',
    //                 },
    //                 {
    //                     key: 'worktypeimpact',
    //                     label: 'WORK TYPE IMPACT',
    //                 },
    //                 {
    //                     key: 'action',
    //                     label: 'ACTION',
    //                     class: 'two-list',
    //                 },
    //             ],
    //             items: [
    //                 {
    //                     industrycode: 1,
    //                     industrytitle: 'Agriculture, forestry and fishing',
    //                     worktypeimpact: 'View Work Type Impact',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     industrycode: 2,
    //                     industrytitle: 'Mining and quarrying',
    //                     worktypeimpact: 'View Work Type Impact',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     industrycode: 3,
    //                     industrytitle: 'Manufacturing',
    //                     worktypeimpact: 'View Work Type Impact',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     industrycode: 4,
    //                     industrytitle:
    //                         'Electricity, gas, steam and air conditioning supply',
    //                     worktypeimpact: 'View Work Type Impact',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     industrycode: 5,
    //                     industrytitle:
    //                         'Water supply; sewerage, waste management',
    //                     worktypeimpact: 'View Work Type Impact',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     industrycode: 6,
    //                     industrytitle: 'Construction',
    //                     worktypeimpact: 'View Work Type Impact',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     industrycode: 7,
    //                     industrytitle:
    //                         'Wholesale and retail trade; repair of motor vehicles',
    //                     worktypeimpact: 'View Work Type Impact',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     industrycode: 8,
    //                     industrytitle: 'Transportation and storage',
    //                     worktypeimpact: 'View Work Type Impact',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     industrycode: 9,
    //                     industrytitle:
    //                         'Accommodation and food service activities',
    //                     worktypeimpact: 'View Work Type Impact',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     industrycode: 10,
    //                     industrytitle: 'Information and communication',
    //                     worktypeimpact: 'View Work Type Impact',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //         productFactor: {
    //             fields: [
    //                 {
    //                     key: 'productCode',
    //                     label: 'PRODUCT CODE',
    //                     class: 'text-center w-150px',
    //                 },
    //                 {
    //                     key: 'productIndustry',
    //                     label: 'Product Title',
    //                 },
    //                 {
    //                     key: 'rating',
    //                     label: 'RATING',
    //                     class: 'text-center',
    //                 },
    //                 {
    //                     key: 'action',
    //                     label: 'ACTION',
    //                     class: 'two-list',
    //                 },
    //             ],
    //             items: [
    //                 {
    //                     productCode: 1501,
    //                     productIndustry: 'Virtual Currency Wallet',
    //                     rating: 'High Risk',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     productCode: 1502,
    //                     productIndustry: 'Virtual Currency Exchange',
    //                     rating: 'High Risk',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     productCode: 1503,
    //                     productIndustry: 'Current Account',
    //                     rating: 'High Risk',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     productCode: 1504,
    //                     productIndustry: 'Saving Account',
    //                     rating: 'High Risk',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     productCode: 1505,
    //                     productIndustry: 'Credit Card',
    //                     rating: 'Medium Risk',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     productCode: 1506,
    //                     productIndustry: 'Short Term Loan',
    //                     rating: 'Medium Risk',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     productCode: 1507,
    //                     productIndustry: 'Financial Investment',
    //                     rating: 'High Risk',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //         stateFactor: {
    //             fields: [
    //                 {
    //                     key: 'stateCode',
    //                     label: 'STATE CODE',
    //                     class: 'text-center w-150px',
    //                 },
    //                 {
    //                     key: 'stateTitle',
    //                     label: 'STATE TITLE',
    //                 },
    //                 {
    //                     key: 'rating',
    //                     label: 'RATING',
    //                     class: 'text-center',
    //                 },
    //                 {
    //                     key: 'action',
    //                     label: 'ACTION',
    //                     class: 'two-list',
    //                 },
    //             ],
    //             items: [
    //                 {
    //                     stateCode: 1,
    //                     stateTitle: 'Sindh',
    //                     rating: 'Medium Risk',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     stateCode: 2,
    //                     stateTitle: 'Punjab',
    //                     rating: 'Medium Risk',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     stateCode: 3,
    //                     stateTitle: 'Khyber Pakhtunkhwa',
    //                     rating: 'Low Risk',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     stateCode: 4,
    //                     stateTitle: 'Balochistan',
    //                     rating: 'High Risk',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     stateCode: 5,
    //                     stateTitle: 'Gilgit Baltistan',
    //                     rating: 'High Risk',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //         relationshipData: {
    //             fields: [
    //                 {
    //                     key: 'rule',
    //                     label: 'RULE',
    //                 },
    //                 {
    //                     key: 'relationshipLength',
    //                     label: 'RELATIONSHIP LENGTH TITLE',
    //                 },
    //                 {
    //                     key: 'rating',
    //                     label: 'RATING',
    //                     class: 'text-center',
    //                 },
    //                 {
    //                     key: 'action',
    //                     label: 'ACTION',
    //                     class: 'two-list',
    //                 },
    //             ],
    //             items: [
    //                 {
    //                     rule: '0 Months to 24 Months',
    //                     relationshipLength: 'Less than 24 months',
    //                     rating: 'High Risk',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     rule: '24 Months to 48 Months',
    //                     relationshipLength: 'Between 24 months to 48 months',
    //                     rating: 'Medium Risk',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     rule: '48 Months to 1000 Months',
    //                     relationshipLength: 'More than 48 months',
    //                     rating: 'Low Risk',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                         {
    //                             text: 'Archive',
    //                             icon: 'icon-trash',
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //         channelFactor: {
    //             fields: [
    //                 {
    //                     key: 'chanelTypeCode',
    //                     label: 'CHANNEL TYPE CODE',
    //                 },
    //                 {
    //                     key: 'chanelTypeTitle',
    //                     label: 'CHANNEL TYPE TITLE',
    //                 },
    //                 {
    //                     key: 'rating',
    //                     label: 'RATING',
    //                     class: 'text-center',
    //                 },
    //                 {
    //                     key: 'action',
    //                     label: 'ACTION',
    //                     class: 'single-list',
    //                 },
    //             ],
    //             items: [
    //                 {
    //                     chanelTypeCode: 'F2F',
    //                     chanelTypeTitle: 'Face to Face',
    //                     rating: 'Low Risk',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     chanelTypeCode: 'NF2F',
    //                     chanelTypeTitle: 'Non Face to Face',
    //                     rating: 'High Risk',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //         riskFactor: {
    //             fields: [
    //                 {
    //                     key: 'riskCode',
    //                     label: 'Risk Factor',
    //                     class: 'w-320px',
    //                 },
    //                 {
    //                     key: 'weight',
    //                     label: 'WEIGHT',
    //                     class: 'text-center',
    //                 },
    //                 {
    //                     key: 'overrideTo',
    //                     label: 'OVERRIDE TO',
    //                     class: 'text-center',
    //                 },
    //                 {
    //                     key: 'scorescale',
    //                     label: 'Score Scale',
    //                 },
    //                 {
    //                     key: 'action',
    //                     label: 'ACTION',
    //                     class: 'single-list',
    //                 },
    //             ],
    //             items: [
    //                 {
    //                     riskCode: 'Address in High Risk Country',
    //                     weight: 15,
    //                     overrideTo: 'N/A',
    //                     scorescale: 'View Score Scale',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     riskCode: 'Nationality',
    //                     weight: 10,
    //                     overrideTo: 'N/A',
    //                     scorescale: 'View Score Scale',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     riskCode: 'State',
    //                     weight: 0,
    //                     overrideTo: 'N/A',
    //                     scorescale: 'View Score Scale',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     riskCode: 'Work Status',
    //                     weight: 10,
    //                     overrideTo: 'N/A',
    //                     scorescale: 'View Score Scale',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     riskCode: 'Length of Relationship',
    //                     weight: 5,
    //                     overrideTo: 'N/A',
    //                     scorescale: 'View Score Scale',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     riskCode: 'Channel Type',
    //                     weight: 5,
    //                     overrideTo: 'N/A',
    //                     scorescale: 'View Score Scale',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     riskCode: 'Product',
    //                     weight: 10,
    //                     overrideTo: 'N/A',
    //                     scorescale: 'View Score Scale',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     riskCode: 'PEP Hit',
    //                     weight: 15,
    //                     overrideTo: 'High',
    //                     scorescale: 'View Score Scale',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     riskCode: 'Enforcement Hit',
    //                     weight: 15,
    //                     overrideTo: 'High',
    //                     scorescale: 'View Score Scale',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     riskCode: 'Blacklist Hit',
    //                     weight: 15,
    //                     overrideTo: 'High',
    //                     scorescale: 'View Score Scale',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     riskCode: 'Sanction Hit',
    //                     weight: 0,
    //                     overrideTo: 'Sanction',
    //                     scorescale: 'View Score Scale',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     riskCode: 'Document Verification',
    //                     weight: 0,
    //                     overrideTo: 'High',
    //                     scorescale: 'View Score Scale',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //         riskRating: {
    //             fields: [
    //                 {
    //                     key: 'pointscore',
    //                     label: 'POINT SCORE / CASE',
    //                     class: 'w-320px',
    //                 },
    //                 {
    //                     key: 'rating',
    //                     label: 'RATING',
    //                     class: 'text-center',
    //                 },
    //                 {
    //                     key: 'reviewperiod',
    //                     label: 'REVIEW PERIOD',
    //                     class: 'text-center',
    //                 },
    //                 {
    //                     key: 'alert',
    //                     label: 'Alert',
    //                     class: 'text-center',
    //                 },
    //                 {
    //                     key: 'action',
    //                     label: 'ACTION',
    //                     class: 'single-list',
    //                 },
    //             ],
    //             items: [
    //                 {
    //                     pointscore: '0 to 40 Points',
    //                     rating: 'Low Risk',
    //                     reviewperiod: '6 Years',
    //                     alert: 'No',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     pointscore: '41 to 69 Points',
    //                     rating: 'Medium Risk',
    //                     reviewperiod: '3 Years',
    //                     alert: 'No',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     pointscore: '70 to 100 Points',
    //                     rating: 'High Risk',
    //                     reviewperiod: '1 Year',
    //                     alert: 'Yes',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     pointscore: 'PEP Hit',
    //                     rating: 'High Risk',
    //                     reviewperiod: 'Rejected',
    //                     alert: 'Yes',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     pointscore: 'Enforcement Hit',
    //                     rating: 'High Risk',
    //                     reviewperiod: 'Rejected',
    //                     alert: 'Yes',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     pointscore: 'Client Blacklist Hit',
    //                     rating: 'High Risk',
    //                     reviewperiod: 'Rejected',
    //                     alert: 'Yes',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     pointscore: 'Sanction Hit',
    //                     rating: 'High Risk',
    //                     reviewperiod: 'Rejected',
    //                     alert: 'Yes',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     pointscore: 'Document Verification Mismatch ',
    //                     rating: 'High Risk',
    //                     reviewperiod: 'Rejected',
    //                     alert: 'Yes',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     pointscore: 'If Residence Country is Sanctioned',
    //                     rating: 'High Risk',
    //                     reviewperiod: 'Rejected',
    //                     alert: 'Yes',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     pointscore: 'If Nationality Country is Sanctioned',
    //                     rating: 'High Risk',
    //                     reviewperiod: 'Rejected',
    //                     alert: 'Yes',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     pointscore: 'If Contact No. Code Country is Sanctioned',
    //                     rating: 'High Risk',
    //                     reviewperiod: 'Rejected',
    //                     alert: 'Yes',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //         documentVerification: {
    //             fields: [
    //                 {
    //                     key: 'verificationcode',
    //                     label: 'Verification Code',
    //                     class: 'w-320px',
    //                 },
    //                 {
    //                     key: 'verificationtype',
    //                     label: 'Verification Type',
    //                     class: 'text-center',
    //                 },
    //                 {
    //                     key: 'matchedscorethreshold',
    //                     label: 'Matched Scored Therehold',
    //                     class: 'text-center',
    //                 },
    //                 {
    //                     key: 'action',
    //                     label: 'ACTION',
    //                     class: 'single-list',
    //                 },
    //             ],
    //             items: [
    //                 {
    //                     verificationcode: 'LD',
    //                     verificationtype: 'Liveness Detection',
    //                     matchedscorethreshold: 75,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     verificationcode: 'FC',
    //                     verificationtype: 'Face Comparision',
    //                     matchedscorethreshold: 70,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //         screenScoreFactor: {
    //             fields: [
    //                 {
    //                     key: 'code',
    //                     label: 'Code',
    //                     class: 'w-320px',
    //                 },
    //                 {
    //                     key: 'screenfactor',
    //                     label: 'Screening Factor',
    //                     class: 'w-320px',
    //                 },
    //                 {
    //                     key: 'score',
    //                     label: 'Score',
    //                     class: 'text-center',
    //                 },
    //                 {
    //                     key: 'action',
    //                     label: 'ACTION',
    //                     class: 'single-list',
    //                 },
    //             ],
    //             items: [
    //                 {
    //                     code: 'EFN',
    //                     screenfactor: 'Exact- First Name Score',
    //                     score: 50,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     code: 'ELN',
    //                     screenfactor: 'Exact- Last Name Score',
    //                     score: 50,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     code: 'DL1',
    //                     screenfactor: 'Fuzzy - DL=1',
    //                     score: 45,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     code: 'DL2',
    //                     screenfactor: 'Fuzzy - DL=2',
    //                     score: 25,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     code: 'SOH',
    //                     screenfactor: 'Screening on Hypocorisms',
    //                     score: 50,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     code: 'DB1',
    //                     screenfactor: 'if year of birth matches',
    //                     score: 0,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     code: 'DB2',
    //                     screenfactor:
    //                         'if year of birth is NULL in list provider',
    //                     score: 0,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     code: 'DB3',
    //                     screenfactor: 'if year of birth is +1/-1',
    //                     score: -5,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     code: 'DB4',
    //                     screenfactor: 'if year of birth is mismatch',
    //                     score: -20,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     code: 'NA1',
    //                     screenfactor: 'if nationality matches',
    //                     score: 0,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     code: 'NA2',
    //                     screenfactor: 'if nationality is NULL in list provider',
    //                     score: 0,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     code: 'NA3',
    //                     screenfactor: 'if nationality is mismatch',
    //                     score: -10,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     code: 'CR1',
    //                     screenfactor: 'if country of residence matches',
    //                     score: 0,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     code: 'CR2',
    //                     screenfactor:
    //                         'if country of residence is NULL in list provider',
    //                     score: 0,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     code: 'CR3',
    //                     screenfactor: 'if country of residence is mismatch',
    //                     score: -10,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     code: 'ID1',
    //                     screenfactor: 'if ID document number matches',
    //                     score: 0,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     code: 'ID2',
    //                     screenfactor:
    //                         'if ID document number is NULL in list provider',
    //                     score: 0,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     code: 'ID3',
    //                     screenfactor: 'if ID document number is mismatch',
    //                     score: -5,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     code: 'GN1',
    //                     screenfactor: 'if gender matches',
    //                     score: 0,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     code: 'GN2',
    //                     screenfactor:
    //                         'if gender is NULL/Unknown in list provider',
    //                     score: 0,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     code: 'GN3',
    //                     screenfactor: 'if gender is mismatch',
    //                     score: -5,
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     code: 'TS1',
    //                     screenfactor: 'Safe Score',
    //                     score: '< 75',
    //                     action: [
    //                         {
    //                             text: 'Modify',
    //                             icon: 'icon-edit',
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //     },
    //     importData: [
    //         {
    //             logo: 'logo1.png',
    //             name: 'Do Jones Data',
    //             lastUpdate: 'Last updated: June 10, 2019',
    //             totalRecord: 'Total Records: 45,650',
    //         },
    //         {
    //             logo: 'logo2.png',
    //             name: 'World Bank Data',
    //             lastUpdate: 'Last updated: June 9, 2019',
    //             totalRecord: 'Total Records: 23,956',
    //         },
    //         {
    //             logo: 'logo3.png',
    //             name: 'Client Blacklist Data',
    //             lastUpdate: 'Last updated: June 12, 2019',
    //             totalRecord: 'Total Records: 2,450',
    //         },
    //     ],
    // },
}
