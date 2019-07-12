<template>
    <div>
        <span
            class="approved status-view"
            v-if="statusType == 'active' || statusType == 'Active'"
        >
            <i class="icon-check"></i> <span>Active</span>
        </span>
        <span
            class="locked status-view"
            v-if="statusType == 'locked' || statusType == 'Locked'"
        >
            <i class="icon-change-password"></i> <span>Locked</span>
        </span>
        <span
            class="rejected status-view"
            v-if="statusType == 'archived' || statusType == 'Archived'"
        >
            <i class="icon-wrong"></i> <span>Archived</span>
        </span>
        <span
            class="pending status-view"
            v-if="statusType == 'pending' || statusType == 'Pending'"
        >
            <i class="icon-loading"></i>
            <span>Pending</span>
        </span>
        <span
            class="approved status-view"
            v-if="statusType == 'approved' || statusType == 'Approved'"
        >
            <i class="icon-check"></i> <span>Approved</span>
        </span>
        <span
            class="rejected status-view"
            v-if="statusType == 'rejected' || statusType == 'Rejected'"
        >
            <i class="icon-wrong"></i> <span>Rejected</span>
        </span>
        <span
            class="rejected status-view"
            v-if="statusType == 'high risk' || statusType == 'High Risk'"
        >
            <i class="icon-high-risk"></i> <span>High Risk</span>
        </span>
        <span
            class="pending status-view"
            v-if="statusType == 'medium risk' || statusType == 'Medium Risk'"
        >
            <i class="icon-medium-risk"></i> <span>Medium Risk</span>
        </span>
        <span
            class="approved status-view"
            v-if="statusType == 'low risk' || statusType == 'Low Risk'"
        >
            <i class="icon-low-risk"></i> <span>Low Risk</span>
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
        statusType: {
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
