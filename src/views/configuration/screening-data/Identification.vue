<template>
    <div class="infoengine">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-6">
                    <h2>Identification Type</h2>
                </div>
                <div class="col-md-6 text-right">
                    <ul>
                        <li>
                            <base-search
                                placeholder="Search country type"
                            ></base-search>
                        </li>
                        <li>
                            <b-button type="button" variant="primary"
                                >Apply</b-button
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="table-section m-b-30">
            <b-table :items="items" :fields="fields">
                <template slot="status" slot-scope="data">
                    <base-status :statusType="data.value"></base-status>
                </template>
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
            let screeningFields = this.configurationData.screeningData
                .identificationtypeTable.fields //get user data from store
            this.fields = screeningFields //push data into array
            let screeningItems = this.configurationData.screeningData
                .identificationtypeTable.items //get user data from store
            this.items = screeningItems //push data into array
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
