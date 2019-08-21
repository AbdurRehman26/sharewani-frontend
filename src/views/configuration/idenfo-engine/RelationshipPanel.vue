<template>
    <div class="infoengine relationship-section">
        <div class="filter-section row-min-space">
            <div class="row">
                <div class="col-md-5 filter-title-section">
                    <h2>Relationship Length Factor</h2>
                </div>
                <div class="col-md-7 text-right filter-fields">
                    <div class="row">
                        <div class="col-md-5">
                            <base-search
                                placeholder="Search relationship length"
                            ></base-search>
                        </div>
                        <div class="col-md-7">
                            <div class="row">
                                <div class="col-md-3">
                                    <base-button
                                        btnLabel="Apply"
                                        btnType="button"
                                        btnVariant="primary"
                                    ></base-button>
                                </div>
                                <div class="col-md-9">
                                    <base-button
                                        @click="
                                            addModify(
                                                'Add Relationship Length Factor',
                                                'Create'
                                            )
                                        "
                                        btnLabel="+ Add Relationship Length"
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
                <template slot="worktypeimpact" slot-scope="data">
                    <div class="work-impact">
                        <span>{{ data.value }}</span>
                        <i class="icon-caret-right"></i>
                    </div>
                </template>
                <template slot="rating" slot-scope="data">
                    <base-status :statusType="data.value"></base-status>
                </template>
                <template slot="action" slot-scope="data">
                    <div class="action-review">
                        <!-- if action modify -->
                        <base-action
                            v-if="data.value == 'active'"
                            icon="icon-edit"
                            label="Modify"
                            @click="
                                addModify(
                                    'Modify Relationship Length Factor',
                                    'Update'
                                )
                            "
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
            totalRecords="Showing 1 to 3 of 3 records"
            nextBtnDisable
            selectPaginationDisable
            :showRecords="recordShow"
        ></pagination>
        <add-relationship-popup
            :title="title"
            :buttonText="buttonText"
        ></add-relationship-popup>
        <archive-popup
            title="Archive Relationship Length Factor"
            description="Are you sure you want to archive this relationship length factor? You can re-activate it later."
        ></archive-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import pagination from '@/components/Pagination.vue'
import addRelationshipPopup from '@/components/popups/AddRelationshipPopup.vue'
import archivePopup from '@/components/popups/ArchivePopup.vue'
export default {
    components: {
        addRelationshipPopup,
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
            buttonText: '',
            recordShow: [{ text: 'Show 10 records', value: null }],
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
                .relationshipData.fields //get user data from store
            this.fields = configTableFields //push data into array
            let configTableItems = this.configurationData.idenfoEngine
                .relationshipData.items //get user data from store
            this.items = configTableItems //push data into array
            this.$emit('item-length', this.items.length)
        },

        addModify(e, f) {
            this.title = e
            this.buttonText = f
            this.$bvModal.show('add-relationship-popup')
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
