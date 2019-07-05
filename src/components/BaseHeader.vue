<template>
    <header>
        <div class="header-menu navigation">
            <ul class="menu-list">
                <li v-for="(list, index) in menuListing" :key="index">
                    <router-link :to="list.anchorLink">
                        <span>{{ list.menuLabel }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="profile-block">
            <div class="profile-main">
                <div class="profile-image">
                    <img :src="require('@/assets/images/profile-pic.png')" />
                </div>
                <div class="profile-detail">
                    <h4>Sammy Lawson</h4>
                    <p>Admin</p>
                    <i class="icon-caret-down"></i>
                </div>
                <div class="profile-popover">
                    <div class="nav-dropdown">
                        <ul>
                            <li>
                                <router-link to="/">
                                    <i class="icon-Customer-Profil"></i>
                                    <span>Update Profile</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/">
                                    <i class="icon-change-password"></i>
                                    <span>Change Password</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/">
                                    <i class="icon-sign-out"></i>
                                    <span>Sign Out</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
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
        menuListing: {
            type: Array,
            default: null,
        },
    }, // End of Component > props

    /*
    |--------------------------------------------------------------------------
    | Component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {}
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
