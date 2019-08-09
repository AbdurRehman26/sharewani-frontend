<template>
    <div class="auth-wrapper middle-aligner">
        <div class="inner">
            <div class="card card-auth  with-shadow">
                <h2 class="auth-heading">
                    Forgot your password?
                    <span>
                        Please provide your username and we'll send you
                        instructions on how to change your password.
                    </span>
                </h2>
                <div class="auth-body">
                    <b-form>
                        <b-form-group
                            id="input-group-1"
                            label="Username"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-1"
                                type="email"
                                required
                                autocomplete="no"
                                placeholder="Enter username"
                            ></b-form-input>
                        </b-form-group>
                        <base-button
                            btnLabel="SEND INSTRUCTIONS"
                            btnType="submit"
                            btnVariant="primary"
                            @click="$router.push('email-sent')"
                        ></base-button>
                        <router-link
                            :to="{ name: 'login-page' }"
                            class="btn forgot-link btn-link float-right"
                            >Back to login</router-link
                        >
                    </b-form>
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
    props: {
        /**
         * Value to determine the current compose mode which
         * varies between 'add' and 'edit'
         */
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
