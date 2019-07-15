<template>
    <b-form class="step-form text-center">
        <div class="row">
            <div class="col-lg-12">
                <div class="fields-area registration-completed">
                    <div class="row">
                        <div class="col-lg-12">
                            <h3>Thank you</h3>
                            <p>
                                Customer account has been created successfully.
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
                    btnLabel="REGISTER ANOTHER CUSTOMER"
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
    methods: {
        linking() {
            if (this.$route.meta.publicRegistration === true) {
                this.$router.push('/public-registration/upload-document')
            } else {
                this.$router.push('/register-customer/upload-document')
            }
        },
    }, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {}, // End of Component > mounted
} // End of export default
</script>
