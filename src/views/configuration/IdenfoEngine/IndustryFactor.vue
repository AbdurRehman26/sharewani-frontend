<template>
    <div class="infoengine">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-4">
                    <h2>Industry Factor</h2>
                </div>
                <div class="col-md-8 text-right">
                    <ul>
                        <li>
                            <base-search
                                :placeholder="'Search industry'"
                            ></base-search>
                        </li>
                        <li>
                            <b-button type="button" variant="primary"
                                >Apply</b-button
                            >
                        </li>
                        <li>
                            <b-button type="button" variant="secondary"
                                >+ Add Industry</b-button
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="table-section m-b-30">
            <b-table :items="items" :fields="fields">
                <template slot="worktypeimpact" slot-scope="data">
                    <a href="#" class="work-impact">
                        <span>{{ data.value }}</span>
                        <i class="icon-caret-right"></i>
                        <div class="custom-popover">
                            <ul>
                                <li>
                                    <label
                                        >Self-Employed/Business Owner:
                                    </label>
                                    <span class="high">High</span>
                                </li>
                                <li>
                                    <label>Salaried-Executive Level: </label>
                                    <span class="high">High</span>
                                </li>
                                <li>
                                    <label>Salaried-General: </label>
                                    <span class="low">Low</span>
                                </li>
                                <li>
                                    <label>Homemaker: </label>
                                    <span class="low">Low</span>
                                </li>
                                <li>
                                    <label>Student: </label>
                                    <span class="low">Low</span>
                                </li>
                                <li>
                                    <label>Unemployed: </label>
                                    <span class="low">Low</span>
                                </li>
                                <li>
                                    <label>Retired: </label>
                                    <span class="low">Low</span>
                                </li>
                            </ul>
                        </div>
                    </a>
                </template>
                <template slot="action" slot-scope="data">
                    <div class="action-review">
                        <a
                            href="/"
                            v-for="(list, index) in data.value"
                            :key="index"
                        >
                            <div v-if="list.text === 'Modify'">
                                <i class="icon-edit"></i>
                                <span>{{ list.text }}</span>
                            </div>
                            <div v-if="list.text === 'Archive'">
                                <i class="icon-trash"></i>
                                <span>{{ list.text }}</span>
                            </div>
                        </a>
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
        ...mapGetters(['configuration']),
    }, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        initializeData() {
            //system log table
            let configTableFields = this.configuration.idenfoEngine.industry
                .fields //get user data from store
            this.fields = configTableFields //push data into array
            let configTableItems = this.configuration.idenfoEngine.industry
                .items //get user data from store
            this.items = configTableItems //push data into array
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
