<template>
	<div>
		<!-- product section -->
		<section class="main-body-section product-section">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<div class="product-pic-zoom">
							<img
								class="product-big-img"
								:src="item.image_paths[activeImageIndex]"
								alt=""
							/>
						</div>
						<div
							class="product-thumbs"
							tabindex="1"
							style="overflow: hidden; overflow-x: scroll; outline: none;"
						>
							<div class="product-thumbs-track">
								<div
									v-for="(image, index) in item.image_paths"
									:class="[
										'pt',
										index == activeImageIndex
											? 'active'
											: '',
									]"
									:data-imgbigurl="image"
								>
									<img
										@click.prevent="
											activeImageIndex = index
										"
										:src="image"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6 product-details">
						<div class="row">
							<div class="col-lg-6 product-details">
								<h2 class="p-title">{{ item.title }}</h2>
								<h3 class="p-price p-stock">
									Rent: PKR
									<span>
										<vue-numeric
											:read-only="true"
											separator=","
											v-model="rentAmount"
										></vue-numeric>
									</span>
								</h3>

								<h3 class="p-price">
									Retail Price: PKR
									<vue-numeric
										:read-only="true"
										separator=","
										v-model="item.original_price"
									></vue-numeric>
								</h3>

								<p style="font-size: 19px;">
									You save PKR
									<span style="color:green;">
										<vue-numeric
											:read-only="true"
											separator=","
											v-model="
												item.original_price - rentAmount
											"
										></vue-numeric>
									</span>
								</p>

								<div class="p-rating">
									<i class="fa fa-star-o"></i>
									<i class="fa fa-star-o"></i>
									<i class="fa fa-star-o"></i>
									<i class="fa fa-star-o"></i>
									<i class="fa fa-star-o fa-fade"></i>
								</div>

								<div class="p-review">
									<!-- <a href="">3 reviews</a>|<a href="">Add your review</a> -->
								</div>

								<div class="fw-size-choose">
									<p>Size</p>
									<div class="sc-item">
										<input
											type="radio"
											checked
											disabled="true"
											name="sc"
											:id="item.size.code + '-size'"
										/>
										<label
											:for="item.size.code + '-size'"
											>{{ item.size.code }}</label
										>
									</div>
								</div>

								<div
									v-if="item.my_order"
									class="fw-size-choose"
								>
									<p>Status</p>
									<div>
										<label
											:class="[
												'order-status',
												orderStatus(
													item.my_order.status
												),
											]"
											>{{
												item.my_order.status
													| orderStatus
											}}</label
										>
									</div>
								</div>

								<b-button
									v-b-modal.confirm-popup
									v-if="item.my_order"
									:class="['site-btn']"
								>
									<b-spinner
										small
										v-if="isLoading"
									></b-spinner>

									<span v-if="!isLoading">Cancel</span>
								</b-button>
							</div>

							<div
								class="col-lg-6 product-details product-details-right"
							>
								<div v-if="item.my_order">
									<span v-if="item.my_order.status == 1">
										<h5>
											Your order has been approved and
											will be delivered to you on
											{{
												new Date(
													new Date().setDate(
														new Date(
															item.my_order.from_date
														).getDate() - 1
													)
												).toDateString()
											}}
										</h5>
									</span>
								</div>

								<div v-if="!item.my_order">
									<date-picker
										:width="'100%'"
										placeholder="Please select a date"
										:disabled-date="notBeforeToday"
										v-model="selectedPeriod"
										:format="'YYYY-MM-DD'"
										:formatted="'DD-MM-YYYY'"
										valueType="format"
									></date-picker>

									<label>
										You can not order before
										{{
											new Date(minDate).toDateString()
										}}</label
									>

									<multiselect
										style="margin-top: 20px; border: 1px solid lightgray;"
										v-model="period"
										track-by="key"
										label="label"
										:options="[
											{ key: 4, label: '4 Days' },
											{ key: 8, label: '8 Days' },
										]"
									></multiselect>
								</div>
							</div>
						</div>

						<center>
							<router-link
								style="margin-top: 20px;"
								v-if="!item.my_order"
								:to="{
									name: 'checkout',
									query: {
										product_id: $route.params.id,
										selected_date: selectedPeriod,
										period: period ? period.key : '',
									},
								}"
								tag="a"
								:class="[
									'site-btn',
									isDisabled ? 'disabled' : '',
								]"
							>
								PROCEED TO CHECKOUT
							</router-link>

							<center style="margin-top:10px">
								<h5 v-if="!user">
									{{ 'Please login to continue' }}
								</h5>
							</center>
						</center>

						<div id="accordion" class="accordion-area">
							<div class="panel">
								<div class="panel-header" id="headingOne">
									<div>
										<div class="item-title-heading">
											<strong> Brand : </strong>
											<span
												style="color: #585858; font-size:17px;"
											>
												{{
													item.brand
														? item.brand.name
														: ''
												}}
											</span>
										</div>

										<div class="item-title-heading">
											<strong>Fabric : </strong>
											<span
												style="color: #585858; font-size:17px;"
											>
												{{
													item.fabric_brand
														? item.fabric_brand.name
														: ''
												}}</span
											>
										</div>

										<div class="item-title-heading">
											<strong>Size Detail </strong>
										</div>

										<div class="item-size-details">
											<p style="margin-top:10px">
												{{
													'Length: ' +
														item.size_length
												}}
											</p>

											<p>
												{{
													'Chest: ' + item.size_chest
												}}
											</p>

											<p>
												{{
													'Tummy: ' + item.size_tummy
												}}
											</p>

											<p>
												{{
													'Sleeves: ' +
														item.size_sleeves
												}}
											</p>

											<p>
												{{
													'Neck: ' + item.size_collar
												}}
											</p>
										</div>
									</div>
								</div>
								<div
									id="collapse1"
									class="collapse show"
									aria-labelledby="headingOne"
									data-parent="#accordion"
								>
									<div class="panel-body">
										<div v-html="item.description"></div>
									</div>
								</div>
							</div>
							<div class="panel">
								<div class="panel-header" id="headingThree">
									<div class="item-title-heading">
										<strong> Payment : </strong>
										<span
											style="color: #585858; font-size:17px;"
										>
											Cash on Delivery
										</span>
									</div>
									<div class="item-title-heading">
										<strong> Delivery : </strong>
										<span
											style="color: #585858; font-size:17px;"
										>
											Home Delivery in 3-4 Days
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- product section end -->

		<confirm-popup @confirm="confirm"></confirm-popup>
	</div>
