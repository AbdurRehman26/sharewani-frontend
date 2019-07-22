<template>
    <div class="wrap-content">
        <div class="filter-section">
            <div class="row">
                <div class="col-md-4">
                    <h2>Import Data</h2>
                </div>
            </div>
        </div>

        <div class="data-import">
            <div class="row">
                <div
                    class="col-lg-4 col-md-6"
                    v-for="(data, index) in listData"
                    :key="index"
                >
                    <card-data
                        :logo="data.logo"
                        :name="data.name"
                        :lastUpdate="data.lastUpdate"
                        :totalRecord="data.totalRecord"
                        @updateData="uploadModal()"
                    ></card-data>
                </div>
            </div>
        </div>

        <div class="config-list" ref="listingArea">
            <ul v-show="listVal <= 1500">
                <li
                    v-for="(list, index) in menuListing.slice(0, 8)"
                    :key="index"
                >
                    <router-link :to="list.anchorLink">
                        <span>{{ list.menuLabel }}</span>
                    </router-link>
                </li>
                <li
                    class="open-dropdown"
                    :class="[
                        $route.meta.responsiveMenuItem == true
                            ? 'router-link-exact-active'
                            : '',
                    ]"
                >
                    <a @click="listDropdown ^= true" href="javascript:void(0);">
                        <i class="icon-dropdown-icon"></i>
                    </a>

                    <div v-if="listDropdown" class="dropdown-open">
                        <ul>
                            <li
                                v-for="(listo, index) in menuListing.slice(
                                    8,
                                    menuListing.length
                                )"
                                :key="index"
                            >
                                <router-link :to="listo.anchorLink">
                                    <span>{{ listo.menuLabel }}</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <ul v-show="listVal >= 1499">
                <li v-for="(list, index) in menuListing" :key="index">
                    <router-link :to="list.anchorLink">
                        <span>{{ list.menuLabel }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="config-card-block">
            <router-view @item-length="tableItemLength" />
            <pagination v-if="tableItemData > 9"></pagination>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import cardData from '@/components/CardData.vue'
export default {
    components: {
        cardData,
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
            menuListing: [
                {
                    anchorLink: '/configuration/idenfo-engine/',
                    menuLabel: 'Risk Factor',
                },
                {
                    anchorLink: '/configuration/idenfo-engine/risk-rating',
                    menuLabel: 'Risk Rating',
                },
                {
                    anchorLink:
                        '/configuration/idenfo-engine/document-verification-factor',
                    menuLabel: 'Document Verification',
                },
                {
                    anchorLink:
                        '/configuration/idenfo-engine/name-screen-score',
                    menuLabel: 'Name Screening',
                },
                {
                    anchorLink: '/configuration/idenfo-engine/nationality',
                    menuLabel: 'Nationality',
                },
                {
                    anchorLink: '/configuration/idenfo-engine/country',
                    menuLabel: 'Country',
                },
                {
                    anchorLink: '/configuration/idenfo-engine/state',
                    menuLabel: 'State',
                },
                {
                    anchorLink: '/configuration/idenfo-engine/work',
                    menuLabel: 'Work Type',
                },
                {
                    anchorLink: '/configuration/idenfo-engine/industry',
                    menuLabel: 'Industry',
                },
                {
                    anchorLink: '/configuration/idenfo-engine/product',
                    menuLabel: 'Product Type',
                },
                {
                    anchorLink: '/configuration/idenfo-engine/relationship',
                    menuLabel: 'Relationship',
                },
                {
                    anchorLink: '/configuration/idenfo-engine/channel',
                    menuLabel: 'Channel Type',
                },
                {
                    anchorLink:
                        '/configuration/idenfo-engine/purpose-of-action',
                    menuLabel: 'Purpose of Action',
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
