
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "./otherLibs/gsap/splitText";
import Lenis from '@studio-freight/lenis';
import simpleParallax from 'simple-parallax-js';

import Parallax from 'parallax-js';

import AOS from 'aos';
import 'aos/dist/aos.css';

gsap.registerPlugin(ScrollTrigger);

const textScroll = new SplitText(".content", ["words"]);

var aboutIntro = document.querySelector('.container');
if(aboutIntro) {

	gsap.from(textScroll.words,{
		opacity:0.1,
		stagger:0.2,
		ease:"none",
		scrollTrigger:{
			trigger:'.container-txt',
			start:'center center',
			end: '6000',
			scrub: 1,
			pin:true,
			anticipatePin: true,
			// markers:true,
		}
	});

};




var opacity1 = document.querySelector('#scene');
if (opacity1){

	gsap.to('#scene',{
		opacity:0,
		scale:4,
		scrollTrigger: {
			trigger: '#scene',
			scrub: 1.3,
			// markers:true,
			start: "bottom bottom",
			end: "+=500",
      }
	})
};

var noclip = document.querySelector('.illu-noclip');
if (noclip){
	gsap.to('.illu-noclip',{
		y:-400,
		scrollTrigger: {
			trigger: '.illu-noclip',
			scrub: 0.5,
			// markers:true,
			start: "bottom bottom",
			end: "+=100",
      }
	})
};




var br1 = document.querySelector('.section--about-start');
if (br1) {
	gsap.to('.introduction__bg-image',{
		opacity:1,
		ease: 'none',
		scrollTrigger: {
			trigger: '.introduction__content',
			start: "bottom bottom",
			end: "-=100%",
			// toggleActions: "play none none reverse",
			// markers:true
      }
	})
}


var chapter = document.querySelector('.section--about-origins');
if(chapter){
	gsap.from("section--about-origins", {
		opacity: 0,
		duration: 1.5,
		scrollTrigger: {
			trigger: ".section--about-origins",
			start: "-200",
			end: "bottom bottom",
			scrub: 2,
			// markers:true,
			pin:true
		},
	})
};

var plx = document.querySelector('.bg-image');
if(plx){
	gsap.from(".bg-image", {
		opacity: 0,
		duration: .5,
		scale: 1.3,
		scrollTrigger: {
			trigger: ".bg-image",
			start: "-300",
			end: "bottom 600",
			scrub: 0.5,
			pin: true,
			// markers:true
		}
	})
};

var quote = document.querySelector('.noclip__quote');
if (quote) {
	gsap.to('.noclip__quote', {
		opacity:1,
		duration:3,
		scrollTrigger: {
			trigger:'.noclip__quote',
			start:"center center",
			end:"top -1000",
			pin:true,
			scrub:true
			// markers:true
		}
	})
};

var ending = document.querySelector('.footer-heading');
if (ending) {
	gsap.to('.footer-heading', {
		scale:10,
		opacity:0,
		scrollTrigger: {
			trigger:'.footer-heading',
			start:"center center",
			end:"top -1000",
			pin:true,
			scrub:1.2
			// markers:true
		}
	})
};


var pinText1 = document.querySelector('.show-1');
if(pinText1){
	gsap.to(".show-1", {
		opacity: 0,
		duration: .5,
		scrollTrigger: {
			trigger: ".show-1",
			start: "center center",
			end: "bottom -2000",
			scrub: 0.2,
			pin: true,
			// markers:true
		},
	})
};


var pinText2 = document.querySelector('.show-2');
if(pinText2){
	gsap.to(".show-2", {
		opacity: 1,
		scrollTrigger: {
			trigger: ".show-2",
			start: "center center",
			end: "bottom -1500",
			scrub: 5,
			pin: true,
			// markers:true
		},
	})
};




// var portal = document.querySelector('.portal-image');
// if(portal){
// 	gsap.to(".portal-image", {
// 		scale: 12,
// 		onComplete: () => {
// 			portal.style.display = 'none';
// 		  },

// 		scrollTrigger: {
// 			trigger: ".portal-image",
// 			start: "top 100",
// 			end: "bottom bottom",
// 			// markers:true,
// 			scrub:2,
			
// 		}
// 	})
// };

var inside = document.querySelector('.portal-bg');
if(inside){
	gsap.to(".portal-bg",{
		duration:1,
		// scale:2,
		scrollTrigger:{
			trigger:".portal-bg",
			start:"top 300",
			end:"bottom bottom",
			scrub:3,
		}
	})
}


