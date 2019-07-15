<template>
    <div class="status-type-icon">
        <span
            v-if="
                statusTypeIcon == 'sanctions' || statusTypeIcon == 'Sanctions'
            "
            :class="iconTheme"
        >
            <i class="icon-cross-with-circle"></i>
        </span>
        <span
            v-if="
                statusTypeIcon == 'high risk' ||
                    statusTypeIcon == 'High Risk' ||
                    statusTypeIcon == 'High risk'
            "
            :class="iconTheme"
        >
            <i class="icon-cross-with-circle danger"></i>
        </span>
        <span
            v-if="statusTypeIcon == 'pending' || statusTypeIcon == 'Pending'"
            :class="iconTheme"
        >
            <i class="icon-tick-with-circle pending"></i>
        </span>
    </div>
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
        /**
         * Value to determine the current compose mode which
         * varies between 'add' and 'edit'
         */
        mode: {
            type: String,
            default: 'add',
        },
        statusTypeIcon: {
            type: String,
            default: null,
        },
        iconTheme: {
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
