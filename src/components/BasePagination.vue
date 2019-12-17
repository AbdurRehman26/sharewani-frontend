<template>
    <div class="table-pagination">
        <div class="row">
                <div class="col-md-12">
    

                    <b-pagination
                      v-model="pagination.current"
                      :total-rows="pagination.total"
                      :per-page="12"
                      aria-controls="my-table"
                    ></b-pagination>


                </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {  },

    /*
    |--------------------------------------------------------------------------
    | Component > props
    |--------------------------------------------------------------------------
    */
    props: {
        pagination: {
            type: Object,
            default(){
                return {}
            }
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
    watch: {
        'pagination.current'(value){
            this.$emit('page-changed', {page : value});
        }
    }, // End of Component > computed

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
