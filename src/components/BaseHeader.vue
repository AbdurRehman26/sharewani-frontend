<template>
    <div>
        <div class="header-fix"></div>
        <header :class="stepStyle == true ? 'step-menu-header' : ''">
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
                <div class="profile-main">
                    <div class="profile-image">
                        <img
                            :src="require('@/assets/images/profile-pic.png')"
                        />
                    </div>
                    <div class="profile-detail" @click="open">
                        <h4>Sammy Lawson</h4>
                        <p>Admin</p>
                        <i class="icon-caret-down"></i>
                    </div>
                    <div
                        class="profile-popover"
                        v-if="showPopover"
                        v-on-click-outside="close"
                    >
                        <div class="nav-dropdown">
                            <ul>
                                <li>
                                    <a
                                        href="javascript:void(0);"
                                        v-b-modal.update-profile-popup
                                    >
                                        <i class="icon-person"></i>
                                        <span>Update Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0);"
                                        v-b-modal.change-password-popup
                                    >
                                        <i class="icon-change-password"></i>
                                        <span>Change Password</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i class="icon-sign-out"></i>
                                        <span>Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <update-profile-popup></update-profile-popup>
                <change-password-popup></change-password-popup>
            </div>
        </header>
    </div>
</template>

<script>
import updateProfilePopup from '@/components/popups/UpdateProfilePopup.vue'
import changePasswordPopup from '@/components/popups/ChangePasswordPopup.vue'
import { directive as onClickOutside } from 'vue-on-click-outside'
export default {
    components: {
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
            showPopover: false,
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
        open() {
            this.showPopover = true
        },
        close() {
            this.showPopover = false
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
