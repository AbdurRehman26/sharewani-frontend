<template>
	<div>
		<!-- Header section -->
		<header class="header-section">
			<div class="header-top">
				<div class="container">
					<div class="row">
						<div class="col-lg-2 text-center text-lg-left">
							<!-- logo -->
							<a href="./index.html" class="site-logo">
								<img src="img/logo.png" alt="" />
							</a>
						</div>
						<div class="col-xl-6 col-lg-5">
							<form class="header-search-form">
								<input
									type="text"
									placeholder="Search on divisima ...."
								/>
								<button><i class="flaticon-search"></i></button>
							</form>
						</div>
						<div class="col-xl-4 col-lg-5">
							<div class="user-panel">
								<div class="up-item">
									<i class="flaticon-profile"></i>
									<a href="#">Sign</a> In or
									<a href="#">Create Account</a>
								</div>
								<div class="up-item">
									<div class="shopping-card">
										<i class="flaticon-bag"></i>
										<span>0</span>
									</div>
									<a href="#">Shopping Cart</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<nav class="main-navbar">
				<div class="container">
					<!-- menu -->
					<ul class="main-menu">
						<li><a href="#">Home</a></li>
						<li><a href="#">Women</a></li>
						<li><a href="#">Men</a></li>
						<li>
							<a href="#"
								>Jewelry
								<span class="new">New</span>
							</a>
						</li>
						<li>
							<a href="#">Shoes</a>
							<ul class="sub-menu">
								<li><a href="#">Sneakers</a></li>
								<li><a href="#">Sandals</a></li>
								<li><a href="#">Formal Shoes</a></li>
								<li><a href="#">Boots</a></li>
								<li><a href="#">Flip Flops</a></li>
							</ul>
						</li>
						<li>
							<a href="#">Pages</a>
							<ul class="sub-menu">
								<li>
									<a href="./product.html">Product Page</a>
								</li>
								<li>
									<a href="./category.html">Category Page</a>
								</li>
								<li><a href="./cart.html">Cart Page</a></li>
								<li>
									<a href="./checkout.html">Checkout Page</a>
								</li>
								<li>
									<a href="./contact.html">Contact Page</a>
								</li>
							</ul>
						</li>
						<li><a href="#">Blog</a></li>
					</ul>
				</div>
			</nav>
		</header>
		<!-- Header section end -->

		<!-- Hero section -->
		<section class="hero-section">
			<div class="hero-slider owl-carousel">
				<div
					class="hs-item set-bg"
					data-setbg="img/bg.jpg"
				>
					<div class="container">
						<div class="row">
							<div class="col-xl-6 col-lg-7 text-white">
								<span>New Arrivals</span>
								<h2>denim jackets</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Quis ipsum sus-pendisse ultrices gravida.
									Risus commodo viverra maecenas accumsan
									lacus vel facilisis.
								</p>
								<a href="#" class="site-btn sb-line"
									>DISCOVER</a
								>
								<a href="#" class="site-btn sb-white"
									>ADD TO CART</a
								>
							</div>
						</div>
						<div class="offer-card text-white">
							<span>from</span>
							<h2>$29</h2>
							<p>SHOP NOW</p>
						</div>
					</div>
				</div>
				<div
					class="hs-item set-bg"
					data-setbg="../assets/images/bg-2.jpg"
				>
					<div class="container">
						<div class="row">
							<div class="col-xl-6 col-lg-7 text-white">
								<span>New Arrivals</span>
								<h2>denim jackets</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Quis ipsum sus-pendisse ultrices gravida.
									Risus commodo viverra maecenas accumsan
									lacus vel facilisis.
								</p>
								<a href="#" class="site-btn sb-line"
									>DISCOVER</a
								>
								<a href="#" class="site-btn sb-white"
									>ADD TO CART</a
								>
							</div>
						</div>
						<div class="offer-card text-white">
							<span>from</span>
							<h2>$29</h2>
							<p>SHOP NOW</p>
						</div>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="slide-num-holder" id="snh-1"></div>
			</div>
		</section>
		<!-- Hero section end -->

		<!-- Features section -->
		<section class="features-section">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-4 p-0 feature">
						<div class="feature-inner">
							<div class="feature-icon">
								<img
									src="img/icons/1.png"
									alt="#"
								/>
							</div>
							<h2>Fast Secure Payments</h2>
						</div>
					</div>
					<div class="col-md-4 p-0 feature">
						<div class="feature-inner">
							<div class="feature-icon">
								<img
									src="img/icons/2.png"
									alt="#"
								/>
							</div>
							<h2>Premium Products</h2>
						</div>
					</div>
					<div class="col-md-4 p-0 feature">
						<div class="feature-inner">
							<div class="feature-icon">
								<img
									src="img/icons/3.png"
									alt="#"
								/>
							</div>
							<h2>Free & fast Delivery</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Features section end -->

		<!-- letest product section -->
		<section class="top-letest-product-section">
			<div class="container">
				<div class="section-title">
					<h2>LATEST PRODUCTS</h2>
				</div>
				<div class="product-slider owl-carousel">
					<div class="product-item">
						<div class="pi-pic">
							<img
								src="img/product/1.jpg"
								alt=""
							/>
							<div class="pi-links">
								<a href="#" class="add-card"
									><i class="flaticon-bag"></i
									><span>ADD TO CART</span></a
								>
								<a href="#" class="wishlist-btn"
									><i class="flaticon-heart"></i
								></a>
							</div>
						</div>
						<div class="pi-text">
							<h6>$35,00</h6>
							<p>Flamboyant Pink Top</p>
						</div>
					</div>
					<div class="product-item">
						<div class="pi-pic">
							<div class="tag-new">New</div>
							<img
								src="img/product/2.jpg"
								alt=""
							/>
							<div class="pi-links">
								<a href="#" class="add-card"
									><i class="flaticon-bag"></i
									><span>ADD TO CART</span></a
								>
								<a href="#" class="wishlist-btn"
									><i class="flaticon-heart"></i
								></a>
							</div>
						</div>
						<div class="pi-text">
							<h6>$35,00</h6>
							<p>Black and White Stripes Dress</p>
						</div>
					</div>
					<div class="product-item">
						<div class="pi-pic">
							<img
								src="img/product/3.jpg"
								alt=""
							/>
							<div class="pi-links">
								<a href="#" class="add-card"
									><i class="flaticon-bag"></i
									><span>ADD TO CART</span></a
								>
								<a href="#" class="wishlist-btn"
									><i class="flaticon-heart"></i
								></a>
							</div>
						</div>
						<div class="pi-text">
							<h6>$35,00</h6>
							<p>Flamboyant Pink Top</p>
						</div>
					</div>
					<div class="product-item">
						<div class="pi-pic">
							<img
								src="img/product/4.jpg"
								alt=""
							/>
							<div class="pi-links">
								<a href="#" class="add-card"
									><i class="flaticon-bag"></i
									><span>ADD TO CART</span></a
								>
								<a href="#" class="wishlist-btn"
									><i class="flaticon-heart"></i
								></a>
							</div>
						</div>
						<div class="pi-text">
							<h6>$35,00</h6>
							<p>Flamboyant Pink Top</p>
						</div>
					</div>
					<div class="product-item">
						<div class="pi-pic">
							<img
								src="img/product/6.jpg"
								alt=""
							/>
							<div class="pi-links">
								<a href="#" class="add-card"
									><i class="flaticon-bag"></i
									><span>ADD TO CART</span></a
								>
								<a href="#" class="wishlist-btn"
									><i class="flaticon-heart"></i
								></a>
							</div>
						</div>
						<div class="pi-text">
							<h6>$35,00</h6>
							<p>Flamboyant Pink Top</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- letest product section end -->

		<!-- Product filter section -->
		<section class="product-filter-section">
			<div class="container">
				<div class="section-title">
					<h2>BROWSE TOP SELLING PRODUCTS</h2>
				</div>
				<ul class="product-filter-menu">
					<li><a href="#">TOPS</a></li>
					<li><a href="#">JUMPSUITS</a></li>
					<li><a href="#">LINGERIE</a></li>
					<li><a href="#">JEANS</a></li>
					<li><a href="#">DRESSES</a></li>
					<li><a href="#">COATS</a></li>
					<li><a href="#">JUMPERS</a></li>
					<li><a href="#">LEGGINGS</a></li>
				</ul>
				<div class="row">
					<div class="col-lg-3 col-sm-6">
						<div class="product-item">
							<div class="pi-pic">
								<img
									src="img/product/5.jpg"
									alt=""
								/>
								<div class="pi-links">
									<a href="#" class="add-card"
										><i class="flaticon-bag"></i
										><span>ADD TO CART</span></a
									>
									<a href="#" class="wishlist-btn"
										><i class="flaticon-heart"></i
									></a>
								</div>
							</div>
							<div class="pi-text">
								<h6>$35,00</h6>
								<p>Flamboyant Pink Top</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="product-item">
							<div class="pi-pic">
								<div class="tag-sale">ON SALE</div>
								<img
									src="img/product/6.jpg"
									alt=""
								/>
								<div class="pi-links">
									<a href="#" class="add-card"
										><i class="flaticon-bag"></i
										><span>ADD TO CART</span></a
									>
									<a href="#" class="wishlist-btn"
										><i class="flaticon-heart"></i
									></a>
								</div>
							</div>
							<div class="pi-text">
								<h6>$35,00</h6>
								<p>Black and White Stripes Dress</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="product-item">
							<div class="pi-pic">
								<img
									src="img/product/7.jpg"
									alt=""
								/>
								<div class="pi-links">
									<a href="#" class="add-card"
										><i class="flaticon-bag"></i
										><span>ADD TO CART</span></a
									>
									<a href="#" class="wishlist-btn"
										><i class="flaticon-heart"></i
									></a>
								</div>
							</div>
							<div class="pi-text">
								<h6>$35,00</h6>
								<p>Flamboyant Pink Top</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="product-item">
							<div class="pi-pic">
								<img
									src="img/product/8.jpg"
									alt=""
								/>
								<div class="pi-links">
									<a href="#" class="add-card"
										><i class="flaticon-bag"></i
										><span>ADD TO CART</span></a
									>
									<a href="#" class="wishlist-btn"
										><i class="flaticon-heart"></i
									></a>
								</div>
							</div>
							<div class="pi-text">
								<h6>$35,00</h6>
								<p>Flamboyant Pink Top</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="product-item">
							<div class="pi-pic">
								<img
									src="img/product/9.jpg"
									alt=""
								/>
								<div class="pi-links">
									<a href="#" class="add-card"
										><i class="flaticon-bag"></i
										><span>ADD TO CART</span></a
									>
									<a href="#" class="wishlist-btn"
										><i class="flaticon-heart"></i
									></a>
								</div>
							</div>
							<div class="pi-text">
								<h6>$35,00</h6>
								<p>Flamboyant Pink Top</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="product-item">
							<div class="pi-pic">
								<img
									src="img/product/10.jpg"
									alt=""
								/>
								<div class="pi-links">
									<a href="#" class="add-card"
										><i class="flaticon-bag"></i
										><span>ADD TO CART</span></a
									>
									<a href="#" class="wishlist-btn"
										><i class="flaticon-heart"></i
									></a>
								</div>
							</div>
							<div class="pi-text">
								<h6>$35,00</h6>
								<p>Black and White Stripes Dress</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="product-item">
							<div class="pi-pic">
								<img
									src="img/product/11.jpg"
									alt=""
								/>
								<div class="pi-links">
									<a href="#" class="add-card"
										><i class="flaticon-bag"></i
										><span>ADD TO CART</span></a
									>
									<a href="#" class="wishlist-btn"
										><i class="flaticon-heart"></i
									></a>
								</div>
							</div>
							<div class="pi-text">
								<h6>$35,00</h6>
								<p>Flamboyant Pink Top</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="product-item">
							<div class="pi-pic">
								<img
									src="img/product/12.jpg"
									alt=""
								/>
								<div class="pi-links">
									<a href="#" class="add-card"
										><i class="flaticon-bag"></i
										><span>ADD TO CART</span></a
									>
									<a href="#" class="wishlist-btn"
										><i class="flaticon-heart"></i
									></a>
								</div>
							</div>
							<div class="pi-text">
								<h6>$35,00</h6>
								<p>Flamboyant Pink Top</p>
							</div>
						</div>
					</div>
				</div>
				<div class="text-center pt-5">
					<button class="site-btn sb-line sb-dark">LOAD MORE</button>
				</div>
			</div>
		</section>
		<!-- Product filter section end -->

		<!-- Banner section -->
		<section class="banner-section">
			<div class="container">
				<div
					class="banner set-bg"
					data-setbg="../assets/images/banner-bg.jpg"
				>
					<div class="tag-new">NEW</div>
					<span>New Arrivals</span>
					<h2>STRIPED SHIRTS</h2>
					<a href="#" class="site-btn">SHOP NOW</a>
				</div>
			</div>
		</section>
		<!-- Banner section end  -->

		<!-- Footer section -->
		<section class="footer-section">
			<div class="container">
				<div class="footer-logo text-center">
					<a href="index.html"
						><img src="img/logo-light.png" alt=""
					/></a>
				</div>
				<div class="row">
					<div class="col-lg-3 col-sm-6">
						<div class="footer-widget about-widget">
							<h2>About</h2>
							<p>
								Donec vitae purus nunc. Morbi faucibus erat sit
								amet congue mattis. Nullam frin-gilla faucibus
								urna, id dapibus erat iaculis ut. Integer ac
								sem.
							</p>
							<img src="img/cards.png" alt="" />
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="footer-widget about-widget">
							<h2>Questions</h2>
							<ul>
								<li><a href="">About Us</a></li>
								<li><a href="">Track Orders</a></li>
								<li><a href="">Returns</a></li>
								<li><a href="">Jobs</a></li>
								<li><a href="">Shipping</a></li>
								<li><a href="">Blog</a></li>
							</ul>
							<ul>
								<li><a href="">Partners</a></li>
								<li><a href="">Bloggers</a></li>
								<li><a href="">Support</a></li>
								<li><a href="">Terms of Use</a></li>
								<li><a href="">Press</a></li>
							</ul>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="footer-widget about-widget">
							<h2>Questions</h2>
							<div class="fw-latest-post-widget">
								<div class="lp-item">
									<div
										class="lp-thumb set-bg"
										data-setbg="../assets/images/blog-thumbs/1.jpg"
									></div>
									<div class="lp-content">
										<h6>what shoes to wear</h6>
										<span>Oct 21, 2018</span>
										<a href="#" class="readmore"
											>Read More</a
										>
									</div>
								</div>
								<div class="lp-item">
									<div
										class="lp-thumb set-bg"
										data-setbg="../assets/images/blog-thumbs/2.jpg"
									></div>
									<div class="lp-content">
										<h6>trends this year</h6>
										<span>Oct 21, 2018</span>
										<a href="#" class="readmore"
											>Read More</a
										>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-sm-6">
						<div class="footer-widget contact-widget">
							<h2>Questions</h2>
							<div class="con-info">
								<span>C.</span>
								<p>Your Company Ltd</p>
							</div>
							<div class="con-info">
								<span>B.</span>
								<p>
									1481 Creekside Lane Avila Beach, CA 93424,
									P.O. BOX 68
								</p>
							</div>
							<div class="con-info">
								<span>T.</span>
								<p>+53 345 7953 32453</p>
							</div>
							<div class="con-info">
								<span>E.</span>
								<p>office@youremail.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="social-links-warp">
				<div class="container">
					<div class="social-links">
						<a href="" class="instagram"
							><i class="fa fa-instagram"></i
							><span>instagram</span></a
						>
						<a href="" class="google-plus"
							><i class="fa fa-google-plus"></i
							><span>g+plus</span></a
						>
						<a href="" class="pinterest"
							><i class="fa fa-pinterest"></i
							><span>pinterest</span></a
						>
						<a href="" class="facebook"
							><i class="fa fa-facebook"></i
							><span>facebook</span></a
						>
						<a href="" class="twitter"
							><i class="fa fa-twitter"></i
							><span>twitter</span></a
						>
						<a href="" class="youtube"
							><i class="fa fa-youtube"></i
							><span>youtube</span></a
						>
						<a href="" class="tumblr"
							><i class="fa fa-tumblr-square"></i
							><span>tumblr</span></a
						>
					</div>
				</div>
			</div>
		</section>
		<!-- Footer section end -->
	</div>
