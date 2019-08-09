<template>
    <div class="infoengine">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-6">
                    <h2>Risk Factor & Weightage</h2>
                </div>
            </div>
        </div>
        <div class="table-section tablet-table-min-width">
            <b-table :items="items" :fields="fields">
                <template slot="scorescale" slot-scope="data">
                    <a href="javascript:void(0);" class="work-impact">
                        <span>{{ data.value }}</span>
                        <i class="icon-caret-right"></i>
                        <div class="custom-popover small">
                            <ul>
                                <li>
                                    <label>High: </label>
                                    <span class="bold">1</span>
                                </li>
                                <li>
                                    <label>Medium: </label>
                                    <span class="bold">0.5</span>
                                </li>
                                <li>
                                    <label>Low: </label>
                                    <span class="bold">0</span>
                                </li>
                            </ul>
                        </div>
                    </a>
                </template>
                <template slot="action" slot-scope="data">
                    <div class="action-review">
                        <base-action
                            v-if="data.value == 'active'"
                            icon="icon-edit"
                            label="Modify"
                            v-b-modal.modify-risk-factor-popup
                        ></base-action>
                    </div>
                </template>
            </b-table>
        </div>
        <modify-risk-factor-popup></modify-risk-factor-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import modifyRiskFactorPopup from '@/components/popups/ModifyRiskFactorPopup.vue'
export default {
    components: {
        modifyRiskFactorPopup,
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
            let configTableFields = this.configurationData.idenfoEngine
                .riskFactor.fields //get user data from store
            this.fields = configTableFields //push data into array
            let configTableItems = this.configurationData.idenfoEngine
                .riskFactor.items //get user data from store
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
