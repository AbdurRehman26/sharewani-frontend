<template>
    <div class="auth-wrapper middle-aligner">
        <div class="inner">
            <div class="card card-auth  with-shadow">
                <h2 class="auth-heading">
                    Reset password
                    <span>
                        Please create your new account password.
                    </span>
                </h2>
                <div class="auth-body">
                    <b-form>
                        <b-form-group
                            id="input-group-2"
                            label="NEW PASSWORD"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-2"
                                type="password"
                                autocomplete="no"
                                placeholder="Enter new password"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                            id="input-group-2"
                            label="CONFIRM PASSWORD"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-2"
                                type="password"
                                autocomplete="no"
                                placeholder="Re-enter your account password"
                            ></b-form-input>
                        </b-form-group>
                        <base-button
                            btnLabel="RESET"
                            btnType="submit"
                            btnVariant="primary"
                            class=""
                            @click="$router.push('/dashboard')"
                        ></base-button>
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
