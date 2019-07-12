<template>
    <div class="wrap-content customer-section">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-3">
                    <h2>Customer Profile</h2>
                </div>
                <div class="col-md-9 text-right">
                    <ul>
                        <li>
                            <b-button type="button" variant="link">
                                <i class="icon-caret-left"></i> Go
                                back</b-button
                            >
                        </li>
                        <li>
                            <b-button type="button" variant="primary"
                                >KYC STATUS REVIEW</b-button
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="card customer-info">
            <customer-information
                profilePic="image5.png"
                :customerDetails="customerDetails"
            ></customer-information>
        </div>
        <div class="filter-section sub-filter">
            <h2>KYC Status Summary</h2>
        </div>
        <div class="card customer-info kyc-status-section">
            <div class="row">
                <div class="col-md-12">
                    <h3>Name Screening</h3>
                </div>
                <div
                    class="col-md-6"
                    v-for="(list, index) in tags"
                    :key="index"
                >
                    <div class="row">
                        <div
                            class="col-md-6"
                            v-for="(description, index) in list.description"
                            :key="index"
                        >
                            <tags
                                :statusType="description.actions"
                                :tagIcon="description.icon"
                                :tagHeading="description.headings"
                            ></tags>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <div class="row">
                <div
                    class="col-md-6"
                    v-for="(list, index) in tagsList"
                    :key="index"
                >
                    <h3>{{ list.statusHeading }}</h3>
                    <div class="row">
                        <div
                            class="col-md-6"
                            v-for="(description, index) in list.description"
                            :key="index"
                        >
                            <tags
                                :statusType="description.actions"
                                :tagIcon="description.icon"
                                :tagHeading="description.headings"
                            ></tags>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import customerInformation from '@/components/CustomerInfo.vue'
import tags from '@/components/Tags.vue'
export default {
    components: {
        customerInformation,
        tags,
    },

    /*
    |--------------------------------------------------------------------------
    | Component > props
    |--------------------------------------------------------------------------
    */
    props: {
        /**
         * Value to determine the current compose mode which
         * varies between 'add' and 'edit'
         */
        mode: {
            type: String,
            default: 'add',
        },
    }, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
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
                            icon: 'icon-document',
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
        }
    }, // End of Component > data

    /*
    |--------------------------------------------------------------------------
    | Component > computed
    |--------------------------------------------------------------------------
    */
    computed: {}, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {}, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {}, // End of Component > mounted
} // End of export default
</script>
