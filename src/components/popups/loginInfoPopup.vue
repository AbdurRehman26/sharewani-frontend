<template>
    <div>
        <b-modal
            id="login-popup"
            :title="'Unauthenticated'"
            size="md"
            cancelVariant="link"
        >
            <center>
            You need to login in order to view this page        
            </center>

        </b-modal>
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
        title: {
            type: String,
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
    },
    methods: {},
}
</script>
