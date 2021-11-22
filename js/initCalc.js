'use strict'

// calc vars

// const calc_slider = document.getElementById('calc_slider')

const button_calc_0_next = document.querySelector('.slider-next-0')

const button_calc_1_prev = document.querySelector('.slider-prev-1')
const button_calc_1_next = document.querySelector('.slider-next-1')

const button_calc_2_prev = document.querySelector('.slider-prev-2')
const button_calc_2_next = document.querySelector('.slider-next-2')

const button_calc_3_prev = document.querySelector('.slider-prev-3')
const button_calc_3_next = document.querySelector('.slider-next-3')

const button_calc_4_prev = document.querySelector('.slider-prev-4')
const button_calc_4_next = document.querySelector('.slider-next-4')
const button_calc_4_last = document.querySelector('.slider-last-4')
const button_calc_4_to = document.querySelector('.slider-last-to-4')

const button_calc_5_prev = document.querySelector('.slider-prev-5')
const button_calc_5_next = document.querySelector('.slider-next-5')

const button_calc_6_prev = document.querySelector('.slider-prev-6')

// const button_calc_prev = document.querySelector('#calc_slider .swiper-nav_prev')
// const button_calc_next = document.querySelector('#calc_slider .swiper-nav_next')

const calc_nav_count = document.querySelector('.swiper-slider-nav-i')

const calc_step0_checked_1 = document.getElementById('calc_step_0_1');
const calc_step0_checked_2 = document.getElementById('calc_step_0_2');
const calc_step0_checked_3 = document.getElementById('calc_step_0_3');
const calc_step0_checked_4 = document.getElementById('calc_step_0_4');

const calc_step1_checked1 = document.getElementById('calc_step_1_v2');
const calc_step1_checked2 = document.getElementById('calc_step_1_v1');

const calc_step2_checked1 = document.getElementById('calc_step_1_mini');
const calc_step2_checked2 = document.getElementById('calc_step_2_mini');

const calc_step4_checked1 = document.getElementById('calc_step_4_v1');
const calc_step4_checked2 = document.getElementById('calc_step_4_v2');
const calc_step4_checked3 = document.getElementById('calc_step_4_v3');

const clac_step5_checked1 = document.getElementById('calc_step_5_1');
const clac_step5_checked2 = document.getElementById('calc_step_5_2');

const calc_step6_checked1 = document.getElementById('calc_step_6_1');
const calc_step6_checked2 = document.getElementById('calc_step_6_2');

const item_color = document.querySelectorAll('.item_color input');

const image_loop_change = document.querySelector('.js-image-change-1');

const image_loop_container = document.querySelector('.image-loop-container');

let calc_color = 'color_default';
let calc_v = "v1";
let calc_image_name = "0";

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
	dir_v1_mini: 'v1_mini',
	dir_v2_mini: 'v2_mini',
	image_step_name: {
		step0: '0',
		step1: '1',
		step4: '2',
		step5: {
			step5_1: '3',
			step5_2: '4'
		}
	}
}

// calc slider init

const calc_last_items = new Swiper('.calc_last_slider .swiper-container', {
	slidesPerView: 2,
  	spaceBetween: 30,
	loop: true,
	observer: true,
	observeParents: true,

	navigation: {
		nextEl: '.calc_last_slider .swiper-nav__next',
		prevEl: '.calc_last_slider .swiper-nav__prev',
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 15,
		},
		1340: {
			slidesPerView: 2,
			spaceBetween: 30
		}
	}
});

const calc_slider = new Swiper('#calc_slider', {
	slidesPerView: 1,
  	spaceBetween: 20,
	onlyExternal: true,
	noSwiping: true,
	allowTouchMove: false,
	effect: "fade",


	// Navigation arrows
	// navigation: {
	// 	nextEl: '#calc_slider .swiper-nav .swiper-nav_next',
	// 	prevEl: '#calc_slider .swiper-nav .swiper-nav_prev',
	// },

	on: {
		init: function() {
			document.querySelectorAll('.calc_step_slider_first').forEach(e => e.innerHTML = this.realIndex + 1)
			document.querySelectorAll('.calc_step_slider_last').forEach(e => e.innerHTML = this.slides.length)
		},
		
		activeIndexChange: function() {
			document.querySelectorAll('.calc_step_slider_first').forEach(e => e.innerHTML = this.realIndex + 1)
		},

		slideChange: function(e) {
			calc_step_1_init()
			calc_step_2_init()
			calc_step_3_init()
			calc_step_4_init()
			calc_step_5_init()
			calc_step_last_init()
		}
	}
});

