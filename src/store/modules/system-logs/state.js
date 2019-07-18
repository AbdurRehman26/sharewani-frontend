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
    },
}
