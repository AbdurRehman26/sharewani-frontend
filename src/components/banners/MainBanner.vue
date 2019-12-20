<template>
	<section class="hero-section">
		<div class="hero-slider owl-carousel">
			<div
				v-for="item in items"
				class="hs-item set-bg"
				:data-setbg="item.value.upload_url"
			>
				<div class="container">
					<div class="row">
						<div class="col-xl-6 col-lg-7 text-white">
							<span>RENT NOW</span>
							<h2>Embroidered Sherwaani</h2>
							<a href="#" class="site-btn sb-line">DISCOVER</a>
							<a href="#" class="site-btn sb-white"
								>Browse More Outfits</a
							>
						</div>
					</div>
					<div class="offer-card text-white">
						<span>From</span>
						<h4>PKR</h4> 
						<h3>1,500</h3>
						<p style="margin-top:10px">ORDER NOW</p>
					</div>
				</div>
			</div>
		</div>

	</section>
</template>

<script>
import GlobalSettingResource from '@/api/global-setting'

const settingResource = new GlobalSettingResource()

export default {
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

				$('.set-bg').each(function() {
					var bg = $(this).data('setbg')
					console.log(bg);
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

		async getItem() {
			const response = await settingResource.list({
				key: 'home_main_banner',
				is_active: 1,
			})
			this.items = response.data

			let self = this;

			setTimeout(function(){

			self.initializeOWlCarousel();

			}, 3000);

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