// calc step0

const calc_step_0_init = () => {
	let checked_item = document.querySelectorAll('.js--step-0-checked')
	
	if(checked_item && calc_slider.activeIndex == 0) {
		checked_item.forEach(item => {
			if(item.checked) {

				// button_calc_prev.onclick = () => {
				// 	calc_slider.slidePrev()
				// }
				button_calc_0_next.onclick = () => {
					calc_slider.slideNext()
				}
			}
		})

		const breakpoint_calc = window.matchMedia('(max-width: 900px)');

		const breakpoint_calc_init = () => {
			if(breakpoint_calc.matches === true) {
				const heightSelected = document.querySelector('.js--height-s-0').clientHeight - 10
				document.querySelector('.image-loop').setAttribute('style', `margin-top: ${heightSelected}px`)
			}
		}
		breakpoint_calc_init()
		breakpoint_calc.addListener(breakpoint_calc_init)

		
	}
}
calc_step_0_init()

// calc step1

const calc_step_1_init = () => {
	let checked_item = document.querySelectorAll('.js--step-1-checked')

	if(checked_item && calc_slider.activeIndex == 1) {
		calc_nav_count.classList.add('active')
		button_calc_1_prev.onclick = () => {
			calc_slider.slidePrev()
		}

		const breakpoint_calc = window.matchMedia('(max-width: 900px)');

		const breakpoint_calc_init = () => {
			if(breakpoint_calc.matches === true) {
				const heightSelected = document.querySelector('.js--height-s-1').clientHeight - 20
				document.querySelector('.image-loop').setAttribute('style', `margin-top: ${heightSelected}px`)
			}
		}
		breakpoint_calc_init()
		breakpoint_calc.addListener(breakpoint_calc_init)

		checked_item.forEach(item => {
			if(item.checked) {
				
				button_calc_1_next.onclick = () => {
					calc_slider.slideNext()
				}
			}

			item.addEventListener('change', function() {
				if(this.checked) {
					button_calc_1_prev.onclick = () => {
						calc_slider.slidePrev()
					}
					button_calc_1_next.onclick = () => {
						calc_slider.slideNext()
					}
				}
				
			})
		})

		calc_step1_checked1.addEventListener('change', function() {
			if(calc_step2_checked2.checked) {
				calc_v = calc_option.dir_v2_mini;
			} else {
				calc_v = calc_option.dir_v2;
			}

			renameDirImage();
			
		});

		calc_step1_checked2.addEventListener('change', function() {
			if(calc_step2_checked2.checked) {
				calc_v = calc_option.dir_v1_mini;
			} else {
				calc_v = calc_option.dir_v1;
			}
			
			renameDirImage();
			
		});
	}
}

// calc step2

const calc_step_2_init = () => {
	let checked_item = document.querySelectorAll('.js--step-2-checked')
	calc_nav_count.classList.add('active')
	if(checked_item && calc_slider.activeIndex == 2) {

		const breakpoint_calc = window.matchMedia('(max-width: 900px)');

		const breakpoint_calc_init = () => {
			if(breakpoint_calc.matches === true) {
				const heightSelected = document.querySelector('.js--height-s-2').clientHeight - 20
				document.querySelector('.image-loop').setAttribute('style', `margin-top: ${heightSelected}px`)
			}
		}
		breakpoint_calc_init()
		breakpoint_calc.addListener(breakpoint_calc_init)

		button_calc_2_prev.onclick = () => {
			calc_slider.slidePrev()
		}
		checked_item.forEach(item => {
			if(item.checked) {
				
				button_calc_2_next.onclick = () => {
					calc_slider.slideNext()
				}
			}

			item.addEventListener('change', function() {
				if(this.checked) {
					button_calc_2_prev.onclick = () => {
						calc_slider.slidePrev()
					}
					button_calc_2_next.onclick = () => {
						calc_slider.slideNext()
					}
				}
				
			})
		})

		calc_step2_checked1.addEventListener('change', function() {
		

			if(calc_step1_checked1.checked) {
				calc_v = calc_option.dir_v2;
			}

			if(calc_step1_checked2.checked) {
				calc_v = calc_option.dir_v1;
			}
			
			renameDirImage();
			
		});

		calc_step2_checked2.addEventListener('change', function() {
			

			if(calc_step1_checked1.checked) {
				calc_v = calc_option.dir_v2_mini;
			}

			if(calc_step1_checked2.checked) {
				calc_v = calc_option.dir_v1_mini;
			}
			
			renameDirImage();
			
		});
	}
}

