<template>
    <div class="screening-data-section">
        <div class="filter-section row-min-space">
            <div class="row">
                <div class="col-md-8 filter-title-section">
                    <h2>Description 3</h2>
                </div>
                <div class="col-md-4 text-right">
                    <div class="row">
                        <div class="col-md-9">
                            <base-search
                                placeholder="Search description 3"
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

        <div class="table-section tablet-table-xs-min-width mobile-descp-width">
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
        <pagination
            totalRecords="Showing 1 to 10 of 116 records"
            :showRecords="recordShow"
        ></pagination>
        <modify-status-popup
            modalTitle="Modify Description 3 Status"
            modalLabel="Government Entity"
        ></modify-status-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import modifyStatusPopup from '@/components/popups/ModifyStatusPopup.vue'
import pagination from '@/components/Pagination.vue'
export default {
    components: {
        modifyStatusPopup,
        pagination,
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
            recordShow: [
                { text: 'Show 10 records', value: null },
                { text: 'Show 20 records', value: 20 },
                { text: 'Show 30 records', value: 30 },
                { text: 'Show 40 records', value: 40 },
                { text: 'Show 50 records', value: 50 },
            ],
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
                .descriptionStatusThree.fields //get user data from store
            this.fields = screeningFields //push data into array
            let screeningItems = this.configurationData.screeningData
                .descriptionStatusThree.items //get user data from store
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
