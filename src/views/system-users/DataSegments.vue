<template>
    <div class="wrap-content">
        <div class="filter-section row-min-space">
            <div class="row">
                <div class="col-md-6 filter-title-section">
                    <h2>Data Segment</h2>
                </div>
                <div class="col-md-6 text-right">
                    <div class="row">
                        <div class="col-md-6 col-xs-12">
                            <base-search></base-search>
                        </div>
                        <div class="col-md-6 col-xs-12">
                            <div class="row">
                                <div class="col-md-5 col-xs-12">
                                    <base-button
                                        btnLabel="Apply"
                                        btnType="submit"
                                        btnVariant="primary"
                                    ></base-button>
                                </div>
                                <div class="col-md-7 col-xs-12">
                                    <base-button
                                        btnLabel="+ Add Data Segment"
                                        btnType="submit"
                                        btnVariant="secondary btn-block"
                                        @click="addModify('Add Data Segment')"
                                        class="secondary-add-btn"
                                    ></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- user management table -->
        <div class="table-section tablet-table-xs-min-width">
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
                            @click="addModify('Modify Data Segment')"
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
                            v-b-modal.archive-popup
                        ></base-action>
                    </div>
                </template>
            </b-table>
        </div>
        <pagination
            totalRecords="Showing 1 to 4 of 4 records"
            nextBtnDisable
            selectPaginationDisable
            :showRecords="recordShow"
        ></pagination>
        <add-data-segment-popup :title="title"></add-data-segment-popup>
        <archive-popup
            title="Archive Data Segment"
            description="Are you sure you want to archive this data segment? You can re-activate it later."
        ></archive-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import pagination from '@/components/Pagination.vue'
import addDataSegmentPopup from '@/components/popups/AddDataSegmentPopup.vue'
import archivePopup from '@/components/popups/ArchivePopup.vue'
export default {
    components: {
        addDataSegmentPopup,
        archivePopup,
        pagination,
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
            title: '',
            recordShow: [{ text: 'Show 10 records', value: null }],
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
            let tableFields = this.systemUsersData.segments.fields //get user data from store
            this.fields = tableFields //push data into array
            let tableItems = this.systemUsersData.segments.items //get user data from store
            this.items = tableItems //push data into array
        },

        addModify(e) {
            this.title = e
            this.$bvModal.show('add-data-segment-popup')
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