// calc step3

const calc_step_3_init = () => {
	let checked_item = document.querySelectorAll('.js--step-3-checked')
	calc_nav_count.classList.add('active')
	if(checked_item && calc_slider.activeIndex == 3) {
		button_calc_3_prev.onclick = () => {
			calc_slider.slidePrev()
		}
		const breakpoint_calc = window.matchMedia('(max-width: 900px)');

		const breakpoint_calc_init = () => {
			if(breakpoint_calc.matches === true) {
				const heightSelected = document.querySelector('.js--height-s-3').clientHeight + 80
				document.querySelector('.image-loop').setAttribute('style', `margin-top: ${heightSelected}px`)
			}
		}
		breakpoint_calc_init()
		breakpoint_calc.addListener(breakpoint_calc_init)

		
		checked_item.forEach(item => {
			if(item.checked) {
				
				button_calc_3_next.onclick = () => {
					calc_slider.slideNext()
				}
			}

			item.addEventListener('change', function() {
				if(this.checked) {
					button_calc_3_prev.onclick = () => {
						calc_slider.slidePrev()
					}
					button_calc_3_next.onclick = () => {
						calc_slider.slideNext()
					}
				}
				
			})
		})

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
			
		});

		calc_step_3_color2.addEventListener('click', function() {
			calc_color = calc_option.color_name[2];

			renameDirImage();
			
		});

		calc_step_3_color3.addEventListener('click', function() {
			calc_color = calc_option.color_name[3];

			renameDirImage();
			
		});

		calc_step_3_color4.addEventListener('click', function() {
			calc_color = calc_option.color_name[4];

			renameDirImage();
			
		});

		calc_step_3_color5.addEventListener('click', function() {
			calc_color = calc_option.color_name[5];

			renameDirImage();
			
		});

		calc_step_3_color6.addEventListener('click', function() {
			calc_color = calc_option.color_name[6];

			renameDirImage();
			
		});

		calc_step_3_color7.addEventListener('click', function() {
			calc_color = calc_option.color_name[7];

			renameDirImage();
			
		});

		calc_step_3_color8.addEventListener('click', function() {
			calc_color = calc_option.color_name[8];

			renameDirImage();
			
		});

		calc_step_3_color9.addEventListener('click', function() {
			calc_color = calc_option.color_name[9];

			renameDirImage();
			
		});

		calc_step_3_color10.addEventListener('click', function() {
			calc_color = calc_option.color_name[10];

			renameDirImage();
			
		});

		calc_step_3_color11.addEventListener('click', function() {
			calc_color = calc_option.color_name[11];

			renameDirImage();
			
		});

		calc_step_3_color12.addEventListener('click', function() {
			calc_color = calc_option.color_name[12];

			renameDirImage();
			
		});

		calc_step_3_color13.addEventListener('click', function() {
			calc_color = calc_option.color_name[13];

			renameDirImage();
			
		});
	}
}

// calc step4

