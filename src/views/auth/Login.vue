<template>
    <div class="login-panel">
        <div class="card card-auth  with-shadow">
            <h2 class="auth-heading">
                Login to your account
                <span>
                    Please enter your account credentials.
                </span>
            </h2>
            <div class="auth-body">
                <b-form @submit="onSubmit">
                    <b-form-group
                        id="input-group-1"
                        label="Username"
                        label-for="input-1"
                    >
                        <b-form-input
                            id="input-1"
                            type="text"
                            placeholder="Enter your account username"
                            v-model="username"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        id="input-group-2"
                        label="Password"
                        label-for="input-2"
                    >
                        <b-form-input
                            id="input-2"
                            type="password"
                            placeholder="Enter your account password"
                            v-model="password"
                        ></b-form-input>
                    </b-form-group>
                    <base-button
                        btnLabel="Sign In"
                        btnType="submit"
                        btnVariant="primary"
                        class=""
                        @click="$router.push('/dashboard')"
                    ></base-button>
                    <router-link
                        to="auth/forgot-password"
                        class="btn forgot-link btn-link float-right"
                        >Forgot your password?</router-link
                    >
                </b-form>
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
        return {
            username: '',
            password: '',
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
        // onSubmit(evt) {
        //     if (this.username == 'admin' && this.password == 'admin123') {
        //         this.$toasted.show('Login Sucessfully.', {
        //             icon: {
        //                 name: 'check',
        //                 before: true,
        //             },
        //             className: 'success',
        //         })
        //         var route = this
        //         setTimeout(function() {
        //             route.$router.push('/dashboard')
        //         }, 1000)
        //     } else {
        //         this.$toasted.show('Login Unsucessfully.', {
        //             icon: {
        //                 name: 'error',
        //                 before: true,
        //             },
        //             className: 'danger',
        //         })
        //     }
        // },
    }, // End of Component > methods

    /*
        |--------------------------------------------------------------------------
        | Component > mounted
        |--------------------------------------------------------------------------
        */
    mounted() {}, // End of Component > mounted
} // End of export default
</script>
