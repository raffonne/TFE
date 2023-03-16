"use strict"
import gsap from "gsap";
import { TimelineLite } from "../otherLibs/gsap/all";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "./splitText.js";
import Lenis from '@studio-freight/lenis';
// import CSSRulePlugin from "gsap/CSSRulePlugin";


gsap.registerPlugin(ScrollTrigger);

const timeline = new TimelineLite();
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
			// once: true,
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
			start: 'center center',
			end: 'bottom bottom',
			scrub: true,
			markers:true
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
			markers:true
		}
		
	  });

	  gsap.to(".t2", {
		x: -300,
		scrollTrigger:{
			trigger:'.section--about-start',
			scrub:1.5,
			markers:true
		}

	  });
	  gsap.to(".t3", {
		x: 150,
		scrollTrigger:{
			trigger:'.section--about-start',
			scrub:1.5,
			markers:true
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




var intro = document.querySelector('.intro');
if(intro) {

	const hideIntro = () => {
		const intro = document.querySelector('.intro');
		intro.classList.add("hidden");
	  }
	  
	document.querySelector('#hide-intro').addEventListener('click', hideIntro);
};



  


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
		  var cursor = {
			x: e.clientX,
			y: e.clientY - $(window).scrollTop()
		  };
  
		  // size
		  var width = $self.outerWidth();
		  var height = $self.outerHeight();
  
		  // position
		  var offset = $self.offset();
		  var elPos = {
			x: offset.left + width / 2,
			y: offset.top + height / 2
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
		TweenMax.to($self, 0.4, {
		  x: x * 0.2,
		  y: y * 0.2,
		  //scale: .9,
		  ease: Power2.easeOut
		});
	  };
	  var onLeave = function() {
		TweenMax.to($self, 1, {
		  x: 0,
		  y: 0,
		  scale: 1,
		  rotation: 0,
		  ease: Back.easeOut.config(1.2, 0.4)
		});
	  };
  
	  attachEventsListener();
	});
  };
  
  hoverMouse($('#hide-intro'));


 


  
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

for (let i=0; i <= noclipTriggerInfo.totalFrames; i++ ){
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
		markers:true
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








  // if(cursor.x){
  //   camera.rotation.y = Math.cos(cursor.y * Math.PI * 2) * 3
  // }

  // if(cursor.x){
  //   camera.rotation.x = Math.cos(cursor.x * Math.PI * 2) * 3
  // }


  // if(cursor){
  //   camera.rotation.y = Math.cos(cursor.y * Math.PI * 2) * 3
  // }

  // if(cursor.x){
  //   camera.rotation.x = Math.cos(cursor.x * Math.PI * 2) * 3
  //   camera.rotation.x = Math.sin(cursor.y * Math.PI * 2) * 3
  // }

  // camera.rotation.z = Math.cos(cursor.x * Math.PI * 2) * 0.1







