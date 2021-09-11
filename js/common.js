'use strict';

let calc_color = 'color_default';
let calc_v = "v2";
let calc_image_name = "1";

const calc_option = {
	color_default: 'color_default',
	color_name: {
		1: 'color1',
		2: 'color2',
		3: 'color3',
		4: 'color4',
		5: 'color5',
		6: 'color6',
		7: 'color7',
		8: 'color8',
		9: 'color9',
		10: 'color10',
		11: 'color11',
		12: 'color12',
		13: 'color13'
	},
	dir_v1: 'v1',
	dir_v2: 'v2',
	image_step_name: {
		step1: '1',
		step4: '2',
		step5: {
			step5_1: '3',
			step5_2: '4'
		}
	}
}

const calc_step1_checked1 = document.getElementById('calc_step_1_v2');
const calc_step1_checked2 = document.getElementById('calc_step_1_v1');

const calc_step4_checked1 = document.getElementById('calc_step_4_v1');
const calc_step4_checked2 = document.getElementById('calc_step_4_v2');

const clac_step5_checked1 = document.getElementById('calc_step_5_1');
const clac_step5_checked2 = document.getElementById('calc_step_5_2');

const item_color = document.querySelectorAll('.item_color input');

const image_loop_change = document.querySelector('.js-image-change-1');

const image_loop_container = document.querySelector('.image-loop-container');

// calc step1

if(calc_step1_checked1.checked) {
	calc_color = calc_option.color_default;
	calc_v = calc_option.dir_v2;
	calc_image_name = '1';

	
	renameDirImage();
	ZoomInit();
}

if(calc_step1_checked2.checked) {
	calc_color = calc_option.color_default;
	calc_v = calc_option.dir_v1;
	calc_image_name = '1';

	
	renameDirImage();
	ZoomInit();
}

calc_step1_checked1.addEventListener('change', function() {
	calc_v = calc_option.dir_v2;

	renameDirImage();
	ZoomInit();
});

calc_step1_checked2.addEventListener('change', function() {
	calc_v = calc_option.dir_v1;
	
	renameDirImage();
	ZoomInit();
});

// end calc step1

// calc step3
const calc_step_3_color1 = document.getElementById('calc_step_3_color1');
const calc_step_3_color2 = document.getElementById('calc_step_3_color2');
const calc_step_3_color3 = document.getElementById('calc_step_3_color3');
const calc_step_3_color4 = document.getElementById('calc_step_3_color4');
const calc_step_3_color5 = document.getElementById('calc_step_3_color5');
const calc_step_3_color6 = document.getElementById('calc_step_3_color6');
const calc_step_3_color7 = document.getElementById('calc_step_3_color7');
const calc_step_3_color8 = document.getElementById('calc_step_3_color8');
const calc_step_3_color9 = document.getElementById('calc_step_3_color9');
const calc_step_3_color10 = document.getElementById('calc_step_3_color10');
const calc_step_3_color11 = document.getElementById('calc_step_3_color11');
const calc_step_3_color12 = document.getElementById('calc_step_3_color12');
const calc_step_3_color13 = document.getElementById('calc_step_3_color13');

calc_step_3_color1.addEventListener('click', function() {
	calc_color = calc_option.color_name[1];

	renameDirImage();
	ZoomInit();
});

calc_step_3_color2.addEventListener('click', function() {
	calc_color = calc_option.color_name[2];

	renameDirImage();
	ZoomInit();
});

calc_step_3_color3.addEventListener('click', function() {
	calc_color = calc_option.color_name[3];

	renameDirImage();
	ZoomInit();
});

calc_step_3_color4.addEventListener('click', function() {
	calc_color = calc_option.color_name[4];

	renameDirImage();
	ZoomInit();
});

calc_step_3_color5.addEventListener('click', function() {
	calc_color = calc_option.color_name[5];

	renameDirImage();
	ZoomInit();
});

calc_step_3_color6.addEventListener('click', function() {
	calc_color = calc_option.color_name[6];

	renameDirImage();
	ZoomInit();
});

calc_step_3_color7.addEventListener('click', function() {
	calc_color = calc_option.color_name[7];

	renameDirImage();
	ZoomInit();
});

calc_step_3_color8.addEventListener('click', function() {
	calc_color = calc_option.color_name[8];

	renameDirImage();
	ZoomInit();
});

