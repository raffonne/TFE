"use strict"

import gsap from "gsap";
// import { TimelineLite } from "otherLibs/gsap/all";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "./otherLibs/gsap/splitText.js";
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
			// markers:true,
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
			markers:true
		}
		
	  });

	  gsap.to(".t2", {
		x: -400,
		scrollTrigger:{
			trigger:'.section--about-start',
			scrub:3,
			markers:true
		}

	  });
	  gsap.to(".t3", {
		x: 200,
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


 
var vid = document.getElementById("myAudio");
vid.volume = 0.2;













