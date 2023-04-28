
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "./otherLibs/gsap/splitText";
// import Lenis from '@studio-freight/lenis';
import simpleParallax from 'simple-parallax-js';
import Parallax from 'parallax-js';
import AOS from 'aos';
import 'aos/dist/aos.css';



gsap.registerPlugin(ScrollTrigger);
const text = new SplitText(".content", ["words"]);

var aboutIntro = document.querySelector('.container');
if(aboutIntro) {

	gsap.from(text.words,{
		opacity:0.1,
		stagger:0.2,
		ease:"none",
		scrollTrigger:{
			trigger:'.container-txt',
			start:'center center',
			end: '4000',
			scrub: 1,
			pin:true,
			anticipatePin: true,
			// markers:true,
		}
	});

};

// var dust = document.querySelector('#myVideo');
// if (dust){
// 	gsap.to('#myVideo',{
// 		opacity:0.2,
// 		ease: 'none',
// 		scrollTrigger: {
// 			trigger: '#myVideo',
// 			scrub: 2,
// 			// markers:true,
// 			start: "bottom bottom",
// 			end: "+=2000",
// 			toggleActions: "play none none reverse"
//       }
// 	})
// };

var opacity = document.querySelector('#scene');
if (opacity){
	gsap.to('#scene',{
		opacity:0,
		y:-200,
		scrollTrigger: {
			trigger: '#scene',
			scrub: 2,
			// markers:true,
			start: "bottom bottom",
			end: "+=500",
			toggleActions: "play none none reverse"
      }
	})
};


var opacity = document.querySelector('.main-small');
if (opacity){
	gsap.to('.main-small',{
		opacity:0,
		y:-100,
		scrollTrigger: {
			trigger: '.main-small',
			scrub: 0.5,
			// markers:true,
			start: "bottom bottom",
			end: "+=500",
			toggleActions: "play none none reverse"
      }
	})
};


// var opacity = document.querySelector('.main-title');
// if (opacity){
// 	gsap.to('.main-title',{
// 		opacity:0,
// 		y:"100",
// 		scrollTrigger: {
// 			trigger: '.main-title',
// 			scrub: 2,
// 			// markers:true,
// 			start: "bottom 300",
// 			end: "+=300",
// 			pin:true,
// 			toggleActions: "play none none reverse",
			
//       }
// 	})
// };

// var br1 = document.querySelector('.section--about-start');
// if (br1) {
// 	gsap.to('.introduction__bg-image',{
// 		opacity:1,
// 		ease: 'none',
// 		scrollTrigger: {
// 			trigger: '.introduction__content',
// 			start: "bottom bottom",
// 			end: "-=100%",
// 			toggleActions: "play none none reverse",
// 			markers:true
//       }
// 	})
// }


// const lenis = new Lenis({
// 	duration: 1.2,
// 	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// 	direction: 'vertical', // vertical, horizontal
// 	gestureDirection: 'vertical', // vertical, horizontal, both
// 	smooth: true,
// 	mouseMultiplier: 1,
// 	smoothTouch: 0.1,
// 	smoothWheel:true,
// 	touchMultiplier: 1,
// 	infinite: false,
// 	});

// 	function raf(time) {
// 	lenis.raf(time)
// 	requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)


// lenis.on('scroll', ScrollTrigger.update)

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000)
// })

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
		},
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




var portal = document.querySelector('.portal-image');
if(portal){
	gsap.to(".portal-image", {
		duration:4,
		scale: 12,
		onComplete: () => {
			portal.style.display = 'none';
		  },
		scrollTrigger: {
			trigger: ".portal-image",
			start: "top 100",
			end: "bottom bottom",
			// markers:true,
			scrub:3,
			
		}
	})
};

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


var kane = document.querySelector('.kaneImg--3');
if(kane){
	gsap.from(".kaneImg--3", {
		// opacity: 0,
		y:500,
		scrollTrigger: {
			trigger: ".kaneImg--3",
			start: "top top",
			end: "bottom -500",
			pin: true,
			markers:true,
			scrub:true
		},
	})
};





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
		transition: 'cubic-bezier(0,0,0,10)',
		
	},
);

var kaneBg2 = document.getElementsByClassName('kaneImg--2');
	new simpleParallax(kaneBg2, {
		overflow: true,
		transition: 'cubic-bezier(0,0,.83,.50)'
		
	},
);


var kaneBg4 = document.getElementsByClassName('kaneImg--4');
	new simpleParallax(kaneBg4, {
		overflow: true,
		transition: 'cubic-bezier(0,0,.83,.50)'
		
	},
);

var kanetxt = document.getElementsByClassName('kane__resume');
	new simpleParallax(kanetxt, {
		overflow: true,
		transition: 'cubic-bezier(0,0,.83,.50)'
		
	},
);











//swiper
const spaceHolder = document.querySelector('.space-holder');
const horizontal = document.querySelector('.horizontal');
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
}

window.addEventListener('scroll', () => {
  const sticky = document.querySelector('.sticky');
  horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener('resize', () => {
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});





AOS.init();



var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);









//Button hover begin
var hoverMouse = function($el) {
	$el.each(function() {
	  var $self = $(this);
	  var hover = false;
	  var offsetHoverMax = $self.attr("offset-hover-max") || 0.7;
	  var offsetHoverMin = $self.attr("offset-hover-min") || 0.5;
  
	  var attachEventsListener = function() {
		$(window).on("mousemove", function(e) {
		  //
		  var hoverArea = hover ? offsetHoverMax : offsetHoverMin;
  
		  // cursor
		  var cursor = {x: e.clientX, y: e.clientY - $(window).scrollTop()
		  };
  
		  // size
		  var width = $self.outerWidth();
		  var height = $self.outerHeight();
  
		  // position
		  var offset = $self.offset();
		  var elPos = { x: offset.left + width / 2, y: offset.top + height / 2
		  };
  
		  // comparaison
		  var x = cursor.x - elPos.x;
		  var y = cursor.y - elPos.y;
  
		  // dist
		  var dist = Math.sqrt(x * x + y * y);
  
		  // mutex hover
		  var mutHover = false;
  
		  // anim
		  if (dist < width * hoverArea) {
			mutHover = true;
			if (!hover) {
			  hover = true;
			}
			onHover(x, y);
		  }
  
		  // reset
		  if (!mutHover && hover) {
			onLeave();
			hover = false;
		  }
		});
	  };
  
	  var onHover = function(x, y) {
		TweenMax.to($self, 0.4, { x: x * 0.2, y: y * 0.2, ease: Power2.easeOut
		});
	  };
	  var onLeave = function() {
		TweenMax.to($self, 1, { x: 0, y: 0, scale: 1, rotation: 0, ease: Back.easeOut.config(1.2, 0.4)
		});
	  };
  
	  attachEventsListener();
	});
  };
  
  hoverMouse($('button'));