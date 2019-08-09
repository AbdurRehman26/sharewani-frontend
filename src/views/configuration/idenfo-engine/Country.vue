<template>
    <div class="infoengine">
        <div class="filter-section row-min-space">
            <div class="row">
                <div class="col-md-5 filter-title-section">
                    <h2>Country of Residence Factor</h2>
                </div>
                <div class="col-md-7 text-right">
                    <div class="row">
                        <div class="col-md-6">
                            <base-search
                                placeholder="Search country"
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
                                            addModify(
                                                'Add Country of Residence Factor'
                                            )
                                        "
                                        btnLabel="+ Add Country"
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
                <template slot="rating" slot-scope="data">
                    <base-status :statusType="data.value"></base-status>
                </template>
                <template slot="taxid" slot-scope="data">
                    <span v-if="data.value[0].name == 'Required'">
                        Required
                        <sup
                            class="text-danger star-required"
                            v-if="data.value[0].require == true"
                            >*</sup
                        >
                    </span>

                    <span v-if="data.value[0].name != 'Required'">
                        Not Required
                    </span>
                </template>

                <template slot="action" slot-scope="data">
                    <div class="action-review">
                        <!-- if action modify -->
                        <base-action
                            v-if="data.value == 'active'"
                            icon="icon-edit"
                            label="Modify"
                            @click="
                                addModify('Modify Country of Residence Factor')
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
            totalRecords="Showing 1 to 10 of 220 records"
            :showRecords="recordShow"
        ></pagination>
        <add-country-popup :title="title"></add-country-popup>
        <archive-popup
            title="Archive Country Factor"
            description="Are you sure you want to archive this country factor? You can re-activate it later."
        ></archive-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import addCountryPopup from '@/components/popups/AddCountryPopup.vue'
import archivePopup from '@/components/popups/ArchivePopup.vue'
import pagination from '@/components/Pagination.vue'

export default {
    components: {
        addCountryPopup,
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
            recordShow: [
                { text: 'Show 10 records', value: null },
                { text: 'Show 20 records', value: 20 },
                { text: 'Show 30 records', value: 30 },
                { text: 'Show 40 records', value: 40 },
                { text: 'Show 50 records', value: 50 },
            ],
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
            let configTableFields = this.configurationData.idenfoEngine.country
                .fields //get user data from store
            this.fields = configTableFields //push data into array
            let configTableItems = this.configurationData.idenfoEngine.country
                .items //get user data from store
            this.items = configTableItems //push data into array
            this.$emit('item-length', this.items.length)
        },

        addModify(e) {
            this.title = e
            this.$bvModal.show('add-country-popup')
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
