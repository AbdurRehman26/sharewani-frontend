<template>
    <div class="wrap-content">
        <div class="data-import small-card">
            <div class="row">
                <div
                    class="col-lg-3 col-md-6"
                    v-for="(data, index) in listData"
                    :key="index"
                    :class="index == tabData ? 'active' : ''"
                    @click="tabFilter(index)"
                >
                    <card-data
                        :logo="data.logo"
                        :name="data.name"
                        :description="data.description"
                    ></card-data>
                </div>
            </div>
        </div>

        <div v-if="tabData == 0 || tabData == 1">
            <div class="config-list" ref="listingArea">
                <ul v-show="listVal <= 1700">
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
                        <a
                            @click="listDropdown ^= true"
                            href="javascript:void(0);"
                        >
                            <i class="icon-dropdown-icon"></i>
                        </a>

                        <div
                            v-if="listDropdown"
                            class="dropdown-open"
                            v-on-click-outside="close"
                        >
                            <ul>
                                <li
                                    v-for="(listo, index) in menuListing.slice(
                                        8,
                                        menuListing.length
                                    )"
                                    :key="index"
                                    @click="listDropdown ^= true"
                                >
                                    <router-link :to="listo.anchorLink">
                                        <span>{{ listo.menuLabel }}</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul v-show="listVal >= 1699">
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

        <!-- <div v-if="tabData == 1"></div> -->

        <div v-if="tabData == 2">
            <div class="row">
                <div class="col-md-12">
                    <div class="config-card-block radius-10px">
                        <upload-file></upload-file>
                    </div>
                </div>
                <div class="col-md-2"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import cardData from '@/components/CardData.vue'
import pagination from '@/components/Pagination.vue'
import uploadFile from '@/components/UploadFile.vue'
import { directive as onClickOutside } from 'vue-on-click-outside'
export default {
    components: {
        cardData,
        pagination,
        uploadFile,
    },

    directives: {
        onClickOutside: onClickOutside,
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
            tabData: 0,
            listData: null,
            tableItemData: null,
            listVal: null,
            listDropdown: false,
            menuListing: [
                {
                    anchorLink: '/configuration/screening-data/',
                    menuLabel: 'Gender',
                },
                {
                    anchorLink: '/configuration/screening-data/deceased',
                    menuLabel: 'Deceased',
                },
                {
                    anchorLink: '/configuration/screening-data/record-status',
                    menuLabel: 'Record Status',
                },
                {
                    anchorLink: '/configuration/screening-data/name-type',
                    menuLabel: 'Name Type',
                },
                {
                    anchorLink: '/configuration/screening-data/descprition-1',
                    menuLabel: 'Description 1',
                },
                {
                    anchorLink: '/configuration/screening-data/descprition-2',
                    menuLabel: 'Description 2',
                },
                {
                    anchorLink: '/configuration/screening-data/descprition-3',
                    menuLabel: 'Description 3',
                },
                {
                    anchorLink: '/configuration/screening-data/role-type',
                    menuLabel: 'Role Type',
                },
                {
                    anchorLink: '/configuration/screening-data/occupation',
                    menuLabel: 'Occupation',
                },
                {
                    anchorLink: '/configuration/screening-data/data-type',
                    menuLabel: 'Data Type',
                },
                {
                    anchorLink:
                        '/configuration/screening-data/sanction-reference',
                    menuLabel: 'Sanctions Reference',
                },
                {
                    anchorLink: '/configuration/screening-data/country',
                    menuLabel: 'Country',
                },
                {
                    anchorLink: '/configuration/screening-data/country-type',
                    menuLabel: 'Country Type',
                },
                {
                    anchorLink: '/configuration/screening-data/indentification',
                    menuLabel: 'Indentification ',
                },
                {
                    anchorLink:
                        '/configuration/screening-data/relationship-type',
                    menuLabel: 'Relationship Type',
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
