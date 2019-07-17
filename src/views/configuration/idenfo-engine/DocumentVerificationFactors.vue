<template>
    <div class="infoengine">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-6">
                    <h2>Document Verification Factors</h2>
                </div>
            </div>
        </div>
        <div class="table-section m-b-30">
            <b-table :items="items" :fields="fields">
                <template slot="action" slot-scope="data">
                    <div
                        class="action-review"
                        v-b-modal.modify-liveness-detection-popup
                    >
                        <base-action :actionType="data.value"> </base-action>
                    </div>
                </template>
            </b-table>
        </div>
        <pagination></pagination>
        <modify-liveness-detection-popup></modify-liveness-detection-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import pagination from '@/components/Pagination.vue'
import modifyLivenessDetectionPopup from '@/components/popups/ModifyLivenessDetectionPopup.vue'
export default {
    components: {
        pagination,
        modifyLivenessDetectionPopup,
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
            let documentVerificationFields = this.configurationData.idenfoEngine
                .documentVerification.fields //get user data from store
            this.fields = documentVerificationFields //push data into array
            let documentVerificationItems = this.configurationData.idenfoEngine
                .documentVerification.items //get user data from store
            this.items = documentVerificationItems //push data into array
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
