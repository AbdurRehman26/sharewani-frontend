export default {
    systemUsersData: {
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
                    role_title: 'Maker',
                    associate_users: '5',
                    status: 'locked',
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
                    role_title: 'Checker',
                    associate_users: '3',
                    status: 'locked',
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
                    role_title: 'Approver',
                    associate_users: '2',
                    status: 'locked',
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
                    role_title: 'Relationship Manager',
                    associate_users: '3',
                    status: 'active',
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
                    role_title: 'System Analyst',
                    associate_users: '0',
                    status: 'archived',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Activate',
                        },
                    ],
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
                    branch_title: 'Pakistan',
                    short_code: 'PK',
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
                    branch_title: 'United Kingdom',
                    short_code: 'UK',
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
                    branch_title: 'United States of America',
                    short_code: 'USA',
                    status: 'Archived',
                    action: [
                        {
                            text: 'Modify',
                        },
                        {
                            text: 'Activate',
                        },
                    ],
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
