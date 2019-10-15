<template>

	<div>


	<!-- Page info -->
	<div class="page-top-info">
		<div class="container">
			<h4>CAtegory PAge</h4>
			<div class="site-pagination">
				<a href="">Home</a> /
				<a href="">Shop</a> /
			</div>
		</div>
	</div>
	<!-- Page info end -->


	<!-- Category section -->
	<section class="category-section spad">
		<div class="container">
			<div class="row">

				<product-side-bar></product-side-bar>

				<div class="col-lg-9  order-1 order-lg-2 mb-5 mb-lg-0">
					<div class="row">

						<product :item="item" v-for="item in items"></product>

						<div class="text-center w-100 pt-3">

							<base-pagination></base-pagination>


						</div>

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
import ProductResource from '@/api/product';

const productResource = new ProductResource();

export default {
	/*
        |--------------------------------------------------------------------------
        | Component > mounted
        |--------------------------------------------------------------------------
        */
	mounted() {
		this.getList();
	}, // End of Component > mounted
    components: {
    	Product,
    	ProductSideBar
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
        	items: [],
			query: {
				page: 1,
				limit: 15,
				keyword: '',
				role: '',
				pagination : true,
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
		async getList() {
			const { limit, page, pagination } = this.query;
			this.loading = true;

			const response = await productResource.list(this.query);
			console.log(response);
			this.items = response.data;
			this.total = 10;
			this.loading = false;
		},
	}, // End of Component > methods
} // End of export default
</script>
