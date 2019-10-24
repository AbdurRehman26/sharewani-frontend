<template>
	<section class="top-letest-product-section">
		<div class="container">
			<div class="section-title">
				<h2>LATEST PRODUCTS</h2>
			</div>
			<div class="product-slider owl-carousel">
				<product :item="item" :fullSize="true" v-for="item in items"></product>
			</div>
		</div>
	</section>
</template>

<script type="text/javascript">
import Resource from '@/api/resource'
const productResource = new Resource('product')

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
			const response = await productResource.list({ latest: true })
			this.items = response.data

			let self = this

			setTimeout(function() {
				self.initializeOWlCarousel()
			}, 500)
		},

		initializeOWlCarousel() {
			$('.product-slider').owlCarousel({
				loop: true,
				nav: true,
				dots: false,
				margin: 30,
				autoplay: true,
				navText: [
					'<i class="flaticon-left-arrow-1"></i>',
					'<i class="flaticon-right-arrow-1"></i>',
				],
				responsive: {
					0: {
						items: 1,
					},
					480: {
						items: 2,
					},
					768: {
						items: 3,
					},
					1200: {
						items: 4,
					},
				},
			})
		},
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
