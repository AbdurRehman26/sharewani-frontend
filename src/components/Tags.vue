<template>
    <div class="tags-section">
        <div class="tags">
            <i :class="tagIcon"></i>
            <label>{{ tagHeading }}</label>
        </div>

        <div class="tag-status">
            <span
                class="danger"
                v-if="statusType == 'rejected' || statusType == 'Rejected'"
            >
                <i class="icon-wrong"></i>
            </span>
            <span
                class="success"
                v-if="statusType == 'active' || statusType == 'Active'"
            >
                <i class="icon-check"></i>
            </span>
        </div>
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
        statusType: {
            type: String,
            default: null,
        },

        tagIcon: {
            type: String,
            default: null,
        },
        tagHeading: {
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
