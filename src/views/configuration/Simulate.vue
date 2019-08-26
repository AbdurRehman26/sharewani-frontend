<template>
    <div class="wrap-content manual-review-page">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-4">
                    <h2>Simulation Switch</h2>
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
                                    Would you like to initiate the simulation
                                    process of all customer profiles?
                                </h5>
                                <p>
                                    If you have made any major changes in the
                                    configurations which might change the name
                                    screening or risk rating outcome of customer
                                    profiles, you can initiate the simulation
                                    process. Prior to doing this, you can
                                    preview your changes to assess the
                                    operational impact.
                                </p>
                                <p>
                                    The action isn't required if you have
                                    modified the registration form or did
                                    changes which don't affect the existing
                                    customer profiles.
                                </p>
                                <p class="review-alert">
                                    Please note initiating the review process is
                                    not revertable.
                                </p>

                                <base-button
                                    btnVariant="primary"
                                    btnLabel="Preview Simulation Process"
                                ></base-button>
                                <base-button
                                    btnVariant="secondary"
                                    btnLabel="Initate Simulation Process"
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
export default {
    components: {},

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
