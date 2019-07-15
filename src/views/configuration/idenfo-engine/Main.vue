<template>
    <div class="wrap-content">
        <div class="config-list" ref="listingArea">
            <ul v-show="listVal <= 1100">
                <li
                    v-for="(list, index) in menuListing.slice(0, 7)"
                    :key="index"
                >
                    <router-link :to="list.anchorLink">
                        <span>{{ list.menuLabel }}</span>
                    </router-link>
                </li>
                <li class="open-dropdown">
                    <a @click="listDropdown ^= true" href="javascript:void(0);">
                        .....
                    </a>

                    <div v-if="listDropdown" class="dropdown-open">
                        <ul>
                            <li
                                v-for="(listo, index) in menuListing.slice(
                                    7,
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
            <ul v-show="listVal >= 1100">
                <li v-for="(list, index) in menuListing" :key="index">
                    <router-link :to="list.anchorLink">
                        <span>{{ list.menuLabel }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="config-card-block">
            <router-view />
        </div>
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
            navWidth: true,
            listVal: null,
            listDropdown: false,
            menuListing: [
                {
                    anchorLink: '/configuration/idenfo-engine/',
                    menuLabel: 'Nationality',
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
                    menuLabel: 'Product',
                },
                {
                    anchorLink: '/configuration/idenfo-engine/state',
                    menuLabel: 'State',
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
                    anchorLink: '/configuration/idenfo-engine/risk',
                    menuLabel: 'Risk Factor',
                },
                {
                    anchorLink: '/configuration/idenfo-engine/risk-rating',
                    menuLabel: 'Risk Rating Score',
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
        menuFunc() {
            setTimeout(function() {
                if (this.listVal > 940) {
                    this.navWidth = true
                } else {
                    this.navWidth = false
                }
            }, 500)
        },
    }, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {
        this.listWidthVal()
        this.menuFunc()
    }, // End of Component > mounted
} // End of export default
</script>
