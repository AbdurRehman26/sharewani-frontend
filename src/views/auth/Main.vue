<template>
    <div class="auth-wrapper middle-aligner">
        <div class="inner">
            <base-logo class="main-logo"></base-logo>
            <!-- router view -->
            <router-view></router-view>
            <!-- router view end-->
            <div class="contact-link text-center">
                Can’t access your account?
                <router-link to="/contact-us">Contact us</router-link>
            </div>
            <div class="contact-link register-now text-center">
                Are you a customer?
                <router-link to="/contact-us">Register now</router-link>
            </div>
        </div>
        <base-footer></base-footer>
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
