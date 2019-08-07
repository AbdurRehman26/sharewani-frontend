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
                <div v-show="listVal <= 1100" class="config-list-dropdown">
                    <b-form-group
                        id="input-group-5"
                        label="Screening Data"
                        label-for="screening-data"
                    >
                        <b-form-select
                            id="screening-data"
                            class="form-control"
                            v-model="menuListingChanges"
                            :options="menuListing"
                            v-on:change="onChange"
                        >
                        </b-form-select>
                    </b-form-group>
                </div>
                <ul v-show="listVal >= 1100 && listVal <= 1700">
                    <li
                        v-for="(list, index) in menuListing.slice(0, 8)"
                        :key="index"
                    >
                        <router-link :to="list.value">
                            <span>{{ list.text }}</span>
                        </router-link>
                    </li>
                    <li
                        class="open-dropdown"
                        :class="[
                            $route.meta.responsiveMenuItem == true
                                ? 'router-link-exact-active'
                                : '' || listDropdown == true
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
                                    <router-link :to="listo.value">
                                        <span>{{ listo.text }}</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul v-show="listVal >= 1699">
                    <li v-for="(list, index) in menuListing" :key="index">
                        <router-link :to="list.value">
                            <span>{{ list.text }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="config-card-block">
                <router-view @item-length="tableItemLength" />
            </div>
        </div>

        <!-- <div v-if="tabData == 1"></div> -->

        <div v-if="tabData == 2">
            <div class="row">
                <div class="col-md-12">
                    <div class="config-card-block card sm-radius">
                        <upload-file></upload-file>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import cardData from '@/components/CardData.vue'
import uploadFile from '@/components/UploadFile.vue'
import { directive as onClickOutside } from 'vue-on-click-outside'
export default {
    components: {
        cardData,
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
            menuListingChanges: '/configuration/screening-data/',
            menuListing: [
                {
                    value: '/configuration/screening-data/',
                    text: 'Gender',
                },
                {
                    value: '/configuration/screening-data/deceased',
                    text: 'Deceased',
                },
                {
                    value: '/configuration/screening-data/record-status',
                    text: 'Record Status',
                },
                {
                    value: '/configuration/screening-data/name-type',
                    text: 'Name Type',
                },
                {
                    value: '/configuration/screening-data/descprition-1',
                    text: 'Description 1',
                },
                {
                    value: '/configuration/screening-data/descprition-2',
                    text: 'Description 2',
                },
                {
                    value: '/configuration/screening-data/descprition-3',
                    text: 'Description 3',
                },
                {
                    value: '/configuration/screening-data/role-type',
                    text: 'Role Type',
                },
                {
                    value: '/configuration/screening-data/occupation',
                    text: 'Occupation',
                },
                {
                    value: '/configuration/screening-data/data-type',
                    text: 'Data Type',
                },
                {
                    value: '/configuration/screening-data/sanction-reference',
                    text: 'Sanctions Reference',
                },
                {
                    value: '/configuration/screening-data/country',
                    text: 'Country',
                },
                {
                    value: '/configuration/screening-data/country-type',
                    text: 'Country Type',
                },
                {
                    value: '/configuration/screening-data/identification',
                    text: 'Identification Type',
                },
                {
                    value: '/configuration/screening-data/relationship-type',
                    text: 'Relationship Type',
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
