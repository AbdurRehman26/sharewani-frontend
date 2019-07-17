<template>
    <span :class="cssClass">
        <a href="javascript:void(0)" @click="$emit('click')">
            <i :class="icon"></i>
            <p>{{ label }}</p>
            <!--         <span v-for="(list, index) in actionType" :key="index">
            <a href="javascript:void(0)" :class="list.cssClass">
    <div class="action-review">
        <span v-for="(list, index) in actionType" :key="index">
            <a
                @click="$emit('click')"
                href="javascript:void(0)"
                :class="list.cssClass"
            >
                <i :class="list.icon"></i>
                <p>{{ list.text }}</p> -->
            <!--             <div v-if="list.text === 'Archive' || list.text === 'archive'">

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
            </div> -->
        </a>
    </span>
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
        cssClass: {
            type: String,
            default: null,
        },
        icon: {
            type: String,
            default: null,
        },
        label: {
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
