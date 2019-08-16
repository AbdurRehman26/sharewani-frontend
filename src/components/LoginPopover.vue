<template>
    <div class="profile-popover">
        <div class="nav-dropdown">
            <ul>
                <li @click="mainMain = false">
                    <a
                        href="javascript:void(0);"
                        v-b-modal.update-profile-popup
                    >
                        <i class="icon-person"></i>
                        <span>Update Profile</span>
                    </a>
                </li>
                <li @click="mainMain = false">
                    <a
                        href="javascript:void(0);"
                        v-b-modal.change-password-popup
                    >
                        <i class="icon-change-password"></i>
                        <span>Change Password</span>
                    </a>
                </li>
                <li @click="mainMain = false">
                    <a href="/">
                        <i class="icon-sign-out"></i>
                        <span>Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { directive as onClickOutside } from 'vue-on-click-outside'
export default {
    components: {},
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
    }, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            showPopover: false,
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
