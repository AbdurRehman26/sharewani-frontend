<template>
	<div>
		<!-- Page info -->
		<div class="page-top-info">
			<div class="container">
				<h4>CAtegory PAge</h4>
				<div class="site-pagination">
					<a href="">Home</a> / <a href="">Shop</a> /
				</div>
			</div>
		</div>
		<!-- Page info end -->

		<!-- Category section -->
		<section class="category-section spad">
			<div class="container">
				<div class="row">
					<product-side-bar @filters="getList"></product-side-bar>

					<div class="col-lg-9  order-1 order-lg-2 mb-5 mb-lg-0">
						<div v-if="!isLoading" class="row">

							<record-not-found v-if="!isLoading && response.data && !response.data.length"></record-not-found>

								<product
									v-if="!isLoading && response.data"
									:item="item"
									v-for="item in response.data"
								></product>

								<div class="text-center w-100 pt-3">
									<base-pagination
										:pagination="response.pagination"
									></base-pagination>
								</div>

						</div>

						<div v-if="isLoading" class="text-center">
							<b-spinner type="grow" label="Spinning"></b-spinner>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Category section end -->
	</div>
</template>

<script>
import Product from '@/components/products/Product.vue'
import ProductSideBar from '@/components/products/ProductSideBar.vue'
import ProductResource from '@/api/product'
import RecordNotFound from '@/components/BaseNoRecordFound.vue'

const productResource = new ProductResource()

export default {
	/*
        |--------------------------------------------------------------------------
        | Component > mounted
        |--------------------------------------------------------------------------
        */
	mounted() {
		this.getList()
	}, // End of Component > mounted
	components: {
		Product,
		ProductSideBar,
		RecordNotFound,
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
			isLoading: true,
			response: {},
			query: {},
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
		async getList(filters) {
			this.query = filters

			this.isLoading = true

			this.response = []

			this.loading = true

			this.response = await productResource.list(this.query)

			this.isLoading = false
		},
	}, // End of Component > methods
} // End of export default
</script>
