'use strict';

const options2 = {
	width: 435,
	height: 580
};

let lp;

let image_loop = document.querySelectorAll('.image-loop');
image_loop.forEach(e => {
    lp = new ImageZoom(e, options2);
});



const item_color = document.querySelectorAll('.item_color input');
const image_loop_change = document.querySelectorAll('.js-image-change');
const image_loop_change_2 = document.querySelector('.js-image-change-2');
const image_loop_change_3 = document.querySelector('.js-image-change-3');
const image_loop_change_4 = document.querySelector('.js-image-change-4');

item_color.forEach(e => {

	e.addEventListener('change', function() {
		const image_src = e.getAttribute('data-image');
		const image_src_2 = e.getAttribute('data-image-2');
		const image_src_3 = e.getAttribute('data-image-3');

		image_loop_change.forEach(item => {
			item.setAttribute('src', image_src);

			item.parentNode.querySelector('.js-image-zoom__zoomed-image').remove();
			item.parentNode.querySelector('.js-image-zoom__zoomed-area').remove();


			lp = new ImageZoom(item.parentNode, options2);

		});

		if(image_loop_change_2) {
			image_loop_change_2.setAttribute('src', image_src_2);
			image_loop_change_2.parentNode.querySelector('.js-image-zoom__zoomed-image').remove();
			image_loop_change_2.parentNode.querySelector('.js-image-zoom__zoomed-area').remove();
			lp = new ImageZoom(image_loop_change_2.parentNode, options2);
		}

		if(image_loop_change_3) {
			image_loop_change_3.setAttribute('src', image_src_3);
			image_loop_change_3.parentNode.querySelector('.js-image-zoom__zoomed-image').remove();
			image_loop_change_3.parentNode.querySelector('.js-image-zoom__zoomed-area').remove();
			lp = new ImageZoom(image_loop_change_3.parentNode, options2);
		}

		if(image_loop_change_4) {
			image_loop_change_4.setAttribute('src', image_src_3);
			image_loop_change_4.parentNode.querySelector('.js-image-zoom__zoomed-image').remove();
			image_loop_change_4.parentNode.querySelector('.js-image-zoom__zoomed-area').remove();
			lp = new ImageZoom(image_loop_change_4.parentNode, options2);
		}
	});
});



// sliders

const header_slider_item = new Swiper('#header_slider_item', {
	// Optional parameters
	// loop: true,
	slidesPerView: 3,
  	spaceBetween: -10,
	onlyExternal: true,
	noSwiping: true,
	allowTouchMove: false,


	// Navigation arrows
	navigation: {
		nextEl: '#header_slider_item .swiper-nav-right',
		prevEl: '#header_slider_item .swiper-nav-left',
	},

	breakpoints: {
    // when window width is >= 320px
		0: {
			slidesPerView: 1,
			// spaceBetween: 
		},
		540: {
			slidesPerView: 2,
			// spaceBetween: 
		},
		768: {
			slidesPerView: 3
		}
	}

	
});

const calc_slider = new Swiper('#calc_slider', {
	// Optional parameters
	// loop: true,
	slidesPerView: 1,
  	spaceBetween: 20,
	onlyExternal: true,
	noSwiping: true,
	allowTouchMove: false,


	// Navigation arrows
	navigation: {
		nextEl: '#calc_slider .swiper-nav .swiper-nav_next',
		prevEl: '#calc_slider .swiper-nav .swiper-nav_prev',
	}
});

calc_slider.on('slideChange', function(e) {

	const nav_text = document.querySelector('#calc_slider .swiper-nav_text');
	const nav_next = document.querySelector('#calc_slider .swiper-nav_next span');
	const button_smile = document.querySelector('#calc_slider .button_smile');

	if(e.activeIndex == 4 || e.activeIndex == 5) {
		nav_text.classList.add('hide');
		button_smile.classList.add('hide');

		if(e.activeIndex == 4 ) nav_next.innerHTML = 'Узнать цену';
		if(e.activeIndex == 5 ) {
			nav_next.innerHTML = 'Отлично, заказать!';
			nav_next.parentNode.querySelector('.icon').classList.add('hide');
		}
	} else {
		nav_text.classList.remove('hide');
		button_smile.classList.remove('hide');

		nav_next.innerHTML = 'Следующий шаг';

		
	}

	if(e.activeIndex == 4) {
		nav_next.parentNode.querySelector('.icon').classList.remove('hide');
	}
});