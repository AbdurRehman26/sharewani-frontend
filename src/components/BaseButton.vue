<template>
    <b-button
        :type="btnType"
        :variant="btnVariant"
        :class="cssClass"
        @click="$emit('click')"
        ><span class="btn-text">{{ btnLabel }}</span>
        <span class="loader"></span>
    </b-button>
</template>

<script>
export default {
    components: {},
    /*
        |--------------------------------------------------------------------------
        | Component > props
        |--------------------------------------------------------------------------
        */
    props: {
        btnType: {
            type: String,
            default: 'Submit',
        },
        btnVariant: {
            type: String,
            default: 'primary',
        },
        cssClass: {
            type: String,
        },
        btnLabel: {
            type: String,
        },
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
