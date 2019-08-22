<template>
    <div class="infoengine">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-6">
                    <h2 class="filter-heading">
                        Document Verification Factors
                    </h2>
                </div>
            </div>
        </div>
        <div class="table-section tablet-table-small-min-width">
            <b-table :items="items" :fields="fields">
                <template slot="action" slot-scope="data">
                    <div class="action-review">
                        <base-action
                            v-if="data.value == 'active'"
                            icon="icon-edit"
                            label="Modify"
                            v-b-modal.modify-liveness-detection-popup
                        ></base-action>
                    </div>
                </template>
            </b-table>
        </div>
        <modify-liveness-detection-popup></modify-liveness-detection-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import modifyLivenessDetectionPopup from '@/components/popups/ModifyLivenessDetectionPopup.vue'
export default {
    components: {
        modifyLivenessDetectionPopup,
    },

    /*
    |--------------------------------------------------------------------------
    | Component > props
    |--------------------------------------------------------------------------
    */
    props: {}, // End of Component > props

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
            let documentVerificationFields = this.configurationData.idenfoEngine
                .documentVerification.fields //get user data from store
            this.fields = documentVerificationFields //push data into array
            let documentVerificationItems = this.configurationData.idenfoEngine
                .documentVerification.items //get user data from store
            this.items = documentVerificationItems //push data into array
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