calc_step_3_color9.addEventListener('click', function() {
	calc_color = calc_option.color_name[9];

	renameDirImage();
	ZoomInit();
});

calc_step_3_color10.addEventListener('click', function() {
	calc_color = calc_option.color_name[10];

	renameDirImage();
	ZoomInit();
});

calc_step_3_color11.addEventListener('click', function() {
	calc_color = calc_option.color_name[11];

	renameDirImage();
	ZoomInit();
});

calc_step_3_color12.addEventListener('click', function() {
	calc_color = calc_option.color_name[12];

	renameDirImage();
	ZoomInit();
});

calc_step_3_color13.addEventListener('click', function() {
	calc_color = calc_option.color_name[13];

	renameDirImage();
	ZoomInit();
});

// end calc step3


// calc step4


calc_step4_checked1.addEventListener('change', function() {
	// calc_image_name = '1';

	if(clac_step5_checked1.checked) calc_image_name = calc_option.image_step_name.step5.step5_2;
	else calc_image_name = calc_option.image_step_name.step1;

	renameDirImage();
	ZoomInit();
});

calc_step4_checked2.addEventListener('change', function() {

	if(clac_step5_checked1.checked) calc_image_name = calc_option.image_step_name.step5.step5_1;
	else calc_image_name = calc_option.image_step_name.step4;

	renameDirImage();
	ZoomInit();
});

// end calc step4

// calc step5

clac_step5_checked1.addEventListener('change', function() {
	// calc_image_name = '2';

	// calc_image_name = calc_option.image_step_name.step5.step5_1;

	if(calc_step1_checked1.checked) {
		calc_v = calc_option.dir_v2;
	} else {
		calc_v = calc_option.dir_v1;
	}

	if(calc_step4_checked1.checked) {
		if(this.checked) calc_image_name = calc_option.image_step_name.step5.step5_2;
		else calc_image_name = calc_option.image_step_name.step1;
	}
	if(calc_step4_checked2.checked) {
		if(this.checked) calc_image_name = calc_option.image_step_name.step5.step5_1;
		else calc_image_name = calc_option.image_step_name.step4;
	}

	renameDirImage();
	ZoomInit();
});

clac_step5_checked2.addEventListener('change', function() {
	// calc_image_name = '2';

	// calc_image_name = calc_option.image_step_name.step5.step5_1;

	if(calc_step1_checked1.checked) {
		calc_v = calc_option.dir_v2;
	} else {
		calc_v = calc_option.dir_v1;
	}


	if(calc_step4_checked1.checked) {
		calc_image_name = calc_option.image_step_name.step1;
	}
	if(calc_step4_checked2.checked) {
		calc_image_name = calc_option.image_step_name.step4;
	}

	renameDirImage();
	ZoomInit();
});

// end calc step5

function renameDirImage() {
	image_loop_change.setAttribute('src', `/img/calc/${calc_color}/${calc_v}/${calc_image_name}.png`);
}



// tabs

const tab_button = document.querySelectorAll('.sect_specification_tab_nav button');
const tab_wrap = document.querySelectorAll('.tab_item');

if(tab_button) {
	tab_button.forEach((e, i) => {
		e.addEventListener('click', function() {

			for (let item of this.parentNode.children) {
				item.classList.remove('active');
			}
			e.classList.add('active');

			for (let item of tab_wrap[i].parentNode.children) {
				item.classList.remove('tab_item__active');
			}

			tab_wrap[i].classList.add('tab_item__active');
		});
	});

	tab_wrap.forEach((e, i) => {

	});
}

// popup

const button_header_phone = document.getElementById('button_header_phone');
const button_header_burger = document.getElementById('button_header_burger');
const button_header_call = document.getElementById('button_header_call');
const button_header_smart_call = document.querySelectorAll('.button_header_smart_call');

const modal_contact = document.getElementById('modal_contact');
const modal_menu = document.getElementById('modal_menu');
const modal_phone = document.getElementById('modal_phone');
const modal_message = document.getElementById('modal_message');
const modal_success = document.getElementById('modal_success');

const modal_close = document.querySelectorAll('.popup_modal__close');

const form_event = document.querySelectorAll('.js_form');

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
		const header_top_height = document.querySelector('.header__top').clientHeight;
        let topOffset = 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;

		if(window.matchMedia('(max-width: 1200px)').matches === true) {
			topOffset = header_top_height;
		}

        const offsetPosition = elementPosition - topOffset;

		if(modal_menu.classList.contains('active')) {
			modal_menu.classList.remove('active');
			button_header_burger.classList.remove('active');
		}

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

