<template>
    <div class="wrap-content">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-3">
                    <h2>Data Segment</h2>
                </div>
                <div class="col-md-9 text-right">
                    <ul>
                        <li>
                            <base-search></base-search>
                        </li>
                        <li>
                            <b-button type="button" variant="primary"
                                >Apply</b-button
                            >
                        </li>
                        <li>
                            <b-button type="button" variant="secondary"
                                >+ Add Branches</b-button
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- user management table -->
        <div class="table-section">
            <b-table :items="items" :fields="fields" class="user-roles-table">
                <!-- status slot -->
                <template slot="status" slot-scope="data">
                    <base-status :statusType="data.value"></base-status>
                </template>

                <!-- action slot -->
                <template slot="action" slot-scope="data">
                    <base-action :actionType="data.value"></base-action>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
        }
    }, // End of Component > data

    /*
    |--------------------------------------------------------------------------
    | Component > computed
    |--------------------------------------------------------------------------
    */
    computed: {
        ...mapGetters(['systemUserTable']),
    }, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        initializeData() {
            //system log table
            let systemUserTableFields = this.systemUserTable.branches.fields //get user data from store
            this.fields = systemUserTableFields //push data into array
            let systemUserTableitems = this.systemUserTable.branches.items //get user data from store
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