</template>




<script type="text/javascript">




require("../../../html-design/divisima/js/jquery-3.2.1.min.js")
require("../../../html-design/divisima/js/jquery.slicknav.min.js")
require("../../../html-design/divisima/js/owl.carousel.min.js")
require("../../../html-design/divisima/js/jquery.nicescroll.min.js")


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

(function($) {
	/*------------------
		Navigation
	--------------------*/
	$('.main-menu').slicknav({
		prependTo:'.main-navbar .container',
		closedSymbol: '<i class="flaticon-right-arrow"></i>',
		openedSymbol: '<i class="flaticon-down-arrow"></i>'
	});


	/*------------------
		ScrollBar
	--------------------*/
	$(".cart-table-warp, .product-thumbs").niceScroll({
		cursorborder:"",
		cursorcolor:"#afafaf",
		boxzoom:false
	});


	/*------------------
		Category menu
	--------------------*/
	$('.category-menu > li').hover( function(e) {
		$(this).addClass('active');
		e.preventDefault();
	});
	$('.category-menu').mouseleave( function(e) {
		$('.category-menu li').removeClass('active');
		e.preventDefault();
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		console.log(1);
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});



	/*------------------
		Hero Slider
	--------------------*/
	var hero_s = $(".hero-slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        onInitialized: function() {
        	var a = this.items().length;
            $("#snh-1").html("<span>1</span><span>" + a + "</span>");
        }
    }).on("changed.owl.carousel", function(a) {
        var b = --a.item.index, a = a.item.count;
    	$("#snh-1").html("<span> "+ (1 > b ? b + a : b > a ? b - a : b) + "</span><span>" + a + "</span>");

    });

	hero_s.append('<div class="slider-nav-warp"><div class="slider-nav"></div></div>');
	$(".hero-slider .owl-nav, .hero-slider .owl-dots").appendTo('.slider-nav');



	/*------------------
		Brands Slider
	--------------------*/
	$('.product-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		margin : 30,
		autoplay: true,
		navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
		responsive : {
			0 : {
				items: 1,
			},
			480 : {
				items: 2,
			},
			768 : {
				items: 3,
			},
			1200 : {
				items: 4,
			}
		}
	});


	/*------------------
		Popular Services
	--------------------*/
	$('.popular-services-slider').owlCarousel({
		loop: true,
		dots: false,
		margin : 40,
		autoplay: true,
		nav:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive : {
			0 : {
				items: 1,
			},
			768 : {
				items: 2,
			},
			991: {
				items: 3
			}
		}
	});


	/*------------------
		Accordions
	--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').removeClass('active');
		var $this = $(this);
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});


	// /*-------------------
	// 	Range Slider
	// --------------------- */
	// var rangeSlider = $(".price-range"),
	// 	minamount = $("#minamount"),
	// 	maxamount = $("#maxamount"),
	// 	minPrice = rangeSlider.data('min'),
	// 	maxPrice = rangeSlider.data('max');
	// rangeSlider.slider({
	// 	range: true,
	// 	min: minPrice,
	// 	max: maxPrice,
	// 	values: [minPrice, maxPrice],
	// 	slide: function (event, ui) {
	// 		minamount.val('$' + ui.values[0]);
	// 		maxamount.val('$' + ui.values[1]);
	// 	}
	// });
	// minamount.val('$' + rangeSlider.slider("values", 0));
	// maxamount.val('$' + rangeSlider.slider("values", 1));


	/*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
	proQty.prepend('<span class="dec qtybtn">-</span>');
	proQty.append('<span class="inc qtybtn">+</span>');
	proQty.on('click', '.qtybtn', function () {
		var $button = $(this);
		var oldValue = $button.parent().find('input').val();
		if ($button.hasClass('inc')) {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find('input').val(newVal);
	});



	/*------------------
		Single Product
	--------------------*/
	$('.product-thumbs-track > .pt').on('click', function(){
		$('.product-thumbs-track .pt').removeClass('active');
		$(this).addClass('active');
		var imgurl = $(this).data('imgbigurl');
		var bigImg = $('.product-big-img').attr('src');
		if(imgurl != bigImg) {
			$('.product-big-img').attr({src: imgurl});
			$('.zoomImg').attr({src: imgurl});
		}
	});


	// $('.product-pic-zoom').zoom();



})(jQuery);


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