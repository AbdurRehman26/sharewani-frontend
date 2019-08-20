<template>
    <div class="not-found-main">
        <div class="content-area">
            <base-header
                @sidemenu="$emit('responsiveSideBar')"
                :menuListing="menuListing"
            ></base-header>
            <div class="right-panel">
                <not-found></not-found>
                <router-view />
            </div>
        </div>
    </div>
</template>
<script>
import NotFound from '@/views/404/NotFound.vue'
export default {
    components: {
        NotFound,
    },
    data() {
        return {
            menuListing: [],
        }
    },
    /*
    |--------------------------------------------------------------------------
    | Component > computed
    |--------------------------------------------------------------------------
    */
    computed: {}, // End of Component > computed
    methods: {
        /**
         * Handle when the modal is closed
         *
         * @return {void}
         */
    }, // End of Component > methods
}
</script>
