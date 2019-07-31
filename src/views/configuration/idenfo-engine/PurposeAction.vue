<template>
    <div class="infoengine">
        <div class="filter-section row-min-space">
            <div class="row">
                <div class="col-md-6 filter-title-section">
                    <h2>Purpose of Action Management</h2>
                </div>
                <div class="col-md-6 text-right">
                    <div class="row">
                        <div class="col-md-6">
                            <base-search
                                placeholder="Search purpose of action"
                            ></base-search>
                        </div>
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-4">
                                    <base-button
                                        btnLabel="Apply"
                                        btnType="button"
                                        btnVariant="primary"
                                    ></base-button>
                                </div>
                                <div class="col-md-8">
                                    <base-button
                                        @click="
                                            addModify('Add Purpose of Action')
                                        "
                                        btnLabel="+ Add Purpose"
                                        btnType="button"
                                        btnVariant="secondary"
                                        class="secondary-add-btn"
                                    ></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="table-section">
            <b-table :items="items" :fields="fields">
                <template slot="scorescale" slot-scope="data">
                    <div class="work-impact">
                        <span>{{ data.value }}</span>
                        <i class="icon-caret-right"></i>
                    </div>
                </template>
                <template slot="action" slot-scope="data">
                    <div class="action-review">
                        <!-- if action modify -->
                        <base-action
                            v-if="data.value == 'active'"
                            icon="icon-edit"
                            label="Modify"
                            @click="addModify('Modify Purpose of Action')"
                        ></base-action>
                        <!-- if action archive -->
                        <base-action
                            v-if="data.value == 'active'"
                            icon="icon-trash"
                            label="Archive"
                            v-b-modal.archive-popup
                        ></base-action>
                    </div>
                </template>
            </b-table>
        </div>
        <pagination
            totalRecords="Showing 1 to 2 of 2 records"
            nextBtnDisable
        ></pagination>
        <add-purpose-popup :title="title"></add-purpose-popup>
        <archive-popup
            title="Archive Purpose of Action"
            description="Are you sure you want to archive this purpose of action? You can re-activate it later."
        ></archive-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import addPurposePopup from '@/components/popups/AddPurposePopup.vue'
import archivePopup from '@/components/popups/ArchivePopup.vue'
import pagination from '@/components/Pagination.vue'
export default {
    components: {
        addPurposePopup,
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
            fields: [],
            items: [],
            title: '',
        }
    }, // End of Component > data

    /*
    |--------------------------------------------------------------------------
    | Component > computed
    |--------------------------------------------------------------------------
    */
    computed: {
        ...mapGetters(['configurationData']),
    }, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        initializeData() {
            let configTableFields = this.configurationData.idenfoEngine
                .purposeActionManagement.fields //get user data from store
            this.fields = configTableFields //push data into array
            let configTableItems = this.configurationData.idenfoEngine
                .purposeActionManagement.items //get user data from store
            this.items = configTableItems //push data into array
            this.$emit('item-length', this.items.length)
        },

        addModify(e) {
            this.title = e
            this.$bvModal.show('add-purpose-popup')
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
