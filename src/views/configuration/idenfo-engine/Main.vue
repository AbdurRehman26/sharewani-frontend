<template>
    <div class="wrap-content">
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
            tableItemData: null,
            listVal: null,
            listDropdown: false,
            menuListing: [
                {
                    anchorLink: '/configuration/',
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
                {
                    anchorLink: '/configuration/idenfo-engine/gender',
                    menuLabel: 'Gender',
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
