<template>
    <div class="infoengine">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-6">
                    <h2>Name Screening Score Factors</h2>
                </div>
            </div>
        </div>
        <div class="table-section m-b-30">
            <b-table :items="items" :fields="fields">
                <template slot="action" slot-scope="data">
                    <div class="action-review" v-b-modal.modify-score>
                        <base-action
                            v-if="data.value == 'active'"
                            icon="icon-edit"
                            label="Modify"
                            v-b-modal.initiate-review
                        ></base-action>
                    </div>
                </template>
            </b-table>
        </div>
        <pagination></pagination>
        <modify-score-popup></modify-score-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import pagination from '@/components/Pagination.vue'
import modifyScorePopup from '@/components/popups/ModifyScorePopup.vue'
export default {
    components: {
        pagination,
        modifyScorePopup,
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
            let screenScoreFactorFields = this.configurationData.idenfoEngine
                .screenScoreFactor.fields //get user data from store
            this.fields = screenScoreFactorFields //push data into array
            let screenScoreFactorItems = this.configurationData.idenfoEngine
                .screenScoreFactor.items //get user data from store
            this.items = screenScoreFactorItems //push data into array
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
