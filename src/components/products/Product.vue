<template>
	<div class="col-lg-4 col-sm-6">
		<div class="product-item">
			<div class="pi-pic">
				<div class="tag-new">new</div>

				<router-link :to="{ name : 'product.view', params: { id : item.id}}">	
				<img @error="changeImageSource" :src="item.images[0]" alt="" />
				</router-link>

				<div class="pi-links">
					<a href="#" class="add-card"
						><font-awesome-icon icon="cart-plus" /><span>ADD TO CART</span></a
					>
				</div>
			</div>
			<div class="pi-text">
				
				<router-link :to="{ name : 'product.view', params: { id : item.id }}">	
					<h6>{{item.original_price}} PKR</h6>
					<p>{{item.title}}</p>
				</router-link>
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
    	item : {

    	}
    }, // End of Component > props

    /*
        |--------------------------------------------------------------------------
        | Component > data
        |--------------------------------------------------------------------------
        */
    data() {
        return{
            
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
    methods: {
        changeImageSource(){
            return 'img/product-image-not-found.png';
        }
    }, // End of Component > methods

    /*
        |--------------------------------------------------------------------------
        | Component > mounted
        |--------------------------------------------------------------------------
        */
    mounted() {}, // End of Component > mounted
} // End of export default
</script>