var kane = document.querySelector('.kane-bg');
if(kane){
	gsap.from(".kane-bg", {
		// opacity: 0,
		y:500,
		// scale: 1.5,
		scrollTrigger: {
			trigger: ".kane-bg",
			start: "top top",
			end: "bottom -300",
			pin: true,
			// markers:true,
			scrub:true
		},
	})
}




/**
 * GSAP Media Queries
 */

let mediaQueries = gsap.matchMedia();
// add a media query. When it matches, the associated function will run
	mediaQueries.add("(min-width: 10px)", () => {
	// this setup code only runs when viewport is at least 800px wide
	var box = document.querySelector('.card--1');
	if (box) {
		gsap.from('.card--1', {
			y:600,
			scrollTrigger : {
				trigger:".section--about-levels",
				start:'top top',
				bottom: 'bottom bottom',
				scrub:true,
				markers:true,
			}

		})
	}
	var box2 = document.querySelector('.card--2');
	if (box2) {
		gsap.from('.card--2', {
			y:400,
			scrollTrigger : {
				trigger:".section--about-levels",
				start:'top top',
				bottom: 'bottom bottom',
				scrub:true,
				markers:true,
			}

		})
	}

	var box3 = document.querySelector('.card--3');
	if (box3) {
		gsap.from('.card--3', {
			y:1200,
			scrollTrigger : {
				trigger:".section--about-levels",
				start:'top top',
				bottom: 'bottom bottom',
				scrub:true,
				markers:true,
			}

		})
	}

	var box4 = document.querySelector('.card--4');
	if (box4) {
		gsap.from('.card--4', {
			y:2000,
			scrollTrigger : {
				trigger:".section--about-levels",
				start:'top top',
				bottom: 'bottom bottom',
				scrub:true,
				markers:true,
			}

		})
	}
	var box5 = document.querySelector('.card--5');
	if (box5) {
		gsap.from('.card--5', {
			y:10,
			scrollTrigger : {
				trigger:".section--about-levels",
				start:'top top',
				bottom: 'bottom bottom',
				scrub:true,
				markers:true,
			}

		})
	}
	var box6 = document.querySelector('.card--6');
	if (box6) {
		gsap.from('.card--6', {
			y:700,
			scrollTrigger : {
				trigger:".section--about-levels",
				start:'top top',
				bottom: 'bottom bottom',
				scrub:true,
				markers:true,
			}

		})
	}
	var box7 = document.querySelector('.card--7');
	if (box7) {
		gsap.from('.card--7', {
			y:200,
			scrollTrigger : {
				trigger:".section--about-levels",
				start:'top top',
				bottom: 'bottom bottom',
				scrub:true,
				markers:true,
			}

		})
	}
	var box8 = document.querySelector('.card--8');
	if (box8) {
		gsap.from('.card--8', {
			y:1200,
			scrollTrigger : {
				trigger:".section--about-levels",
				start:'top top',
				bottom: 'bottom bottom',
				scrub:true,
				markers:true,
			}

		})
	}
	var box9 = document.querySelector('.card--9');
	if (box9) {
		gsap.from('.card--9', {
			y:2500,
			scrollTrigger : {
				trigger:".section--about-levels",
				start:'top top',
				bottom: 'bottom bottom',
				scrub:true,
				markers:true,
			},
			

		})
	}
});





var image = document.getElementsByClassName('icon-img');
	new simpleParallax(image, {
		overflow: true,
		delay: .4,
		transition: 'cubic-bezier(0,0,0,2)',
		
	},
);



var image = document.getElementsByClassName('og-br');
	new simpleParallax(image, {
		overflow: true,
		delay: .4,
		transition: 'cubic-bezier(0,0,0,2)',
		
	},
);

var universBg = document.getElementsByClassName('univers__bg');
	new simpleParallax(universBg, {
		overflow: true,
		delay: .6,
		transition: 'cubic-bezier(0,0,0,2)',
		
	},
);

var kaneBg = document.getElementsByClassName('kaneImg--1');
	new simpleParallax(kaneBg, {
		overflow: true,
		delay: .4,
		transition: 'cubic-bezier(0,0,0,1)',
	},
);

