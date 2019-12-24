<template>
    <div>
        <header class="header-section">
            <div class="header-top">
                <div class="row">
                    <div class="user-panel">
                        <div class="up-item">
                            <facebook-component
                                v-userDirective="user"
                                @post-data="login"
                            ></facebook-component>

                            <font-awesome-icon
                                class="user-icon"
                                v-if="user && user.id"
                                icon="user"
                            />

                            <span>
                                <a
                                    class="user-name"
                                    v-if="user && user.id"
                                    href="#"
                                    >{{ user.name }}</a
                                >
                            </span>
                        </div>

                        <div class="up-item"></div>
                    </div>

                    <div class="col-xl-4 col-lg-5"></div>

                    <div class="col-lg-3 text-center text-lg-left">
                        <base-logo></base-logo>
                    </div>
                </div>

                <div class="container"></div>
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
@media (max-width: 520px) {
    .up-item {
        margin-left: 220%;
    }
}

@media (max-width: 430px) {
    .up-item {
        margin-left: 60%;
    }
}

@media (max-width: 400px) {
    .up-item {
        margin-left: 54%;
    }
}


@media (max-width: 350px) {
    .up-item {
        margin-left: 50%;
    }
}

/* ----------- Non-Retina Screens ----------- */
@media screen and (min-device-width: 800px) {
    .user-icon {
        border-radius: 10px;
        margin-left: 50px;
        margin-top: 50px;
    }

    .user-name {
        font-family: 'ProximanovaBold';
        font-size: 26px;
        margin-top: 50px;
        height: 50px;
        border-radius: 10px;
    }
}

/* ----------- Retina Screens ----------- */
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (min-device-width: 800px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    .user-icon {
        border-radius: 10px;
        margin-left: 50px;
        margin-top: 50px;
    }
    .user-name {
        margin-top: 50px;
        height: 50px;
        border-radius: 10px;
        margin-left: 10px;
    }
    .user-item {
        margin-left: 10px;
    }
}

@media (max-width: 480px) {
    .user-icon {
        border-radius: 10px;
        margin-left: 14px;
        margin-top: 50px;
    }
    .user-name {
        margin-top: 50px;
        height: 50px;
        border-radius: 10px;
        margin-left: 10px;
    }
    .user-item {
        margin-left: 10px;
    }
}

.header-section .row {
    margin-right: 0px;
    margin-left: 0px;
}
</style>
