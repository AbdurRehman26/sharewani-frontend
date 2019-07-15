export default {
    systemLogsData: {
        logs: {
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