var kaneBg2 = document.getElementsByClassName('kaneImg--2');
	new simpleParallax(kaneBg2, {
		overflow: true,
		delay: .6,
		transition: 'cubic-bezier(0,0,0,1)'
		
	},
);

var kaneBg3 = document.getElementsByClassName('kaneImg--3');
	new simpleParallax(kaneBg3, {
		overflow: true,
		delay: .5,
		transition: 'cubic-bezier(0,0,0,1)'
		
	},
);


var kaneBg4 = document.getElementsByClassName('kaneImg--4');
	new simpleParallax(kaneBg4, {
		overflow: true,
		delay: .7,
		transition: 'cubic-bezier(0,0,0,1)'
		
	},
);

var gif = document.getElementsByClassName('noclip__gif');
	new simpleParallax(gif, {
		overflow: true,
		delay: .4,		
		transition: 'cubic-bezier(0,0,1,1)'

	},
);


var kanetxt = document.getElementsByClassName('kane__resume');
	new simpleParallax(kanetxt, {
		overflow: true,
		delay: .4,
		transition: 'cubic-bezier(0,0,1,1)'
		
	},
);


// var float = document.getElementsByClassName('.float--2');
// if(float){
// 	gsap.to(".float--2",{
// 		x:200,
// 		scrollTrigger: {
// 			trigger: ".float--2",
// 			start: "left 70%",
// 			end: "left 30%",
// 			horizontal: true,
// 			scrub: true
// 		},
// 	});
// }

// const t1 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".box1",
//         start: "left 70%",
//         end: "left 30%",
//         horizontal: true,
//         scrub: true
//     },
// });

// t1.to(".box1", {
//     scale: 2,
//     rotation: 360,
//     duration: 3
// });
	


// var windowSel = $(window);

// // parallax
// function parallax(selector, speed) {
//   var movement = -(windowSel.scrollTop() * (speed / 10));
//   $(selector).css('transform', 'translate3d(0,' + movement + 'px, 0');
// }

// // parallax init
// function parallaxInit(selector) {
//   if ($(selector).length && window.innerWidth > 800 && navigator.userAgent.match(/iPad/i) == null) {
//     $(selector).each(function(i, el) {
//       var speed = $(el).attr('data-speed');

//       //init function on load
//       parallax($(el), speed);

//       // init function on scroll
//       windowSel.on('scroll', function() {
//         parallax($(el), speed);
//       });
//     });
//   }
// }

// var parallaxItem = '[data-parallax]';
// parallaxInit(parallaxItem);

// according to effect from this website: http://www.techstyle.com/



// const spaceHolder = document.querySelector('.space-holder');
// const horizontal = document.querySelector('.horizontal');
// spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

// function calcDynamicHeight(ref) {
//   const vw = window.innerWidth;
//   const vh = window.innerHeight;
//   const objectWidth = ref.scrollWidth;
//   return objectWidth - vw + vh; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
// }

// window.addEventListener('scroll', () => {
//   const sticky = document.querySelector('.sticky');
//   horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
// });

// window.addEventListener('resize', () => {
//   spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
// });


var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);



//   Source:  http://codepen.io/ahsanrathore/post/accurate-page-progress-bar

var width = 100,
perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
time = parseInt((EstimatedTime/1000)%60)*100;

// Percentage Increment Animation
var PercentageID = $("#precent"),
	start = 0,
	end = 100,
	durataion = time;
	animateValue(PercentageID, start, end, durataion);
	
function animateValue(id, start, end, duration) {

var range = end - start,
  current = start,
  increment = end > start? 1 : -1,
  stepTime = Math.abs(Math.floor(duration / range)),
  obj = $(id);

var timer = setInterval(function() {
	current += increment;
	$(obj).text(current + "%");
  //obj.innerHTML = current;
	if (current == end) {
		clearInterval(timer);
	}
}, stepTime);
}

setTimeout(function(){

	$('.preloader-wrap').fadeOut(1000);

	gsap.to('.no-blik',{

		opacity:1,
		duration:2,
		delay:2
	}),

	gsap.to('.title--submain',{
		opacity:1,
		duration:6,
		delay:2,
	}),

	gsap.to('.main-small',{
		opacity:1,
		y:-50,
		delay:4,
		duraton:30
	}),
	
	gsap.to('.scene-img',{
		opacity:1,
		duration:3,
		delay:3,
		scale:1.2
	})


}, time);




AOS.init();



