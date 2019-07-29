<template>
    <div class=" customers-info-section">
        <div class="row">
            <div class="col-md-3 col-sm-12 text-center">
                <div class="customer-profile">
                    <img
                        :src="
                            require('@/assets/images/dummy/' + profilePic + '')
                        "
                    />
                </div>

                <div class="pending status-view">
                    <i class="icon-loading"></i>
                    <span>Pending</span>
                </div>
            </div>
            <div class="col-md-9 col-sm-12">
                <ul v-for="(list, index) in customerDetails" :key="index">
                    <li>
                        <div class="seprator-section">
                            <div class="row">
                                <div class="col-md-12">
                                    <h3>{{ list.heading }}</h3>
                                </div>
                                <div
                                    class="col-md-6"
                                    v-for="(descriptions,
                                    index) in list.descriptions"
                                    :key="index"
                                >
                                    <ul class="row">
                                        <li class="col-md-6">
                                            <label>{{
                                                descriptions.title
                                            }}</label>
                                        </li>
                                        <li class="col-md-6">
                                            <span
                                                :class="
                                                    descriptions.alert == true
                                                        ? 'danger'
                                                        : ''
                                                "
                                                >{{ descriptions.detail }}</span
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
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
        customerDetails: {
            type: Array,
            default: null,
        },

        profilePic: {
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
