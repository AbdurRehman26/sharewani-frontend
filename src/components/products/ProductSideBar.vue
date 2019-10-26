<template>
	<div class="col-lg-3 order-2 order-lg-1">
		<div class="filter-widget">
			<h2 class="fw-title">Events</h2>
			<div class="category-menu">
				<multiselect
					v-model="query.event_id"
					track-by="id"
					label="name"
					:options="events"
				></multiselect>
			</div>
		</div>
		<div class="filter-widget">
			<h2 class="fw-title">Brands</h2>
			<div class="category-menu">
				<multiselect
					v-model="query.brand_id"
					track-by="id"
					label="name"
					:options="brands"
				></multiselect>
			</div>
		</div>

		<div class="filter-widget">
			<h2 class="fw-title">Fabric ( Brands )</h2>
			<div class="category-menu">
				<multiselect
					v-model="query.fabric_brand_id"
					track-by="id"
					label="name"
					:options="brands"
				></multiselect>
			</div>
		</div>

		<div class="filter-widget">
			<h2 class="fw-title">Fabric Ages</h2>
			<div class="category-menu">
				<multiselect
					v-model="query.fabric_age_id"
					track-by="id"
					label="name"
					:options="fabricAges"
				></multiselect>
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
					v-model="query.original_price"
				>
				</range-slider>
				<div>
					<center>{{ query.original_price }}</center>
				</div>
			</div>
		</div>
		
		<div class="filter-widget mb-0">
			<h2 class="fw-title">color by</h2>
			<div class="fw-color-choose">
				<div v-for="color in colors" class="cs-item">
					<input
						type="radio"
						name="cs"
						v-model="query.color_id"
						:value="color.id"
						:id="color.name + '-color'"
					/>
					<label
						:style="{ background: color.code }"
						ty
						class="cs-gray"
						:for="color.name + '-color'"
					>
						<span>{{ color.name }}</span>
					</label>
				</div>
			</div>
		</div>
		<div class="filter-widget mb-0">
			<h2 class="fw-title">Size</h2>
			<div class="fw-size-choose">
				<div v-for="size in sizes" class="sc-item">
					<input
						type="radio"
						v-model="query.size_id"
						name="sc"
						:value="size.id"
						:id="size.code + '-size'"
					/>
					<label :for="size.code + '-size'">{{ size.code }}</label>
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
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'

const eventResource = new Resource('event')
const brandResource = new Resource('brand')
const fabricAgeResource = new Resource('fabric-age')
const sizeResource = new Resource('size')
const colorResource = new Resource('color')

export default {
	components: {
		Multiselect,
		RangeSlider,
		VueCtkDateTimePicker,
	},
	/*
        |--------------------------------------------------------------------------
        | Component > mounted
        |--------------------------------------------------------------------------
        */
	mounted() {
		this.getList()
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
			events: [],
			brands: [],
			fabricAges: [],
			sizes: [],
			colors: [],
			query: {
				page: 1,
				limit: 20,
				color_id: '',
				size_id: null,
				original_price: '',
				fabric_age_id: '',
				event_id: '',
				brand_id: '',
				start: '',
				end: '',
			},
		}
	}, // End of Component > data

	/*
        |--------------------------------------------------------------------------
        | Component > computed
        |--------------------------------------------------------------------------
        */
	computed: {
		filterValues() {
			return (
				this.query.brand_id,
				this.query.fabric_age_id,
				this.query.event_id,
				this.query.start,
				this.query.end,
				this.query.size_id,
				this.query.color_id,
				new Date()
			)
		},
	}, // End of Component > computed

	/*
        |--------------------------------------------------------------------------
        | Component > computed
        |--------------------------------------------------------------------------
        */
	watch: {
		filterValues(filters) {
			const fields = [
				'brand_id',
				'event_id',
				'fabric_brand_id',
				'fabric_age_id',
			]

			var queryValues = {}

			for (var i in this.query) {
				queryValues[i] = this.query[i];

				if (fields.includes(i) && this.query[i]) {
					queryValues[i] = this.query[i].id;
				}
			}

			this.$emit('filters', queryValues)
		},
	}, // End of Component > computed
	/*
        |--------------------------------------------------------------------------
        | Component > methods
        |--------------------------------------------------------------------------
        */
	methods: {
		getList() {
			this.getEventList()
			this.getBrandList()
			this.getFabricAgeList()
			this.getSizeList()
			this.getColorList()
		},
		async getColorList() {
			this.loading = true

			const response = await colorResource.list(this.query)

			this.colors = response.data

			this.loading = false
		},
		async getSizeList() {
			this.loading = true

			const response = await sizeResource.list(this.query)

			this.sizes = response.data

			this.loading = false
		},
		async getFabricAgeList() {
			this.loading = true

			const response = await fabricAgeResource.list(this.query)

			this.fabricAges = response.data

			this.loading = false
		},
		async getEventList() {
			this.loading = true

			const response = await eventResource.list(this.query)

			this.events = response.data

			this.loading = false
		},
		async getBrandList() {
			this.loading = true

			const response = await brandResource.list(this.query)

			this.brands = response.data

			this.loading = false
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
