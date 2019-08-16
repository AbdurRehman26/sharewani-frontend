<template>
    <div>
        <div class="header-fix">
            <base-logo></base-logo>
        </div>
        <div @click="$emit('sidemenu')" class="responsive-sidebar-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div
            @click="mainMain ^= true"
            v-if="menuListing.length > 0"
            class="responsive-header-menu"
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
        <header
            :class="
                (stepStyle == true ? 'step-menu-header' : '',
                mainMain == true ? 'show-menu' : '')
            "
        >
            <div
                class="header-menu navigation"
                :class="stepStyle == true ? 'step-menu' : ''"
            >
                <div
                    v-if="$route.meta.noSidebar == true"
                    class="logo-container"
                >
                    <base-logo anchorClass="colorLogo"></base-logo>
                </div>
                <ul class="menu-list">
                    <li
                        @click="mainMain = false"
                        v-for="(list, index) in menuListing"
                        :key="index"
                        :class="[
                            $route.meta.sessionStep == list.sessionStep
                                ? 'router-link-exact-active'
                                : '',
                            $route.meta.sessionStep >= list.sessionStep
                                ? 'router-link-active'
                                : '',
                        ]"
                    >
                        <router-link
                            :to="list.anchorLink"
                            :class="[
                                $route.name.toString() === list.name.toString()
                                    ? 'router-link-active router-link-exact-active'
                                    : '',
                            ]"
                        >
                            <span v-if="stepStyle" class="point">
                                <i class="icon-check-circle"></i>
                            </span>
                            <span>{{ list.menuLabel }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="profile-block" v-if="$route.meta.noSidebar != true">
                <login-detail> </login-detail>
                <update-profile-popup></update-profile-popup>
                <change-password-popup></change-password-popup>
            </div>
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
        /**
         * Value to determine the current compose mode which
         * varies between 'add' and 'edit'
         */
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
    mounted() {}, // End of Component > mounted
} // End of export default
</script>
