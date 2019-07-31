<template>
    <div class="infoengine">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-6">
                    <h2>Risk Rating Score</h2>
                </div>
            </div>
        </div>
        <div class="table-section">
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
                        <base-action
                            v-if="data.value == 'active'"
                            icon="icon-edit"
                            label="Modify"
                            v-b-modal.modify-risk-rating-popup
                        ></base-action>
                    </div>
                </template>
            </b-table>
        </div>
        <div class="filter-section sub-filter">
            <div class="row">
                <div class="col-md-12">
                    <h2>Risk Rating Overrides</h2>
                </div>
            </div>
        </div>
        <div class="table-section">
            <b-table :items="itemSecond" :fields="fieldSecond">
                <template slot="rating" slot-scope="data">
                    <base-status :statusType="data.value"></base-status>
                </template>
                <template slot="action" slot-scope="data">
                    <div class="action-review">
                        <base-action
                            v-if="data.value == 'active'"
                            icon="icon-edit"
                            label="Modify"
                            v-b-modal.modify-risk-rating-override-popup
                        ></base-action>
                    </div>
                </template>
            </b-table>
        </div>
        <modify-risk-rating-popup></modify-risk-rating-popup>
        <risk-rating-override-popup></risk-rating-override-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import modifyRiskRatingPopup from '@/components/popups/ModifyRiskRatingPopup.vue'
import riskRatingOverridePopup from '@/components/popups/RiskRatingOverridePopup.vue'
export default {
    components: {
        modifyRiskRatingPopup,
        riskRatingOverridePopup,
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
            fieldSecond: [],
            itemSecond: [],
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
                .riskRating.fields //get user data from store
            this.fields = configTableFields //push data into array

            let configTableItems = this.configurationData.idenfoEngine
                .riskRating.items //get user data from store
            this.items = configTableItems //push data into array

            let configSecondTableFields = this.configurationData.idenfoEngine
                .riskRatingOverride.fields //get user data from store
            this.fieldSecond = configSecondTableFields //push data into array

            let configSecondTableItems = this.configurationData.idenfoEngine
                .riskRatingOverride.items //get user data from store
            this.itemSecond = configSecondTableItems //push data into array

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