if(button_header_phone) {
	button_header_phone.addEventListener('click', function(event) {
		event.preventDefault();

		if(modal_menu.classList.contains('active')) {
			modal_menu.classList.remove('active');
			button_header_burger.classList.remove('active');
		}

		this.classList.toggle('active');

		modal_contact.classList.toggle('active');
		
	})
}

if(button_header_burger) {
	button_header_burger.addEventListener('click', function(event) {
		event.preventDefault();

		if(modal_contact.classList.contains('active')) {
			modal_contact.classList.remove('active');
			button_header_phone.classList.remove('active');
		}

		this.classList.toggle('active');

		modal_menu.classList.toggle('active');
	})
}

if(button_header_call) {
	button_header_call.addEventListener('click', function(event) {
		event.preventDefault();

		modal_phone.classList.add('active');
	})
}

if(modal_close) {
	modal_close.forEach(e => {
		e.addEventListener('click', function(event) {
			event.preventDefault();

			this.parentNode.parentNode.classList.remove('active');
		})
	});
}

if(button_header_smart_call) {
	button_header_smart_call.forEach(e => {
		e.addEventListener('click', function(event) {
			event.preventDefault();

			if(modal_contact.classList.contains('active')) {
				modal_contact.classList.remove('active');
				button_header_phone.classList.remove('active');
			}
			if(modal_menu.classList.contains('active')) {
				modal_menu.classList.remove('active');
				button_header_burger.classList.remove('active');
			}

			modal_phone.classList.add('active');
		})
	});
	
}

if(form_event) {

	form_event.forEach(e => {

		e.addEventListener('submit', function(event) {
			event.preventDefault();

			if(modal_phone.classList.contains('active')) modal_phone.classList.remove('active');
			if(modal_message.classList.contains('active')) modal_message.classList.remove('active');

			modal_success.classList.add('active');
		});

	});
}

const phoneElement = document.querySelectorAll('.js_phone_mask');
if(phoneElement) {
	const maskOptions = {
		mask: '{8} 000 000 00 00'
	};
	phoneElement.forEach(e => {
		const mask = IMask(e, maskOptions);
	});
	
}



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
	effect: "fade",


	// Navigation arrows
	navigation: {
		nextEl: '#calc_slider .swiper-nav .swiper-nav_next',
		prevEl: '#calc_slider .swiper-nav .swiper-nav_prev',
	}
});

ZoomInit();

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
			nav_next.parentNode.classList.add('modal_message_active');
			nav_next.parentNode.querySelector('.icon').classList.add('hide');
		} else {
			nav_next.classList.remove('modal_message_active');
		}
	} else {
		nav_text.classList.remove('hide');
		button_smile.classList.remove('hide');

		nav_next.innerHTML = 'Следующий шаг';
		

		
	}

	if(e.activeIndex == 4) {
		nav_next.parentNode.querySelector('.icon').classList.remove('hide');
	}

	const modal_message_slider = document.querySelector('.modal_message_active');
	if(modal_message_slider) {
		modal_message_slider.addEventListener('click', function() {
			modal_phone.classList.add('active');
		});
	}
	
});





function ZoomInit() {

	const offsetNative = function() {
		var offsetParent = this.offsetParent;
		var offsetTop = this.offsetTop;
		var offsetLeft = this.offsetLeft;

		while (offsetParent !== document.body) {
			offsetLeft += offsetParent.offsetLeft;
			offsetTop += offsetParent.offsetTop;
			offsetParent = offsetParent.offsetParent;
		}

			return { top: offsetTop, left: offsetLeft };
		};

	if (!HTMLElement.prototype.offsetNative) {
		HTMLElement.prototype.offsetNative = offsetNative;
	}

	const image_container = document.querySelectorAll('.image-loop');

	image_container.forEach(e => {
		let clone = e.querySelector('.image-loop-container').cloneNode(true);

		const image_zoom = e.querySelector('.js-image-zoom__zoomed-image');

		const is_image_zoom_container = image_zoom.querySelector('.image-loop-container');
		console.log(is_image_zoom_container);
		if(is_image_zoom_container != null) is_image_zoom_container.remove();

		image_zoom.appendChild(clone);

		e.addEventListener('mousemove', function(event) {
			let element = {
				width: this.offsetWidth,
				height: this.offsetHeight
			};

			let mouse = {
				x: event.pageX,
				y: event.pageY
			}

			let offset = this.offsetNative();

			let origin = {
				x: (offset.left + (element.width / 2)),
				y: (offset.top + (element.height / 2))
			}

			let trans = {
				left: (origin.x - mouse.x) / 2,
				down: (origin.y - mouse.y) / 2
			}

			let transform = (`scale(3) translateX(${trans.left}px) translateY(${trans.down}px)`);
			image_zoom.querySelector('.image-loop-container').setAttribute('style', `transform: ${transform}`);
		});
	});
}

