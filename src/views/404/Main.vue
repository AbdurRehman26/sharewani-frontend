<template>
    <div class="not-found-main">
        <div class="content-area">
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
    methods: {}, // End of Component > methods
}
</script>
