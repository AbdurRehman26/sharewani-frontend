<template>
    <div class="wrap-content">
        <div class="config-list" ref="listingArea">
            <div v-show="listVal <= 850" class="config-list-dropdown">
                <b-form-group
                    id="input-group-5"
                    label="Idenfo Engine"
                    label-for="idenfo-engine"
                >
                    <b-form-select
                        id="idenfo-engine"
                        class="form-control"
                        v-model="menuListingChanges"
                        :options="menuListing"
                        v-on:change="onChange"
                    >
                    </b-form-select>
                </b-form-group>
            </div>
            <ul v-show="listVal >= 850 && listVal <= 1500">
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
                    <a @click="listDropdown ^= true" href="javascript:void(0);">
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
            <ul v-show="listVal >= 1499">
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
</template>

<script>
import { directive as onClickOutside } from 'vue-on-click-outside'
export default {
    components: {},

    directives: {
        onClickOutside: onClickOutside,
    },
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
            tableItemData: null,
            listVal: null,
            listDropdown: false,
            menuListingChanges: '/configuration/',
            menuListing: [
                {
                    value: '/configuration/',
                    text: 'Risk Factor',
                },
                {
                    value: '/configuration/idenfo-engine/risk-rating',
                    text: 'Risk Rating',
                },
                {
                    value:
                        '/configuration/idenfo-engine/document-verification-factor',
                    text: 'Document Verification',
                },
                {
                    value: '/configuration/idenfo-engine/name-screen-score',
                    text: 'Name Screening',
                },
                {
                    value: '/configuration/idenfo-engine/nationality',
                    text: 'Nationality',
                },
                {
                    value: '/configuration/idenfo-engine/country',
                    text: 'Country',
                },
                {
                    value: '/configuration/idenfo-engine/state',
                    text: 'State',
                },
                {
                    value: '/configuration/idenfo-engine/work',
                    text: 'Work Type',
                },
                {
                    value: '/configuration/idenfo-engine/industry',
                    text: 'Industry',
                },
                {
                    value: '/configuration/idenfo-engine/product',
                    text: 'Product Type',
                },
                {
                    value: '/configuration/idenfo-engine/relationship',
                    text: 'Relationship',
                },
                {
                    value: '/configuration/idenfo-engine/channel',
                    text: 'Channel Type',
                },
                {
                    value: '/configuration/idenfo-engine/purpose-of-action',
                    text: 'Purpose of Action',
                },
                {
                    value: '/configuration/idenfo-engine/gender',
                    text: 'Gender',
                },
                {
                    value: '/configuration/idenfo-engine/risk-level-review',
                    text: 'Risk Level Review',
                },
            ],
        }
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
    methods: {
        listWidthVal() {
            this.listVal = this.$refs.listingArea.offsetWidth
        },
        tableItemLength(val) {
            this.tableItemData = val
        },
        close() {
            this.listDropdown = false
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
    }, // End of Component > mounted
} // End of export default
</script>
