// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import gsap from 'gsap'
// import * as dat from 'lil-gui'
// // import imageSource from '../static/textures/door/color.jpg'

// /**
//  * Texture
//  */
// const loadingManager = new THREE.LoadingManager()

// // loadingManager.onStart = () => {
// //     console.log('onStart');
// // }
// // loadingManager.onProgress = () => {
// //     console.log('onProgress');
// // }
// // loadingManager.onLoad = () => {
// //     console.log('onLoaded');
// // }
// // loadingManager.onError = () => {
// //     console.log('onError');
// // }

// const textureLoader = new THREE.TextureLoader(loadingManager) //peut charger beaucoup de textures 
// const colorTexture = textureLoader.load('/textures/minecraft.png') // 2eme méthode de charger une texture 
// const alphaTexture = textureLoader.load('/textures/door/alpha.jpg')
// const heightTexture = textureLoader.load('/textures/door/height.jpg')
// const normalTexture = textureLoader.load('/textures/door/normal.jpg')
// const ambientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
// const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
// const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg')

// // colorTexture.repeat.x = 2
// // colorTexture.repeat.y = 3
// // colorTexture.wrapS = THREE.MirroredRepeatWrapping
// // colorTexture.wrapT = THREE.MirroredRepeatWrapping

// // colorTexture.offset.x = 0.5
// // colorTexture.offset.y = 0.5

// // colorTexture.rotation = Math.PI / 4
// // colorTexture.center.x = 0.5
// // colorTexture.center.y = 0.5

// colorTexture.generateMipmaps = false //pour avoir de la perf pour pas surcharger le gp
// colorTexture.minFilter = THREE.NearestFilter
// colorTexture.magFilter = THREE.NearestFilter //le plus optimisé

// //pour les textures, garder la taille la plus petite possible (jpg/png) = tinypng



// // const image = new Image()
// // const texture = new THREE.Texture(image) //1ere manière de charger les textures

// // image.onload = () => {
// //     // const texture = new THREE.Texture(image)
// //     texture.needsUpdate = true
// // }
// // image.src = '/textures/door/color.jpg'


// /**
//  * Base
//  */
// const parameters = {
//     color: 0xff0000,
//     spin: () =>
//     {
//         gsap.to(mesh.rotation, 1, { y: mesh.rotation.y + Math.PI * 2 })
//     }
// }

// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()

// /**
//  * Object
//  */
// // const geometry = new THREE.BoxGeometry(1, 1, 1)
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ map: colorTexture })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.z = 3
// scene.add(camera)

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Debug
//  */
// const gui = new dat.GUI()
// gui.add(mesh.position, 'y').min(- 3).max(3).step(0.01).name('elevation')
// gui.add(mesh, 'visible')
// gui.add(material, 'wireframe')

// window.addEventListener('keydown', (event) =>
// {
//     if(event.key === 'h')
//     {
//         if(gui._hidden)
//             gui.show()
//         else
//             gui.hide()
//     }
// })

// gui
//     .addColor(parameters, 'color')
//     .onChange(() =>
//     {
//         material.color.set(parameters.color)
//     })

// gui.add(parameters, 'spin')

// /**
//  * Animate
//  */
// const clock = new THREE.Clock()

// const tick = () =>
// {
//     const elapsedTime = clock.getElapsedTime()

//     // Update controls
//     controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()




// MATERIALS


// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'lil-gui'
// import { CubeTextureLoader } from 'three'

// /**
//  *Debug
//  */

// const gui = new dat.GUI()

// /**
//  * Textures
//  */

// const textureLoader = new THREE.TextureLoader()
// const cubeTextureLoader = new THREE.CubeTextureLoader()

// const doorColorTexture = textureLoader.load('/textures/door/color.jpg')
// const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg')
// const doorAmbientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
// const doorHeightTexture = textureLoader.load('/textures/door/height.jpg')
// const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg')
// const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
// const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg')
// const matcapTexture = textureLoader.load('/textures/matcaps/3.png')
// const gradientTexture = textureLoader.load('/textures/gradients/3.jpg')
// gradientTexture.minFilter = THREE.NearestFilter
// gradientTexture.magFilter = THREE.NearestFilter
// gradientTexture.generateMipmaps = false

