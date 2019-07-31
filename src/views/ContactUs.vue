<template>
    <div class="auth-wrapper middle-aligner">
        <div class="inner">
            <base-logo class="main-logo"></base-logo>
            <div class="card card-auth  with-shadow">
                <h2 class="auth-heading">
                    Contact Us
                    <span>
                        If you're having trouble logging in or with your
                        password.
                    </span>
                </h2>
                <div class="auth-body">
                    <b-form>
                        <b-form-group
                            id="input-group-1"
                            label="EMAIL ADDRESS"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-1"
                                type="email"
                                required
                                placeholder="Enter email address"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                            id="input-group-2"
                            label="Description of the issue"
                            label-for="input-2"
                        >
                            <b-form-textarea
                                id="input-2"
                                type="password"
                                rows="3"
                                placeholder="Please provide a detailed description of this issue"
                            ></b-form-textarea>
                        </b-form-group>
                        <base-button
                            btnLabel="SEND"
                            btnType="submit"
                            btnVariant="primary"
                            class=""
                            @click="onClick"
                        ></base-button>
                    </b-form>
                </div>
            </div>
            <div class="contact-link text-center">
                Existing system user?
                <router-link to="/"> Sign In</router-link>
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
    methods: {
        onClick() {
            this.$toasted.show('hello billo')
        },
    }, // End of Component > methods

    // you can pass a single action as below
    action: {
        text: 'Cancel',
        onClick: (e, toastObject) => {
            toastObject.goAway(0)
        },
    },

    /*
        |--------------------------------------------------------------------------
        | Component > mounted
        |--------------------------------------------------------------------------
        */
    mounted() {}, // End of Component > mounted
} // End of export default
</script>
