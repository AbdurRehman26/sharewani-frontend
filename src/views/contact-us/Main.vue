<template>
	<div>
		<!-- Page info -->
		<div class="page-top-info">
			<div class="container">
				<h4>Contact</h4>
				<div class="site-pagination">
					<a href="">Home</a> /
					<a href="">Contact</a>
				</div>
			</div>
		</div>
		<!-- Page info end -->

		<!-- Contact section -->
		<section class="contact-section">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 contact-info">
						<h3>Get in touch</h3>
						<form class="contact-form">
							<input
								v-model="newItem.name"
								type="text"
								placeholder="Your name"
							/>
							<input
								v-model="newItem.email"
								type="text"
								placeholder="Your e-mail"
							/>
							<input
								v-model="newItem.subject"
								type="text"
								placeholder="Subject"
							/>
							<textarea
								v-model="newItem.message"
								placeholder="Message"
							></textarea>
							<button
								@click.prevent="submitForm"
								class="site-btn mb-5"
							>
															<b-spinner small v-if="isLoading"></b-spinner>

								SEND NOW
							</button>
						</form>
					</div>
				</div>
			</div>
			<div class="map">
				<iframe
					src="https://maps.google.com/maps?q=karachi&t=&z=11&ie=UTF8&iwloc=&output=embed"
					style="border:0"
					allowfullscreen
				></iframe>
			</div>
		</section>
		<!-- Contact section end -->
	</div>
</template>

<script>
import Resource from '@/api/resource'
const contactUsResource = new Resource('contact-us')

export default {
	components: {},
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
			isLoading: false,
			newItem: {
				name: '',
				email: '',
				subject: '',
				message: '',
			},
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
		async submitForm() {
			this.isLoading = true;
			const response = await contactUsResource.store(this.newItem)
			this.resetForm()
			this.isLoading = false;
		},
		resetForm() {
			this.newItem = {
				name: '',
				email: '',
				subject: '',
				message: '',
			}
		},
	}, // End of Component > methods

	/*
        |--------------------------------------------------------------------------
        | Component > mounted
        |--------------------------------------------------------------------------
        */
	mounted() {}, // End of Component > mounted
} // End of export default
</script>
