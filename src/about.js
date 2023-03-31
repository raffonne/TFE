"use strict"

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
		stagger:0.1,
		ease:"none",
		scrollTrigger:{
			trigger:'.container-txt',
			start:'center center',
			end: '7000',
			scrub: 1,
			pin:true,
			anticipatePin: true,
			// markers:true,
		}
	});

};

var dust = document.querySelector('.section--about-title');
if (dust){
	gsap.to('#myVideo',{
		opacity:0,
		ease: 'none',
		scrollTrigger: {
			trigger: '.section--about-title',
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
			end: "-=1000",
			toggleActions: "play none none reverse"
      }
	})
}





// var titleTrigger = document.querySelector('.title--medium');
// if (titleTrigger) {

// 	gsap.to(".t1", {
// 		x: 100,
// 		opacity:1,
// 		scrollTrigger:{
// 			trigger:'.title--medium',
// 			scrub:1.5,
// 			// markers:true
// 		}
		
// 	  });

// 	  gsap.to(".t2", {
// 		x: -100,
// 		scrollTrigger:{
// 			trigger:'.title--medium',
// 			scrub:1,
// 			// markers:true
// 		}

// 	  });

// }





const lenis = new Lenis({
	duration: 1.5,
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	direction: 'vertical', // vertical, horizontal
	gestureDirection: 'vertical', // vertical, horizontal, both
	smooth: true,
	mouseMultiplier: 1,
	smoothTouch: 0.1,
	smoothWheel:true,
	touchMultiplier: 1,
	infinite: false,
	});

function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  
//   get scroll value
//   lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
//     console.log({ scroll, limit, velocity, direction, progress })
//   })
  


lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})



 


  
const noclipTrigger = document.getElementById('video_noclip');
const noclipTriggerContext = noclipTrigger.getContext('2d');

noclipTrigger.height = innerHeight;
noclipTrigger.width = innerWidth;

const noclipTriggerInfo = {
	totalFrames : 145,
	totalTime:7,
	images:[],
	currentFrame:19,
	currentImage : (index) => `./images/noclipFrames/ezgif-frame-${index.toString().padStart(3,"0")}.jpg`,
};

for (let i=0; i <= noclipTriggerInfo.totalFrames; i++){
	const img = new Image();
	img.src = noclipTriggerInfo.currentImage(i);
	noclipTriggerInfo.images.push(img);
}

gsap.to(noclipTriggerInfo,{
	currentFrame: noclipTriggerInfo.totalFrames,
	snap:"currentFrame",
	ease:"none",
	scrollTrigger:{
		trigger: '#video_noclip',
		start:"top",
		// end:`bottom+=${noclipTrigger.totalFrames*noclipTriggerInfo.totalTime}`,
		end: 'bottom',
		pin:'#video_noclip',
		scrub:true,
		// markers:true
	},
	onUpdate:render,
});

// gsap.to(noclipTriggerInfo,{
// 	opacity:0,
// 	ease: 'none',
// 	scrollTrigger: {
// 		trigger: '#video_noclip',
// 		scrub: 2,
// 		// markers:true,
// 		start: "bottom bottom",
// 		end: "+=300",
// 		toggleActions: "play none none reverse"
//   }
// })


noclipTriggerInfo.images[0].onload = () => {
	noclipTriggerContext.drawImage(
		noclipTriggerInfo.images[0],
		 0, 
		 0
	);
}

noclipTriggerInfo.images[0].onload = () => {
	noclipTriggerContext.drawImage(noclipTriggerInfo.images[0], 0, 0)
};


function render(){
	noclipTriggerContext.drawImage(
		noclipTriggerInfo.images[noclipTriggerInfo.currentFrame],
		 0, 
		 0
	);
}

render();






var image = document.getElementsByClassName('og-br');
	new simpleParallax(image, {
		overflow: true,
		delay: .6,
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
var universTxt = document.getElementsByClassName('ending');
	new simpleParallax(universTxt, {
		overflow: true,
		delay: .4,
		
	},
);


// var ent1 = document.getElementsByClassName('img--1');
// new simpleParallax(ent1, {
// 	overflow: true,
// 	delay: 2,
// 	transition: 'cubic-bezier(5,0,0,1)'
// });

// var ent2 = document.getElementsByClassName('img--2');
// new simpleParallax(ent2, {
// 	overflow: true,
// 	delay: 4,
// 	transition: 'cubic-bezier(20,20,5,20)'
// });



