const hero = new Swiper(".hero-slider", {
	loop: true,
});
const products = new Swiper(".new-products-slider", {
	loop: true,
	slidesPerView: 4,
	spaceBetween: 30,
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		500: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		// when window width is >= 640px
		992: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
	},
});
const news = new Swiper(".news-slider", {
	direction: "vertical",
	slidesPerView: 3,
	// mousewheel: true,
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			direction: "horizontal",
		},
		576: {
			slidesPerView: 3,
			direction: "vertical",
		},
		768: {
			slidesPerView: 3,
		},
		// when window width is >= 640px
		992: {
			slidesPerView: 3,
		},
	},
});
const clients = new Swiper(".our-clients-slider", {
	pagination: {
		el: ".swiper-pagination",
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	scrollbar: {
		el: ".swiper-scrollbar",
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		500: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		// when window width is >= 640px
		992: {
			slidesPerView: 5,
			spaceBetween: 40,
		},
	},
});
