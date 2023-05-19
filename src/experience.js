import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/S2VhqtEL3WY-9me8/scene.splinecode');


const soundBtn = document.getElementById("sound-btn");
const soundIcon = document.getElementById("sound-icon");
const audio = document.getElementById("myAudio");

// Vérifie s'il y a une valeur stockée pour l'état de pause de l'audio
const isPaused = localStorage.getItem("isPaused");

if (isPaused === "true") {
    audio.pause();
    soundIcon.src = "./images/sound-off.svg";
} else {
    audio.play();
    soundIcon.src = "./images/Vector.svg";
}

// Attache le gestionnaire d'événements au clic sur le bouton
soundBtn.addEventListener("click", toggleSound);

function toggleSound() {
    if (audio.paused) {
        audio.play();
        soundIcon.src = "./images/Vector.svg";
        localStorage.setItem("isPaused", "false"); // Stocke la valeur false pour indiquer que l'audio n'est pas en pause
    } else {
        audio.pause();
        soundIcon.src = "./images/sound-off.svg";
        localStorage.setItem("isPaused", "true"); // Stocke la valeur true pour indiquer que l'audio est en pause
    }
}

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


}, time);



