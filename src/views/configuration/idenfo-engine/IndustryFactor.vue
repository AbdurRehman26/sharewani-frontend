<template>
    <div class="infoengine">
        <div class="filter-section row-min-space">
            <div class="row">
                <div class="col-md-6 filter-title-section">
                    <h2>Industry Factor</h2>
                </div>
                <div class="col-md-6 text-right">
                    <div class="row">
                        <div class="col-md-6">
                            <base-search
                                placeholder="Search industry"
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
                                        v-b-modal.add-industry-popup
                                        btnLabel="+ Add Industry"
                                        btnType="button"
                                        btnVariant="secondary"
                                    ></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="table-section m-b-30">
            <b-table :items="items" :fields="fields">
                <template slot="worktypeimpact" slot-scope="data">
                    <a href="#" class="work-impact">
                        <span>{{ data.value }}</span>
                        <i class="icon-caret-right"></i>
                        <div class="custom-popover">
                            <ul>
                                <li>
                                    <label
                                        >Self-Employed/Business Owner:
                                    </label>
                                    <span class="high">High</span>
                                </li>
                                <li>
                                    <label>Salaried-Executive Level: </label>
                                    <span class="high">High</span>
                                </li>
                                <li>
                                    <label>Salaried-General: </label>
                                    <span class="low">Low</span>
                                </li>
                                <li>
                                    <label>Homemaker: </label>
                                    <span class="low">Low</span>
                                </li>
                                <li>
                                    <label>Student: </label>
                                    <span class="low">Low</span>
                                </li>
                                <li>
                                    <label>Unemployed: </label>
                                    <span class="low">Low</span>
                                </li>
                                <li>
                                    <label>Retired: </label>
                                    <span class="low">Low</span>
                                </li>
                            </ul>
                        </div>
                    </a>
                </template>
                <template slot="action" slot-scope="data">
                    <div class="action-review">
                        <!-- if action modify -->
                        <base-action
                            v-if="data.value == 'active'"
                            icon="icon-edit"
                            label="Modify"
                            v-b-modal.add-industry-popup
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
        <add-industry-popup></add-industry-popup>
        <archive-popup
            title="Archive Industry Factor"
            description="Are you sure you want to archive this industry factor? You can re-activate it later."
        ></archive-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import addIndustryPopup from '@/components/popups/AddIndustryPopup.vue'
import archivePopup from '@/components/popups/ArchivePopup.vue'
export default {
    components: {
        addIndustryPopup,
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
            let configTableFields = this.configurationData.idenfoEngine.industry
                .fields //get user data from store
            this.fields = configTableFields //push data into array
            let configTableItems = this.configurationData.idenfoEngine.industry
                .items //get user data from store
            this.items = configTableItems //push data into array
            this.$emit('item-length', this.items.length)
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
