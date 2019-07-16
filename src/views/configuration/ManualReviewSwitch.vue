<template>
    <div class="wrap-content">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-4">
                    <h2>Manual Review Switch</h2>
                </div>
            </div>
        </div>

        <div class="config-card-switch">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card custom-card">
                        <div class="row">
                            <div class="col-lg-7">
                                <h5>
                                    Would you like to manually initiate the
                                    review process of all customer profiles?
                                </h5>
                                <p>
                                    If you have made any major changes in the
                                    configuration which might change the name
                                    screening or risk rating outcome of customer
                                    profiles, you can manually initate the
                                    review process.
                                </p>
                                <p>
                                    The action isn't required if you have
                                    modified registration form or did changes
                                    which isn't affect the existing customer
                                    profiles
                                </p>
                                <p class="review-alert">
                                    Please note, this action is not revertable
                                </p>
                                <base-button
                                    btnVariant="primary"
                                    btnLabel="Manually Initate Review Process"
                                ></base-button>
                                <base-button
                                    btnVariant="secondary"
                                    btnLabel="Preview Review Process"
                                ></base-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    components: {},

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
            listData: [],
        }
    }, // End of Component > data

    /*
    |--------------------------------------------------------------------------
    | Component > computed
    |--------------------------------------------------------------------------
    */
    computed: {
        ...mapGetters(['configuration']),
    }, // End of Component > computed
    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        initializeData() {
            //system log table
            let configImportFields = this.configuration.importData //get user data from store
            this.listData = configImportFields //push data into array
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
