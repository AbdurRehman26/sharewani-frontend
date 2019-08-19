export default {
    systemLogsData: {
        logs: {
            fields: [
                {
                    key: 'user',
                    label: 'User',
                    sortable: true,
                },
                {
                    key: 'module',
                    label: 'Module',
                    sortable: true,
                },
                {
                    key: 'action_type',
                    label: 'Action Type',
                    sortable: true,
                },
                {
                    key: 'action',
                    label: 'Action',
                    sortable: true,
                },
                {
                    key: 'time_stamp',
                    label: 'Timestamp',
                    sortable: true,
                },
            ],
            items: [
                {
                    user: 'Ishaaq El Vohra',
                    module: 'Customer Registration',
                    action_type: 'Create New Customer',
                    action: 'Added customer with the ID 218357',
                    time_stamp: 'Wed, Oct 17, 2018 01:08:15',
                },
                {
                    user: 'Lucas Pacheco',
                    module: 'KYC Status Review',
                    action_type: 'Initiate Review',
                    action: 'Initiated review of customer ID 218357',
                    time_stamp: 'Tue, Oct 16, 2018 03:17:47',
                },
                {
                    user: 'Sofie Hubert',
                    module: 'Authentication',
                    action_type: 'Login',
                    action: 'Alexa Tonorio logged In',
                    time_stamp: 'Sat, Oct 13, 2018 05:04:16',
                },
                {
                    user: 'Ingo Schimpff',
                    module: 'Configuration',
                    action_type: 'Modify Work Type',
                    action: 'Modified Unemployed rating to Medium',
                    time_stamp: 'Sat, Oct 13, 2018 11:00:43',
                },
                {
                    user: 'Alexa Tenorio',
                    module: 'System User',
                    action_type: 'Submitted Review',
                    action: 'Submitted review on customer ID 218357',
                    time_stamp: 'Thu, Oct 11, 2018 02:34:03',
                },
                {
                    user: 'Nayara Delafuente',
                    module: 'Configuration',
                    action_type: 'Modify Registration Form',
                    action: 'Modified customer registration form',
                    time_stamp: 'Mon, Oct 01, 2018 11:35:49',
                },
                {
                    user: 'María Paula Morterero',
                    module: 'Customer Registration',
                    action_type: 'Create New Customer',
                    action: 'Added customer with the ID 218356',
                    time_stamp: 'Fri, Sep 28, 2018 07:35:29',
                },
                {
                    user: 'Idenfo System',
                    module: 'KYC Status Review',
                    action_type: 'New Alert',
                    action: 'Generated new alert related ID 218357',
                    time_stamp: 'Wed, Sep 19, 2018 05:37:24',
                },
                {
                    user: 'Maeng Yeo-Jin',
                    module: 'Configuration',
                    action_type: 'Create New Industry',
                    action: 'Added new Construction industry',
                    time_stamp: 'Fri, Sep 14, 2018 03:45:28',
                },
                {
                    user: 'Sammy Lawson',
                    module: 'Customer Registration',
                    action_type: 'Create New Customer',
                    action: 'Added customer with the ID 218355',
                    time_stamp: 'Thu, Sep 13, 2018 02:14:11',
                },
            ],
        },
        //system logs page
        totalActions: {
            type: 'serial',
            categoryField: 'category',
            dataDateFormat: 'YYYY-MM-DD',
            pathToImages: 'https://www.amcharts.com/lib/3/images/',
            fontSize: 14,
            colors: [
                '#662D91',
                '#ff7217',
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
            color: '#1B1B1E',
            fontFamily: 'Arial',
            theme: 'default',
            autoMargins: true,
            startDuration: 1,
            categoryAxis: {
                gridPosition: 'start',
                parseDates: true,
                gridColor: '#F2F2F6',
            },
            chartCursor: {
                enabled: true,
                categoryBalloonDateFormat: 'DD MMM YYYY',
                bulletSize: 6,
                cursorColor: '#B35FA5',
            },
            chartScrollbar: {
                enabled: false,
                backgroundColor: '#E8E8EF',
                graphFillColor: '#D7D7E2',
                graphLineColor: '#d7d7e2',
                selectedBackgroundColor: '#F2F2F6',
                tabIndex: 0,
            },
            trendLines: [],
            graphs: [
                {
                    fillAlphas: 1,
                    id: 'AmGraph-1',
                    title: 'Total actions',
                    type: 'column',
                    valueField: 'column-1',
                    balloonText: '[[title]]: [[value]]',
                },
            ],
            guides: [],
            valueAxes: [
                {
                    id: 'ValueAxis-1',
                    gridColor: '#E8E8EF',
                    gridAlpha: 1,
                    title: 'Total Actions',
                },
            ],
            allLabels: [],
            balloon: {
                horizontalPadding: 6,
                offsetX: 5,
                verticalPadding: 6,
                fillAlphas: 1,
            },
            titles: [],
            dataProvider: [
                {
                    category: '2019-07-27',
                    'column-1': 13,
                },
                {
                    category: '2019-07-28',
                    'column-1': 11,
                },
                {
                    category: '2019-07-29',
                    'column-1': 15,
                },
                {
                    category: '2019-07-30',
                    'column-1': 16,
                },
                {
                    category: '2019-07-31',
                    'column-1': 18,
                },
                {
                    category: '2019-08-01',
                    'column-1': 13,
                },
                {
                    category: '2019-08-02',
                    'column-1': 22,
                },
                {
                    category: '2019-08-03',
                    'column-1': 23,
                },
                {
                    category: '2019-08-04',
                    'column-1': 20,
                },
                {
                    category: '2019-08-05',
                    'column-1': 17,
                },
                {
                    category: '2019-08-06',
                    'column-1': 16,
                },
                {
                    category: '2019-08-07',
                    'column-1': 18,
                },
                {
                    category: '2019-08-08',
                    'column-1': 21,
                },
                {
                    category: '2019-08-09',
                    'column-1': 26,
                },
                {
                    category: '2019-08-10',
                    'column-1': 24,
                },
                {
                    category: '2019-08-11',
                    'column-1': 29,
                },
                {
                    category: '2019-08-12',
                    'column-1': 32,
                },
                {
                    category: '2019-08-13',
                    'column-1': 18,
                },
                {
                    category: '2019-08-14',
                    'column-1': 24,
                },
                {
                    category: '2019-08-15',
                    'column-1': 22,
                },
                {
                    category: '2019-08-16',
                    'column-1': 18,
                },
                {
                    category: '2019-08-17',
                    'column-1': 19,
                },
                {
                    category: '2019-08-18',
                    'column-1': 14,
                },
                {
                    category: '2019-08-19',
                    'column-1': 15,
                },
                {
                    category: '2019-08-20',
                    'column-1': 12,
                },
                {
                    category: '2019-08-21',
                    'column-1': 8,
                },
                {
                    category: '2019-08-22',
                    'column-1': 9,
                },
                {
                    category: '2019-08-23',
                    'column-1': 8,
                },
                {
                    category: '2019-08-24',
                    'column-1': 7,
                },
                {
                    category: '2019-08-25',
                    'column-1': 5,
                },
                {
                    category: '2019-08-26',
                    'column-1': 11,
                },
                {
                    category: '2019-08-27',
                    'column-1': 13,
                },
            ],
        },
    },
}
