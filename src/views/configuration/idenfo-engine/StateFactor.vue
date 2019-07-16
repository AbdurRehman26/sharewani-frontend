<template>
    <div class="infoengine">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-4">
                    <h2>State Factor</h2>
                </div>
                <div class="col-md-8 text-right">
                    <ul>
                        <li>
                            <base-search
                                :placeholder="'Search state'"
                            ></base-search>
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
                                v-b-modal.add-state
                                >+ Add State</b-button
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="table-section m-b-30">
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
                        <base-action :actionType="data.value"> </base-action>
                    </div>
                </template>
            </b-table>
        </div>
        <pagination></pagination>
        <add-state-popup></add-state-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import pagination from '@/components/Pagination.vue'
import addStatePopup from '@/components/popups/AddStatePopup.vue'

export default {
    components: {
        pagination,
        addStatePopup,
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
                .stateFactor.fields //get user data from store
            this.fields = configTableFields //push data into array
            let configTableItems = this.configurationData.idenfoEngine
                .stateFactor.items //get user data from store
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
