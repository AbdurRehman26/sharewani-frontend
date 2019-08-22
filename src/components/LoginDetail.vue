<template>
    <div class="profile-main">
        <div
            class="profile-image"
            :style="{
                'background-image':
                    'url(' + require('@/assets/images/' + image + '') + ')',
            }"
        ></div>
        <div class="profile-detail" @click="open">
            <h4>Sammy Lawson</h4>
            <p>Super Admin</p>
            <i class="icon-caret-down"></i>
        </div>
        <login-popover
            v-if="showPopover"
            v-on-click-outside="close"
        ></login-popover>
    </div>
</template>

<script>
import loginPopover from '@/components/LoginPopover.vue'
import { directive as onClickOutside } from 'vue-on-click-outside'
export default {
    components: {
        loginPopover,
    },
    directives: {
        onClickOutside: onClickOutside,
    },
    /*
    |--------------------------------------------------------------------------
    | Component > props
    |--------------------------------------------------------------------------
    */
    props: {}, // End of Component > props

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
