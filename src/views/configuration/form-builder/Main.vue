<template>
    <div class="wrap-content form-registration">
        <div class="filter-section row-min-space">
            <div class="row">
                <div class="col-md-6 filter-title-section">
                    <h2>Registration Form Builder</h2>
                </div>
                <div class="col-md-6 text-right">
                    <div class="row">
                        <div class="col-md-8 text-right">
                            <base-button
                                v-b-modal.export-process-popup
                                btnLabel="Preview Registration Form"
                                btnType="button"
                                btnVariant="link"
                            ></base-button>
                        </div>
                        <div class="col-md-4 text-right">
                            <base-button
                                btnLabel="Update Form"
                                btnType="submit"
                                btnVariant="primary"
                            ></base-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="config-list" ref="listingArea">
            <div v-show="listVal <= 850" class="config-list-dropdown">
                <b-form-group
                    id="input-group-5"
                    label="Form Builder"
                    label-for="form-builder"
                >
                    <b-form-select
                        id="form-builder"
                        class="form-control"
                        v-model="menuListingChanges"
                        :options="menuListing"
                        v-on:change="onChange"
                    >
                    </b-form-select>
                </b-form-group>
            </div>
            <ul v-show="listVal >= 850">
                <li v-for="(list, index) in menuListing" :key="index">
                    <router-link :to="list.value">
                        <span>{{ list.text }}</span>
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="form-builder-area">
            <router-view />
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
    props: {}, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            menuListingChanges: '/configuration/form-builder',
            listVal: null,
            menuListing: [
                {
                    value: '/configuration/form-builder',
                    text: 'Setup Profile',
                },
                {
                    value: '/configuration/form-builder/account-info',
                    text: 'Account Info',
                },
            ],
        }
    }, // End of Component > data

    /*
    |--------------------------------------------------------------------------
    | Component > computed
    |--------------------------------------------------------------------------
    */
    computed: {
        ...mapGetters(['configurationData']),
    }, // End of Component > computed

    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        listWidthVal() {
            this.listVal = this.$refs.listingArea.offsetWidth
        },
        tableItemLength(val) {
            this.tableItemData = val
        },
        initializeData() {
            //system log table
            let configImportFields = this.configurationData.importData //get user data from store
            this.listData = configImportFields //push data into array
        },
        close() {
            this.listDropdown = false
        },
        tabFilter(index) {
            this.tabData = index
        },
        onChange() {
            this.$router.push('' + this.menuListingChanges + '')
        },
    }, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {
        this.listWidthVal()
        this.initializeData()
    }, // End of Component > mounted
} // End of export default
</script>
