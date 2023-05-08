
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "./otherLibs/gsap/splitText";
import Lenis from '@studio-freight/lenis';
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
			end: '6000',
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



var opacity1 = document.querySelector('#scene');
if (opacity1){

	gsap.to('#scene',{
		opacity:0,
		scale:3,
		scrollTrigger: {
			trigger: '#scene',
			scrub: 1.5,
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
			end: "+=800",
      }
	})
};

var title = document.querySelector('.title--big');
if (title) {
	gsap.from('.title--big',{
		opacity:0,
		y:100,
		scrollTrigger:{
			trigger: '.title--big',
			scrub: 0.5,
			markers:true,
			start: "bottom bottom",
			end: "+=100",
		}
	})
}


// var opacity2 = document.querySelector('.main-title');
// if (opacity2){
// 	gsap.to('.main-title',{
// 		opacity:0,
// 		y:-100,
// 		scrollTrigger: {
// 			trigger: '.main-title',
// 			scrub: 0.5,
// 			// markers:true,
// 			start: "bottom 50",
// 			end: "+=800",
			
//       }
// 	})
// };

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


// const lenis = new Lenis({
// 	duration: 1.5,
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
		opacity:1,
		duration:5,
		scale:10,
		opacity:0,
		scrollTrigger: {
			trigger:'.footer-heading',
			start:"center center",
			end:"top -1000",
			pin:true,
			scrub:true
			// markers:true
		}
	})
};

var h2 = document.querySelector('.title--big');
if (h2) {
	gsap.to('.title--big', {
		opacity:1,
		duration:3,
		scrollTrigger: {
			trigger:'.title--big',
			start:"bottom bottom",
			end:"-1000",
			// markers:true,
			scrub:0.5
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


var kane = document.querySelector('.kane-bg');
if(kane){
	gsap.from(".kane-bg", {
		// opacity: 0,
		y:100,
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
};


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


var float = document.getElementsByClassName('.float');
	new simpleParallax(float, {
		overflow:true,
		delay: .4,
		transition: 'cubic-bezier(0,0,1,1)'

	},
);





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



// //   Source:  http://codepen.io/ahsanrathore/post/accurate-page-progress-bar
var width = 100,
perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
time = parseInt((EstimatedTime/2000)%60)*100;

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
$('.preloader-wrap').fadeOut(2000);
}, time);









const lerp = (current, target, factor) =>
    current * (1 - factor) + target * factor;

let mousePosition = { x: 0, y: 0 };
window.addEventListener("mousemove", (e) => {
    mousePosition.x = e.pageX;
    mousePosition.y = e.pageY;
});

const calculateDistance = (x1, y1, x2, y2) => {
    return Math.hypot(x1 - x2, y1 - y2);
};

// ------------------------------------------------------------------------
class MagneticObject {
    constructor(domElement) {
        this.domElement = domElement;
        this.boundingClientRect = this.domElement.getBoundingClientRect();
        this.triggerArea = 200;
        this.interpolationFactor = 0.8;

        this.lerpingData = {
            x: { current: 0, target: 0 },
            y: { current: 0, target: 0 },
        };

        this.render();
        this.resize();
    }

    resize() {
        window.addEventListener("resize", () => {
            this.boundingClientRect = this.domElement.getBoundingClientRect();
        });
    }

    render() {
        const distanceFromMouseToCenter = calculateDistance(
            mousePosition.x,
            mousePosition.y,
            this.boundingClientRect.left + this.boundingClientRect.width / 2,
            this.boundingClientRect.top + this.boundingClientRect.height / 2
        );

        let targetHolder = { x: 0, y: 0 };

        if (distanceFromMouseToCenter < this.triggerArea) {
            targetHolder.x =
                (mousePosition.x -
                    (this.boundingClientRect.left +
                        this.boundingClientRect.width / 2)) *
                0.2;
            targetHolder.y =
                (mousePosition.y -
                    (this.boundingClientRect.top +
                        this.boundingClientRect.height / 2)) *
                0.2;
            console.log(targetHolder);
        
        }
		
        this.lerpingData["x"].target = targetHolder.x;
        this.lerpingData["y"].target = targetHolder.y;

        for (const item in this.lerpingData) {
            this.lerpingData[item].current = lerp(
                this.lerpingData[item].current,
                this.lerpingData[item].target,
                this.interpolationFactor
            );
        }

        this.domElement.style.transform = `translate(${this.lerpingData["x"].current}px, ${this.lerpingData["y"].current}px)`;

        window.requestAnimationFrame(() => this.render());
    }
}

const button = document.querySelector(".btn--link");
new MagneticObject(button);








