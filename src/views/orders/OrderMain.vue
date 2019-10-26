<template>
	<div>
		<!-- Page info -->
		<div class="page-top-info">
			<div class="container">
				<h4>Your cart</h4>
				<div class="site-pagination">
					<a href="">Home</a> /
					<a href="">Orders</a>
				</div>
			</div>
		</div>
		<!-- Page info end -->

		<!-- cart section end -->
		<section class="cart-section spad">
			<div class="container">
				<div class="row">
					<div class="col-lg-11">
						<div class="cart-table">
							<h3>Your Cart</h3>
							<div class="cart-table-warp">
								<table>
									<thead>
										<tr>
											<th class="product-th">Product</th>
											<th class="size-th">from</th>
											<th class="total-th">to</th>
											<th class="total-th">Shipped To</th>
										</tr>
									</thead>
									<tbody>
										<tr
											class="order-row"
											v-for="item in items"
										>
											<td class="product-col">
												<img
													:src="
														item.product.images[0]
													"
													alt=""
												/>
												<div class="pc-title">
													<h4>
														{{ item.product.title }}
													</h4>
												</div>
											</td>
											<td class="size-col">
												<h4>{{ item.from_date }}</h4>
											</td>
											<td class="total-col">
												<h4>{{ item.to_date }}</h4>
											</td>

											<td class="address-col">
												{{ item.address.address }}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- cart section end -->

		<!-- Category section end -->
	</div>
</template>

<script>
import Product from '@/components/products/Product.vue'
import ProductSideBar from '@/components/products/ProductSideBar.vue'
import OrderResource from '@/api/order'
import RecordNotFound from '@/components/BaseNoRecordFound.vue'

const orderResource = new OrderResource()

import { mapGetters } from 'vuex'

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
			items: [],
			query: {},
		}
	}, // End of Component > data

	/*
        |--------------------------------------------------------------------------
        | Component > computed
        |--------------------------------------------------------------------------
        */
	computed: {
		...mapGetters(['user']),
	}, // End of Component > computed

	/*
        |--------------------------------------------------------------------------
        | Component > methods
        |--------------------------------------------------------------------------
        */
	methods: {
		async getList(filters) {
			this.query = filters

			this.isLoading = true

			this.items = []

			this.loading = true

			if (!this.user) {
				this.$router.push('/products')
			}

			const response = await orderResource.list(this.query)
			this.items = response.data

			this.isLoading = false
		},
	}, // End of Component > methods
} // End of export default
</script>
