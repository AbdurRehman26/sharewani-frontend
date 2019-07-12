<template>
    <div class="wrap-content activity-timeline-section">
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
                :customerDetails="customerDetails"
            ></customer-information>
        </div>

        <div class="row">
            <div class="col-md-12">
                <ul class="timeline">
                    <li v-for="(list, index) in yearDetails" :key="index">
                        <div
                            class="row timeline-movement timeline-movement-top"
                        >
                            <div
                                class="timeline-badge timeline-future-movement"
                            >
                                <h4>{{ list.days }}</h4>
                            </div>
                        </div>
                        <ul>
                            <li
                                v-for="(describe, index) in list.describe"
                                :key="index"
                            >
                                <div class="row timeline-movement">
                                    <div class="col-sm-6 timeline-item">
                                        <div class="row">
                                            <div class="col-sm-11">
                                                <div
                                                    class="timeline-panel credits"
                                                >
                                                    <div
                                                        class="profile-pic"
                                                        :style="{
                                                            'background-image':
                                                                'url(' +
                                                                require('@/assets/images/members/' +
                                                                    describe.image +
                                                                    '') +
                                                                ')',
                                                        }"
                                                    ></div>

                                                    <div
                                                        class="timeline-details"
                                                    >
                                                        <div class="float-left">
                                                            <h5>
                                                                {{
                                                                    describe.name
                                                                }}
                                                            </h5>
                                                            <span>
                                                                {{
                                                                    describe.subHeading
                                                                }}</span
                                                            >
                                                        </div>
                                                        <div
                                                            class="float-right"
                                                        >
                                                            <p
                                                                class="date-content"
                                                            >
                                                                {{
                                                                    describe.date
                                                                }}
                                                            </p>
                                                        </div>

                                                        <p>
                                                            {{
                                                                describe.details
                                                            }}
                                                        </p>

                                                        <tags
                                                            v-if="
                                                                describe.blockTags
                                                            "
                                                            :statusType="
                                                                describe
                                                                    .blockTags
                                                                    .actions
                                                            "
                                                            :tagIcon="
                                                                describe
                                                                    .blockTags
                                                                    .icon
                                                            "
                                                            :tagHeading="
                                                                describe
                                                                    .blockTags
                                                                    .headings
                                                            "
                                                        ></tags>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
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
