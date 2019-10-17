<template>
	
	<div>
		

	<!-- product section -->
	<section class="product-section">
		<div class="container">
			<div class="back-link">
				<a href="./category.html"> &lt;&lt; Back to Category</a>
			</div>
			<div class="row">
				<div class="col-lg-6">
					<div class="product-pic-zoom">
						<img class="product-big-img" :src="item.image_paths[0]" alt="">
					</div>
					<div class="product-thumbs" tabindex="1" style="overflow: hidden; outline: none;">
						<div class="product-thumbs-track">

							<div v-for="(image, index) in item.image_paths" class="pt active" data-imgbigurl="img/single-product/1.jpg">
								<img :src="image" alt="">
							</div>

						</div>
					</div>
				</div>
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

					<a href="#" class="site-btn">SHOP NOW</a>
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

const productResource = new ProductResource();

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
    	ProductSideBar
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
        	item: {
        		image_paths: []
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
    methods: {
		async getSingle() {

			this.loading = true;

			const response = await productResource.get(this.$route.params.id);

			this.item = response.data;

			this.loading = false;
		},
	}, // End of Component > methods
} // End of export default
</script>
