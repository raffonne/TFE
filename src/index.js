
import gsap from "gsap";
// import { TimelineLite } from "otherLibs/gsap/all";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "./otherLibs/gsap/splitText";
import Lenis from '@studio-freight/lenis';
// import CSSRulePlugin from "gsap/CSSRulePlugin";
import simpleParallax from 'simple-parallax-js';


gsap.registerPlugin(ScrollTrigger);

// const timeline = new TimelineLite();
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

var dust = document.querySelector('.main-title');
if (dust){
	gsap.to('#myVideo',{
		opacity:0,
		ease: 'none',
		scrollTrigger: {
			trigger: '.main-title',
			scrub: 2,
			// markers:true,
			start: "bottom bottom",
			end: "+=1000",
			toggleActions: "play none none reverse"
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
			toggleActions: "play none none reverse",
			markers:true
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

// function raf(time) {
// lenis.raf(time)
// requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)
  
//   get scroll value
//   lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
//     console.log({ scroll, limit, velocity, direction, progress })
//   })
  


// lenis.on('scroll', ScrollTrigger.update)

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000)
// })
  
// const noclipTrigger = document.getElementById('video_noclip');
// const noclipTriggerContext = noclipTrigger.getContext('2d');

// noclipTrigger.height = innerHeight;
// noclipTrigger.width = innerWidth;

// const noclipTriggerInfo = {
// 	totalFrames : 147,
// 	totalTime:7,
// 	images:[],
// 	currentFrame:19,
// 	currentImage : (index) => `./images/noclipFrames/ezgif-frame-${index.toString().padStart(3,"0")}.jpg`,
// };

// for (let i=0; i <= noclipTriggerInfo.totalFrames; i++){
// 	const img = new Image();
// 	img.src = noclipTriggerInfo.currentImage(i);
// 	noclipTriggerInfo.images.push(img);
// }

// gsap.to(noclipTriggerInfo,{
// 	currentFrame: noclipTriggerInfo.totalFrames,
// 	snap:"currentFrame",
// 	ease:"none",
// 	scrollTrigger:{
// 		trigger: '#video_noclip',
// 		start:"top",
// 		// end:`bottom+=${noclipTrigger.totalFrames*noclipTriggerInfo.totalTime}`,
// 		end: '1000',
// 		pin:'#video_noclip',
// 		scrub:true,
// 		// markers:true
// 	},
// 	onUpdate:render,
// });


// noclipTriggerInfo.images[0].onload = () => {
// 	noclipTriggerContext.drawImage(
// 		noclipTriggerInfo.images[0],
// 		 0, 
// 		 0
// 	);
// }

// noclipTriggerInfo.images[0].onload = () => {
// 	noclipTriggerContext.drawImage(noclipTriggerInfo.images[0], 0, 0)
// };


// function render(){
// 	noclipTriggerContext.drawImage(
// 		noclipTriggerInfo.images[noclipTriggerInfo.currentFrame],
// 		 0, 
// 		 0
// 	);
// }

// render();
// gsap.to(noclipTriggerInfo,{
// 	opacity:0,
// 	ease: 'none',
// 	scrollTrigger: {
// 		trigger: '#video_noclip',
// 		scrub: 2,
// 		markers:true,
// 		start: "top top",
// 		end: "bottom bottom",
// 		toggleActions: "play none none reverse"
//   }
// });

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
		scrollTrigger: {
			trigger: ".bg-image",
			start: "-500",
			end: "bottom 300",
			scrub: 0.5,
			pin: true,
			// markers:true
		},
	})
};

gsap.to(".show-1", {
	opacity: 0,
	duration: 2,
	scrollTrigger:{
		trigger:".section--about-endLore",
		start:"bottom bottom",
		end:'bottom bottom',
		markers:true,
		scrub:2,
		pin:true
	}
})

gsap.from(".show-2", {
	opacity: 0,
	duration: 2,
	delay:5,
	scrollTrigger:{
		trigger:".section--about-endLore",
		start:"center center",
		end:'top top',
		markers:true,
		scrub:2,
		pin:true
	}
})


var icon = document.getElementsByClassName('icon-img');
	new simpleParallax(icon, {
		overflow: true,
		delay: .2,
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
		transition: 'cubic-bezier(0,0,0,1)',
		
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




