<template>
    <div class="table-alert">
        <b-table :items="listItems" :fields="listFields">
            <template slot="profile" slot-scope="data">
                <div class="profile-area">
                    <div
                        class="profile-pic"
                        :style="{
                            'background-image':
                                'url(' +
                                require('@/assets/images/members/' +
                                    data.value +
                                    '') +
                                ')',
                        }"
                    ></div>
                </div>
            </template>
            <template slot="name_screening" slot-scope="data">
                <div
                    class="pending indication-icons"
                    v-if="data.value == 'pending'"
                >
                    <i class="icon-Check"></i>
                </div>
                <div
                    class="inreview indication-icons"
                    v-if="data.value == 'inreview'"
                >
                    <i class="icon-Wrong"></i>
                </div>
                <div
                    class="reject indication-icons"
                    v-if="data.value == 'reject'"
                >
                    <i class="icon-Wrong"></i>
                </div>
            </template>
            <template slot="documentation" slot-scope="data">
                <div
                    class="pending indication-icons"
                    v-if="data.value == 'pending'"
                >
                    <i class="icon-Check"></i>
                </div>
                <div
                    class="inreview indication-icons"
                    v-if="data.value == 'inreview'"
                >
                    <i class="icon-Wrong"></i>
                </div>
                <div
                    class="reject indication-icons"
                    v-if="data.value == 'reject'"
                >
                    <i class="icon-Wrong"></i>
                </div>
            </template>
            <template slot="risk_rating" slot-scope="data">
                <div
                    class="pending indication-icons"
                    v-if="data.value == 'pending'"
                >
                    <i class="icon-Check"></i>
                </div>
                <div
                    class="inreview indication-icons"
                    v-if="data.value == 'inreview'"
                >
                    <i class="icon-Wrong"></i>
                </div>
                <div
                    class="reject indication-icons"
                    v-if="data.value == 'reject'"
                >
                    <i class="icon-Wrong"></i>
                </div>
            </template>
            <template slot="status" slot-scope="data">
                <div class="status-review" v-if="data.value == 'review'">
                    <router-link to="/">
                        <i class="icon-review"></i>
                        <span>Review</span>
                    </router-link>
                </div>
                <div class="status-review" v-if="data.value == 'lock'">
                    <router-link class="disable" to="/">
                        <i class="icon-change-password"></i>
                        <span>In Review</span>
                    </router-link>
                </div>
            </template>
        </b-table>
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
        listItems: {
            type: Array,
            default: null,
        },
        listFields: {
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
