<template>
	<div>
		<!-- product section -->
		<section class="main-body-section product-section">
			<div class="container">
				<div class="row">
					<div class="col-lg-12" style="margin-bottom: 20px;">
						<center>
							<h5 v-if="!user">{{ loginMessage }}</h5>
						</center>
					</div>

					<div class="col-lg-6">
						<div class="product-pic-zoom">
							<img
								class="product-big-img"
								v-lazy="item.image_paths[activeImageIndex]"
								alt=""
							/>
						</div>
						<div
							class="product-thumbs"
							tabindex="1"
							style="overflow: hidden; outline: none;"
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
								<h3 class="p-price">
									{{ item.original_price }} PKR
								</h3>
								<h4 class="p-price p-stock">
									Rent:
									<span>{{
										rentAmount
											? 'Your rent amount is ' +
											  rentAmount +
											  ' PKR'
											: 'Please select date range for rent'
									}}</span>
								</h4>
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

							<div class="col-lg-6 product-details">
								<div style="margin-bottom:20px;">
									<span>To:</span>
								</div>

								<VueCtkDateTimePicker
									color="#b30f19"
									:disabled="!user"
									v-if="!item.my_order"
									noShortcuts
									noClearButton
									:disabledDates="disabledDates"
									:maxDate="maxDate"
									:minDate="minDate"
									:format="'YYYY-MM-DD'"
									:formatted="'DD-MM-YYYY'"
									:range="true"
									v-model="selectedPeriod"
								/>
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
									start: selectedPeriod.start,
									end: selectedPeriod.end,
								},
							}"
							tag="a"
							:class="['site-btn', isDisabled ? 'disabled' : '']"
						>
							PROCEED TO CHECKOUT
						</router-link>
						</center>

						<div id="accordion" class="accordion-area">
							<div class="panel">
								<div class="panel-header" id="headingOne">
									<button
										class="panel-link active"
										data-toggle="collapse"
										data-target="#collapse1"
										aria-expanded="true"
										aria-controls="collapse1"
									>
										information
									</button>
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
									<button
										class="panel-link"
										data-toggle="collapse"
										data-target="#collapse3"
										aria-expanded="false"
										aria-controls="collapse3"
									>
										shipping & Returns
									</button>
								</div>
								<div
									id="collapse3"
									class="collapse show"
									aria-labelledby="headingThree"
									data-parent="#accordion"
								>
									<div class="panel-body">
										<h4>7 Days Returns</h4>
										<p>
											Cash on Delivery <br />Home Delivery
											<span>3 - 4 days</span>
										</p>
										<p>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit. Proin
											pharetra tempor so dales. Phasellus
											sagittis auctor gravida. Integer
											bibendum sodales arcu id te mpus. Ut
											consectetur lacus leo, non
											scelerisque nulla euismod nec.
										</p>
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

/* Modals */
import ConfirmPopup from '@/components/popups/ConfirmPopup'

import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'

const moment = require('moment')

const productResource = new ProductResource()
const orderResource = new OrderResource()

import { mapGetters } from 'vuex'

require('@/assets/js/jquery.nicescroll.min.js')

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
		Product,
		ConfirmPopup,
		ProductSideBar,
		VueCtkDateTimePicker,
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
			selectedPeriod: {
				start: moment(moment(Date()).format('YYYY-MM-DD'), 'YYYY-MM-DD')
					.add(15, 'd')
					.format('YYYY-MM-DD'),
				end: '',
			},
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
		disabledDates() {
			var disabledDates = []

			var momentDate = moment(this.selectedPeriod.start, 'YYYY-MM-DD')

			if (this.selectedPeriod.start) {
				// disabledDates.push(momentDate.clone().format('YYYY-MM-DD'))
				disabledDates.push(
					momentDate
						.clone()
						.add(1, 'd')
						.format('YYYY-MM-DD')
				)
				disabledDates.push(
					momentDate
						.clone()
						.add(2, 'd')
						.format('YYYY-MM-DD')
				)
			}
			return disabledDates
		},
		maxDate() {
			if (!this.selectedPeriod.start) {
				return null
			}
			return moment(this.selectedPeriod.start, 'YYYY-MM-DD')
				.add(8, 'd')
				.format('YYYY-MM-DD')
		},
		minDate() {
			return moment(moment(Date()).format('YYYY-MM-DD'), 'YYYY-MM-DD')
				.add(15, 'd')
				.format('YYYY-MM-DD')
		},
	}, // End of Component > computed

	/*
        |--------------------------------------------------------------------------
        | Component > methods
        |--------------------------------------------------------------------------
        */
	watch: {
		selectedPeriod(changedDate) {
			this.isDisabled = true

			if (changedDate.start && changedDate.end) {
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
		async confirm() {
			this.isLoading = true
			await orderResource.destroy(this.item.my_order.id)
			this.getSingle()
			this.isLoading = false
		},
		async validateProductOrderDate() {
			this.isDisabled = true
			this.rentAmount = null

			var query = this.selectedPeriod
			query.product_id = this.item.id

			const response = await orderResource.validateOrderDate(query)

			if (response && !response.error) {
				const tokenResponse = await orderResource.calculateRent(query)
				this.rentAmount = tokenResponse.data
				this.isDisabled = false
			}
		},
		async getSingle() {
			this.isLoading = true

			const response = await productResource.get(this.$route.params.id)
			this.rentAmount = null

			this.item = response.data

			this.isLoading = false

			if (this.item.my_order) {
				this.rentAmount = this.item.my_order.rent_amount
			}

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
