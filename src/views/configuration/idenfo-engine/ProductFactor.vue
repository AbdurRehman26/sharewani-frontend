<template>
    <div class="infoengine">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-4">
                    <h2>Product Factor</h2>
                </div>
                <div class="col-md-8 text-right">
                    <ul>
                        <li>
                            <base-search
                                :placeholder="'Search Product'"
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
                                v-b-modal.add-product-popup
                                >+ Add Product</b-button
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
                        <!-- if action modify -->
                        <base-action
                            v-if="data.value == 'active'"
                            icon="icon-edit"
                            label="Modify"
                            v-b-modal.add-product-popup
                        ></base-action>
                        <!-- if action archive -->
                        <base-action
                            v-if="data.value == 'active'"
                            icon="icon-trash"
                            label="Archive"
                            v-b-modal.archive-popup
                        ></base-action>
                    </div>
                </template>
            </b-table>
        </div>
        <add-product-popup></add-product-popup>
        <archive-popup
            title="Archive Product Factor"
            description="Are you sure you want to archive this product factor? You can re-activate it later."
        ></archive-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import addProductPopup from '@/components/popups/AddProductPopup.vue'
import archivePopup from '@/components/popups/ArchivePopup.vue'
export default {
    components: {
        addProductPopup,
        archivePopup,
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
                .productFactor.fields //get user data from store
            this.fields = configTableFields //push data into array
            let configTableItems = this.configurationData.idenfoEngine
                .productFactor.items //get user data from store
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
