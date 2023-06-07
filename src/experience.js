import { Application } from '@splinetool/runtime';
import gsap from "gsap";

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
// app.load('https://prod.spline.design/S2VhqtEL3WY-9me8/scene.splinecode');
app.load('https://prod.spline.design/Jv9gx0W4CJBOFhDz/scene.splinecode');




// BOUTON SON
const soundBtn = document.getElementById("sound-btn");
const soundIcon = document.getElementById("sound-icon");
const audio = document.getElementById("myAudio");
const videoElement = document.getElementById("teaser");

// Vérifie s'il y a une valeur stockée pour l'état de pause de l'audio
const isPaused = localStorage.getItem("isPaused");

if (isPaused === "true") {
    audio.pause();
    videoElement.muted = true;
    soundIcon.src = "./images/sound-off.svg";
} else {
    audio.play();
    videoElement.muted = false;
    soundIcon.src = "./images/Vector.svg";
}

// Attache le gestionnaire d'événements au clic sur le bouton
soundBtn.addEventListener("click", toggleSound);

function toggleSound() {
    if (audio.paused) {
        audio.play();
        videoElement.muted = false;
        soundIcon.src = "./images/Vector.svg";
        localStorage.setItem("isPaused", "false"); // Stocke la valeur false pour indiquer que l'audio n'est pas en pause
    } else {
        audio.pause();
        videoElement.muted = true;
        soundIcon.src = "./images/sound-off.svg";
        localStorage.setItem("isPaused", "true"); // Stocke la valeur true pour indiquer que l'audio est en pause
    }
}



//CHARGEMENT DE LA PAGE + ANIMATIONS
var width = 100,
perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
time = parseInt((EstimatedTime/1000)%60)*50;

//lancement de la vidéo
function launchVideo() {
    var video = document.getElementById('teaser');
    video.play();

    setTimeout(function() {
        $('.videoContext').fadeOut(1000, function() {
            $(this).css('display', 'none');
            
        });

        
    }, video.duration * 1000); // Fondu après la durée de la vidéo en millisecondes
}


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

window.onload = function() {
    setTimeout(function() {
        $('.preloader-wrap').fadeOut(1000);

        gsap.to('.videoContext', {
            opacity: 1,
            duration: 1,
            delay: 1,
            onComplete: launchVideo // Lancer la vidéo une fois l'animation terminée
        }),

        gsap.to('header', {
            opacity: 1,
            delay: 2,
            duration: 1,
        });
    }, time);
};


//PAUSE ON CLICK

var video = document.getElementById('teaser');``
var videoContainer = document.getElementById('videoContext');
var skipButton = document.getElementById('skipButton');

video.addEventListener('click', function () {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

//SKIP VIDEO

skipButton.addEventListener('click', function() {
    video.pause();
    video.classList.add('skip');
    videoContainer.classList.add('skip');
});






//FULLSCREEN

if(document.fullscreenEnabled || document.webkitFullscreenEnabled) {
	const toggleBtn = document.querySelector('.js-toggle-fullscreen-btn');

	const styleEl = document.createElement('link');
	styleEl.setAttribute('rel', 'stylesheet');
	styleEl.setAttribute('href', 'https://codepen.io/tiggr/pen/poJoLyW.css');
	styleEl.addEventListener('load', function() {
		toggleBtn.hidden = false;
	});
	document.head.appendChild(styleEl);
	
	toggleBtn.addEventListener('click', function() {
		if(document.fullscreen) {
			document.exitFullscreen();
		} else if(document.webkitFullscreenElement) {
			document.webkitCancelFullScreen()
		} else if(document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else {
			document.documentElement.webkitRequestFullScreen();
		}
	});
	
	document.addEventListener('fullscreenchange', handleFullscreen);
	document.addEventListener('webkitfullscreenchange', handleFullscreen);
	
	
	function handleFullscreen() {
		if(document.fullscreen || document.webkitFullscreenElement) {
			toggleBtn.classList.add('on');
			toggleBtn.setAttribute('aria-label', 'Exit fullscreen mode');
		} else {
			toggleBtn.classList.remove('on');
			toggleBtn.setAttribute('aria-label', 'Enter fullscreen mode');
		}
	}
}


