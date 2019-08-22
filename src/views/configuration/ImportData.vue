<template>
    <div class="wrap-content">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-4">
                    <h2>Import Data</h2>
                </div>
            </div>
        </div>

        <div class="data-import">
            <div class="row">
                <div
                    class="col-lg-4 col-md-6"
                    v-for="(data, index) in listData"
                    :key="index"
                >
                    <card-data
                        :logo="data.logo"
                        :name="data.name"
                        :lastUpdate="data.lastUpdate"
                        :totalRecord="data.totalRecord"
                        @updateData="uploadModal()"
                    ></card-data>
                </div>
            </div>
        </div>
        <import-data-popup></import-data-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import cardData from '@/components/CardData.vue'
import importDataPopup from '@/components/popups/ImportDataPopup.vue'
export default {
    components: {
        cardData,
        importDataPopup,
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
            listData: [],
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
            let configImportFields = this.configurationData.importData //get user data from store
            this.listData = configImportFields //push data into array
        },
        uploadModal() {
            this.$bvModal.show('import-data-popup')
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
