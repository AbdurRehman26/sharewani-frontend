<template>
    <div class="wrap-content">
        <div class="config-list">
            <ul>
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
    methods: {}, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {}, // End of Component > mounted
} // End of export default
</script>
