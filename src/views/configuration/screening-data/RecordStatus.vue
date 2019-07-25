<template>
    <div class="infoengine">
        <div class="filter-section row-min-space">
            <div class="row">
                <div class="col-md-8 filter-title-section">
                    <h2>Record Status</h2>
                </div>
                <div class="col-md-4 text-right">
                    <div class="row">
                        <div class="col-md-9">
                            <base-search
                                placeholder="Search record status"
                            ></base-search>
                        </div>
                        <div class="col-md-3">
                            <base-button
                                btnLabel="Apply"
                                btnType="button"
                                btnVariant="primary"
                            ></base-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-section">
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
                            v-b-modal.modify-status-popup
                        ></base-action>
                    </div>
                </template>
            </b-table>
        </div>
        <modify-status-popup
            modalTitle="Modify Record Status"
            modalLabel="Active"
        ></modify-status-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import modifyStatusPopup from '@/components/popups/ModifyStatusPopup.vue'
export default {
    components: {
        modifyStatusPopup,
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
                .recordStatus.fields //get user data from store
            this.fields = screeningFields //push data into array
            let screeningItems = this.configurationData.screeningData
                .recordStatus.items //get user data from store
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
