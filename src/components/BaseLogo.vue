<template id="">
    <div class="logo">
        <router-link :class="anchorClass" :to="anchorLink">
            <img src="@/assets/images/logo.png" />
        </router-link>
    </div>
</template>
<script>
export default {
    /*
        |--------------------------------------------------------------------------
        | Component > props
        |--------------------------------------------------------------------------
        */
    props: {
        anchorClass: {
            type: String,
            default: '',
        },
        anchorLink: {
            type: String,
            default: '/',
        },
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
