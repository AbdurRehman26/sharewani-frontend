<template>
    <div :class="[fullSize ? '' : 'col-lg-4 col-sm-6']">
        <div class="product-item">
            <div class="pi-pic">
                <div
                    class="tag-new"
                    style="right: 2px !important;
    top: 0px;
    margin-left:10px; background: #b30f19;"
                >
                    <center style="color: white;">
                        {{ item.size.code.toUpperCase() }}
                    </center>
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
                </router-link>
            </div>

            <div class="pi-text fw-color-choose">
                <h6 class="rent-price">
                    <label
                        :title="item.color.name"
                        :style="{ background: item.color.code }"
                        ty
                        class="cs-gray"
                        :for="item.color.name + '-color'"
                    >
                    </label>
                </h6>
                <h6 class="retail-price">
                    {{ item.brand.name == 'Custom' ? item.fabric_brand.name : item.brand.name }}
                </h6>
            </div>

<!--             <div class="pi-text">
                <h6 class="rent-price">
                    {{ 'L: ' + item.size_length }}
                    {{ 'C: ' + item.size_chest }}
                    {{ 'T: ' + item.size_tummy }}
                    {{ 'S: ' + item.size_sleeves }}
                    {{ 'C: ' + item.size_collar }}
                </h6>
            </div> -->
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

.product-item {
    border-radius: 10px !important;
    border: 1px solid lightgray;
    padding: 20px;
    margin-bottom: 30px;
    background: white !important;
}
</style>