const header_play = document.querySelectorAll('.header__bottom_links .button_play');
const modal = new tingle.modal({
	footer: false,
	stickyFooter: false,
	closeMethods: ['overlay', 'button', 'escape'],
	closeLabel: "Close",
	cssClass: ['custom-class-1', 'custom-class-2'],
	onOpen: function() {
		// console.log('modal open');
	},
	onClose: function() {
		const yt_video = document.querySelector('video');
		yt_video.remove();
	},
	beforeClose: function() {
		return true;
		return false;
	}
});

const modal_video_init = (id, element) => {
	element.setContent(`<video width="100%" height="100%" autoplay="1" controls><source src="../video.mp4" type="video/mp4"></video>`);
	element.open();
}

if(header_play) {
	header_play.forEach(e => {
		e.addEventListener('click', function(event) {
			event.preventDefault();

			const id = this.getAttribute('data-video');

			modal_video_init(id, modal);
		});
	});
}

const breakpoint = window.matchMedia('(min-width: 540px)');

let colors_slider;
let advantage_slider;

const breakpointChecker_colors_slider = function() {
	if ( breakpoint.matches === true ) {
		if ( colors_slider !== undefined ) colors_slider.destroy( true, true );
		return;
	} else if ( breakpoint.matches === false ) {
		return enable_colors_slider();
	}
}

const enable_colors_slider = function() {
	colors_slider = new Swiper('#slider_colors', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		spaceBetween: 20,
		// onlyExternal: true,
		// noSwiping: true,
		// allowTouchMove: false,


		// Navigation arrows
		navigation: {
			nextEl: document.querySelector('.slider-nav-colors .slider-next'),
			prevEl: document.querySelector('.slider-nav-colors .slider-prev'),
		}
	});
}

breakpoint.addListener(breakpointChecker_colors_slider);

breakpointChecker_colors_slider();


const breakpointChecker_advantage_slider = function() {
	if ( breakpoint.matches === true ) {
		if ( advantage_slider !== undefined ) advantage_slider.destroy( true, true );
		return;
	} else if ( breakpoint.matches === false ) {
		return enable_advantage_slider();
	}
}

const enable_advantage_slider = function() {
	advantage_slider = new Swiper('#slider_advantage', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		spaceBetween: 20,
		// onlyExternal: true,
		// noSwiping: true,
		// allowTouchMove: false,


		// Navigation arrows
		navigation: {
			nextEl: document.querySelector('.slider-nav-advantage .slider-next'),
			prevEl: document.querySelector('.slider-nav-advantage .slider-prev'),
		}
	});
}

breakpoint.addListener(breakpointChecker_advantage_slider);

breakpointChecker_advantage_slider();


const review_slider = new Swiper('#slider_review', {
	// Optional parameters
	// loop: true,
	slidesPerView: 3,
	spaceBetween: 0,
	on: {
		init: function() {
			let width = this.slides[0].offsetWidth;

			document.querySelector('.slider-nav-review').setAttribute('style', `width: ${width}px`);
		},
		resize: function() {
			let width = this.slides[0].offsetWidth;

			document.querySelector('.slider-nav-review').setAttribute('style', `width: ${width}px`);
		}
	},

	// Navigation arrows
	navigation: {
		nextEl: '.slider-nav-review .slider-next',
		prevEl: '.slider-nav-review .slider-prev',
	},

	breakpoints: {

		0: {
			slidesPerView: 1,
			spaceBetween: 20,
			centeredSlides: false,
		},

		540: {
			slidesPerView: 2,
			spaceBetween: 32,
			centeredSlides: true,
		},

		768: {
			slidesPerView: 3,
			spaceBetween: 32,
			centeredSlides: true,
		},
		1340: {
			spaceBetween: 0,
			centeredSlides: false,
		}
	}
});
