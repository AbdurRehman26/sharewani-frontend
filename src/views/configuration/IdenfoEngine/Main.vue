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
                    anchorLink: '/configuration',
                    menuLabel: 'Nationality',
                },
                {
                    anchorLink: '/configuration/workfactor',
                    menuLabel: 'Work Type',
                },
                {
                    anchorLink: '/configuration/industryfactor',
                    menuLabel: 'Industry',
                },
                {
                    anchorLink: '/',
                    menuLabel: 'Product',
                },
                {
                    anchorLink: '/',
                    menuLabel: 'State',
                },
                {
                    anchorLink: '/',
                    menuLabel: 'Relationship',
                },
                {
                    anchorLink: '/',
                    menuLabel: 'Channel Type',
                },
                {
                    anchorLink: '/',
                    menuLabel: 'Risk Factor',
                },
                {
                    anchorLink: '/',
                    menuLabel: 'Risk Rating Score',
                },
                {
                    anchorLink: '/',
                    menuLabel: 'Import Data',
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
