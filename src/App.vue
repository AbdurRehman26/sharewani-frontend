<template>
    <div id="app">
        <div class="main-content">
            <base-header></base-header>

            <router-view />

            <base-footer></base-footer>
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
    mounted() {
        console.log('App Vue')
    }, // End of Component > mounted
} // End of export default
</script>
