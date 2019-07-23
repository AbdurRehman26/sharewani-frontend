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
            {
                title: 'AVG. ONBOARDING LENGTH',
                value: '02:10:25:15',
                icon: true,
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

        //alert by alert type

        alertByAlertType: {
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
            valueField: 'catValue',
            color: '#1B1B1E',
            fontFamily: 'Proxima Nova',
            fontSize: 14,
            allLabels: [],
            customLabels: '<b>[[value]]</b> [[percents]]%',
            balloon: {
                color: '#1B1B1E',
                fillAlpha: 1,
            },
            legend: {
                enabled: false,
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
                    category: 'New Alerts',
                    catValue: '180',
                    percents: '25%',
                },
                {
                    category: 'Periodic Alerts',
                    catValue: '420',
                    percents: '58%',
                },
                {
                    category: 'Trigger Alerts',
                    catValue: '120',
                    percents: '16%',
                },
            ],
            listeners: [
                {
                    event: 'init',
                    method: function(event) {
                        // chart initialized
                        // let's build a custom legend
                        var chart = event.chart

                        // get legend object

                        var legend = document.getElementById('alertTypesLegend')
                        // cycle through the data
                        for (var i = 0; i < chart.dataProvider.length; i++) {
                            // data point
                            var dp = chart.dataProvider[i]

                            // create a legend item holder
                            var item = document.createElement('div')

                            // create marker
                            var marker = document.createElement('div')
                            marker.className = 'legend-marker'
                            marker.style.backgroundColor = chart.colors[i]
                            item.appendChild(marker)

                            // create title
                            var title = document.createElement('div')
                            title.className = 'legend-title'
                            title.innerHTML = dp.category
                            item.appendChild(title)

                            // create absolute value
                            var value = document.createElement('div')
                            value.className = 'legend-value'
                            value.innerHTML = dp.percents
                            item.appendChild(value)

                            // add item to legend
                            legend.appendChild(item)
                        }
                    },
                },
            ],
        },

        //Name Screen Hit By Type

        screenHitByTypeChart: {
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
                fillAlpha: 1,
            },
            legend: {
                enabled: false,
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
                    percents: '25%',
                },
                {
                    category: 'PEP Hit',
                    'column-1': '320',
                    percents: '50%',
                },
                {
                    category: 'Enforcement Hit',
                    'column-1': '120',
                    percents: '15%',
                },
                {
                    category: 'Client Black List Hit',
                    'column-1': '92',
                    percents: '10%',
                },
            ],
            listeners: [
                {
                    event: 'init',
                    method: function(event) {
                        // chart initialized
                        // let's build a custom legend
                        var chart = event.chart

                        // get legend object

                        var legend = document.getElementById(
                            'screenHitByTypeLegend'
                        )
                        // cycle through the data
                        for (var i = 0; i < chart.dataProvider.length; i++) {
                            // data point
                            var dp = chart.dataProvider[i]

                            // create a legend item holder
                            var item = document.createElement('div')

                            // create marker
                            var marker = document.createElement('div')
                            marker.className = 'legend-marker'
                            marker.style.backgroundColor = chart.colors[i]
                            item.appendChild(marker)

                            // create title
                            var title = document.createElement('div')
                            title.className = 'legend-title'
                            title.innerHTML = dp.category
                            item.appendChild(title)

                            // create absolute value
                            var value = document.createElement('div')
                            value.className = 'legend-value'
                            value.innerHTML = dp.percents
                            item.appendChild(value)

                            // add item to legend
                            legend.appendChild(item)
                        }
                    },
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
                enabled: false,
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
                    percents: '10%',
                },
                {
                    category: '25 - 34',
                    'column-1': '600',
                    percents: '15%',
                },
                {
                    category: '45 - 54',
                    'column-1': '200',
                    percents: '20%',
                },
                {
                    category: '55 - 64',
                    'column-1': '950',
                    percents: '30%',
                },
                {
                    category: '65 - 74',
                    'column-1': '400',
                    percents: '10%',
                },
                {
                    category: '75+',
                    'column-1': '200',
                    percents: '10%',
                },
            ],
            listeners: [
                {
                    event: 'init',
                    method: function(event) {
                        // chart initialized
                        // let's build a custom legend
                        var chart = event.chart

                        // get legend object

                        var legend = document.getElementById(
                            'customerByAgeLegend'
                        )
                        // cycle through the data
                        for (var i = 0; i < chart.dataProvider.length; i++) {
                            // data point
                            var dp = chart.dataProvider[i]

                            // create a legend item holder
                            var item = document.createElement('div')

                            // create marker
                            var marker = document.createElement('div')
                            marker.className = 'legend-marker'
                            marker.style.backgroundColor = chart.colors[i]
                            item.appendChild(marker)

                            // create title
                            var title = document.createElement('div')
                            title.className = 'legend-title'
                            title.innerHTML = dp.category
                            item.appendChild(title)

                            // create absolute value
                            var value = document.createElement('div')
                            value.className = 'legend-value'
                            value.innerHTML = dp.percents
                            item.appendChild(value)

                            // add item to legend
                            legend.appendChild(item)
                        }
                    },
                },
            ],
        },

        // onBoarding with Issue

        onBoardingIssue: {
            type: 'pie',
            balloonText: '[[title]]: <b>[[value]]</b> [[percents]]%',
            innerRadius: '80%',
            pullOutRadius: '0%',
            colors: [
                '#00c535',
                '#C91F37',
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
            legend: {
                enabled: false,
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
                    category: 'Onboarding Without Issue',
                    'column-1': '2173',
                    percents: '80%',
                },
                {
                    category: 'Onboarding With Issue',
                    'column-1': '980',
                    percents: '20%',
                },
            ],
            listeners: [
                {
                    event: 'init',
                    method: function(event) {
                        // chart initialized
                        // let's build a custom legend
                        var chart = event.chart

                        // get legend object

                        var legend = document.getElementById(
                            'onBoardIssueLegend'
                        )
                        // cycle through the data
                        for (var i = 0; i < chart.dataProvider.length; i++) {
                            // data point
                            var dp = chart.dataProvider[i]

                            // create a legend item holder
                            var item = document.createElement('div')

                            // create marker
                            var marker = document.createElement('div')
                            marker.className = 'legend-marker'
                            marker.style.backgroundColor = chart.colors[i]
                            item.appendChild(marker)

                            // create title
                            var title = document.createElement('div')
                            title.className = 'legend-title'
                            title.innerHTML = dp.category
                            item.appendChild(title)

                            // create absolute value
                            var value = document.createElement('div')
                            value.className = 'legend-value'
                            value.innerHTML = dp.percents
                            item.appendChild(value)

                            // add item to legend
                            legend.appendChild(item)
                        }
                    },
                },
            ],
        },

        // Aging By Alert Type
        agingByAlertType: {
            type: 'serial',
            categoryField: 'category',
            colors: [
                '#7F1EC5',
                '#00A4F2',
                '#EB8300',
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
                gridPosition: 'start',
                gridAlpha: 1,
                gridColor: '#F2F2F6',
            },
            trendLines: [],
            graphs: [
                {
                    balloonText:
                        'Total [[value]] [[title]] handled in b/w [[category]]',
                    fillAlphas: 1,
                    id: 'AmGraph-1',
                    title: 'Onboarding Alerts',
                    type: 'column',
                    valueField: 'column-1',
                },
                {
                    balloonText:
                        'Total [[value]] [[title]] handled in b/w [[category]]',
                    fillAlphas: 1,
                    id: 'AmGraph-2',
                    title: 'Periodic Alerts',
                    type: 'column',
                    valueField: 'column-2',
                },
                {
                    balloonText:
                        'Total [[value]] [[title]] handled in b/w [[category]]',
                    fillAlphas: 1,
                    id: 'AmGraph-3',
                    title: 'Trigger Alerts',
                    type: 'column',
                    valueField: 'column-3',
                },
            ],
            guides: [],
            valueAxes: [
                {
                    id: 'ValueAxis-1',
                    stackType: 'regular',
                    title: 'Total Alerts',
                    gridAlpha: 1,
                    gridColor: '#F2F2F6',
                },
            ],
            allLabels: [],
            balloon: {
                color: '#1B1B1E',
                fillAlpha: 1,
            },
            titles: [],
            dataProvider: [
                {
                    category: '0 to 30 days',
                    'column-1': 80,
                    'column-2': 50,
                    'column-3': 30,
                },
                {
                    category: '31 to 60 days',
                    'column-1': 60,
                    'column-2': 70,
                    'column-3': 60,
                },
                {
                    category: '60 to 90 days',
                    'column-1': 20,
                    'column-2': 30,
                    'column-3': 80,
                },
                {
                    category: '90+ days',
                    'column-1': 40,
                    'column-2': 30,
                    'column-3': 50,
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
                enabled: false,
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
                    percents: '68.92%',
                },
                {
                    category: 'Female',
                    'column-1': '980',
                    percents: '31.08%',
                },
            ],
            listeners: [
                {
                    event: 'init',
                    method: function(event) {
                        // chart initialized
                        // let's build a custom legend
                        var chart = event.chart

                        // get legend object

                        var legend = document.getElementById(
                            'customersByGenderLegend'
                        )
                        // cycle through the data
                        for (var i = 0; i < chart.dataProvider.length; i++) {
                            // data point
                            var dp = chart.dataProvider[i]

                            // create a legend item holder
                            var item = document.createElement('div')

                            // create marker
                            var marker = document.createElement('div')
                            marker.className = 'legend-marker'
                            marker.style.backgroundColor = chart.colors[i]
                            item.appendChild(marker)

                            // create title
                            var title = document.createElement('div')
                            title.className = 'legend-title'
                            title.innerHTML = dp.category
                            item.appendChild(title)

                            // create absolute value
                            var value = document.createElement('div')
                            value.className = 'legend-value'
                            value.innerHTML = dp.percents
                            item.appendChild(value)

                            // add item to legend
                            legend.appendChild(item)
                        }
                    },
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

        //Customers by Nationality
        customersByNationality: {
            type: 'pie',
            innerRadius: '80%',
            colors: [
                '#7f1ec5',
                '#00a4f2',
                '#00c535',
                '#eb8300',
                '#f4c200',
                '#c1c1c1',
                '#F8508C',
                '#00b1a5',
                '#84dc2b',
                '#5172fa',
                '#798bb0',
                '#b31493',
                '#7000f7',
                '#4a005e',
                '#a388b0',
                '#770d42',
                '#388b79',
                '#fc7400',
                '#ff87e6',
                '#f8e08e',
                '#7f1ec5',
                '#00a4f2',
                '#00c535',
                '#eb8300',
                '#f4c200',
                '#c1c1c1',
                '#F8508C',
                '#00b1a5',
                '#84dc2b',
                '#5172fa',
                '#798bb0',
                '#b31493',
                '#7000f7',
                '#4a005e',
                '#a388b0',
                '#770d42',
                '#388b79',
                '#fc7400',
                '#ff87e6',
                '#f8e08e',
                '#7f1ec5',
                '#00a4f2',
                '#00c535',
                '#eb8300',
                '#f4c200',
                '#c1c1c1',
                '#F8508C',
                '#00b1a5',
                '#84dc2b',
                '#5172fa',
                '#798bb0',
                '#b31493',
                '#7000f7',
                '#4a005e',
                '#a388b0',
                '#770d42',
                '#388b79',
                '#fc7400',
                '#ff87e6',
                '#f8e08e',
            ],
            labelsEnabled: false,
            pullOutRadius: '0%',
            balloonText: '[[title]]: <b>[[value]]</b> [[percents]]%',
            marginBottom: 0,
            marginTop: 0,
            outlineAlpha: 1,
            outlineThickness: 2,
            titleField: 'category',
            valueField: 'column',
            color: '#1B1B1E',
            fontFamily: 'Proxima Nova',
            fontSize: 14,
            allLabels: [],
            balloon: {
                color: '#1B1B1E',
                fillAlpha: 1,
            },
            titles: [],
            dataProvider: [
                {
                    category: 'Australia',
                    column: '300',
                    percents: '1%',
                },
                {
                    category: 'Bangladesh',
                    column: '240',
                    percents: '2%',
                },
                {
                    category: 'Belgium',
                    column: '450',
                    percents: '1%',
                },
                {
                    category: 'UK',
                    column: '570',
                    percents: '3%',
                },
                {
                    category: 'USA',
                    column: '640',
                    percents: '2%',
                },
                {
                    category: 'India',
                    column: '720',
                    percents: '1.5%',
                },
                {
                    category: 'Canada',
                    column: '655',
                    percents: '2.2%',
                },
                {
                    category: 'China',
                    column: '740',
                    percents: '1%',
                },
                {
                    category: 'Netherlands',
                    column: '480',
                    percents: '1%',
                },
                {
                    category: 'Greece',
                    column: '380',
                    percents: '1%',
                },
                {
                    category: 'Japan',
                    column: '290',
                    percents: '1%',
                },
                {
                    category: 'Mexico',
                    column: '180',
                    percents: '4%',
                },
                {
                    category: 'Pakistan',
                    column: '150',
                    percents: '6%',
                },
                {
                    category: 'Russia',
                    column: '541',
                    percents: '1%',
                },
                {
                    category: 'Turkey',
                    column: '321',
                    percents: '1%',
                },
                {
                    category: 'Malaysia',
                    column: '487',
                    percents: '1.5%',
                },
                {
                    category: 'Lebnan',
                    column: '380',
                    percents: '2.2%',
                },
                {
                    category: 'Japan',
                    column: '630',
                    percents: '3%',
                },
                {
                    category: 'Sweden',
                    column: '420',
                    percents: '5%',
                },
                {
                    category: 'Germany',
                    column: '370',
                    percents: '1%',
                },
                {
                    category: 'Australia',
                    column: '300',
                    percents: '1%',
                },
                {
                    category: 'Bangladesh',
                    column: '240',
                    percents: '8%',
                },
                {
                    category: 'Belgium',
                    column: '450',
                    percents: '10%',
                },
                {
                    category: 'UK',
                    column: '570',
                    percents: '1%',
                },
                {
                    category: 'USA',
                    column: '640',
                    percents: '8%',
                },
                {
                    category: 'India',
                    column: '720',
                    percents: '4%',
                },
                {
                    category: 'Canada',
                    column: '655',
                    percents: '11%',
                },
                {
                    category: 'China',
                    column: '740',
                    percents: '10%',
                },
                {
                    category: 'Netherlands',
                    column: '480',
                    percents: '1%',
                },
                {
                    category: 'Greece',
                    column: '380',
                    percents: '1%',
                },
                {
                    category: 'Japan',
                    column: '290',
                    percents: '1%',
                },
                {
                    category: 'Mexico',
                    column: '180',
                    percents: '1%',
                },
                {
                    category: 'Pakistan',
                    column: '150',
                    percents: '1%',
                },
                {
                    category: 'Russia',
                    column: '541',
                    percents: '1%',
                },
                {
                    category: 'Turkey',
                    column: '321',
                    percents: '1%',
                },
                {
                    category: 'Malaysia',
                    column: '487',
                    percents: '1%',
                },
                {
                    category: 'Lebnan',
                    column: '380',
                    percents: '1%',
                },
                {
                    category: 'Japan',
                    column: '630',
                    percents: '1%',
                },
                {
                    category: 'Sweden',
                    column: '420',
                    percents: '1%',
                },
                {
                    category: 'Germany',
                    column: '370',
                    percents: '1%',
                },
            ],
            listeners: [
                {
                    event: 'init',
                    method: function(event) {
                        // chart initialized
                        // let's build a custom legend
                        var chart = event.chart

                        // get legend object

                        var legend = document.getElementById(
                            'customersByNationalityLegend'
                        )
                        // cycle through the data
                        for (var i = 0; i < chart.dataProvider.length; i++) {
                            // data point
                            var dp = chart.dataProvider[i]

                            // create a legend item holder
                            var item = document.createElement('div')

                            // create marker
                            var marker = document.createElement('div')
                            marker.className = 'legend-marker'
                            marker.style.backgroundColor = chart.colors[i]
                            item.appendChild(marker)

                            // create title
                            var title = document.createElement('div')
                            title.className = 'legend-title'
                            title.innerHTML = dp.category
                            item.appendChild(title)

                            // create absolute value
                            var value = document.createElement('div')
                            value.className = 'legend-value'
                            value.innerHTML = dp.percents
                            item.appendChild(value)

                            // users from each country
                            var users = document.createElement('div')
                            users.className = 'legend-country-users'
                            users.innerHTML = dp.column
                            item.appendChild(users)

                            // add item to legend
                            legend.appendChild(item)
                        }
                    },
                },
            ],
        },

        //Customers by Country Residence
        customersByResidence: {
            type: 'pie',
            innerRadius: '80%',
            colors: [
                '#7f1ec5',
                '#00a4f2',
                '#00c535',
                '#eb8300',
                '#f4c200',
                '#c1c1c1',
                '#F8508C',
                '#00b1a5',
                '#84dc2b',
                '#5172fa',
                '#798bb0',
                '#b31493',
                '#7000f7',
                '#4a005e',
                '#a388b0',
                '#770d42',
                '#388b79',
                '#fc7400',
                '#ff87e6',
                '#f8e08e',
                '#7f1ec5',
                '#00a4f2',
                '#00c535',
                '#eb8300',
                '#f4c200',
                '#c1c1c1',
                '#F8508C',
                '#00b1a5',
                '#84dc2b',
                '#5172fa',
                '#798bb0',
                '#b31493',
                '#7000f7',
                '#4a005e',
                '#a388b0',
                '#770d42',
                '#388b79',
                '#fc7400',
                '#ff87e6',
                '#f8e08e',
            ],
            labelsEnabled: false,
            pullOutRadius: '0%',
            balloonText: '[[title]]: <b>[[value]]</b> [[percents]]%',
            marginBottom: 0,
            marginTop: 0,
            outlineAlpha: 1,
            outlineThickness: 2,
            titleField: 'category',
            valueField: 'column',
            color: '#1B1B1E',
            fontFamily: 'Proxima Nova',
            fontSize: 14,
            allLabels: [],
            balloon: {
                color: '#1B1B1E',
                fillAlpha: 1,
            },
            titles: [],
            dataProvider: [
                {
                    category: 'Australia',
                    column: '300',
                    percents: '3%',
                },
                {
                    category: 'Bangladesh',
                    column: '240',
                    percents: '4%',
                },
                {
                    category: 'Belgium',
                    column: '450',
                    percents: '5%',
                },
                {
                    category: 'UK',
                    column: '570',
                    percents: '10%',
                },
                {
                    category: 'USA',
                    column: '640',
                    percents: '8%',
                },
                {
                    category: 'India',
                    column: '720',
                    percents: '4%',
                },
                {
                    category: 'Canada',
                    column: '655',
                    percents: '8%',
                },
                {
                    category: 'China',
                    column: '740',
                    percents: '11%',
                },
                {
                    category: 'Netherlands',
                    column: '480',
                    percents: '18%',
                },
                {
                    category: 'Greece',
                    column: '380',
                    percents: '16%',
                },
                {
                    category: 'Japan',
                    column: '290',
                    percents: '15%',
                },
                {
                    category: 'Mexico',
                    column: '180',
                    percents: '11%',
                },
                {
                    category: 'Pakistan',
                    column: '150',
                    percents: '20%',
                },
                {
                    category: 'Russia',
                    column: '541',
                    percents: '6%',
                },
                {
                    category: 'Turkey',
                    column: '321',
                    percents: '1%',
                },
                {
                    category: 'Malaysia',
                    column: '487',
                    percents: '1%',
                },
                {
                    category: 'Lebnan',
                    column: '380',
                    percents: '4%',
                },
                {
                    category: 'Japan',
                    column: '630',
                    percents: '4%',
                },
                {
                    category: 'Sweden',
                    column: '420',
                    percents: '5%',
                },
                {
                    category: 'Germany',
                    column: '370',
                    percents: '4%',
                },
                {
                    category: 'Australia',
                    column: '300',
                    percents: '4%',
                },
                {
                    category: 'Bangladesh',
                    column: '240',
                    percents: '3%',
                },
                {
                    category: 'Belgium',
                    column: '450',
                    percents: '12%',
                },
                {
                    category: 'UK',
                    column: '570',
                    percents: '11%',
                },
                {
                    category: 'USA',
                    column: '640',
                    percents: '10%',
                },
                {
                    category: 'India',
                    column: '720',
                    percents: '6%',
                },
                {
                    category: 'Canada',
                    column: '655',
                    percents: '4%',
                },
                {
                    category: 'China',
                    column: '740',
                    percents: '4%',
                },
                {
                    category: 'Netherlands',
                    column: '480',
                    percents: '5%',
                },
                {
                    category: 'Greece',
                    column: '380',
                    percents: '8%',
                },
                {
                    category: 'Japan',
                    column: '290',
                    percents: '4%',
                },
                {
                    category: 'Mexico',
                    column: '180',
                    percents: '5%',
                },
                {
                    category: 'Pakistan',
                    column: '150',
                    percents: '4%',
                },
                {
                    category: 'Russia',
                    column: '541',
                    percents: '3%',
                },
                {
                    category: 'Turkey',
                    column: '321',
                    percents: '0.5%',
                },
                {
                    category: 'Malaysia',
                    column: '487',
                    percents: '1%',
                },
                {
                    category: 'Lebnan',
                    column: '380',
                    percents: '2%',
                },
                {
                    category: 'Japan',
                    column: '630',
                    percents: '3%',
                },
                {
                    category: 'Sweden',
                    column: '420',
                    percents: '1.5%',
                },
                {
                    category: 'Germany',
                    column: '370',
                    percents: '1%',
                },
            ],
            listeners: [
                {
                    event: 'init',
                    method: function(event) {
                        // chart initialized
                        // let's build a custom legend
                        var chart = event.chart

                        // get legend object

                        var legend = document.getElementById(
                            'customersbyResidenceLegend'
                        )
                        // cycle through the data
                        for (var i = 0; i < chart.dataProvider.length; i++) {
                            // data point
                            var dp = chart.dataProvider[i]

                            // create a legend item holder
                            var item = document.createElement('div')

                            // create marker
                            var marker = document.createElement('div')
                            marker.className = 'legend-marker'
                            marker.style.backgroundColor = chart.colors[i]
                            item.appendChild(marker)

                            // create title
                            var title = document.createElement('div')
                            title.className = 'legend-title'
                            title.innerHTML = dp.category
                            item.appendChild(title)

                            // create absolute value
                            var value = document.createElement('div')
                            value.className = 'legend-value'
                            value.innerHTML = dp.percents
                            item.appendChild(value)

                            // users from each country
                            var users = document.createElement('div')
                            users.className = 'legend-country-users'
                            users.innerHTML = dp.column
                            item.appendChild(users)

                            // add item to legend
                            legend.appendChild(item)
                        }
                    },
                },
            ],
        },

        //dashboard alerts table
        alertsTable: {
            fields: [
                {
                    key: 'alerts',
                    label: 'Type',
                    class: 'p-r-0 min-20',
                    sortable: true,
                },
                {
                    key: 'profile',
                    label: '',
                    class: 'profile-absolute',
                },
                {
                    key: 'customer',
                    label: 'CUSTOMER',
                    sortable: true,
                },
                {
                    key: 'full_name',
                    label: 'FULL NAME',
                    sortable: true,
                },
                {
                    key: 'nationality',
                    label: 'NATIONALITY',
                    sortable: true,
                },
                {
                    key: 'aging',
                    label: 'Aging',
                    sortable: true,
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
                    sortable: true,
                },
            ],
            items: [
                {
                    alerts: [
                        {
                            riskRate: 'High',
                            riskType: 'rating',
                        },
                    ],
                    profile: 'member-1.png',
                    customer: '1250976',
                    full_name: 'Zeng Wen',
                    nationality: 'British',
                    aging: [
                        {
                            name: '16 D',
                            riskRate: 'low',
                        },
                    ],
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
                    alerts: [
                        {
                            riskRate: 'High',
                            riskType: 'rating',
                        },
                    ],
                    profile: 'member-2.png',
                    customer: '1250976',
                    full_name: 'Edward Lindgren',
                    nationality: 'British',

                    aging: [
                        {
                            name: '85 D',
                            riskRate: 'high',
                        },
                    ],
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
                    alerts: [
                        {
                            riskRate: 'Medium',
                            riskType: 'reload',
                        },
                    ],
                    profile: 'member-3.png',
                    customer: '3282345',
                    full_name: 'Christian Russell',
                    nationality: 'American',
                    aging: [
                        {
                            name: '29 D',
                            riskRate: 'low',
                        },
                    ],
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
                    alerts: [
                        {
                            riskRate: 'High',
                            riskType: 'rating',
                        },
                    ],
                    profile: 'member-4.png',
                    customer: '3312353',
                    full_name: 'Fua Lamba',
                    nationality: 'Singaporean',
                    aging: [
                        {
                            name: '65 D',
                            riskRate: 'high',
                        },
                    ],
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
                    alerts: [
                        {
                            riskRate: 'Medium',
                            riskType: 'reload',
                        },
                    ],
                    profile: 'member-5.png',
                    customer: '1250976',
                    full_name: 'Alexander Ljung',
                    nationality: 'Greek',
                    aging: [
                        {
                            name: '38 D',
                            riskRate: 'medium',
                        },
                    ],
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
                    alerts: [
                        {
                            riskRate: 'High',
                            riskType: 'flag',
                        },
                    ],
                    profile: 'member-6.png',
                    customer: '2489573',
                    full_name: 'Chukwudi Udo',
                    nationality: 'Mexican',
                    aging: [
                        {
                            name: '72 D',
                            riskRate: 'high',
                        },
                    ],
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
                    alerts: [
                        {
                            riskRate: 'Medium',
                            riskType: 'reload',
                        },
                    ],
                    profile: 'member-7.png',
                    customer: '3312353',
                    full_name: 'Linzell Bowman',
                    nationality: 'British',
                    aging: [
                        {
                            name: '10 D',
                            riskRate: 'low',
                        },
                    ],
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
                    alerts: [
                        {
                            riskRate: 'Medium',
                            riskType: 'rating',
                        },
                    ],
                    profile: 'member-8.png',
                    customer: '3282345',
                    full_name: 'Vương Mộng Nhi',
                    nationality: 'Chinese',
                    aging: [
                        {
                            name: '41 D',
                            riskRate: 'medium',
                        },
                    ],
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
                    alerts: [
                        {
                            riskRate: 'High',
                            riskType: 'flag',
                        },
                    ],
                    profile: 'member-9.png',
                    customer: '2321345',
                    full_name: 'Lew Silverton',
                    nationality: 'British',
                    aging: [
                        {
                            name: '8 D',
                            riskRate: 'low',
                        },
                    ],
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
                    alerts: [
                        {
                            riskRate: 'High',
                            riskType: 'rating',
                        },
                    ],
                    profile: 'member-10.png',
                    customer: '2223535',
                    full_name: 'Xun Guiying',
                    nationality: 'Chinese',
                    aging: [
                        {
                            name: '22 D',
                            riskRate: 'low',
                        },
                    ],
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

        // residence table
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
                    country_name: 'Srilanka',
                    country_residence: 240,
                    residence_percentage: '1.3%',
                },
                {
                    color: '#5172fa',
                    country_name: 'Pakistan',
                    country_residence: 110,
                    residence_percentage: '2.4%',
                },
                {
                    color: '#798bb0',
                    country_name: 'Afghanistan',
                    country_residence: 100,
                    residence_percentage: '2.3%',
                },
                {
                    color: '#b31493',
                    country_name: 'Iraq',
                    country_residence: 150,
                    residence_percentage: '2.9%',
                },
            ],
        },
    },
}
