<template>
    <div class="infoengine risk-level-page">
        <div class="filter-section row-min-space">
            <div class="row">
                <div class="col-md-12 filter-title-section">
                    <h2>Risk Level Review Configuration</h2>
                </div>
            </div>
        </div>

        <div class="table-section">
            <b-table :items="items" :fields="fields">
                <template slot="involvement" slot-scope="data">
                    <status-type-icon
                        :statusType="data.value"
                        class="cursor-pointer"
                    ></status-type-icon>
                </template>
                <template slot="checker" slot-scope="data">
                    <status-type-icon
                        :statusType="data.value"
                    ></status-type-icon>
                </template>
                <template slot="approver" slot-scope="data">
                    <status-type-icon
                        :statusType="data.value"
                    ></status-type-icon>
                </template>
                <template slot="action" slot-scope="data">
                    <div class="action-review">
                        <!-- if action modify -->
                        <base-action
                            v-if="data.value == 'active'"
                            icon="icon-edit"
                            label="Modify"
                            @click="addModify('Modify Risk Level Review Cycle')"
                        ></base-action>
                    </div>
                </template>
            </b-table>
        </div>

        <add-risk-level-review-popup
            :title="title"
        ></add-risk-level-review-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import addRiskLevelReviewPopup from '@/components/popups/RiskLevelReviewPopup.vue'
import statusTypeIcon from '@/components/AlertType.vue'
export default {
    components: {
        addRiskLevelReviewPopup,
        statusTypeIcon,
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
            //system log table
            let configTableFields = this.configurationData.idenfoEngine
                .riskLevelReviewTable.fields //get user data from store
            this.fields = configTableFields //push data into array
            let configTableItems = this.configurationData.idenfoEngine
                .riskLevelReviewTable.items //get user data from store
            this.items = configTableItems //push data into array
            this.$emit('item-length', this.items.length)
        },

        addModify(e) {
            this.title = e
            this.$bvModal.show('add-risk-level-review-popup')
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
