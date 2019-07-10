<template>
    <div class="wrap-content customer-section">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-3">
                    <h2>Name Screening</h2>
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
        <div class="card customer-info screen-section">
            <customer-information
                :customerDetails="customerDetails"
            ></customer-information>
        </div>

        <div class="filter-section">
            <h2>Name Screening Hit Details</h2>
        </div>
        <alertTable :listItems="items" :listFields="fields"></alertTable>
    </div>
</template>
<script>
import customerInformation from '@/components/CustomerInfo.vue'
import alertTable from '@/components/tables/AlertTable.vue'
export default {
    components: {
        customerInformation,
        alertTable,
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
            ],

            fields: [
                {
                    key: 'customer',
                    label: 'FULL NAME',
                },
                {
                    key: 'full_name',
                    label: 'COUNTRY',
                },
                {
                    key: 'nationality',
                    label: 'Associates',
                },
                {
                    key: 'name_screening',
                    label: 'SANCTION',
                    thClass: 'person-icon',
                },
                {
                    key: 'documentation',
                    label: 'REP',
                    thClass: 'graph-icon',
                },
                {
                    key: 'risk_rating',
                    label: 'Enforcement',
                    thClass: 'graph-icon',
                },
                {
                    key: 'status',
                    label: 'Client Black List',
                    thClass: 'graph-icon',
                },
                {
                    key: 'sdfsd',
                    label: 'HIT determination',
                },
            ],
            items: [
                {
                    customer: 'Henk Fortuin',
                    full_name: 'United Kingdom',
                    nationality: 'N/A',
                    name_screening: 'pending',
                    documentation: 'inreview',
                    risk_rating: 'reject',
                    status: 'lock',
                },
                {
                    customer: 'Henk John Fortuin',
                    full_name: 'United Kingdom',
                    nationality: 'Robert W & 2 more',
                    name_screening: 'inreview',
                    documentation: 'pending',
                    risk_rating: 'pending',
                    status: 'review',
                },
                {
                    customer: 'Henk John Fortuin',
                    full_name: 'United Kingdom',
                    nationality: 'N/A',
                    name_screening: 'pending',
                    documentation: 'inreview',
                    risk_rating: 'reject',
                    status: 'lock',
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
