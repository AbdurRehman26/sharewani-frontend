<template>
    <div class="wrap-content customer-section">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-4">
                    <h2>Register Customers</h2>
                </div>
            </div>
        </div>
        <div class="card">
            <b-form class="step-form">
                <div class="row">
                    <div class="col-lg-12">
                        <h3>Step 2: Record Video</h3>
                        <p class="info">
                            Please point video camera on customer face and make
                            sure their straight face is completly visible in the
                            video. Click on Record button to record 10 seconds
                            video.
                        </p>
                        <div class="video-record">
                            <img src="@/assets/images/Video.png" />
                        </div>
                        <base-button
                            btnType="submit"
                            btnVariant="primary"
                            btnLabel="CONTINUE"
                            @click="
                                $router.push('/register-customer/setup-profile')
                            "
                        ></base-button>
                    </div>
                </div>
            </b-form>
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
        return {}
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
