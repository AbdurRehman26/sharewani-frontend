<template>
    <div class="action-review">
        <a
            href="javascript:void(0);"
            v-for="(list, index) in actionType"
            :key="index"
        >
            <div v-if="list.text === 'Modify' || list.text === 'modify'">
                <i class="icon-edit"></i>
                <span>{{ list.text }}</span>
            </div>
            <div v-if="list.text === 'Archive' || list.text === 'archive'">
                <i class="icon-trash"></i>
                <span>{{ list.text }}</span>
            </div>
            <div v-if="list.text === 'Activate' || list.text === 'activate'">
                <i class="icon-done"></i>
                <span>{{ list.text }}</span>
            </div>
            <div v-if="list.text === 'in review' || list.text === 'In Review'">
                <i class="icon-lock_outline"></i>
                <span>{{ list.text }}</span>
            </div>
            <div v-if="list.text === 'review' || list.text === 'Review'">
                <i class="icon-review"></i>
                <span>{{ list.text }}</span>
            </div>
        </a>
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
        actionType: {
            type: Array,
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
