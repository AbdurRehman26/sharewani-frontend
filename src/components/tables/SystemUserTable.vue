<template>
    <div class="table-section">
        <b-table :items="listItems" :fields="listFields">
            <template slot="profile" slot-scope="data">
                <div class="profile-area">
                    <router-link to="/">
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
                    </router-link>
                </div>
            </template>

            <template slot="status" slot-scope="data">
                <div class="pending status-view" v-if="data.value == 'pending'">
                    <i class="icon-Loading"></i>
                    <span>Pending</span>
                </div>
                <div
                    class="approved status-view"
                    v-if="data.value == 'approved'"
                >
                    <i class="icon-Check"></i> <span>Approved</span>
                </div>
                <div
                    class="rejected status-view"
                    v-if="data.value == 'rejected'"
                >
                    <i class="icon-Wrong"></i> <span>Rejected</span>
                </div>
            </template>
            <template slot="action" slot-scope="data">
                <div class="action-review">
                    <router-link to="/">
                        <i class="icon-eye-view"></i>
                        <span>{{ data.value }}</span>
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
