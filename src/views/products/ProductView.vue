<template>
	
	<div>
		

	<!-- product section -->
	<section class="product-section">
		<div class="container">
			<div class="back-link">
				

				<router-link :to="{name : 'product.list'}">Back to Category</router-link>


			
			</div>
			<div class="row">
				<div class="col-lg-6">
					<div class="product-pic-zoom">
						<img class="product-big-img" v-lazy="item.image_paths[activeImageIndex]" alt="">
					</div>
					<div class="product-thumbs" tabindex="1" style="overflow: hidden; outline: none;">
						<div class="product-thumbs-track">

							<div v-for="(image, index) in item.image_paths" :class="['pt', index == activeImageIndex  ? 'active' : '']" :data-imgbigurl="image">
								<img @click.prevent="activeImageIndex = index" :src="image" alt="">
							</div>

						</div>
					</div>
				</div>
				<div class="col-lg-6 product-details">

				<div class="row">
				<div class="col-lg-6 product-details">
					
					<h2 class="p-title">{{item.title}}</h2>
					<h3 class="p-price">{{item.original_price}} PKR</h3>
					<h4 class="p-stock">Available: <span>In Stock</span></h4>
					<div class="p-rating">
						<i class="fa fa-star-o"></i>
						<i class="fa fa-star-o"></i>
						<i class="fa fa-star-o"></i>
						<i class="fa fa-star-o"></i>
						<i class="fa fa-star-o fa-fade"></i>
					</div>

					<div class="p-review">
						<a href="">3 reviews</a>|<a href="">Add your review</a>
					</div>

					<div class="fw-size-choose">
						<p>Size</p>
						<div class="sc-item">
							<input type="radio" name="sc" :id="item.size.code+'-size'">
							<label :for="item.size.code+'-size'">{{item.size.code}}</label>
						</div>
					</div>



					<router-link :to="{ 'name' : 'checkout', query : { product_id : $route.params.id, start_date : selectedPeriod.start, end_date : selectedPeriod.end }}" tag="a" :class="['site-btn', isDisabled ? 'disabled' : '']"> PROCEED TO CHECKOUT </router-link>
				
				</div>


				<div class="col-lg-6 product-details">
					
					<VueCtkDateTimePicker :format="'YYYY-MM-DD'" :formatted="'DD-MM-YYYY'" :range="true" v-model="selectedPeriod" />

				</div>
				</div>


					<div id="accordion" class="accordion-area">
						<div class="panel">
							<div class="panel-header" id="headingOne">
								<button class="panel-link active" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">information</button>
							</div>
							<div id="collapse1" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
								<div class="panel-body">
									<div v-html="item.description"></div>
								</div>
							</div>
						</div>
						<div class="panel">
							<div class="panel-header" id="headingThree">
								<button class="panel-link" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">shipping & Returns</button>
							</div>
							<div id="collapse3" class="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
								<div class="panel-body">
									<h4>7 Days Returns</h4>
									<p>Cash on Delivery <br>Home Delivery <span>3 - 4 days</span></p>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus. Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- product section end -->

	</div>


</template>

<script>
import Product from '@/components/products/Product.vue'
import ProductSideBar from '@/components/products/ProductSideBar.vue'
import ProductResource from '@/api/product';
import OrderResource from '@/api/order';

import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';


const productResource = new ProductResource();
const orderResource = new OrderResource();

export default {
	/*
        |--------------------------------------------------------------------------
        | Component > mounted
        |--------------------------------------------------------------------------
        */
	mounted() {
		this.getSingle();
	}, // End of Component > mounted
    components: {
    	Product,
    	ProductSideBar,
    	VueCtkDateTimePicker
    },
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
        	activeImageIndex: 0,
        	isDisabled: true,
        	item: {
        		image_paths: [],
        		size: []
        	},
        	selectedPeriod: {
        		start: '',
        		end: ''
        	}
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
    watch :{
    	selectedPeriod(changedDate){
    		if(changedDate.start && changedDate.end){
    			this.validateProductOrderDate();
    		}
    	}
    },
    /*
        |--------------------------------------------------------------------------
        | Component > methods
        |--------------------------------------------------------------------------
        */
    methods: {
    	async validateProductOrderDate(){

    		this.isDisabled = true;

    		var query = this.selectedPeriod;
    		query.product_id = this.item.id;

    		const response = await orderResource.validateOrderDate(query);
    		
    		if(response && !response.data && !response.error){
    			this.isDisabled = false;
    		}


    	},
		async getSingle() {

			this.loading = true;

			const response = await productResource.get(this.$route.params.id);

			this.item = response.data;

			this.loading = false;
		},
	}, // End of Component > methods
} // End of export default
</script>
