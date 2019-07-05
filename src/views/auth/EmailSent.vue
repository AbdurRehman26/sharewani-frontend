<template>
    <div class="auth-wrapper middle-aligner">
        <div class="inner">
            <base-logo class="main-logo"></base-logo>
            <div class="card card-auth  with-shadow">
                <h2 class="auth-heading">
                    Check your Inbox
                    <span>
                        We have sent an email at
                        <i>ars•••••••••@bank.com</i> containing instructions on
                        how to change your password to the email address you
                        supplied.
                    </span>
                </h2>
                <span class="email-sent-icon">
                    <img src="@/assets/images/envelope-alt.png"
                /></span>
                <b-button
                    type="submit"
                    variant="primary"
                    class="back-to-login-btn"
                    @click="$router.push('/')"
                    >BACK TO LOGIN</b-button
                >
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
