export default {
    systemUsersData: {
        users: {
            fields: [
                {
                    key: 'profile',
                    label: '',
                    class: 'profile-absolute',
                },
                {
                    key: 'user',
                    label: 'User',
                    sortable: true,
                },
                {
                    key: 'role',
                    label: 'Role',
                    sortable: true,
                },
                {
                    key: 'date_segments',
                    label: 'Date Segments',
                    sortable: true,
                    class: 'text-center',
                },
                {
                    key: 'join_date',
                    label: 'Join Date',
                    sortable: true,
                },
                {
                    key: 'status',
                    label: 'Status',
                    sortable: true,
                    class: 'text-center status-absolute-pos',
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
                    status: [
                        {
                            cssClass: 'approved',
                            icon: 'icon-check',
                            label: 'Active',
                        },
                    ],
                    action: 'active',
                },
                {
                    profile: 'member-2.png',
                    user: 'Regina Pollastro',
                    role: 'Maker',
                    date_segments: 'PK',
                    join_date: 'Jun 10, 2019 6:35 p.m.',
                    status: [
                        {
                            cssClass: 'approved',
                            icon: 'icon-check',
                            label: 'Active',
                        },
                    ],
                    action: 'active',
                },
                {
                    profile: 'member-3.png',
                    user: 'Boris Ukhtomsky',
                    role: 'Checker',
                    date_segments: 'PK',
                    join_date: 'Jun 10, 2019 6:35 p.m.',
                    status: [
                        {
                            cssClass: 'pending',
                            icon: 'icon-loading',
                            label: 'Pending',
                        },
                    ],
                    action: 'active',
                },
                {
                    profile: 'member-4.png',
                    user: 'Kimmy McIlmorie',
                    role: 'Maker',
                    date_segments: 'PK',
                    join_date: 'Jun 9, 2019 6:35 p.m.',
                    status: [
                        {
                            cssClass: 'approved',
                            icon: 'icon-check',
                            label: 'Active',
                        },
                    ],
                    action: 'active',
                },
                {
                    profile: 'member-5.png',
                    user: 'Noell Blue',
                    role: 'Checker',
                    date_segments: 'UAE',
                    join_date: 'Jun 9, 2019 6:35 p.m.',
                    status: [
                        {
                            cssClass: 'approved',
                            icon: 'icon-check',
                            label: 'Active',
                        },
                    ],
                    action: 'active',
                },
                {
                    profile: 'member-6.png',
                    user: 'Qin Shi',
                    role: 'Maker',
                    date_segments: 'UAE',
                    join_date: 'Jun 9, 2019 6:35 p.m.',
                    status: [
                        {
                            cssClass: 'approved',
                            icon: 'icon-check',
                            label: 'Active',
                        },
                    ],
                    action: 'active',
                },
                {
                    profile: 'member-7.png',
                    user: 'Julian Gruber',
                    role: 'Maker',
                    date_segments: 'UAE',
                    join_date: 'Jun 8, 2019 6:35 p.m.',
                    status: [
                        {
                            cssClass: 'approved',
                            icon: 'icon-check',
                            label: 'Active',
                        },
                    ],
                    action: 'active',
                },
                {
                    profile: 'member-8.png',
                    user: 'Mathijn Agter',
                    role: 'Approver',
                    date_segments: 'UK',
                    join_date: 'Jun 8, 2019 6:35 p.m.',
                    status: [
                        {
                            cssClass: 'approved',
                            icon: 'icon-check',
                            label: 'Active',
                        },
                    ],
                    action: 'active',
                },
                {
                    profile: 'member-9.png',
                    user: 'Shadrias Pearson',
                    role: 'Relationship Manager',
                    date_segments: 'UK',
                    join_date: 'Jun 9, 2019 6:35 p.m.',
                    status: [
                        {
                            cssClass: 'approved',
                            icon: 'icon-check',
                            label: 'Active',
                        },
                    ],
                    action: 'active',
                },
                {
                    profile: 'member-10.png',
                    user: 'Boris Ukhtomsky',
                    role: 'Maker',
                    date_segments: 'PK',
                    join_date: 'Jun 7, 2019 6:35 p.m.',
                    status: [
                        {
                            cssClass: 'rejected',
                            icon: 'icon-wrong',
                            label: 'Archived',
                        },
                    ],
                    action: 'activate',
                },
            ],
        },
        roles: {
            fields: [
                {
                    key: 'role_title',
                    label: 'Role Title',
                    sortable: true,
                },
                {
                    key: 'associate_users',
                    label: 'Associate Users',
                    class: 'text-center',
                    sortable: true,
                },
                {
                    key: 'status',
                    label: 'Status',
                    class: 'text-center status-absolute-pos',
                    sortable: true,
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
                    status: [
                        {
                            cssClass: 'locked',
                            icon: 'icon-change-password',
                            label: 'Locked',
                        },
                    ],
                    action: 'active',
                },
                {
                    role_title: 'Maker',
                    associate_users: '5',
                    status: [
                        {
                            cssClass: 'locked',
                            icon: 'icon-change-password',
                            label: 'Locked',
                        },
                    ],
                    action: 'active',
                },
                {
                    role_title: 'Checker',
                    associate_users: '3',
                    status: [
                        {
                            cssClass: 'locked',
                            icon: 'icon-change-password',
                            label: 'Locked',
                        },
                    ],
                    action: 'active',
                },
                {
                    role_title: 'Approver',
                    associate_users: '2',
                    status: [
                        {
                            cssClass: 'locked',
                            icon: 'icon-change-password',
                            label: 'Locked',
                        },
                    ],
                    action: 'active',
                },
                {
                    role_title: 'Relationship Manager',
                    associate_users: '3',
                    status: [
                        {
                            cssClass: 'approved',
                            icon: 'icon-check',
                            label: 'Active',
                        },
                    ],
                    action: 'active',
                },
                {
                    role_title: 'System Analyst',
                    associate_users: '0',
                    status: [
                        {
                            cssClass: 'rejected',
                            icon: 'icon-trash',
                            label: 'Archived',
                        },
                    ],
                    action: 'archive',
                },
            ],
        },
        segments: {
            fields: [
                {
                    key: 'branch_title',
                    label: 'Data Segment Title',
                    sortable: true,
                },
                {
                    key: 'short_code',
                    label: 'Short Code',
                    class: 'text-center',
                    sortable: true,
                },
                {
                    key: 'status',
                    label: 'Status',
                    sortable: true,
                    class: 'text-center status-absolute-pos',
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
                    status: [
                        {
                            cssClass: 'approved',
                            icon: 'icon-check',
                            label: 'Active',
                        },
                    ],
                    action: 'active',
                },
                {
                    branch_title: 'Pakistan',
                    short_code: 'PK',
                    status: [
                        {
                            cssClass: 'approved',
                            icon: 'icon-check',
                            label: 'Active',
                        },
                    ],
                    action: 'active',
                },
                {
                    branch_title: 'United Kingdom',
                    short_code: 'UK',
                    status: [
                        {
                            cssClass: 'approved',
                            icon: 'icon-check',
                            label: 'Active',
                        },
                    ],
                    action: 'active',
                },
                {
                    branch_title: 'United States of America',
                    short_code: 'USA',
                    status: [
                        {
                            cssClass: 'rejected',
                            icon: 'icon-wrong',
                            label: 'Archived',
                        },
                    ],
                    action: 'archive',
                },
            ],
        },
        applications: {
            fields: [
                {
                    key: 'application_title',
                    label: 'Application Title',
                    sortable: true,
                },
                {
                    key: 'branches',
                    label: 'Data Segments',
                    sortable: true,
                },
                {
                    key: 'status',
                    label: 'Status',
                    sortable: true,
                    class: 'text-center status-absolute-pos',
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
                    status: [
                        {
                            cssClass: 'approved',
                            icon: 'icon-check',
                            label: 'Active',
                        },
                    ],
                    action: 'active',
                },
                {
                    application_title: 'Financial Reporting System',
                    branches: 'PK',
                    status: [
                        {
                            cssClass: 'approved',
                            icon: 'icon-check',
                            label: 'Active',
                        },
                    ],
                    action: 'active',
                },
                {
                    application_title: 'Banking CRM',
                    branches: 'PK, UAE, UK',
                    status: [
                        {
                            cssClass: 'approved',
                            icon: 'icon-check',
                            label: 'Active',
                        },
                    ],
                    action: 'active',
                },
                {
                    application_title: 'Testing App',
                    branches: 'USA',
                    status: [
                        {
                            cssClass: 'rejected',
                            icon: 'icon-wrong',
                            label: 'Archived',
                        },
                    ],
                    action: 'archive',
                },
            ],
        },
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
    },
}
