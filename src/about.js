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

var aboutIntro = document.querySelector('.section--about-intro');
if(aboutIntro) {

	gsap.from(text.words,{
		opacity:0.15,
		stagger:0.8,
		ease:"none",
		scrollTrigger:{
			trigger:'.container-txt',
			start:'center center',
			end: "top top",
			scrub:true,
			pin:true,
			// anticipatePin: true,
			markers:true,
		}
	});

	const lenisText = new Lenis({
		duration: 5,
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
	lenisText.raf(time)
	requestAnimationFrame(raf)
	}
	
	requestAnimationFrame(raf)
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





var titleTrigger = document.querySelector('.title--medium');
if (titleTrigger) {

	gsap.to(".t1", {
		x: 180,
		opacity:1,
		scrollTrigger:{
			trigger:'.section--about-start',
			scrub:1.5,
			// markers:true
		}
		
	  });

	  gsap.to(".t2", {
		x: -400,
		scrollTrigger:{
			trigger:'.section--about-start',
			scrub:3,
			// markers:true
		}

	  });
	  gsap.to(".t3", {
		x: 200,
		scrollTrigger:{
			trigger:'.section--about-start',
			scrub:1.5,
			// markers:true
		}
		
	  });

	  gsap.to('.t4', {
		x:-500,
		scrollTrigger:{
			trigger:'.section--univers',
			scrub:1.5,
			// markers:true
		}
	  });
	  gsap.to('.t5', {
		x: 100,
		scrollTrigger:{
			trigger:'.section--univers',
			scrub:2,
			// markers:true
		}
	  });
}





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
  


// lenis.on('scroll', ScrollTrigger.update)

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000)
// })



 


  
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

var vid = document.getElementById("myAudio");
vid.volume = 0.2;





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
// var universTxt = document.getElementsByClassName('ending');
// 	new simpleParallax(universTxt, {
// 		overflow: true,
// 		delay: .4,
		
// 	},
// );


// var ent1 = document.getElementsByClassName('img--1');
// new simpleParallax(ent1, {
// 	overflow: true,
// 	delay: 2,
// 	transition: 'cubic-bezier(5,0,0,1)'
// });

// var ent2 = document.getElementsByClassName('img--2');
// new simpleParallax(ent2, {
// 	overflow: true,
// 	delay: 1,
// 	transition: 'cubic-bezier(5,0,0,1)'
// });
// var ent3 = document.getElementsByClassName('img--3');
// new simpleParallax(ent3, {
// 	overflow: true,
// 	delay: .5,
// 	transition: 'cubic-bezier(5,0,0,1)'
// });
// var ent4 = document.getElementsByClassName('img--4');
// new simpleParallax(ent4, {
// 	overflow: true,
// 	delay: .15,
// 	transition: 'cubic-bezier(5,0,0,1)'
// });
// var ent5 = document.getElementsByClassName('img--5');
// new simpleParallax(ent5, {
// 	overflow: true,
// 	delay: .20,
// 	transition: 'cubic-bezier(10,0,0,1)'
// });