const calc_step_4_init = () => {
	let checked_item = document.querySelectorAll('.js--step-4-checked')
	calc_nav_count.classList.add('active')
	if(checked_item && calc_slider.activeIndex == 4) {
		button_calc_4_prev.onclick = () => {
			calc_slider.slidePrev()
		}

		const breakpoint_calc = window.matchMedia('(max-width: 900px)');

		const breakpoint_calc_init = () => {
			if(breakpoint_calc.matches === true) {
				const heightSelected = document.querySelector('.js--height-s-4').clientHeight + 70
				document.querySelector('.image-loop').setAttribute('style', `margin-top: ${heightSelected}px`)
			}
		}
		breakpoint_calc_init()
		breakpoint_calc.addListener(breakpoint_calc_init)

		checked_item.forEach(item => {
			if(item.checked) {
				
				button_calc_4_next.onclick = () => {
					calc_slider.slideNext()
				}
			}

			item.addEventListener('change', function() {
				if(this.checked) {
					button_calc_4_prev.onclick = () => {
						calc_slider.slidePrev()
					}
					button_calc_4_next.onclick = () => {
						calc_slider.slideNext()
					}
				}
				
			})
		})

		calc_step4_checked1.addEventListener('change', function() {

			if(clac_step5_checked1.checked) calc_image_name = calc_option.image_step_name.step5.step5_2;
			else calc_image_name = calc_option.image_step_name.step1;

			if(calc_step4_checked3.checked) {
				document.querySelectorAll('.js--hide-price-list').forEach(e => {e.classList.add('hide')})
				button_calc_4_next.style.display = 'none'
				button_calc_4_last.style.display = 'flex'

				button_calc_6_prev.style.display = 'none'
				button_calc_4_to.style.display = 'flex'
			} else {
				document.querySelectorAll('.js--hide-price-list').forEach(e => {e.classList.remove('hide')})
				button_calc_4_next.style.display = 'flex'
				button_calc_4_last.style.display = 'none'

				button_calc_6_prev.style.display = 'flex'
				button_calc_4_to.style.display = 'none'
			}

			renameDirImage()
			
		})

		calc_step4_checked2.addEventListener('change', function() {

			if(clac_step5_checked1.checked) calc_image_name = calc_option.image_step_name.step5.step5_1;
			else calc_image_name = calc_option.image_step_name.step4;

			if(calc_step4_checked3.checked) {
				document.querySelectorAll('.js--hide-price-list').forEach(e => {e.classList.add('hide')})
				button_calc_4_next.style.display = 'none'
				button_calc_4_last.style.display = 'flex'

				button_calc_6_prev.style.display = 'none'
				button_calc_4_to.style.display = 'flex'
			} else {
				document.querySelectorAll('.js--hide-price-list').forEach(e => {e.classList.remove('hide')})
				button_calc_4_next.style.display = 'flex'
				button_calc_4_last.style.display = 'none'

				button_calc_6_prev.style.display = 'flex'
				button_calc_4_to.style.display = 'none'
			}

			renameDirImage()
			
		})

		calc_step4_checked3.addEventListener('change', function() {

			if(clac_step5_checked1.checked) calc_image_name = calc_option.image_step_name.step5.step5_1;
			else calc_image_name = calc_option.image_step_name.step0;

			if(calc_step4_checked3.checked) {
				document.querySelectorAll('.js--hide-price-list').forEach(e => {e.classList.add('hide')})
				button_calc_4_next.style.display = 'none'
				button_calc_4_last.style.display = 'flex'

				button_calc_6_prev.style.display = 'none'
				button_calc_4_to.style.display = 'flex'
			} else {
				document.querySelectorAll('.js--hide-price-list').forEach(e => {e.classList.remove('hide')})
				button_calc_4_next.style.display = 'flex'
				button_calc_4_last.style.display = 'none'

				button_calc_6_prev.style.display = 'flex'
				button_calc_4_to.style.display = 'none'
			}

			button_calc_4_last.onclick = () => {
				calc_slider.slideTo(6, 500)
			}
			button_calc_4_to.onclick = () => {
				calc_slider.slideTo(4, 500)
			}
			
			renameDirImage()
		})
	}
}

// calc step5

