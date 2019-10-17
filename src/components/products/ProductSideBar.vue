<template>
	<div class="col-lg-3 order-2 order-lg-1">
		<div class="filter-widget">
			<h2 class="fw-title">Categories</h2>
			<div class="category-menu">
				<multiselect v-model="value" track-by="id" label="name" :options="categories"></multiselect>
			</div>
		</div>
		<div class="filter-widget">
			<h2 class="fw-title">Brands</h2>
			<div class="category-menu">
				<multiselect v-model="value" track-by="id" label="name" :options="brands"></multiselect>
			</div>
		</div>
		<div class="filter-widget">
			<h2 class="fw-title">Fabric Ages</h2>
			<div class="category-menu">
				<multiselect v-model="value" track-by="id" label="name" :options="fabricAges"></multiselect>
			</div>
		</div>
		<div class="filter-widget mb-0">
			<h2 class="fw-title">refine by</h2>
			<div class="price-range-wrap">
				<h4>Price</h4>
				<range-slider
					class="slider"
					min="2000"
					max="100000"
					step="1000"
					v-model="sliderValue"
				>
				</range-slider>
				<div><center>{{ sliderValue }}</center></div>
			</div>
		</div>
		<div class="filter-widget mb-0">
			<h2 class="fw-title">color by</h2>
			<div class="fw-color-choose">
				<div v-for="color in colors" class="cs-item">
					<input type="radio" name="cs" :id="color.name+'-color'" />
					<label :style="{'background' : color.code }"ty class="cs-gray" :for="color.name+'-color'">
						<span>{{color.name}}</span>
					</label>
				</div>
			</div>
		</div>
		<div class="filter-widget mb-0">
			<h2 class="fw-title">Size</h2>
			<div class="fw-size-choose">
				<div v-for="size in sizes" class="sc-item">
					<input type="radio" name="sc" :id="size.code+'-size'" />
					<label :for="size.code+'-size'">{{size.code}}</label>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'
import Resource from '@/api/resource'

const categoryResource = new Resource('category');
const brandResource = new Resource('brand');
const fabricAgeResource = new Resource('fabric-age');
const sizeResource = new Resource('size');
const colorResource = new Resource('color');

export default {
	components: {
		Multiselect,
		RangeSlider,
	},
	/*
        |--------------------------------------------------------------------------
        | Component > mounted
        |--------------------------------------------------------------------------
        */
	mounted() {
		this.getOptionsList();
	}, // End of Component > mounted
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
			categories: [],
			brands: [],
			fabricAges: [],
			sizes: [],
			colors: [],
			value: null,
			options: ['list', 'of', 'options'],
			sliderValue: 50,
			query: {
				page: 1,
				limit: 15,
				keyword: '',
				role: ''
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
		getOptionsList(){
			this.getCategoryList();
			this.getBrandList();
			this.getFabricAgeList();
			this.getSizeList();
			this.getColorList();
		},
		async getColorList(){

			this.loading = true;

			const response = await colorResource.list(this.query);

			this.colors = response.data;

			this.loading = false;

		},
		async getSizeList(){

			this.loading = true;

			const response = await sizeResource.list(this.query);

			this.sizes = response.data;

			this.loading = false;

		},
		async getFabricAgeList(){

			this.loading = true;

			const response = await fabricAgeResource.list(this.query);

			this.fabricAges = response.data;

			this.loading = false;

		},
		async getCategoryList(){

			this.loading = true;

			const response = await categoryResource.list(this.query);

			this.categories = response.data;

			this.loading = false;

		},
		async getBrandList(){

			this.loading = true;

			const response = await brandResource.list(this.query);

			this.brands = response.data;

			this.loading = false;

		},
	}, // End of Component > methods
} // End of export default
</script>

<style scoped>
.slider {
	/* overwrite slider styles */
	width: 200px;
}
</style>
