export default {
    profile: {
        screenCustomer: {
            customerDetails: [
                {
                    heading: 'Basic Information',
                    descriptions: [
                        {
                            title: 'Customer ID:',
                            detail: '210345',
                        },
                        {
                            title: 'First Name:',
                            detail: 'Henk',
                        },
                        {
                            title: 'Middle Name:',
                            detail: 'John',
                        },
                        {
                            title: 'Last Name:',
                            detail: 'Fortuin',
                        },
                        {
                            title: 'Gender:',
                            detail: 'Male',
                        },
                        {
                            title: 'Date of Birth:',
                            detail: 'June 24, 1984',
                        },
                        {
                            title: 'Nationality:',
                            detail: 'American',
                        },
                        {
                            title: 'Country of Residence:',
                            detail: 'United Kingdom',
                        },
                    ],
                },
            ],

            fields: [
                {
                    key: 'full_name',
                    label: 'FULL NAME',
                    sortable: true,
                },
                {
                    key: 'country',
                    label: 'COUNTRY',
                    sortable: true,
                },
                {
                    key: 'associates',
                    label: 'Associates',
                    sortable: true,
                },
                {
                    key: 'sanction',
                    label: 'SANCTION',
                    thClass: 'sanction-icon',
                    class: 'text-center',
                },
                {
                    key: 'rep',
                    label: 'REP',
                    thClass: 'rep-icon',
                    class: 'text-center',
                },
                {
                    key: 'enforcement',
                    label: 'Enforcement',
                    thClass: 'enforcement-icon',
                    class: 'text-center',
                },
                {
                    key: 'blackList',
                    label: 'Client Black List',
                    thClass: 'blacklist-icon',
                    class: 'text-center',
                },
                {
                    key: 'hit',
                    label: 'HIT determination',
                    sortable: true,
                },
            ],
            items: [
                {
                    full_name: 'Henk Fortuin',
                    country: 'United Kingdom',
                    associates: 'N/A',
                    sanction: [
                        {
                            cssClass: 'icon-cross-with-circle danger',
                        },
                    ],
                    rep: [
                        {
                            cssClass: 'icon-tick-with-circle pending',
                        },
                    ],
                    enforcement: [
                        {
                            cssClass: 'icon-tick-with-circle pending',
                        },
                    ],
                    blackList: [
                        {
                            cssClass: 'icon-tick-with-circle pending',
                        },
                    ],

                    hit: [
                        {
                            icon: 'icon-check',
                            label: 'Not Hit',
                            cssClass: 'approved',
                        },
                    ],
                },
                {
                    full_name: 'Henk John Fortuin',
                    country: 'United Kingdom',
                    associates: 'Robert W & 2 more',
                    sanction: [
                        {
                            cssClass: 'icon-cross-with-circle danger',
                        },
                    ],
                    rep: [
                        {
                            cssClass: 'icon-cross-with-circle',
                        },
                    ],
                    enforcement: [
                        {
                            cssClass: 'icon-tick-with-circle pending',
                        },
                    ],
                    blackList: [
                        {
                            cssClass: 'icon-tick-with-circle pending',
                        },
                    ],

                    hit: [
                        {
                            icon: 'icon-wrong',
                            label: 'Hit',
                            cssClass: 'rejected',
                        },
                    ],
                },
                {
                    full_name: 'Henk John Fortuin',
                    country: 'United Kingdom',
                    associates: 'N/A',
                    sanction: [
                        {
                            cssClass: 'icon-loading pending circle-area',
                        },
                    ],
                    rep: [
                        {
                            cssClass: 'icon-loading pending circle-area',
                        },
                    ],
                    enforcement: [
                        {
                            cssClass: 'icon-loading pending circle-area',
                        },
                    ],
                    blackList: [
                        {
                            cssClass: 'icon-loading pending circle-area',
                        },
                    ],
                    hit: [
                        {
                            icon: 'icon-loading',
                            label: 'Pending',
                            cssClass: 'pending',
                        },
                    ],
                },
            ],
        },
        kycData: {
            customerDetails: [
                {
                    heading: 'Basic Information',
                    descriptions: [
                        {
                            title: 'Customer ID:',
                            detail: '210345',
                        },
                        {
                            title: 'First Name:',
                            detail: 'Henk',
                        },
                        {
                            title: 'Middle Name:',
                            detail: 'John',
                        },
                        {
                            title: 'Last Name:',
                            detail: 'Fortuin',
                        },
                        {
                            title: 'Gender:',
                            detail: 'Male',
                        },
                        {
                            title: 'Date of Birth:',
                            detail: 'June 24, 1984',
                        },
                        {
                            title: 'Nationality:',
                            detail: 'American',
                        },
                        {
                            title: 'Country of Residence:',
                            detail: 'United Kingdom',
                        },
                    ],
                },
            ],

            fields: [
                {
                    key: 'risk_factor',
                    label: 'RISK FACTOR',
                    sortable: true,
                },
                {
                    key: 'score',
                    label: 'SCORE',
                    class: 'text-center',
                    sortable: true,
                },
                {
                    key: 'risk_level',
                    label: 'Risk Level',
                    class: 'text-center',
                    sortable: true,
                },
            ],
            items: [
                {
                    risk_factor: 'Address in High Risk Country',
                    score: '7.5',
                    risk_level: [
                        {
                            icon: 'icon-medium-risk',
                            label: 'Medium Risk',
                            cssClass: 'medium-risk',
                        },
                    ],
                },
                {
                    risk_factor: 'Nationality',
                    score: '5',
                    risk_level: [
                        {
                            icon: 'icon-medium-risk',
                            label: 'Medium Risk',
                            cssClass: 'medium-risk',
                        },
                    ],
                },
                {
                    risk_factor: 'Work Status',
                    score: '5',
                    risk_level: [
                        {
                            icon: 'icon-medium-risk',
                            label: 'Medium Risk',
                            cssClass: 'medium-risk',
                        },
                    ],
                },
                {
                    risk_factor: 'Length of Relationship',
                    score: '5',
                    risk_level: [
                        {
                            icon: 'icon-high-risk',
                            label: 'High Risk',
                            cssClass: 'high-risk',
                        },
                    ],
                },
                {
                    risk_factor: 'Channel Type',
                    score: '5',
                    risk_level: [
                        {
                            icon: 'icon-high-risk',
                            label: 'High Risk',
                            cssClass: 'high-risk',
                        },
                    ],
                },
                {
                    risk_factor: 'Product',
                    score: '10',
                    risk_level: [
                        {
                            icon: 'icon-high-risk',
                            label: 'High Risk',
                            cssClass: 'high-risk',
                        },
                    ],
                },
                {
                    risk_factor: 'PEP Hit',
                    score: '15',
                    risk_level: [
                        {
                            icon: 'icon-high-risk',
                            label: 'High Risk',
                            cssClass: 'high-risk',
                        },
                    ],
                },
                {
                    risk_factor: 'Enforcement Hit',
                    score: '0',
                    risk_level: [
                        {
                            icon: 'icon-low-risk',
                            label: 'Low Risk',
                            cssClass: 'low-risk',
                        },
                    ],
                },
                {
                    risk_factor: 'Client Blacklist Hit',
                    score: '0',
                    risk_level: [
                        {
                            icon: 'icon-low-risk',
                            label: 'Low Risk',
                            cssClass: 'low-risk',
                        },
                    ],
                },
                {
                    risk_factor: 'Overall',
                    score: '52.5',
                    risk_level: [
                        {
                            icon: 'icon-medium-risk',
                            label: 'Medium Risk',
                            cssClass: 'medium-risk',
                        },
                    ],
                },
            ],

            overrideFields: [
                {
                    key: 'risk_factor_override',
                    label: 'RISK FACTOR OVERRIDE',
                    sortable: true,
                },
                {
                    key: 'override_to',
                    label: 'Override To',
                    sortable: true,
                },
                {
                    key: 'risk_level',
                    label: 'Risk Level',
                    class: 'text-center',
                    sortable: true,
                },
            ],

            overrideList: [
                {
                    risk_factor_override: 'Sanction Hit',
                    override_to: 'Sanctioned',
                    risk_level: [
                        {
                            icon: 'icon-high-risk',
                            label: 'High Risk',
                            cssClass: 'high-risk',
                        },
                    ],
                },
                {
                    risk_factor_override: 'Document Verification',
                    override_to: 'High',
                    risk_level: [
                        {
                            icon: 'icon-low-risk',
                            label: 'Low Risk',
                            cssClass: 'low-risk',
                        },
                    ],
                },
            ],
        },

        customerInformation: {
            customerDetails: [
                {
                    heading: 'Basic Information',
                    descriptions: [
                        {
                            title: 'Customer ID:',
                            detail: '210345',
                        },
                        {
                            title: 'First Name:',
                            detail: 'Henk',
                        },
                        {
                            title: 'Middle Name:',
                            detail: 'John',
                        },
                        {
                            title: 'Last Name:',
                            detail: 'Fortuin',
                        },
                        {
                            title: 'Gender:',
                            detail: 'Male',
                        },
                        {
                            title: 'Date of Birth:',
                            detail: 'June 24, 1984',
                        },
                        {
                            title: 'Nationality:',
                            detail: 'American',
                        },
                        {
                            title: 'Country of Residence:',
                            detail: 'United Kingdom',
                        },
                    ],
                },
                {
                    heading: 'Contact Information',
                    descriptions: [
                        {
                            title: 'Address:',
                            detail: '89 St. John’s Road',
                        },
                        {
                            title: 'City:',
                            detail: 'Bristol',
                        },
                        {
                            title: 'State:',
                            detail: 'N/A',
                        },
                        {
                            title: 'Country:',
                            detail: 'United Kingdom',
                        },
                        {
                            title: 'Postal Code:',
                            detail: 'BS96 5IS',
                        },
                        {
                            title: 'Phone Number:',
                            detail: '+44 7700 900077',
                        },
                        {
                            title: 'Email Address:',
                            detail: 'henk.fortuin@outlook.com',
                        },
                    ],
                },
                {
                    heading: 'Occupation',
                    descriptions: [
                        {
                            title: 'Work Type:',
                            detail: 'Self Employed',
                        },
                        {
                            title: 'Industry:',
                            detail: 'Automotive Industry',
                        },
                        {
                            title: 'Tax ID:',
                            detail: '234-92934993-9',
                        },
                    ],
                },
                {
                    heading: 'ID Document',
                    descriptions: [
                        {
                            title: 'Document Type:',
                            detail: 'National Identity Card',
                        },
                        {
                            title: 'ID Number:',
                            detail: 'NL 60 76 93 B',
                        },
                        {
                            title: 'Expiry Date:',
                            detail: 'April 20, 2022',
                        },
                    ],
                },

                {
                    heading: 'Account Information',
                    descriptions: [
                        {
                            title: 'Purpose of action :',
                            detail: 'Short Term Investment',
                        },
                        {
                            title: 'Planned Investment:',
                            detail: '£ 500 to £ 1,000 (per month)',
                        },
                        {
                            title: 'System Holding:',
                            detail: 'Pound',
                        },
                        {
                            title: 'Account Open Date:',
                            detail: 'June 10, 2019',
                        },
                        {
                            title: 'Channel Mode:',
                            detail: 'Face to Face',
                        },
                        {
                            title: 'Product Type:',
                            detail: 'Saving Account',
                        },
                        {
                            title: 'Wallet ID:',
                            detail: '18238129399',
                        },
                    ],
                },
                {
                    heading: 'On-Going Due Diligence',
                    descriptions: [
                        {
                            title: 'Last Review:',
                            detail: 'N/A',
                        },
                        {
                            title: 'Next Review:',
                            detail: 'Now',
                        },
                        {
                            title: 'Expiry Date:',
                            detail: 'April 20, 2022',
                        },
                    ],
                },
            ],

            tags: [
                {
                    description: [
                        {
                            headings: 'Sanction Hit',
                            icon: 'icon-sanction',
                            actions: 'Rejected',
                        },
                        {
                            headings: 'PEP Hit',
                            icon: 'icon-pep',
                            actions: 'Rejected',
                        },
                    ],
                },
                {
                    description: [
                        {
                            headings: 'Enforcement Hit',
                            icon: 'icon-enforcement',
                            actions: 'Active',
                        },
                        {
                            headings: 'Client Black List Hit',
                            icon: 'icon-blacklist',
                            actions: 'Active',
                        },
                    ],
                },
            ],

            tagsList: [
                {
                    statusHeading: 'Documents Verification',
                    description: [
                        {
                            headings: 'Document Matched',
                            icon: 'icon-documentation',
                            actions: 'Active',
                        },
                    ],
                },
                {
                    statusHeading: 'Risk Rating',
                    description: [
                        {
                            headings: 'Sanctioned',
                            icon: 'icon-graph',
                            actions: 'Rejected',
                        },
                    ],
                },
            ],
        },

        documentVerification: {
            customerDetails: [
                {
                    heading: 'Basic Information',
                    descriptions: [
                        {
                            title: 'Customer ID:',
                            detail: '210345',
                        },
                        {
                            title: 'First Name:',
                            detail: 'Henk',
                        },
                        {
                            title: 'Middle Name:',
                            detail: 'John',
                        },
                        {
                            title: 'Last Name:',
                            detail: 'Fortuin',
                        },
                        {
                            title: 'Gender:',
                            detail: 'Male',
                        },
                        {
                            title: 'Date of Birth:',
                            detail: 'June 24, 1984',
                        },
                        {
                            title: 'Nationality:',
                            detail: 'American',
                        },
                        {
                            title: 'Country of Residence:',
                            detail: 'United Kingdom',
                        },
                    ],
                },
            ],

            vacationDetails: [
                {
                    heading: 'Liveness Detection',
                    descriptions: [
                        {
                            title: 'Verification Timestamp:',
                            detail: 'June 1, 2019 10:45 am',
                        },
                        {
                            title: 'Score:',
                            detail: '78.5',
                        },
                        {
                            title: 'Result:',
                            detail: 'Matched',
                        },
                        {
                            title: 'Is Manually Overwrited:',
                            detail: 'No',
                        },
                        {
                            title: 'Manually Overwrite Result',
                            detail: '',
                        },
                    ],
                },
                {
                    heading: 'Face Comparision',
                    descriptions: [
                        {
                            title: 'Verification Timestamp:',
                            detail: 'June 1, 2019 10:52 am',
                        },
                        {
                            title: 'Score:',
                            detail: '54.5',
                        },
                        {
                            title: 'Result:',
                            detail: 'Not Matched',
                        },
                        {
                            title: 'Is Manually Overwrited:',
                            detail:
                                'Yes, overwrited by Greg Eliss on June 2, 2019',
                        },
                        {
                            title: 'Manually Overwrite Result',
                            detail: '',
                        },
                    ],
                },
            ],

            uploadDetails: [
                {
                    image: 'bill.png',
                    thumbnail: 'thumbnail-jpg.png',
                    title: 'Utility Bill',
                    uploadDate: 'Uploaded June 1, 2019',
                },
                {
                    image: 'nic.png',
                    thumbnail: 'thumbnail-jpg.png',
                    title: 'ID Card',
                    uploadDate: 'Uploaded June 1, 2019',
                },
                {
                    image: 'image5.png',
                    thumbnail: 'thumbnail-jpg.png',
                    title: 'Selfie From Video',
                    uploadDate: 'Uploaded June 1, 2019',
                },
                {
                    image: 'video.png',
                    thumbnail: 'thumbnail-mp4.png',
                    title: 'Recorded Video',
                    uploadDate: 'Uploaded June 1, 2019',
                },
            ],
        },

        activityTimeline: {
            customerDetails: [
                {
                    heading: 'Basic Information',
                    descriptions: [
                        {
                            title: 'Customer ID:',
                            detail: '210345',
                        },
                        {
                            title: 'First Name:',
                            detail: 'Henk',
                        },
                        {
                            title: 'Middle Name:',
                            detail: 'John',
                        },
                        {
                            title: 'Last Name:',
                            detail: 'Fortuin',
                        },
                        {
                            title: 'Gender:',
                            detail: 'Male',
                        },
                        {
                            title: 'Date of Birth:',
                            detail: 'June 24, 1984',
                        },
                        {
                            title: 'Nationality:',
                            detail: 'American',
                        },
                        {
                            title: 'Country of Residence:',
                            detail: 'United Kingdom',
                        },
                    ],
                },
            ],

            yearDetails: [
                {
                    days: 'Today',
                    describe: [
                        {
                            image: 'member-4.png',
                            name: 'Jacqueline Asong',
                            subHeading: 'Approver',
                            date: 'July 4, 2019 10:45 a.m.',
                            details:
                                'Submitted KYC Review Status and changed KYC Status to Approved with the following comment, \n \nSubmitted KYC Review Status and changed KYC Status to Approved with the following comment,',
                        },
                        {
                            image: 'member-4.png',
                            name: 'Jacqueline Asong',
                            subHeading: 'Approver',
                            date: 'July 4, 2019 10:15 a.m.',
                            details: 'Initiated KYC Review process related to,',
                            blockTags: {
                                headings: 'Sanctioned',
                                icon: 'icon-graph',
                                actions: 'Rejected',
                            },
                        },
                    ],
                },
                {
                    days: 'June 3, 2019',
                    describe: [
                        {
                            image: 'idenfo.png',
                            name: 'IDENFO',
                            subHeading: 'System Activity',
                            date: 'July 3, 2019 12:10 p.m.',
                            details:
                                'Generated system alert related to following factor,',
                            blockTags: {
                                headings: 'Sanctioned',
                                icon: 'icon-graph',
                                actions: 'Rejected',
                            },
                        },
                    ],
                },
                {
                    days: 'June 1, 2019',
                    describe: [
                        {
                            image: 'idenfo.png',
                            name: 'IDENFO',
                            subHeading: 'System Activity',
                            date: 'July 1, 2019 11:10 a.m.',
                            details:
                                'Completed liveness detection process with the Matched result.',
                        },
                        {
                            image: 'idenfo.png',
                            name: 'IDENFO',
                            subHeading: 'System Activity',
                            date: 'July 1, 2019 11:10 a.m.',
                            details:
                                'Completed liveness detection process with the Matched result.',
                        },
                        {
                            image: 'member-5.png',
                            name: 'Cvita Doleschall',
                            subHeading: 'Relationship Manager',
                            date: 'July 1, 2019 11:05 a.m.',
                            details:
                                'Registered new customer in to the system and uploaded required documents. ',
                        },
                    ],
                },
            ],
        },
    },
}
