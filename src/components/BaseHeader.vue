<template>
    <div>
        <header class="header-section">
            <div class="header-top">
                <div class="text-center text-lg-left">
                    <center>
                        <span class="facebook-social-button">
                            <facebook-component
                                v-userDirective="user"
                                @post-data="login"
                            ></facebook-component>

                            <span>
                                <a
                                    v-b-modal.update-profile-popup
                                    class="user-name"
                                    v-if="user && user.id"
                                    href="#"
                                    >{{ user.name }}
                                    <font-awesome-icon
                                        class="user-icon"
                                        v-if="user && user.id"
                                        icon="user"
                                    />
                                </a>
                            </span>
                        </span>

                        <base-logo></base-logo>
                    </center>
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

                        <router-link
                            v-if="user"
                            tag="li"
                            :to="{ name: 'order.list' }"
                            ><a href="#"> My Orders </a></router-link
                        >

                        <router-link tag="li" :to="{ name: 'contact-us' }"
                            ><a href="#"> Contact Us </a></router-link
                        >

                        <li class="last-li-item">
                            <facebook-component
                                v-userDirective="user"
                                @post-data="login"
                            ></facebook-component>

                            <span>
                                <a
                                    v-b-modal.update-profile-popup
                                    class="user-name"
                                    v-if="user && user.id"
                                    href="#"
                                    >{{ user.name }}
                                    <font-awesome-icon
                                        class="user-icon"
                                        v-if="user && user.id"
                                        icon="user"
                                    />
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

        <login-info-popup></login-info-popup>
        <update-profile-popup :user="user"></update-profile-popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { directive as onClickOutside } from 'vue-on-click-outside'
import userDirective from '@/directive/user' // Waves directive
import FacebookComponent from '@/components/BaseFacebookComponent'
import authResource from '@/api/auth'
import loginInfoPopup from '@/components/popups/loginInfoPopup'
import updateProfilePopup from '@/components/popups/UpdateProfilePopup'

export default {
    components: {
        updateProfilePopup,
        FacebookComponent,
        loginInfoPopup,
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
            window.location.reload('/')
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
            if (response) {
                window.location.reload('/')
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

<style>
.header-section .row {
    margin-right: 0px;
    margin-left: 0px;
}


.facebook-social-button .btn.btn-facebook.btn-lg{
    margin-top:20px !important;
}



</style>
