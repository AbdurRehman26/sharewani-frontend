<template>
    <div class="card custom-card">
        <div
            class="logo"
            :style="{
                'background-image':
                    'url(' +
                    require('@/assets/images/data-image/' + logo + '') +
                    ')',
            }"
        ></div>
        <h4>{{ name }}</h4>
        <p>{{ lastUpdate }}</p>
        <p>{{ totalRecord }}</p>
        <b-button @click="$emit('updateData')" variant="primary"
            >Update Data Set</b-button
        >
        <b-button @click="$emit('currentData')" variant="link"
            ><i class="icon-cloud"></i> Download Current Data Set</b-button
        >
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
        logo: {
            type: String,
            default: null,
        },
        name: {
            type: String,
            default: null,
        },

        lastUpdate: {
            type: String,
            default: null,
        },

        totalRecord: {
            type: String,
            default: null,
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
