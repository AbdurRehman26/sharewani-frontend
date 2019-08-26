<template>
    <div class="dashboard">
        <div class="content-area">
            <base-header
                @sidemenu="$emit('responsiveSideBar')"
                :menuListing="menuListing"
            ></base-header>
            <div class="right-panel">
                <router-view />
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
    props: {}, // End of Component > props

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
                    menuLabel: 'Idenfo Engine',
                    name: 'idenfo-engine',
                },
                {
                    anchorLink: '/configuration/screening-data/',
                    menuLabel: 'Screening Data',
                    name: 'customer-information',
                },
                {
                    anchorLink: '/configuration/form-builder/',
                    menuLabel: 'Form Builder',
                    name: 'customer-information',
                },
                {
                    anchorLink: '/configuration/simulate/',
                    menuLabel: 'Simulate',
                    name: 'customer-information',
                },
                {
                    anchorLink: '/configuration/branding/',
                    menuLabel: 'Branding',
                    name: 'customer-information',
                },
                {
                    anchorLink: '/configuration/ocr-configuration/',
                    menuLabel: 'OCR',
                    name: 'customer-information',
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