// const environmentMapTexture = cubeTextureLoader.load([
//     '/textures/environmentMaps/0/px.jpg',
//     '/textures/environmentMaps/0/nx.jpg',
//     '/textures/environmentMaps/0/py.jpg',
//     '/textures/environmentMaps/0/ny.jpg',
//     '/textures/environmentMaps/0/pz.jpg',
//     '/textures/environmentMaps/0/nz.jpg', 
//     //dans cet ordre
// ])

// /**
//  * Base
//  */
// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()


// /**
//  * Objects
//  */

// // const material = new THREE.MeshBasicMaterial()
// // material.map = doorColorTexture
// // material.color.set('green')
// // material.color = new THREE.Color('red')
// // material.opacity = 0.5
// //material.wireframe = true
// // material.transparent = true
// // material.alphaMap = doorAlphaTexture
// // material.side = THREE.DoubleSide //attention au gpu

// // const material = new THREE.MeshDepthMaterial() //pratique pour simuler la lumière
// // const material = new THREE.MeshLambertMaterial()
// // const material = new THREE.MeshPhongMaterial()
// const material = new THREE.MeshStandardMaterial()
// material.metalness = 0.7
// material.roughness = 0.2 
// material.envMap = environmentMapTexture


// // material.map = doorColorTexture
// // material.aoMap = doorAmbientOcclusionTexture
// // material.aoMapIntensity = 1
// // material.displacementMap = doorHeightTexture
// // material.displacementScale = 0.05
// // material.metalnessMap = doorMetalnessTexture
// // material.roughnessMap = doorRoughnessTexture
// // material.normalMap = doorNormalTexture
// // material.normalScale.set(0.5, 0.5)
// // material.transparent = true
// // material.alphaMap = doorAlphaTexture //si tu veux jouer avec le aplha il faut ajouter de la transparence


// gui.add(material, 'metalness').min(0).max(1).step(0.0001)
// gui.add(material, 'roughness').min(0).max(1).step(0.0001)
// gui.add(material, 'aoMapIntensity').min(0).max(1).step(0.0001)
// gui.add(material, 'displacementScale').min(0).max(1).step(0.0001)





// const sphere = new THREE.Mesh(
//     new THREE.SphereGeometry(0.5, 64, 64),
//     material
// )
// sphere.position.x = -1.5

// sphere.geometry.setAttribute(
//     'uv2',
//     new THREE.BufferAttribute(sphere.geometry.attributes.uv.array, 2)
// )

// const plane = new THREE.Mesh(
//     new THREE.PlaneGeometry(1,1,100, 100),
//     material
// )

// plane.geometry.setAttribute(
//     'uv2',
//     new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2)
// )

// const torus = new THREE.Mesh(
//     new THREE.TorusGeometry(0.3, 0.2, 64, 128),
//     material
// )

// torus.geometry.setAttribute(
//     'uv2',
//     new THREE.BufferAttribute(torus.geometry.attributes.uv.array, 2)
// )

// torus.position.x = 1.5

// scene.add(sphere, plane, torus)

// /**
//  * Lights
//  */

// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
// scene.add(ambientLight)

// const pointLight = new THREE.PointLight(0xffffff, 0.5)
// pointLight.position.x = 2
// pointLight.position.y = 3
// pointLight.position.z = 4
// scene.add(pointLight)
// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.x = 1
// camera.position.y = 1
// camera.position.z = 2
// scene.add(camera)

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Animate
//  */
// const clock = new THREE.Clock()

// const tick = () =>
// {
//     const elapsedTime = clock.getElapsedTime()

//     //Update Object
//     sphere.rotation.y = 0.1 * elapsedTime
//     torus.rotation.y = 0.1 * elapsedTime
//     plane.rotation.y = 0.1 * elapsedTime

//     sphere.rotation.x = 0.1 * elapsedTime
//     torus.rotation.x = 0.1 * elapsedTime
//     plane.rotation.x = 0.1 * elapsedTime

//     // Update controls
//     controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()









// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
// import * as dat from 'lil-gui'

// /**
//  * Base
//  */

// const GRAVITY = 30;



// //debug

// const gui = new dat.GUI()

// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// // Cursor
// const cursor = {
//     x: 0,
//     y: 0
// }

// window.addEventListener('mousemove', (event) =>
// {
//     cursor.x = event.clientX / sizes.width - 0.5
//     cursor.y = event.clientY / sizes.height - 0.5
// })

// // Scene
// const scene = new THREE.Scene()

// // Object

// const material = new THREE.MeshStandardMaterial()
// material.roughness = 0.4


// const mesh = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
//     new THREE.MeshBasicMaterial({ color: 0xff0000 })
// )
// scene.add(mesh)

// const plane = new THREE.Mesh(
//     new THREE.PlaneGeometry(20, 20),
// )
// plane.rotation.x = - Math.PI * 0.5
// plane.position.y = - 0.65

// scene.add(plane)


// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)



// scene.add(camera)



// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

// // Renderer
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)

// // Animate
// const clock = new THREE.Clock()

// const tick = () =>
// {
//     const elapsedTime = clock.getElapsedTime()

//     // Update controls
//     controls.update()

//     //Update Camera
//     camera.position.x = Math.cos(cursor.x * Math.PI * 2) * 3
//     camera.position.z = Math.sin(cursor.x * Math.PI * 2) * 3
//     camera.position.y = Math.sin(cursor.y * Math.PI * 2) * 3

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()

import * as THREE from 'three'
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


const canvas = document.querySelector('canvas.webgl')

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}



// Cursor
// const cursor = {
//     x: window.innerWidth,
//     y: window.innerHeight
// }
const cursor = {
  x: 0,
  y: 0
}

// MainStuff:Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, .1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas : canvas
});


const controls = {};
const player = {
  height: 1,
  turnSpeed: .1,
  speed: .1,
  jumpHeight: .2,
  gravity: .01,
  velocity: 0,
  
  playerJumps: false
};

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
scene.background = new THREE.Color("black");
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera


    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Camera:Setup
camera.position.set(0, player.height, -5);
camera.lookAt(new THREE.Vector3(0, player.height, 5));



// camera.position.set( 1, 1, 1 );
// camera.lookAt( - 1, 8, - 8 );

window.addEventListener('mousemove', (event) => {
   cursor.x = event.clientX / sizes.width - 0.5
   cursor.y = event.clientY / sizes.height - 0.5

   console.log(cursor.x, cursor.y)
})




// Object:Box2
const BoxGeometry2 = new THREE.BoxGeometry(1, 1, 1);
const BoxMaterial2 = new THREE.MeshPhongMaterial({ color: "white", wireframe: false });
const Box2 = new THREE.Mesh(BoxGeometry2, BoxMaterial2);

Box2.position.y = .75;
Box2.position.x = 0;
Box2.receiveShadow = true;
Box2.castShadow = true;

scene.add(Box2);


// Object:Plane
const PlaneGeometry1 = new THREE.PlaneGeometry(10, 10);
const PlaneMaterial1 = new THREE.MeshPhongMaterial({ color: "white", wireframe: false });
const Plane1 = new THREE.Mesh(PlaneGeometry1, PlaneMaterial1);

Plane1.rotation.x -= Math.PI / 2;
Plane1.scale.x = 3;
Plane1.scale.y = 3;
Plane1.receiveShadow = true;
scene.add(Plane1);

// Object:Light:1
const light1 = new THREE.PointLight("white", .8);
light1.position.set(0, 3, 0);
light1.castShadow = true;
light1.shadow.camera.near = 2.5;
scene.add(light1);

// Object:Light:2
const light2 = new THREE.AmbientLight("white", .15);
light2.position.set(10, 2, 0);
scene.add(light2);

// Controls:Listeners
document.addEventListener('keydown', ({ keyCode }) => { controls[keyCode] = true });
document.addEventListener('keyup', ({ keyCode }) => { controls[keyCode] = false });



