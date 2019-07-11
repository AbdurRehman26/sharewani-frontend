<template>
    <div class="wrap-content">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-2">
                    <h2>Alert</h2>
                </div>
                <div class="col-md-10 text-right">
                    <ul>
                        <li>
                            <b-form-group>
                                <b-form-radio-group
                                    v-model="selected"
                                    :options="options"
                                    buttons
                                    button-variant="outline-primary"
                                    :name="filterName"
                                ></b-form-radio-group>
                            </b-form-group>
                        </li>
                        <li>
                            <base-search></base-search>
                        </li>
                        <li>
                            <b-form-group>
                                <b-form-select
                                    id="input-3"
                                    class="form-control"
                                    v-model="filterBy"
                                    :options="filterOptions"
                                    required
                                ></b-form-select>
                            </b-form-group>
                        </li>
                        <li>
                            <b-button type="button" variant="primary"
                                >Apply</b-button
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="table-section">
            <b-table :items="items" :fields="fields">
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
                        <i class="icon-check"></i>
                    </div>
                    <div
                        class="inreview indication-icons"
                        v-if="data.value == 'inreview'"
                    >
                        <i class="icon-wrong"></i>
                    </div>
                    <div
                        class="reject indication-icons"
                        v-if="data.value == 'reject'"
                    >
                        <i class="icon-wrong"></i>
                    </div>
                </template>
                <template slot="documentation" slot-scope="data">
                    <div
                        class="pending indication-icons"
                        v-if="data.value == 'pending'"
                    >
                        <i class="icon-check"></i>
                    </div>
                    <div
                        class="inreview indication-icons"
                        v-if="data.value == 'inreview'"
                    >
                        <i class="icon-wrong"></i>
                    </div>
                    <div
                        class="reject indication-icons"
                        v-if="data.value == 'reject'"
                    >
                        <i class="icon-wrong"></i>
                    </div>
                </template>
                <template slot="risk_rating" slot-scope="data">
                    <div
                        class="pending indication-icons"
                        v-if="data.value == 'pending'"
                    >
                        <i class="icon-check"></i>
                    </div>
                    <div
                        class="inreview indication-icons"
                        v-if="data.value == 'inreview'"
                    >
                        <i class="icon-wrong"></i>
                    </div>
                    <div
                        class="reject indication-icons"
                        v-if="data.value == 'reject'"
                    >
                        <i class="icon-wrong"></i>
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
        <pagination></pagination>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import pagination from '@/components/Pagination.vue'
export default {
    components: {
        pagination,
    },

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
    }, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            selected: '1',
            fields: [],
            items: [],
            options: [
                { text: 'All', value: '1' },
                { text: 'Pending', value: '2' },
                { text: 'In Review', value: '3' },
            ],
            filterName: null,
            filterBy: null,
            filterOptions: [
                { text: 'Filter by', value: null },
                'Name Screening',
                'Documentation',
                'Risk Rating',
                'Status',
            ],
        }
    }, // End of Component > data

    /*
    |--------------------------------------------------------------------------
    | Component > computed
    |--------------------------------------------------------------------------
    */
    computed: { ...mapGetters(['systemUserTable']) }, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        initializeData() {
            //system log table
            let systemUserTableFields = this.systemUserTable.alerts.fields //get user data from store
            this.fields = systemUserTableFields //push data into array
            let systemUserTableitems = this.systemUserTable.alerts.items //get user data from store
            this.items = systemUserTableitems //push data into array
        },
    }, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {
        this.initializeData()
    }, // End of Component > mounted
} // End of export default
</script>
