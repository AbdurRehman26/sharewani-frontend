<template>
    <div class="dashboard">
        <div class="content-area">
            <base-header
                @sidemenu="$emit('responsiveSideBar')"
                :menuListing="menuListing"
            ></base-header>
            <div class="right-panel">
                <router-view></router-view>
            </div>
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
                    anchorLink: '/system-users/users',
                    menuLabel: 'System Users',
                    name: 'system-users',
                },
                {
                    anchorLink: '/system-users/roles',
                    menuLabel: 'Roles & Permissions',
                    name: 'idenfo-engine',
                },
                {
                    anchorLink: '/system-users/data-segments',
                    menuLabel: 'Data Segments',
                    name: 'idenfo-engine',
                },
                {
                    anchorLink: '/system-users/application-access',
                    menuLabel: 'Application Access',
                    name: 'idenfo-engine',
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
