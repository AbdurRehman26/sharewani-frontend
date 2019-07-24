<template>
    <div class="documentation-section">
        <div class="filter-section sub-filter">
            <h2>Documents Submitted</h2>
        </div>
        <div class="card document-section">
            <ul class="row">
                <li
                    class="col-md-3"
                    v-for="(list, index) in uploadDetails"
                    :key="index"
                >
                    <div class="document-detail" @click="openPopup(list.type)">
                        <div class="photo-section">
                            <img
                                :src="
                                    require('@/assets/images/dummy/' +
                                        list.image +
                                        '')
                                "
                            />
                        </div>
                        <div class="upload-detail">
                            <div class="upload-thumbnail">
                                <img
                                    :src="
                                        require('@/assets/images/' +
                                            list.thumbnail +
                                            '')
                                    "
                                />
                            </div>
                            <div class="upload-des">
                                <label>{{ list.title }}</label>
                                <p>{{ list.uploadDate }}</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    /*
        |--------------------------------------------------------------------------
        | Component > props
        |--------------------------------------------------------------------------
        */
    props: {
        uploadDetails: {
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
    methods: {
        openPopup($val) {
            this.$emit('click', $val)
        },
    }, // End of Component > methods

    /*
        |--------------------------------------------------------------------------
        | Component > mounted
        |--------------------------------------------------------------------------
        */
    mounted() {}, // End of Component > mounted
} // End of export default
</script>
