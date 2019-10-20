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

		<footer-banner></footer-banner>

		<!-- Banner section end  -->
	</div>
</template>

<script type="text/javascript">
import MainBanner from '@/components/banners/MainBanner'
import FooterBanner from '@/components/banners/FooterBanner'
import FeatureHeader from '@/components/FeatureHeader'
import ProductHomeCarousel from '@/components/products/ProductHomeCarousel'
import ProductHomeGrid from '@/components/products/ProductHomeGrid'

require('../../../html-design/divisima/js/jquery-3.2.1.min.js')
require('../../../html-design/divisima/js/jquery.slicknav.min.js')
require('../../../html-design/divisima/js/owl.carousel.min.js')
require('../../../html-design/divisima/js/jquery.nicescroll.min.js')

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
				$('.main-menu').slicknav({
					prependTo: '.main-navbar .container',
					closedSymbol: '<i class="flaticon-right-arrow"></i>',
					openedSymbol: '<i class="flaticon-down-arrow"></i>',
				})

				$('.cart-table-warp, .product-thumbs').niceScroll({
					cursorborder: '',
					cursorcolor: '#afafaf',
					boxzoom: false,
				})

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

				var hero_s = $('.hero-slider')
				hero_s
					.owlCarousel({
						loop: true,
						margin: 0,
						nav: true,
						items: 1,
						dots: true,
						animateOut: 'fadeOut',
						animateIn: 'fadeIn',
						navText: [
							'<i class="flaticon-left-arrow-1"></i>',
							'<i class="flaticon-right-arrow-1"></i>',
						],
						smartSpeed: 1200,
						autoHeight: false,
						autoplay: true,
						onInitialized: function() {
							var a = this.items().length
							$('#snh-1').html(
								'<span>1</span><span>' + a + '</span>'
							)
						},
					})
					.on('changed.owl.carousel', function(a) {
						var b = --a.item.index,
							a = a.item.count
						$('#snh-1').html(
							'<span> ' +
								(1 > b ? b + a : b > a ? b - a : b) +
								'</span><span>' +
								a +
								'</span>'
						)
					})

				hero_s.append(
					'<div class="slider-nav-warp"><div class="slider-nav"></div></div>'
				)
				$('.hero-slider .owl-nav, .hero-slider .owl-dots').appendTo(
					'.slider-nav'
				)
				$('.product-slider').owlCarousel({
					loop: true,
					nav: true,
					dots: false,
					margin: 30,
					autoplay: true,
					navText: [
						'<i class="flaticon-left-arrow-1"></i>',
						'<i class="flaticon-right-arrow-1"></i>',
					],
					responsive: {
						0: {
							items: 1,
						},
						480: {
							items: 2,
						},
						768: {
							items: 3,
						},
						1200: {
							items: 4,
						},
					},
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

				var proQty = $('.pro-qty')
				proQty.prepend('<span class="dec qtybtn">-</span>')
				proQty.append('<span class="inc qtybtn">+</span>')
				proQty.on('click', '.qtybtn', function() {
					var $button = $(this)
					var oldValue = $button
						.parent()
						.find('input')
						.val()
					if ($button.hasClass('inc')) {
						var newVal = parseFloat(oldValue) + 1
					} else {
						// Don't allow decrementing below zero
						if (oldValue > 0) {
							var newVal = parseFloat(oldValue) - 1
						} else {
							newVal = 0
						}
					}
					$button
						.parent()
						.find('input')
						.val(newVal)
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
