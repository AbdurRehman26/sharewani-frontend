<template>
    <div class="wrap-content doc-verify-section">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-6">
                    <h2>KYC Risk Rating</h2>
                </div>
                <div class="col-md-6 text-right">
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
                profilePic="image5.png"
                :customerDetails="customerDetails"
            ></customer-information>
        </div>
        <div class="filter-section sub-filter">
            <h2>Risk Factor Matrix</h2>
        </div>
        <div class="table-section risk-factor-table">
            <b-table :items="items" :fields="fields">
                <template slot="risk_level" slot-scope="data">
                    <div
                        class="pending status-view"
                        v-if="data.value == 'pending'"
                    >
                        <i class="icon-medium-risk"></i>
                        <span>Medium Risk</span>
                    </div>
                    <div
                        class="approved status-view"
                        v-if="data.value == 'approved'"
                    >
                        <i class="icon-low-risk"></i> <span>Low Risk</span>
                    </div>
                    <div
                        class="rejected status-view"
                        v-if="data.value == 'rejected'"
                    >
                        <i class="icon-high-risk"></i> <span>High Risk</span>
                    </div>
                </template>
            </b-table>
        </div>

        <div class="table-section">
            <b-table :items="overrideList" :fields="overrideFields">
                <template slot="risk_level" slot-scope="data">
                    <div
                        class="pending status-view"
                        v-if="data.value == 'pending'"
                    >
                        <i class="icon-medium-risk"></i>
                        <span>Medium Risk</span>
                    </div>
                    <div
                        class="approved status-view"
                        v-if="data.value == 'approved'"
                    >
                        <i class="icon-low-risk"></i> <span>Low Risk</span>
                    </div>
                    <div
                        class="rejected status-view"
                        v-if="data.value == 'rejected'"
                    >
                        <i class="icon-high-risk"></i> <span>High Risk</span>
                    </div>
                </template>
            </b-table>
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
            ],

            fields: [
                {
                    key: 'risk_factor',
                    label: 'RISK FACTOR',
                },
                {
                    key: 'score',
                    label: 'SCORE',
                    class: 'text-center',
                },
                {
                    key: 'risk_level',
                    label: 'Risk Level',
                    class: 'text-center',
                },
            ],
            items: [
                {
                    risk_factor: 'Address in High Risk Country',
                    score: '7.5',
                    risk_level: 'pending',
                },
                {
                    risk_factor: 'Nationality',
                    score: '5',
                    risk_level: 'pending',
                },
                {
                    risk_factor: 'Work Status',
                    score: '5',
                    risk_level: 'pending',
                },
                {
                    risk_factor: 'Length of Relationship',
                    score: '5',
                    risk_level: 'rejected',
                },
                {
                    risk_factor: 'Channel Type',
                    score: '5',
                    risk_level: 'rejected',
                },
                {
                    risk_factor: 'Product',
                    score: '10',
                    risk_level: 'rejected',
                },
                {
                    risk_factor: 'PEP Hit',
                    score: '15',
                    risk_level: 'rejected',
                },
                {
                    risk_factor: 'Enforcement Hit',
                    score: '0',
                    risk_level: 'approved',
                },
                {
                    risk_factor: 'Client Blacklist Hit',
                    score: '0',
                    risk_level: 'approved',
                },
                {
                    risk_factor: 'Overall',
                    score: '52.5',
                    risk_level: 'pending',
                },
            ],

            overrideFields: [
                {
                    key: 'risk_factor_override',
                    label: 'RISK FACTOR OVERRIDE',
                },
                {
                    key: 'override_to',
                    label: 'Override To',
                },
                {
                    key: 'risk_level',
                    label: 'Risk Level',
                    class: 'text-center',
                },
            ],

            overrideList: [
                {
                    risk_factor_override: 'Sanction Hit',
                    override_to: 'Sanctioned',
                    risk_level: 'rejected',
                },
                {
                    risk_factor_override: 'Document Verification',
                    override_to: 'High',
                    risk_level: 'approved',
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
