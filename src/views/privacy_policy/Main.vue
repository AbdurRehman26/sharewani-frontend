<template>
	<div>
		<!-- Page info -->
		<div class="page-top-info">
			<div class="container">
				<h4>Privacy Policy</h4>
				<div class="site-pagination">
					<!-- <a href="">Home</a> / <a href="">Product</a> / -->
				</div>
			</div>
		</div>
		<!-- Page info end -->

		<!-- Category section -->
		<section class="main-body-section category-section spad">
			<div class="container">
				<div class="row">


					<span style="padding: 25px;" v-html="item"></span>


				</div>
			</div>
		</section>
		<!-- Category section end -->
	</div>
</template>

<script>
import GlobalSettingResource from '@/api/global-setting'

const globalSettingResource = new GlobalSettingResource()

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
            item: {},
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
        async getItem() {
            const response = await globalSettingResource.getByKey('privacy_policy')
            
            this.item = response.data ? response.data.value : {}
        },
    }, // End of Component > methods

    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {
        this.getItem()
    }, // End of Component > mounted
} // End of export default
</script>
