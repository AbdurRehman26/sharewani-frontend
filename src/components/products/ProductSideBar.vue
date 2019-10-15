<template>
	<div class="col-lg-3 order-2 order-lg-1">
		<div class="filter-widget">
			<h2 class="fw-title">Categories</h2>
			<div class="category-menu">
				<multiselect v-model="value" :options="options"></multiselect>
			</div>
		</div>
		<div class="filter-widget">
			<h2 class="fw-title">Events</h2>
			<div class="category-menu">
				<multiselect v-model="value" :options="options"></multiselect>
			</div>
		</div>
		<div class="filter-widget mb-0">
			<h2 class="fw-title">refine by</h2>
			<div class="price-range-wrap">
				<h4>Price</h4>
				<div
					class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
					data-min="10"
					data-max="270"
				>
					<div
						class="ui-slider-range ui-corner-all ui-widget-header"
						style="left: 0%; width: 100%;"
					></div>
					<span
						tabindex="0"
						class="ui-slider-handle ui-corner-all ui-state-default"
						style="left: 0%;"
					>
					</span>
					<span
						tabindex="0"
						class="ui-slider-handle ui-corner-all ui-state-default"
						style="left: 100%;"
					>
					</span>
				</div>
				<div class="range-slider">
					<div class="price-input">
						<range-slider
							class="slider"
							min="10"
							max="1000"
							step="10"
							v-model="sliderValue"
						>
						</range-slider>
					</div>
				</div>
			</div>
		</div>
		<div class="filter-widget mb-0">
			<h2 class="fw-title">color by</h2>
			<div class="fw-color-choose">
				<div class="cs-item">
					<input type="radio" name="cs" id="gray-color" />
					<label class="cs-gray" for="gray-color">
						<span>(3)</span>
					</label>
				</div>
				<div class="cs-item">
					<input type="radio" name="cs" id="orange-color" />
					<label class="cs-orange" for="orange-color">
						<span>(25)</span>
					</label>
				</div>
				<div class="cs-item">
					<input type="radio" name="cs" id="yollow-color" />
					<label class="cs-yollow" for="yollow-color">
						<span>(112)</span>
					</label>
				</div>
				<div class="cs-item">
					<input type="radio" name="cs" id="green-color" />
					<label class="cs-green" for="green-color">
						<span>(75)</span>
					</label>
				</div>
				<div class="cs-item">
					<input type="radio" name="cs" id="purple-color" />
					<label class="cs-purple" for="purple-color">
						<span>(9)</span>
					</label>
				</div>
				<div class="cs-item">
					<input type="radio" name="cs" id="blue-color" checked="" />
					<label class="cs-blue" for="blue-color">
						<span>(29)</span>
					</label>
				</div>
			</div>
		</div>
		<div class="filter-widget mb-0">
			<h2 class="fw-title">Size</h2>
			<div class="fw-size-choose">
				<div class="sc-item">
					<input type="radio" name="sc" id="xs-size" />
					<label for="xs-size">XS</label>
				</div>
				<div class="sc-item">
					<input type="radio" name="sc" id="s-size" />
					<label for="s-size">S</label>
				</div>
				<div class="sc-item">
					<input type="radio" name="sc" id="m-size" checked="" />
					<label for="m-size">M</label>
				</div>
				<div class="sc-item">
					<input type="radio" name="sc" id="l-size" />
					<label for="l-size">L</label>
				</div>
				<div class="sc-item">
					<input type="radio" name="sc" id="xl-size" />
					<label for="xl-size">XL</label>
				</div>
				<div class="sc-item">
					<input type="radio" name="sc" id="xxl-size" />
					<label for="xxl-size">XXL</label>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'

export default {
	components: {
		Multiselect,
		RangeSlider,
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
			value: null,
			options: ['list', 'of', 'options'],
			sliderValue: 50,
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
	methods: {}, // End of Component > methods

	/*
        |--------------------------------------------------------------------------
        | Component > mounted
        |--------------------------------------------------------------------------
        */
	mounted() {}, // End of Component > mounted
} // End of export default
</script>

<style scoped>
.slider {
	/* overwrite slider styles */
	width: 200px;
}
</style>
