<template>
	<section class="product-filter-section">
		<div class="container">
			<div class="section-title">
				<h2>BROWSE TOP SELLING PRODUCTS</h2>
			</div>
			<!-- <ul class="product-filter-menu">
				<li><a href="#">TOPS</a></li>
				<li><a href="#">JUMPSUITS</a></li>
				<li><a href="#">LINGERIE</a></li>
				<li><a href="#">JEANS</a></li>
				<li><a href="#">DRESSES</a></li>
				<li><a href="#">COATS</a></li>
				<li><a href="#">JUMPERS</a></li>
				<li><a href="#">LEGGINGS</a></li>
			</ul> -->
			<div class="row">
				<div class="col-lg-3 col-sm-6" v-for="item in items">
					<product :item="item" :fullSize="true"></product>
				</div>
			</div>
		</div>
	</section>
</template>

<script type="text/javascript">
import Resource from '@/api/resource'
const productResource = new Resource('product/top-selling')

import Product from '@/components/products/Product.vue'

export default {
	components: {
		Product,
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
			items: [],
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
		async getList() {
			const response = await productResource.list({ top_selling: true })
			this.items = response.data

			let self = this

			setTimeout(function() {
				self.initializeOWlCarousel()
			}, 500)
		},

		initializeOWlCarousel() {},
	}, // End of Component > methods

	/*
|--------------------------------------------------------------------------
| Component > mounted
|--------------------------------------------------------------------------
*/
	mounted() {
		this.getList()
	}, // End of Component > mounted
} // End of export default
</script>
