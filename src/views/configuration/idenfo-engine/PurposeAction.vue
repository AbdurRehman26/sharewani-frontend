<template>
    <div class="infoengine">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-5">
                    <h2>Purpose of Action Management</h2>
                </div>
                <div class="col-md-7 text-right">
                    <ul>
                        <li>
                            <base-search></base-search>
                        </li>
                        <li>
                            <b-button type="button" variant="primary"
                                >Apply</b-button
                            >
                        </li>
                        <li>
                            <b-button
                                type="button"
                                variant="secondary"
                                v-b-modal.add-nationality-popup
                                >+ Add Purpose</b-button
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="table-section m-b-30">
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
                            v-b-modal.modify-risk-factor-popup
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
        <pagination></pagination>
        <modify-risk-factor-popup></modify-risk-factor-popup>
        <archive-popup
            title="Archive Action Management Factor"
            description="Are you sure you want to archive this action factor? You can re-activate it later."
        ></archive-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import pagination from '@/components/Pagination.vue'
import modifyRiskFactorPopup from '@/components/popups/ModifyRiskFactorPopup.vue'
import archivePopup from '@/components/popups/ArchivePopup.vue'
export default {
    components: {
        pagination,
        modifyRiskFactorPopup,
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
            let configTableFields = this.configurationData.idenfoEngine
                .purposeActionManagement.fields //get user data from store
            this.fields = configTableFields //push data into array
            let configTableItems = this.configurationData.idenfoEngine
                .purposeActionManagement.items //get user data from store
            this.items = configTableItems //push data into array
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