// ...
function control() {
  // Controls:Engine 
  if(controls[90]){ // w/z
    camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
    camera.position.z -= -Math.cos(camera.rotation.y) * player.speed;
  }
  if(controls[83]){ // s
    camera.position.x += Math.sin(camera.rotation.y) * player.speed;
    camera.position.z += -Math.cos(camera.rotation.y) * player.speed;
  }
  if(controls[81]){ // a/q
    camera.position.x += Math.sin(camera.rotation.y + Math.PI / 2) * player.speed;
    camera.position.z += -Math.cos(camera.rotation.y + Math.PI / 2) * player.speed;
  }
  if(controls[68]){ // d
    camera.position.x += Math.sin(camera.rotation.y - Math.PI / 2) * player.speed;
    camera.position.z += -Math.cos(camera.rotation.y - Math.PI / 2) * player.speed;
  }


  if(cursor.x){
    camera.rotation.y = Math.cos(cursor.y * Math.PI * 2) * 3
  }

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



//   if(controls[37]){ // la
//     camera.rotation.x -= player.turnSpeed;
//   }
//   if(controls[39]){ // ra
//     camera.rotation.x += player.turnSpeed;
//   }
//   if(controls[38]){ // up
//     camera.rotation.y -= player.turnSpeed;
//   }
//   if(controls[40]){ // bottom
//     camera.rotation.y += player.turnSpeed;
//   }



  if(controls[32]) { // space
    if(player.jumps) return false;
    player.jumps = true;
    player.velocity = -player.jumpHeight;
  }
}

function ixMovementUpdate() {
  player.velocity += player.gravity;
  camera.position.y -= player.velocity;
  
  if(camera.position.y < player.height) {
    camera.position.y = player.height;
    player.jumps = false;
  }
}

function ixLightcubeAnimation() {
  const a = .01;
  Box1.rotation.x += a;
  Box1.rotation.y += a;
}

function update() {
  control();
  ixMovementUpdate();
}

function render() {
  renderer.render(scene, camera);
  controls.movementSpeed = 150;
  controls.lookSpeed = 0.1;
  
}


const clock = new THREE.Clock()
const tick = () =>
{
    update();
    render();
    const elapsedTime = clock.getElapsedTime()

    // Update controls

    //Update Camera
    
    

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()


// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'lil-gui'

// /**
//  * Base
//  */
// // Debug
// const gui = new dat.GUI()

// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()

// /**
//  * Lights
//  */
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
// // scene.add(ambientLight)

// const directionalLight = new THREE.DirectionalLight(0x00fffc, 0.3)
// directionalLight.position.set(1, 0.25, 0)
// // scene.add(directionalLight)

// const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 0.3)
// // scene.add(hemisphereLight)

// const pointLight = new THREE.PointLight(0xff9000, 0.5)
// pointLight.position.set(1, -0.5, 1)
// // scene.add(pointLight)

// const rectAreaLight = new THREE.RectAreaLight(0x4e00ff, 2, 1, 1)
// scene.add(rectAreaLight)
// /**
//  * Objects
//  */
// // Material
// const material = new THREE.MeshStandardMaterial()
// material.roughness = 0.4

// // Objects
// const sphere = new THREE.Mesh(
//     new THREE.SphereGeometry(0.5, 32, 32),
//     material
// )
// sphere.position.x = - 1.5

// const cube = new THREE.Mesh(
//     new THREE.BoxGeometry(0.75, 0.75, 0.75),
//     material
// )

// const torus = new THREE.Mesh(
//     new THREE.TorusGeometry(0.3, 0.2, 32, 64),
//     material
// )
// torus.position.x = 1.5

// const plane = new THREE.Mesh(
//     new THREE.PlaneGeometry(5, 5),
//     material
// )
// plane.rotation.x = - Math.PI * 0.5
// plane.position.y = - 0.65

// scene.add(sphere, cube, torus, plane)

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.x = 1
// camera.position.y = 1
// camera.position.z = 2
// scene.add(camera)

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Animate
//  */
// const clock = new THREE.Clock()

// const tick = () =>
// {
//     const elapsedTime = clock.getElapsedTime()

//     // Update objects
//     sphere.rotation.y = 0.1 * elapsedTime
//     cube.rotation.y = 0.1 * elapsedTime
//     torus.rotation.y = 0.1 * elapsedTime

//     sphere.rotation.x = 0.15 * elapsedTime
//     cube.rotation.x = 0.15 * elapsedTime
//     torus.rotation.x = 0.15 * elapsedTime

//     // Update controls
//     controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()