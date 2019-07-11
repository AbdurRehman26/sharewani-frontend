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
                    v-for="(data, index) in importData"
                    :key="index"
                >
                    <card-data
                        :logo="data.logo"
                        :name="data.name"
                        :lastUpdate="data.lastUpdate"
                        :totalRecord="data.totalRecord"
                    ></card-data>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cardData from '@/components/CardData.vue'
export default {
    components: {
        cardData,
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
            importData: [
                {
                    logo: 'logo1.png',
                    name: 'Do Jones Data',
                    lastUpdate: 'Last updated: June 10, 2019',
                    totalRecord: 'Total Records: 45,650',
                },
                {
                    logo: 'logo2.png',
                    name: 'World Bank Data',
                    lastUpdate: 'Last updated: June 9, 2019',
                    totalRecord: 'Total Records: 23,956',
                },
                {
                    logo: 'logo3.png',
                    name: 'Client Blacklist Data',
                    lastUpdate: 'Last updated: June 12, 2019',
                    totalRecord: 'Total Records: 2,450',
                },
            ],
        }
    }, // End of Component > data

    /*
    |--------------------------------------------------------------------------
    | Component > computed
    |--------------------------------------------------------------------------
    */
    computed: {}, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {}, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {}, // End of Component > mounted
} // End of export default
</script>
