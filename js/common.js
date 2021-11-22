'use strict';





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
const button_calc_manager = document.querySelectorAll('.modal_message_active');
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

		if(window.matchMedia('(min-width: 1200px)').matches === true) {
			topOffset = 100;
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

if(button_calc_manager) {
	button_calc_manager.forEach(e => {
		e.addEventListener('click', function(event) {
			event.preventDefault();

			modal_phone.classList.add('active');
		})
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








// function ZoomInit() {

// 	const offsetNative = function() {
// 		var offsetParent = this.offsetParent;
// 		var offsetTop = this.offsetTop;
// 		var offsetLeft = this.offsetLeft;

// 		while (offsetParent !== document.body) {
// 			offsetLeft += offsetParent.offsetLeft;
// 			offsetTop += offsetParent.offsetTop;
// 			offsetParent = offsetParent.offsetParent;
// 		}

// 			return { top: offsetTop, left: offsetLeft };
// 		};

// 	if (!HTMLElement.prototype.offsetNative) {
// 		HTMLElement.prototype.offsetNative = offsetNative;
// 	}

// 	const image_container = document.querySelectorAll('.image-loop');

// 	image_container.forEach(e => {
// 		let clone = e.querySelector('.image-loop-container').cloneNode(true);

// 		const image_zoom = e.querySelector('.js-image-zoom__zoomed-image');

// 		const is_image_zoom_container = image_zoom.querySelector('.image-loop-container');
// 		if(is_image_zoom_container != null) is_image_zoom_container.remove();

// 		image_zoom.appendChild(clone);

// 		e.addEventListener('mousemove', function(event) {
// 			let element = {
// 				width: this.offsetWidth,
// 				height: this.offsetHeight
// 			};

// 			let mouse = {
// 				x: event.pageX,
// 				y: event.pageY
// 			}

// 			let offset = this.offsetNative();

// 			let origin = {
// 				x: (offset.left + (element.width / 2)),
// 				y: (offset.top + (element.height / 2))
// 			}

// 			let trans = {
// 				left: (origin.x - mouse.x) / 2,
// 				down: (origin.y - mouse.y) / 2
// 			}

// 			let transform = (`scale(3) translateX(${trans.left}px) translateY(${trans.down}px)`);
// 			image_zoom.querySelector('.image-loop-container').setAttribute('style', `transform: ${transform}`);
// 		});
// 	});
// }

const header_play = document.querySelectorAll('.button_play');
const modal = new tingle.modal({
	footer: false,
	stickyFooter: false,
	closeMethods: ['overlay', 'button', 'escape'],
	closeLabel: "Close",
	cssClass: ['custom-class-1', 'custom-class-2'],
	onOpen: function() {
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
	loop: true,
	spaceBetween: 0,
	observer: true,
	observeParents: true,

	on: {
		init: function() {
			// let width = document.querySelector('#slider_review .swiper-slide-active').clientWidth

			// document.querySelector('.slider-nav-review').setAttribute('style', `width: ${width}px`);
		},
		// beforeTransitionStart: function() {
		// 	this.update()
		// },
		resize: function() {
			// let width = this.slides[this.activeIndex].clientWidth;
			// let width = document.querySelector('#slider_review .swiper-slide-active').clientWidth

			// document.querySelector('.slider-nav-review').setAttribute('style', `width: ${width}px`);
		},
		slideChange: function() {
			// let width = document.querySelector('#slider_review .swiper-slide-active').clientWidth

			// document.querySelector('.slider-nav-review').setAttribute('style', `width: ${width}px`);
			// this.resize()
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
			// slidesPerView: 'auto',
			watchSlidesVisibility: true,
            watchSlidesProgress: true,
			centeredSlides: false,
		}
	}
});





const sect_product_slider = document.querySelector('.sect_product__items')

if(sect_product_slider) {

	let product_slider

	product_slider = new Swiper(sect_product_slider.querySelector('.swiper-container'), {
		// Optional parameters
		loop: true,
		slidesPerView: 3,
		spaceBetween: 30,
		observer: true,
		observeParents: true,

		// Navigation arrows
		navigation: {
			nextEl: sect_product_slider.querySelector('.slider-right'),
			prevEl: sect_product_slider.querySelector('.slider-left'),
		},

		breakpoints: {

			0: {
				slidesPerView: 1,
			},

			540: {
				slidesPerView: 1.5,
			},

			768: {
				slidesPerView: 2,
			},

			900: {
				slidesPerView: 2.5,
			},

			1140: {
				slidesPerView: 3,
			},

			1400: {
				slidesPerView: 4,
			}
			
		}
	});
}

const number_control = document.querySelectorAll('.number-counter')

if(number_control) {

	number_control.forEach(e => {
		const number_control_minus = e.querySelector('.js--button-minus')
		const number_control_plus = e.querySelector('.js--button-plus')
		const number_control_input = e.querySelector('.js--button-input')

		let timeout = 0

		number_control_minus.addEventListener('mousedown', function () {

			let count = parseInt(number_control_input.value) - 1

			count = count < 1 ? 1 : count
			number_control_input.value = count
		})

		number_control_minus.addEventListener('touchstart', function () {

			let count = parseInt(number_control_input.value) - 1

				count = count < 1 ? 1 : count
				number_control_input.value = count
		})

		// number_control_minus.addEventListener('mouseup', function () {
		// 	clearInterval(timeout);
		// })

		// number_control_minus.addEventListener('touchend', function () {
		// 	clearInterval(timeout);
		// })

		number_control_plus.addEventListener('mousedown', function () {

			let count = parseInt(number_control_input.value) + 1
			number_control_input.value = count
		})

		number_control_plus.addEventListener('touchstart', function () {

			let count = parseInt(number_control_input.value) + 1
				number_control_input.value = count
		})

		// number_control_plus.addEventListener('mouseup', function () {
		// 	clearInterval(timeout);
		// })

		// number_control_plus.addEventListener('touchend', function () {
		// 	clearInterval(timeout);
		// })

		number_control_input.addEventListener('input', function () {
			if (this.value == 0) {
				this.value = 1
			}
		})
	})

	
}


// aside block

const aside_wrap = document.querySelector('.aside_blog')

if(aside_wrap) {
	const aside_button_active = aside_wrap.querySelector('.js--aside-active')
	const aside_list = aside_wrap.querySelector('.aside_blog__list')

	aside_button_active.addEventListener('click', function(event) {
		event.preventDefault()

		aside_list.classList.toggle('active')
	})
}

// filter aside

const filter_sect_item = document.querySelectorAll('.filter_option__sect')

if(filter_sect_item) {
	filter_sect_item.forEach(e => {
		const button_sect = e.querySelector('.filter_option__sect-title')
		if(button_sect) {
			button_sect.addEventListener('click', function(event) {
				event.preventDefault()

				e.classList.toggle('active')
			})
		}
		
	})
}

const filter_selected = document.querySelectorAll('.filter_bar__select')

if(filter_selected) {
	filter_selected.forEach(e => {
		e.addEventListener('click', function(event) {
			// event.preventDefault()

			e.classList.toggle('active')
		})
	})
}

// filter mobile

const filter_m_button_active = document.querySelector('.filter_mobile_button')

if(filter_m_button_active) {
	const filter_wrap = document.querySelector('.filter_option')
	const filter_wrap_close = filter_wrap.querySelector('.filter_option__title-close')

	filter_m_button_active.addEventListener('click', function(event) {
		event.preventDefault()

		filter_wrap.classList.add('active')
	})

	filter_wrap_close.addEventListener('click', function(event) {
		event.preventDefault()

		filter_wrap.classList.remove('active')
	})
}

const filter_m_button_left = document.querySelector('.filter_bar__button')

if(filter_m_button_left) {
	filter_m_button_left.addEventListener('click', function(event) {
		this.classList.toggle('active')
	})
}

// filter range

const range_slider_box = document.querySelectorAll(".js--range-box");

if (range_slider_box) {
  range_slider_box.forEach((box) => {
    const label_sufix = box.getAttribute("data-suffix");
    const inputFirst = box.querySelector(".js--range-f-first");
    const inputLast = box.querySelector(".js--range-f-last");
    const sliderRange = box.querySelector(".js--range-slider");

    noUiSlider.create(sliderRange, {
      start: [0, 999999],
      step: 10,
      connect: true,
	  tooltips: true,
      range: {
        min: 0,
        max: 999999,
      },
      format: wNumb({
        decimals: 0,
        thousand: " ",
        // suffix: label_sufix,
      }),
    });

    sliderRange.noUiSlider.on("update", function (values, handle) {
      inputFirst.value = values[0];
      inputLast.value = values[1];
    });

    inputFirst.addEventListener("change", function () {
      sliderRange.noUiSlider.set([this.value, inputLast.value]);
    });

    inputLast.addEventListener("change", function () {
      sliderRange.noUiSlider.set([inputFirst.value, this.value]);
    });
  });
}


// button scroll top

let t;
function up() {
	let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}

const button_top = document.querySelector('.button_scroll_top')

if(button_top) {

	window.onscroll = () => {
		let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	
		if(posTop > 200) {
			button_top.classList.add('active')
		} else button_top.classList.remove('active')
	}

	
}

const lightgallery_wrap = document.querySelectorAll('.lightgallery_init')

if(lightgallery_wrap) {
	lightgallery_wrap.forEach(e => {
		lightGallery(e, {
			plugins: [lgZoom],
			// licenseKey: 'your_license_key',
			speed: 500,
			// counter: false,
			captions: false,
			download: false,

			mobileSettings: {
				showCloseIcon: true,
			}
		})
	})
	
}

