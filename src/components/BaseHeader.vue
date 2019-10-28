<template>
    <div>
        <header class="header-section">
            <div class="header-top">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-2 text-center text-lg-left">
                            <base-logo></base-logo>
                        </div>

                        <div class="col-xl-4 col-lg-5">
                            <div class="user-panel">
                                <div v-userDirective="user" class="up-item">
                                    <facebook-component
                                        @post-data="login"
                                    ></facebook-component>
                                </div>

                                <div v-if="user && user.id" class="up-item">
                                    <font-awesome-icon icon="user" />

                                    <a href="#">{{ user.name }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="main-navbar">
                <div class="container">
                    <!-- menu -->
                    <ul class="main-menu">
                        <router-link tag="li" :to="{ name: 'home' }"
                            ><a href="#"> Home </a></router-link
                        >

                        <router-link tag="li" :to="{ name: 'product.list' }"
                            ><a href="#"> Products </a></router-link
                        >

                        <router-link v-if="!user" v-b-modal.login-popup tag="li" :to="{ name: 'order.list' }"
                            ><a href="#"> My Orders </a></router-link
                        >

                        <router-link v-if="user" tag="li" :to="{ name: 'order.list' }"
                            ><a href="#"> My Orders </a></router-link
                        >


                        <router-link tag="li" :to="{ name: 'product.my' }"
                            ><a href="#"> My Products </a></router-link
                        >

                        <router-link tag="li" :to="{ name: 'contact-us' }"
                            ><a href="#"> Contact Us </a></router-link
                        >

                    </ul>
                </div>
            </nav>
        </header>

        <login-info-popup></login-info-popup>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { directive as onClickOutside } from 'vue-on-click-outside'
import userDirective from '@/directive/user' // Waves directive
import FacebookComponent from '@/components/BaseFacebookComponent'
import authResource from '@/api/auth'
import loginInfoPopup from '@/components/popups/loginInfoPopup'

export default {
    components: {
        FacebookComponent,
        loginInfoPopup
    },
    directives: {
        onClickOutside: onClickOutside,
        userDirective,
    },
    /*
    |--------------------------------------------------------------------------
    | Component > props
    |--------------------------------------------------------------------------
    */
    computed: {
        ...mapGetters(['user']),
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
    watch: {
        user(value) {
            window.location.reload('/');
        },
    }, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        async login(postData) {
            const response = await this.$store.dispatch('login', postData)
            if(response){
                window.location.reload('/');
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
