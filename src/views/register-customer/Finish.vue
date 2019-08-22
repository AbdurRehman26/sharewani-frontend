<template>
    <b-form class="step-form text-center registered-customer-id">
        <div class="row">
            <div class="col-lg-12">
                <div class="fields-area registration-completed">
                    <div class="row">
                        <div class="col-lg-12">
                            <h3>Thank you</h3>
                            <p>
                                {{ registrationText }}
                            </p>

                            <div class="generated-customer-id">
                                <h4>1281375</h4>
                                <p>UNIQUE CUSTOMER ID</p>
                            </div>
                        </div>
                    </div>
                </div>
                <base-button
                    btnType="submit"
                    btnVariant="primary"
                    class="btn-min-width"
                    :btnLabel="registrationBtnText"
                    @preventFunction="linking()"
                ></base-button>
            </div>
        </div>
    </b-form>
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
            registrationText: null,
            registrationBtnText: null,
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
    methods: {
        linking() {
            if (this.$route.meta.publicRegistration === true) {
                this.$router.push('/public-registration/upload-document')
            } else {
                this.$router.push('/register-customer/upload-document')
            }
        },
        onLoad() {
            if (this.$route.meta.publicRegistration === true) {
                this.registrationText =
                    'You account has been created successfully'
                this.registrationBtnText = 'GO TO MAIN WEBSITE'
            } else {
                this.registrationText =
                    ' Customer account has been created successfully.'
                this.registrationBtnText = 'REGISTER ANOTHER CUSTOMER'
            }
        },
    }, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {
        this.onLoad()
    }, // End of Component > mounted
} // End of export default
</script>
