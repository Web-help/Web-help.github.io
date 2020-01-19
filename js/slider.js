var swiper = new Swiper('.swiper-container', {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	  
	},

	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},

	breakpoints: {
        320: {
          slidesPerView: 1,
		},
		426: {
			slidesPerView: 2,
		},
        961:{
			slidesPerView: 3,
		},
        1920: {
          slidesPerView: 3,
          spaceBetween: 50,
        }
      }
});