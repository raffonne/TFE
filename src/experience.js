import { Application } from '@splinetool/runtime';
import gsap from "gsap";

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
// app.load('https://prod.spline.design/S2VhqtEL3WY-9me8/scene.splinecode');
app.load('https://prod.spline.design/Jv9gx0W4CJBOFhDz/scene.splinecode');




// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import SplineLoader from '@splinetool/loader';

// // camera
// const camera = new THREE.PerspectiveCamera(67, window.innerWidth / window.innerHeight, 70, 100000);
// camera.position.set(-4328.27, 910.76, -6996.98);
// camera.quaternion.setFromEuler(new THREE.Euler(-0.04, 0.84, 0.03));

// // scene
// const scene = new THREE.Scene();

// // spline scene
// const loader = new SplineLoader();
// loader.load(
//   'https://prod.spline.design/Jv9gx0W4CJBOFhDz/scene.splinecode',
//   (splineScene) => {
//     scene.add(splineScene);
//   }
// );

// // renderer
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setAnimationLoop(animate);
// document.body.appendChild(renderer.domElement);

// // scene settings
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFShadowMap;

// scene.background = new THREE.Color('#cccccc');
// renderer.setClearAlpha(1);

// // orbit controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.125;

// window.addEventListener('resize', onWindowResize);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

// function animate(time) {
//   controls.update();
//   renderer.render(scene, camera);
// }





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
time = parseInt((EstimatedTime/1000)%60)*50;

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

    gsap.to('.videoContext', {
        opacity:1,
        duration:2,
        delay:2,
    })

    gsap.to('#canvas3d',{
		opacity:1,
		duration:4,
		delay:2,
	})

    gsap.to('header',{
		opacity:1,
		delay:4,
		duration:1,
	})


}, time);
