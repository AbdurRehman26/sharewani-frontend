<template>
	<div>
		<!-- Hero section -->

		<main-banner></main-banner>

		<!-- Hero section end -->

		<!-- Features section -->

		<feature-header></feature-header>

		<!-- Features section end -->

		<!-- letest product section -->

		<product-home-carousel></product-home-carousel>

		<!-- letest product section end -->

		<!-- Product filter section -->

		<product-home-grid></product-home-grid>

		<!-- Product filter section end -->

		<!-- Banner section -->

		<!-- <footer-banner></footer-banner> -->

		<!-- Banner section end  -->
	</div>
</template>

<script type="text/javascript">
import MainBanner from '@/components/banners/MainBanner'
import FooterBanner from '@/components/banners/FooterBanner'
import FeatureHeader from '@/components/FeatureHeader'
import ProductHomeCarousel from '@/components/products/ProductHomeCarousel'
import ProductHomeGrid from '@/components/products/ProductHomeGrid'

require('@/assets/js/owl.carousel.min.js')

export default {
	components: {
		MainBanner,
		FooterBanner,
		FeatureHeader,
		ProductHomeGrid,
		ProductHomeCarousel,
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
			sidebarResponsive: false,
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
		initializeOWlCarousel() {
			;(function($) {

				$('.category-menu > li').hover(function(e) {
					$(this).addClass('active')
					e.preventDefault()
				})
				$('.category-menu').mouseleave(function(e) {
					$('.category-menu li').removeClass('active')
					e.preventDefault()
				})
				$('.set-bg').each(function() {
					var bg = $(this).data('setbg')
					$(this).css('background-image', 'url(' + bg + ')')
				})

				$('.popular-services-slider').owlCarousel({
					loop: true,
					dots: false,
					margin: 40,
					autoplay: true,
					nav: true,
					navText: [
						'<i class="fa fa-angle-left"></i>',
						'<i class="fa fa-angle-right"></i>',
					],
					responsive: {
						0: {
							items: 1,
						},
						768: {
							items: 2,
						},
						991: {
							items: 3,
						},
					},
				})

				$('.panel-link').on('click', function(e) {
					$('.panel-link').removeClass('active')
					var $this = $(this)
					if (!$this.hasClass('active')) {
						$this.addClass('active')
					}
					e.preventDefault()
				})

			})(jQuery)
		},
	}, // End of Component > methods

	/*
|--------------------------------------------------------------------------
| Component > mounted
|--------------------------------------------------------------------------
*/
	mounted() {
		this.initializeOWlCarousel()
	}, // End of Component > mounted
} // End of export default
</script>