</template>

<script>
import Product from '@/components/products/Product.vue'
import ProductSideBar from '@/components/products/ProductSideBar.vue'
import ProductResource from '@/api/product'
import OrderResource from '@/api/order'
import VueNumeric from 'vue-numeric'

/* Modals */
import ConfirmPopup from '@/components/popups/ConfirmPopup'

/* Plugins */
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'

import Multiselect from 'vue-multiselect'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

const moment = require('moment')

const productResource = new ProductResource()
const orderResource = new OrderResource()

import { mapGetters } from 'vuex'

require('@/assets/js/jquery.nicescroll.min.js')
const today = new Date(
	moment(moment(Date()).format('YYYY-MM-DD'), 'YYYY-MM-DD')
		.add(5, 'd')
		.format('YYYY-MM-DD')
)

today.setHours(0, 0, 0, 0)

export default {
	/*
        |--------------------------------------------------------------------------
        | Component > mounted
        |--------------------------------------------------------------------------
        */
	mounted() {
		this.getSingle()
	}, // End of Component > mounted
	components: {
		DatePicker,
		Product,
		Multiselect,
		ConfirmPopup,
		ProductSideBar,
		VueCtkDateTimePicker,
		VueNumeric,
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
			loginMessage: 'Please login to order',
			activeImageIndex: 0,
			isDisabled: true,
			item: {
				image_paths: [],
				size: [],
			},
			period: {
				key: 4,
				label: '4 Days',
			},
			selectedPeriod: '',
			rentAmount: null,
			isLoading: false,
		}
	}, // End of Component > data

	/*
        |--------------------------------------------------------------------------
        | Component > computed
        |--------------------------------------------------------------------------
        */
	computed: {
		...mapGetters(['user']),
		maxDate() {
			if (!this.selectedPeriod) {
				return null
			}
			return moment(this.selectedPeriod, 'YYYY-MM-DD')
				.add(365, 'd')
				.format('YYYY-MM-DD')
		},
		minDate() {
			return moment(moment(Date()).format('YYYY-MM-DD'), 'YYYY-MM-DD')
				.add(5, 'd')
				.format('YYYY-MM-DD')
		},
	}, // End of Component > computed

	/*
        |--------------------------------------------------------------------------
        | Component > methods
        |--------------------------------------------------------------------------
        */
	watch: {
		period() {
			this.isDisabled = true

			this.validateProductOrderDate()
		},
		selectedPeriod(changedDate) {
			this.isDisabled = true

			if (changedDate) {
				this.validateProductOrderDate()
			}
		},
	},
	/*
        |--------------------------------------------------------------------------
        | Component > methods
        |--------------------------------------------------------------------------
        */
	methods: {
		notBeforeToday(date) {
			return date < today
		},

		orderStatus(status) {
			const OrderStatuses = ['pending', 'accepted']
			return OrderStatuses[status] ? OrderStatuses[status] : 'rejected'
		},

		async confirm() {
			this.isLoading = true
			await orderResource.destroy(this.item.my_order.id)
			this.getSingle()
			this.isLoading = false
		},
		async validateProductOrderDate() {
			this.isDisabled = true

			var query = {}
			query.selected_date = this.selectedPeriod
			query.period = this.period
			query.product_id = this.item.id

			const response = await orderResource.validateOrderDate(query)

			if (response && !response.error) {
				this.isDisabled = false
			}
		},
		async getSingle() {
			this.isLoading = true

			var query = {}
			query.selected_date = this.selectedPeriod
			query.period = this.period
			query.product_id = this.$route.params.id

			const response = await productResource.get(this.$route.params.id)
			this.rentAmount = null

			this.item = response.data

			this.isLoading = false

			if (this.item.my_order) {
				this.rentAmount = this.item.my_order.rent_amount
			}

			const tokenResponse = await orderResource.calculateRent(query)
			this.rentAmount = tokenResponse.data

			setTimeout(function() {
				$('.cart-table-warp, .product-thumbs').niceScroll({
					cursorborder: '',
					cursorcolor: '#afafaf',
					boxzoom: false,
				})
			}, 3000)
		},
	}, // End of Component > methods
} // End of export default
</script>

<style scope>
.item-title-heading {
	margin-bottom: 15px;
	margin-top: 10px;
}

.item-size-details {
	margin-left: 10px;
}

.accordion-area .panel .panel-header {
	font-size: 20px;
}

.item-size-details p {
	font-size: 17px;
	line-height: 0.6;
}

.accordion-area .panel-body {
	padding-top: 7px;
}

.mx-datepicker{
	width: 100% !important;
}
</style>
