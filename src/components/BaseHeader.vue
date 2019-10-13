<template>
    <div>
        <header class="header-section">
            <div class="header-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 text-center text-lg-left">
                            <!-- logo -->

                            <base-logo></base-logo>
                        

                        </div>
                        <div class="col-xl-6 col-lg-5">
                            <form class="header-search-form">
                                <input
                                    type="text"
                                    placeholder="Search on divisima ...."
                                />
                                <button><i class="flaticon-search"></i></button>
                            </form>
                        </div>
                        <div class="col-xl-4 col-lg-5">
                            <div class="user-panel">
                                <div class="up-item">
                                    <i class="flaticon-profile"></i>
                                    <a href="#">Sign</a> In or
                                    <a href="#">Create Account</a>
                                </div>
                                <div class="up-item">
                                    <div class="shopping-card">
                                        <i class="flaticon-bag"></i>
                                        <span>0</span>
                                    </div>
                                    <a href="#">Shopping Cart</a>
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

                            <router-link tag="li" :to="{ name : 'home' }"><a href="#"> Home </a></router-link>

                            <router-link tag="li" :to="{ name : 'products' }"><a href="#"> Products </a></router-link>

                            <router-link tag="li" :to="{ name : 'contact-us' }"><a href="#"> Contact Us </a></router-link>



                        <li>
                            <a href="#">Pages</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="./product.html">Product Page</a>
                                </li>
                                <li>
                                    <a href="./category.html">Category Page</a>
                                </li>
                                <li><a href="./cart.html">Cart Page</a></li>
                                <li>
                                    <a href="./checkout.html">Checkout Page</a>
                                </li>
                                <li>
                                    <a href="./contact.html">Contact Page</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
import loginDetail from '@/components/LoginDetail.vue'
import updateProfilePopup from '@/components/popups/UpdateProfilePopup.vue'
import changePasswordPopup from '@/components/popups/ChangePasswordPopup.vue'
import { directive as onClickOutside } from 'vue-on-click-outside'
export default {
    components: {
        loginDetail,
        changePasswordPopup,
        updateProfilePopup,
    },
    directives: {
        onClickOutside: onClickOutside,
    },
    /*
    |--------------------------------------------------------------------------
    | Component > props
    |--------------------------------------------------------------------------
    */
    props: {
        menuListing: {
            type: Array,
            default: null,
        },
        stepStyle: {
            type: Boolean,
            default: false,
        },
    }, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            mainMain: false,
            image: 'profile-pic.png',
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
    methods: {}, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {
        console.log('header')
    }, // End of Component > mounted
} // End of export default
</script>
