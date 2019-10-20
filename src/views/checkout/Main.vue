<template>
	<div>
		<!-- Page info -->
		<div class="page-top-info">
			<div class="container">
				<h4>Your cart</h4>
				<div class="site-pagination">
					<a href="">Home</a> /
					<a href="">Your cart</a>
				</div>
			</div>
		</div>
		<!-- Page info end -->

		<!-- checkout section  -->
		<section class="checkout-section spad">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 order-2 order-lg-1">
						<form class="checkout-form">
							<div class="cf-title">Billing Address</div>
							<div class="row">
								<div class="col-md-7">
									<p>*Billing Information</p>
								</div>
								<div class="col-md-5">
									<div class="cf-radio-btns address-rb">
										<div
											v-if="userAddresses.length"
											class="cfr-item"
										>
											<input
												v-model="order.address_type"
												type="radio"
												value="main"
												id="main"
											/>
											<label for="main"
												>Use my regular address</label
											>
										</div>
										<div class="cfr-item">
											<input
												v-model="order.address_type"
												type="radio"
												value="secondary"
												id="secondary"
											/>
											<label for="secondary"
												>Use a different address</label
											>
										</div>
									</div>
								</div>
							</div>
							<div
								v-if="order.address_type == 'secondary'"
								class="row address-inputs"
							>
								<div class="col-md-12">
									<input
										v-model="order.address"
										type="text"
										placeholder="Address"
									/>
									<input
										v-model="order.address_secondary"
										type="text"
										placeholder="Address line 2"
									/>
									<input
										v-model="order.nearest_check_point"
										type="text"
										placeholder="Nearest Checkout Point"
									/>
									<input
										v-if="false"
										v-model="order.city"
										type="text"
										placeholder="City"
									/>
								</div>
								<div v-if="false" class="col-md-6">
									<input type="text" placeholder="Zip code" />
								</div>
								<div v-if="false" class="col-md-6">
									<input
										type="text"
										placeholder="Phone no."
									/>
								</div>
							</div>

							<b-list-group class="row mb-5" v-if="order.address_type != 'secondary'">
								<b-list-group-item
									v-for="(userAddress,
									index) in userAddresses"
									href="#"
									:active="!!userAddresses[selectedAddress]"
									class="flex-column align-items-start"
									@click.prevent="selectedAddress = index; order.address_id = userAddress.id"
								>
									<div
										class="d-flex w-100 justify-content-between"
									>
										<h5 class="mb-1">
											{{ userAddress.address }}
										</h5>
									</div>

									<p class="mb-1">
										
										{{ userAddress.secondary_address }}

									</p>

									<small>{{ userAddress.nearest_check_point }}</small>
								</b-list-group-item>
							</b-list-group>

							<b-button
								@click.prevent="submitOrder"
								class="site-btn submit-order-btn"
							>
								<b-spinner small v-if="isLoading"></b-spinner>

								<span v-if="!isLoading">Place Order</span>
							</b-button>
						</form>
					</div>
					<div class="col-lg-4 order-1 order-lg-2">
						<div class="checkout-cart">
							<h3>Your Cart</h3>
							<ul class="product-list">
								<li>
									<div class="pl-thumb">
										<img
											v-if="item.image_paths.length"
											:src="item.image_paths[0]"
											alt=""
										/>
									</div>
									<h6>{{ item.title }}</h6>
									<p>{{ item.original_price }} PKR</p>
								</li>
							</ul>
							<ul class="price-list">
								<li>
									Total<span
										>{{ item.original_price }} PKR</span
									>
								</li>
								<li>Shipping<span>free</span></li>
								<li class="total">
									Total<span
										>{{ item.original_price }} PKR</span
									>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- checkout section end -->
	</div>
</template>

<script>
import Product from '@/components/products/Product.vue'
import ProductSideBar from '@/components/products/ProductSideBar.vue'
import ProductResource from '@/api/product'
import Resource from '@/api/resource'

const productResource = new ProductResource()
const userAddressResource = new Resource('user-address')
const orderResource = new Resource('order')

export default {
	/*
        |--------------------------------------------------------------------------
        | Component > mounted
        |--------------------------------------------------------------------------
        */
	mounted() {
		this.getData()
	}, // End of Component > mounted
	components: {
		Product,
		ProductSideBar,
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
			selectedAddress: null,
			isLoading: false,
			order: {
				product_id: this.$route.query.product_id,
				from_date: '',
				end_date: '',
				address: '',
				address_secondary: '',
				address_type: 'main',
				nearest_check_point: '',
				address_id: null
			},
			item: {
				image_paths: [],
				size: [],
			},
			userAddresses: [],
		}
	}, // End of Component > data

	/*
        |--------------------------------------------------------------------------
        | Component > computed
        |--------------------------------------------------------------------------
        */
	watch: {
		'order.address_type'(){
			this.order.address_id = null
			this.selectedAddress = null
		}
	}, // End of Component > computed

	/*
        |--------------------------------------------------------------------------
        | Component > methods
        |--------------------------------------------------------------------------
        */
	methods: {
		async submitOrder() {
			var postData = this.order

			postData.from_date = this.$route.query.start_date
			postData.to_date = this.$route.query.end_date

			this.isLoading = true

			const response = await orderResource.store(postData)

			this.isLoading = false
		},
		getData() {
			this.getSingle()
			this.getUserAddress()
		},
		async getUserAddress() {
			this.loading = true

			const response = await userAddressResource.list({})

			this.userAddresses = response.data

			if (!this.userAddresses.length) {
				this.order.address_type = 'secondary'
			}

			if (this.userAddresses.length) {
			}

			this.loading = false
		},
		async getSingle() {
			this.loading = true

			const response = await productResource.get(
				this.$route.query.product_id
			)

			this.item = response.data

			this.loading = false
		},
	}, // End of Component > methods
} // End of export default
</script>

<style scoped>
	
.btn-group-toggle .list-group-item.btn-outline-primary:active{
	background-color: #f51167 !important;
	color:white !important;
}

.btn-group-toggle .list-group-item.btn-outline-primary:hover{
	background-color: #f61167 !important;
	color:white !important;
}

.list-group-item.active, .btn-group-toggle .list-group-item.btn-outline-primary{
	background: transparent;
}

</style>	