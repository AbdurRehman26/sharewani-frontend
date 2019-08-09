<template>
    <div class="infoengine gender-page">
        <div class="filter-section row-min-space">
            <div class="row">
                <div class="col-md-6 filter-title-section">
                    <h2>Gender</h2>
                </div>
                <div class="col-md-6 text-right">
                    <div class="row">
                        <div class="col-md-6">
                            <base-search
                                placeholder="Search gender"
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
                                        @click="addModify('Add Gender')"
                                        btnLabel="+ Add Gender"
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

        <div class="table-section tablet-table-xxs-min-width">
            <b-table :items="items" :fields="fields">
                <template slot="status" slot-scope="data">
                    <base-status :statusType="data.value"></base-status>
                </template>
                <template slot="action" slot-scope="data">
                    <div class="action-review">
                        <!-- if action modify -->
                        <base-action
                            v-if="data.value[0].name == 'active'"
                            icon="icon-edit"
                            label="Modify"
                            :class="
                                data.value[0].disable == true
                                    ? 'disable-color'
                                    : ''
                            "
                            @click="addModify('Modify Gender')"
                        ></base-action>
                        <!-- if action archive -->
                        <base-action
                            v-if="data.value[0].name == 'active'"
                            icon="icon-trash"
                            label="Archive"
                            :class="
                                data.value[0].disable == true
                                    ? 'disable-color'
                                    : ''
                            "
                            v-b-modal.archive-popup
                        ></base-action>
                    </div>
                </template>
            </b-table>
        </div>
        <pagination
            totalRecords="Showing 1 to 3 of 3 records"
            nextBtnDisable
            selectPaginationDisable
            :showRecords="recordShow"
        ></pagination>
        <add-gender-popup :title="title"></add-gender-popup>
        <archive-popup
            title="Archive Gender"
            description="Are you sure you want to archive this gender? You can re-activate it later."
        ></archive-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import archivePopup from '@/components/popups/ArchivePopup.vue'
import addGenderPopup from '@/components/popups/GenderPopup.vue'
import pagination from '@/components/Pagination.vue'
export default {
    components: {
        addGenderPopup,
        pagination,
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
            fields: [],
            items: [],
            recordShow: [{ text: 'Show 10 records', value: null }],
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
            //system log table
            let configTableFields = this.configurationData.idenfoEngine
                .gendersTable.fields //get user data from store
            this.fields = configTableFields //push data into array
            let configTableItems = this.configurationData.idenfoEngine
                .gendersTable.items //get user data from store
            this.items = configTableItems //push data into array
            this.$emit('item-length', this.items.length)
        },

        addModify(e) {
            this.title = e
            this.$bvModal.show('add-gender-popup')
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
