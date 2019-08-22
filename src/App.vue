<template>
    <div id="app">
        <div
            class="main-content"
            :class="$route.meta.noSidebar == true ? 'content-full-width' : ''"
        >
            <base-sidebar
                :class="sidebarResponsive == true ? 'show-sidebar' : ''"
                v-if="!$route.meta.noSidebar"
                @onClick="sidebarResponsive = false"
                @closeSidemenu="closeSidebar"
            ></base-sidebar>
            <router-view @responsiveSideBar="sidebarResponsive ^= true" />
        </div>
    </div>
</template>

<style lang="scss">
@import 'assets/scss/app.scss';
</style>
<script>
export default {
    components: {},
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
            sidebarResponsive: false,
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
        closeSidebar() {
            this.sidebarResponsive = false
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
