<template>
    <div :class="[fullSize ? '' : 'col-lg-4 col-sm-6']">
        <div class="product-item">
            <div class="pi-pic">
                <div class="tag-new">
                    <center>{{ item.size.code.toUpperCase() }}</center>
                </div>

                <router-link
                    :to="{ name: 'product.view', params: { id: item.id } }"
                >
                    <img
                        @error="changeImageSource"
                        v-lazy="item.image_paths[0]"
                        alt=""
                    />
                </router-link>

                <div class="pi-links">
                    <router-link
                        class="add-card"
                        :to="{ name: 'product.view', params: { id: item.id } }"
                    >
                        <font-awesome-icon icon="cart-plus" /><span>ORDER</span>
                    </router-link>
                </div>
            </div>
            <div class="pi-text">
                <router-link
                    :to="{ name: 'product.view', params: { id: item.id } }"
                >
                    <h6 class="retail-price">
                        Retail: PKR

                        <vue-numeric
                            :read-only="true"
                            separator=","
                            v-model="item.original_price"
                        ></vue-numeric>
                    </h6>
                    <h6 class="rent-price">
                        PKR
                        <vue-numeric
                            :read-only="true"
                            separator=","
                            v-model="item.rent"
                        ></vue-numeric>
                    </h6>
                    <p>{{ item.title }}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import VueNumeric from 'vue-numeric'

export default {
    components: {
        VueNumeric,
    },
    /*
        |--------------------------------------------------------------------------
        | Component > props
        |--------------------------------------------------------------------------
        */
    props: {
        item: {
            type: Object,
            default: function() {
                return {}
            },
        },
        fullSize: {
            type: Boolean,
            default: false,
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
        changeImageSource() {
            return 'img/product-image-not-found.png'
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

<style scoped>
.retail-price {
    float: right !important;
    padding-left: 0px !important;
    overflow: hidden;
    font-weight: 700;
    color: darkgrey !important;
}
.rent-price {
    float: left !important;
    padding-left: 0px !important;
    overflow: hidden;
    font-weight: 700;
}
</style>
