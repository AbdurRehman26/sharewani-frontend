<template>
	<div>
		<!-- Page info -->
		<div class="page-top-info">
			<div class="container">
				<h4>Orders Main</h4>
				<div class="site-pagination">
					<!-- <a href="">Home</a> / <a href="">Product</a> / -->
				</div>
			</div>
		</div>
		<!-- Page info end -->

		<!-- cart section end -->
		<section class="main-body-section cart-section spad">
			<div class="container">
				<div class="row">
					<div class="col-lg-11">
						<div class="cart-table">
							<h3>Your Cart</h3>
							
							<center  v-if="!items.length && !isLoading" style="padding:20px;">
							<span> You do not have any orders currently</span>
							</center>

							<div v-if="items.length" class="cart-table-warp">
								<table>
									<thead>
										<tr>
											<th class="product-th">Product</th>
											<th class="size-th">from</th>
											<th class="total-th">to</th>
											<th class="total-th">Shipped To</th>
											<th class="total-th">Rent Amount</th>
											<th class="total-th">Status</th>
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
														item.product
															.image_paths[0]
													"
													alt=""
												/>
												<div class="pc-title">
													<h4>
														<router-link
															:to="{name:'product.view', params: {id:item.product.id}}" tag="a">
															{{
																item.product.title
															}}
														</router-link>
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
											<td class="address-col">
												{{ item.rent_amount }}
											</td>
											<td class="address-col">
												<h5>
												{{ item.status | orderStatus }}
												</h5>
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
