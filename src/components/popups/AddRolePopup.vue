<template>
    <div>
        <b-modal
            id="add-role-popup"
            :title="title"
            size="lg"
            :okTitle="buttonText"
            cancelTitle="Cancel"
            cancelVariant="link"
        >
            <b-form class="role-form-section">
                <div class="scrollable" id="style-2">
                    <div class="row">
                        <div class="col-md-6">
                            <b-form-group
                                id="input-group-1"
                                label="Role Title"
                                label-for="role-title"
                            >
                                <b-form-input
                                    id="role-title"
                                    type="text"
                                    v-model="form.roleTitle"
                                    required
                                    autocomplete="no"
                                    placeholder="Enter role title"
                                ></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-md-12 scale-type">
                            <h4>Permissions</h4>
                        </div>
                        <div class="col-md-12 permissions-section">
                            <check-box-listing
                                :checkBoxListing="form.insights"
                                checkboxName="noprofile"
                                parentName="Insights"
                            ></check-box-listing>
                            <check-box-listing
                                :checkBoxListing="form.customerProfile"
                                checkboxName="customerprofile"
                                parentName="Customer Profiles"
                            ></check-box-listing>
                            <check-box-listing
                                :checkBoxListing="form.configurations"
                                checkboxName="configurations"
                                parentName="Configurations"
                            ></check-box-listing>

                            <check-box-listing
                                :checkBoxListing="form.systemUser"
                                checkboxName="systemUser"
                                parentName="System User"
                            ></check-box-listing>

                            <check-box-listing
                                :checkBoxListing="form.systemLogs"
                                checkboxName="systemLogs"
                                parentName="System Logs"
                            ></check-box-listing>

                            <radio-listing
                                :radioListing="form.statusReview"
                                parentName="KYC Status Review Role"
                            ></radio-listing>
                        </div>
                    </div>
                </div>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
import checkBoxListing from '@/components/CheckBoxListing.vue'
import radioListing from '@/components/RadioListing.vue'
export default {
    components: {
        checkBoxListing,
        radioListing,
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
        title: {
            type: String,
            default: null,
        },
        buttonText: {
            type: String,
            default: 'Create',
        },
    }, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            form: {
                roleTitle: '',
                insights: [
                    'View Alerts',
                    'View Activity Dashboard',
                    'View Customer Statistics',
                ],

                customerProfile: [
                    'View Customer Profile',
                    'Register Customer',
                    'KYC Status Investigation & Review',
                    'Manually Overwrite Verification Status',
                    'Open Alert Against Customers',
                ],

                configurations: [
                    'Manage Idenfo Engine',
                    'Manage View Screening Data',
                    'Manage Form Builder',
                    'Manual Review',
                    'Manage Branding',
                    'Manage OCR',
                ],

                systemUser: [
                    'Manage System Users',
                    'Manage Roles & Permission',
                    'Manage Data Segments',
                    'Manage Application Access',
                ],

                systemLogs: [' View System Logs'],

                statusReview: [
                    { text: 'Maker', value: 'maker' },
                    {
                        text: 'Checker',
                        value: 'checker',
                    },
                    {
                        text: 'Approver',
                        value: 'approver',
                    },
                ],
            },

            selected: 'maker',
        }
    },
    methods: {
        /**
         * Handle when the modal is canceled
         *
         * @return {void}
         */
    },
}
</script>
