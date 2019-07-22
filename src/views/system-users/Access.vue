<template>
    <div class="wrap-content">
        <div class="filter-section row-min-space">
            <div class="row">
                <div class="col-md-6 filter-title-section">
                    <h2>Application Access</h2>
                </div>
                <div class="col-md-6 text-right">
                    <div class="row">
                        <div class="col-md-6 col-xs-12">
                            <base-search></base-search>
                        </div>
                        <div class="col-md-6 col-xs-12">
                            <div class="row">
                                <div class="col-md-5">
                                    <base-button
                                        btnLabel="Apply"
                                        btnType="submit"
                                        btnVariant="primary"
                                    ></base-button>
                                </div>
                                <div class="col-md-7">
                                    <base-button
                                        btnLabel="+ Add Application"
                                        btnType="submit"
                                        btnVariant="secondary"
                                        v-b-modal.add-application-popup
                                    ></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- user management table -->
        <div class="table-section">
            <b-table :items="items" :fields="fields" class="user-roles-table">
                <!-- status slot -->
                <template slot="status" slot-scope="data">
                    <base-status :statusType="data.value"></base-status>
                </template>

                <!-- action slot -->
                <template slot="action" slot-scope="data">
                    <div class="action-review">
                        <!-- if action modify -->
                        <base-action
                            v-if="
                                data.value == 'active' ||
                                    data.value == 'archive'
                            "
                            icon="icon-edit"
                            label="Modify"
                            v-b-modal.add-application-popup
                        ></base-action>
                        <!-- if action archive -->
                        <base-action
                            v-if="data.value == 'active'"
                            icon="icon-trash"
                            label="Archive"
                            v-b-modal.archive-popup
                        ></base-action>
                        <!-- if action activate -->
                        <base-action
                            v-if="data.value == 'archive'"
                            icon="icon-done"
                            label="Activate"
                            v-b-modal.initiate-review
                        ></base-action>
                    </div>
                </template>
            </b-table>
        </div>
        <add-application-popup></add-application-popup>
        <archive-popup
            title="Archive Application"
            description="Are you sure you want to archive this application ? You can activate it later."
        ></archive-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import addApplicationPopup from '@/components/popups/AddApplicationPopup.vue'
import archivePopup from '@/components/popups/ArchivePopup.vue'
export default {
    components: {
        addApplicationPopup,
        archivePopup,
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
            selected: '1',
            fields: [],
            items: [],
        }
    }, // End of Component > data

    /*
    |--------------------------------------------------------------------------
    | Component > computed
    |--------------------------------------------------------------------------
    */
    computed: {
        ...mapGetters(['systemUsersData']),
    }, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        initializeData() {
            //system log table
            let tableFields = this.systemUsersData.applications.fields //get user data from store
            this.fields = tableFields //push data into array
            let tableItems = this.systemUsersData.applications.items //get user data from store
            this.items = tableItems //push data into array
        },
    }, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {
        this.initializeData()
    }, // End of Component > mounted
} // End of export default
</script>
