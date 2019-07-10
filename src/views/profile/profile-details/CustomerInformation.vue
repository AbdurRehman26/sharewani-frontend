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
                :customerDetails="customerDetails"
            ></customer-information>
        </div>
        <br /><br />
        <h2>KYC Status Summary</h2>
        <br />
        <div class="card customer-info">
            <h4>Name Screening</h4>
        </div>
    </div>
</template>
<script>
import customerInformation from '@/components/CustomerInfo.vue'
export default {
    components: {
        customerInformation,
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