const calc_step_5_init = () => {
	let checked_item = document.querySelectorAll('.js--step-5-checked')
	calc_nav_count.classList.add('active')
	if(checked_item && calc_slider.activeIndex == 5) {
		button_calc_5_prev.onclick = () => {
			calc_slider.slidePrev()
		}
		

		const breakpoint_calc = window.matchMedia('(max-width: 900px)');

		const breakpoint_calc_init = () => {
			if(breakpoint_calc.matches === true) {
				const heightSelected = document.querySelector('.js--height-s-5').clientHeight + 70
				document.querySelector('.image-loop').setAttribute('style', `margin-top: ${heightSelected}px`)
			}
		}
		breakpoint_calc_init()
		breakpoint_calc.addListener(breakpoint_calc_init)

		checked_item.forEach(item => {
			if(item.checked) {
				
				button_calc_5_next.onclick = () => {
					calc_slider.slideNext()
				}
			}

			item.addEventListener('change', function() {
				if(this.checked) {
					button_calc_5_prev.onclick = () => {
						calc_slider.slidePrev()
					}
					button_calc_5_next.onclick = () => {
						calc_slider.slideNext()
					}
				}
				
			})
		})


		clac_step5_checked1.addEventListener('change', function() {
			// calc_image_name = '2';

			// calc_image_name = calc_option.image_step_name.step5.step5_1;
			
			if(calc_step1_checked2.checked) { //Прямоугольный
				
				if(calc_step2_checked2.checked) calc_v = calc_option.dir_v1_mini;
				if(calc_step2_checked1.checked) calc_v = calc_option.dir_v1;
			}
			if(calc_step1_checked1.checked) { //Косточка
				if(calc_step2_checked2.checked) calc_v = calc_option.dir_v2_mini;
				if(calc_step2_checked1.checked) calc_v = calc_option.dir_v2;
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
			
		});

		clac_step5_checked2.addEventListener('change', function() {
			// calc_image_name = '2';

			// calc_step2_checked1 - Нормальный
			// calc_step2_checked2 - Мини
			// v1 - Прямоугольный
			// v2 - Косточка

			if(calc_step1_checked2.checked) { //Прямоугольный
				
				if(calc_step2_checked2.checked) calc_v = calc_option.dir_v1_mini;
				if(calc_step2_checked1.checked) calc_v = calc_option.dir_v1;
			}
			if(calc_step1_checked1.checked) { //Косточка
				if(calc_step2_checked2.checked) calc_v = calc_option.dir_v2_mini;
				if(calc_step2_checked1.checked) calc_v = calc_option.dir_v2;
			}


			if(calc_step4_checked1.checked) {
				calc_image_name = calc_option.image_step_name.step1;
			}
			if(calc_step4_checked2.checked) {
				calc_image_name = calc_option.image_step_name.step4;
			}

			renameDirImage();
			
		});

		
	}
}

const calc_step_last_init = () => {
	calc_nav_count.classList.add('active')
	if(calc_slider.activeIndex == 6) {
		button_calc_6_prev.onclick = () => {
			calc_slider.slidePrev()
		}

		const breakpoint_calc = window.matchMedia('(max-width: 900px)');

		const breakpoint_calc_init = () => {
			if(breakpoint_calc.matches === true) {
				const heightSelected = document.querySelector('.js--height-s-6').clientHeight  + 120
				const heightSelected2 = document.querySelector('.js--height-s-6-2').clientHeight
				const heightSelected3 = document.querySelector('.js--height-s-6-3').clientHeight

				const heightResult = heightSelected + heightSelected2 + heightSelected3

				document.querySelector('.image-loop').setAttribute('style', `margin-top: ${heightResult}px`)
			}
		}
		breakpoint_calc_init()
		breakpoint_calc.addListener(breakpoint_calc_init)
	}

	calc_step6_checked1.addEventListener('change', function(event) {

		if(calc_step6_checked2.checked) {
			document.querySelector('.calc_last_slider').classList.add('active')
			document.querySelector('.image-loop').classList.add('disabled')
		} else {
			document.querySelector('.calc_last_slider').classList.remove('active')
			document.querySelector('.image-loop').classList.remove('disabled')
		}
	})

	calc_step6_checked2.addEventListener('change', function(event) {
		if(calc_step6_checked2.checked) {
			document.querySelector('.calc_last_slider').classList.add('active')
			document.querySelector('.image-loop').classList.add('disabled')
		} else {
			document.querySelector('.calc_last_slider').classList.remove('active')
			document.querySelector('.image-loop').classList.remove('disabled')
		}
	})
}

const calc_sum_price = () => {
	const check_price = document.querySelectorAll('[data-price]')

	if(check_price) {

		const check_data_price = () => {

			let calc_sum_result_dom = document.querySelectorAll('.js--calc-price')
			let price_sum = 0
			check_price.forEach(e => {

				if(e.checked) {
					const price_val = Number(e.getAttribute('data-price'))
					
					price_sum = price_sum + price_val

					calc_sum_result_dom.forEach(item => item.innerHTML = price_sum)
				}

			})
		}

		check_data_price()

		check_price.forEach(e => {
			e.addEventListener('change', check_data_price)
		})
		
	}
}

calc_sum_price()

const breakpoint_calc = window.matchMedia('(max-width: 900px)');
	const nav = document.querySelectorAll('.section_calc .swiper-nav')
	const image = document.querySelector('.section_calc .image-loop').clientHeight + 30

	const heightResize = () => {
		if(breakpoint_calc.matches === true) {
			nav.forEach(e => {
				e.setAttribute('style', `margin-top: ${image}px`)
			})
		}
		
	}
	heightResize()
	breakpoint_calc.addListener(heightResize);

function renameDirImage() {
	image_loop_change.setAttribute('src', `/img/calc/${calc_color}/${calc_v}/${calc_image_name}.png`);
}