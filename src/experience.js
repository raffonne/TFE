



// import * as THREE from 'three'
// import * as dat from 'lil-gui'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

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
//  * Models
//  */

// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath('/draco/')

// const gltfLoader = new GLTFLoader();
// gltfLoader.setDRACOLoader(dracoLoader)

// gltfLoader.load(
//   // '/models/FlightHelmet/glTF/FlightHelmet.gltf',
//   '/models/Duck/glTF-Draco/Duck.gltf',
//   (gltf) => {

//     // const children = [...gltf.scene.children]
//     // for (const child of children){
//     //   scene.add(child)
//     // }

//     scene.add(gltf.scene)
    
//   },
//   // () => {
//   //   console.log('success')
//   // },
//   // () => {
//   //   console.log('progress')
//   // },
//   // () => {
//   //   console.log('error')
//   // }
// )

// /**
//  * Floor
//  */
// const floor = new THREE.Mesh(
//     new THREE.PlaneGeometry(10, 10),
//     new THREE.MeshStandardMaterial({
//         color: '#444444',
//         metalness: 0,
//         roughness: 0.5
//     })
// )
// floor.receiveShadow = true
// floor.rotation.x = - Math.PI * 0.5
// scene.add(floor)

// /**
//  * Lights
//  */
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
// scene.add(ambientLight)

// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
// directionalLight.castShadow = true
// directionalLight.shadow.mapSize.set(1024, 1024)
// directionalLight.shadow.camera.far = 15
// directionalLight.shadow.camera.left = - 7
// directionalLight.shadow.camera.top = 7
// directionalLight.shadow.camera.right = 7
// directionalLight.shadow.camera.bottom = - 7
// directionalLight.position.set(5, 5, 5)
// scene.add(directionalLight)

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
// camera.position.set(2, 2, 2)
// // camera.position.set(0, 2,90)

// scene.add(camera)

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.target.set(0, 0.75, 0)
// controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.shadowMap.enabled = true
// renderer.shadowMap.type = THREE.PCFSoftShadowMap
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Animate
//  */
// const clock = new THREE.Clock()
// let previousTime = 0

// const tick = () =>
// {
//     const elapsedTime = clock.getElapsedTime()
//     const deltaTime = elapsedTime - previousTime
//     previousTime = elapsedTime

//     // Update controls
//     controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()





















/**
 * BACKROOMS V1
 */

//THREE.JS
import * as THREE from 'three'
import gsap from "gsap";
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
import * as dat from 'lil-gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'


/**
 * Loader
 */

// const LoadingManager = new THREE.LoadingManager(
//   () => {
//     console.log('loaded')
//     gsap.to(overlayMaterial.uniforms.uAlpha, { duration: 3, value : 0})
//   }, 
//   () => {
//     console.log('error')
//   }, 
//   () => {
//     console.log('progress')
//   }
// )
/**
 * Overlay
 */


const canvas = document.querySelector('canvas.webgl')

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

/**
 * Lights
 */
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
// scene.add(ambientLight)


// MainStuff:Setup
const scene = new THREE.Scene();

/**
 * Overlay
 */

// const overlayGeometry = new THREE.PlaneGeometry(2,2,1,1)
// const overlayMaterial = new THREE.ShaderMaterial({
//   // wireframe:true,
//   transparent:true,
//   uniforms:{

//     uAlpha: { value : 1 }

//   },
//   vertexShader:`

//   void main() {

//     gl_Position = vec4(position, 1.0);

//   }`,

//   fragmentShader:`

//   uniform float uAlpha;

//   void main() {

//     gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);

//   }`
// })
// const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial)
// scene.add(overlay)


const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.rotation.order = 'XYZ';

const renderer = new THREE.WebGLRenderer({
  canvas : canvas
});


const controls = {};
const player = {
  height: 2,
  turnSpeed: .1,
  speed: 0.5,
  velocity: 0,
};




renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
scene.background = new THREE.Color("black");

window.addEventListener('resize', () =>
{
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  
})

// Camera:Setup
camera.position.set(0, player.height, -5);
camera.lookAt(new THREE.Vector3(0, player.height, 5));


//model 3D : setup


const gltfLoader = new GLTFLoader()

gltfLoader.load(
  // './backrooms-3Dmodel/backrooms_with_baked_textures/scene.gltf',
  './definitive.gltf',
  (gltf) => {
    console.log('success')
    scene.add(gltf.scene)
  },
  () => {
    console.log('progress')
  },
  () => {
    console.log('error')
  }
)

//Camera controls

/**
 * Mousemove
 */



// Controls:Listeners
document.addEventListener('keydown', ({ keyCode }) => { controls[keyCode] = true });
document.addEventListener('keyup', ({ keyCode }) => { controls[keyCode] = false });

function control() {
  // Controls:Engine 
  if (controls[90] || controls[38]) { // w/z / up arrow
    camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
    camera.position.z -= -Math.cos(camera.rotation.y) * player.speed;
  }
  if (controls[83] || controls[40]) { // s/ down arrow
    camera.position.x += Math.sin(camera.rotation.y) * player.speed;
    camera.position.z += -Math.cos(camera.rotation.y) * player.speed;
  }
  if (controls[81] || controls[37]) { // a/left arrow
    camera.position.x += Math.cos(camera.rotation.y) * player.speed;
    camera.position.z += Math.sin(camera.rotation.y) * player.speed;
    camera.rotation.y -= player.turnSpeed; // tourner la caméra vers la gauche
  }
  if (controls[68] || controls[39]) { // d/right arrow
    camera.position.x -= Math.cos(camera.rotation.y) * player.speed;
    camera.position.z -= Math.sin(camera.rotation.y) * player.speed;
    camera.rotation.y += player.turnSpeed; // tourner la caméra vers la droite
  }
}




function animate() {  
  requestAnimationFrame(animate);
  control();
  renderer.render(scene, camera);

}

animate();



















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

















// //PHYSICS
// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'lil-gui'
// import CANNON from 'cannon'

// /**
//  * Debug
//  */
// const gui = new dat.GUI()

// /**
//  * Base
//  */
// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()

// /**
//  * Textures
//  */
// const textureLoader = new THREE.TextureLoader()
// const cubeTextureLoader = new THREE.CubeTextureLoader()

// const environmentMapTexture = cubeTextureLoader.load([
//     '/textures/environmentMaps/0/px.png',
//     '/textures/environmentMaps/0/nx.png',
//     '/textures/environmentMaps/0/py.png',
//     '/textures/environmentMaps/0/ny.png',
//     '/textures/environmentMaps/0/pz.png',
//     '/textures/environmentMaps/0/nz.png'
// ])

// /**
//  * Physics
//  */
// //World

// const world = new CANNON.World()
// world.gravity.set(0, -9.82, 0)

// //materials

// const concreteMaterial = new CANNON.Material('concrete')
// const plasticMaterial = new CANNON.Material('plastic')




// //Sphere
// const sphereShape = new CANNON.Sphere(0.5)
// const sphereBody = new CANNON.Body({
//   mass:1,
//   position:new CANNON.Vec3(0, 3, 0),
//   shape: sphereShape
// })
// world.addBody(sphereBody)

// //Floor

// const floorShape = new CANNON.Plane()
// const floorBody = new CANNON.Body()
// floorBody.mass = 0
// floorBody.addShape(floorShape)
// floorBody.quaternion.setFromAxisAngle(
//   new CANNON.Vec3(-1, 0, 0),
//   Math.PI * 0.5

// )
// world.addBody(floorBody)


// /**
//  * Test sphere
//  */
// const sphere = new THREE.Mesh(
//     new THREE.SphereGeometry(0.5, 32, 32),
//     new THREE.MeshStandardMaterial({
//         metalness: 0.3,
//         roughness: 0.4,
//         envMap: environmentMapTexture,
//         envMapIntensity: 0.5
//     })
// )
// sphere.castShadow = true
// sphere.position.y = 0.5
// scene.add(sphere)

// /**
//  * Floor
//  */
// const floor = new THREE.Mesh(
//     new THREE.PlaneGeometry(10, 10),
//     new THREE.MeshStandardMaterial({
//         color: '#777777',
//         metalness: 0.3,
//         roughness: 0.4,
//         envMap: environmentMapTexture,
//         envMapIntensity: 0.5
//     })
// )
// floor.receiveShadow = true
// floor.rotation.x = - Math.PI * 0.5
// scene.add(floor)

// /**
//  * Lights
//  */
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
// scene.add(ambientLight)

// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2)
// directionalLight.castShadow = true
// directionalLight.shadow.mapSize.set(1024, 1024)
// directionalLight.shadow.camera.far = 15
// directionalLight.shadow.camera.left = - 7
// directionalLight.shadow.camera.top = 7
// directionalLight.shadow.camera.right = 7
// directionalLight.shadow.camera.bottom = - 7
// directionalLight.position.set(5, 5, 5)
// scene.add(directionalLight)

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
// camera.position.set(- 3, 3, 3)
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
// renderer.shadowMap.enabled = true
// renderer.shadowMap.type = THREE.PCFSoftShadowMap
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Animate
//  */
// const clock = new THREE.Clock()
// let oldElapsedTime = 0

// const tick = () =>
// {
//     const elapsedTime = clock.getElapsedTime()
//     const deltaTime = elapsedTime - oldElapsedTime
//     oldElapsedTime = elapsedTime

//     //update physics world
//     world.step(1/60, deltaTime , 3)

//     sphere.position.copy(sphereBody.position)
//     // sphere.position.x = sphereBody.position.x
//     // sphere.position.y = sphereBody.position.y
//     // sphere.position.z = sphereBody.position.z ==> tout ça se trouve en une ligne au dessus 

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
// import * as dat from 'lil-gui';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


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

// // const material = new THREE.MeshStandardMaterial()
// // material.roughness = 0.4


// // const mesh = new THREE.Mesh(
// //     new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
// //     new THREE.MeshBasicMaterial({ color: 0xff0000 })
// // )
// // scene.add(mesh)

// // const plane = new THREE.Mesh(
// //     new THREE.PlaneGeometry(20, 20),
// // )
// // plane.rotation.x = - Math.PI * 0.5
// // plane.position.y = - 0.65

// // scene.add(plane)



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







// import * as THREE from 'three'
// import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import * as dat from 'lil-gui'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


// const canvas = document.querySelector('canvas.webgl')

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }



// // Cursor
// // const cursor = {
// //     x: window.innerWidth,
// //     y: window.innerHeight
// // }
// const cursor = {
//   x: 0,
//   y: 0
// }

// // MainStuff:Setup
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, .1, 1000);

// const renderer = new THREE.WebGLRenderer({
//     canvas : canvas
// });


// const controls = {};
// const player = {
//   height: 1,
//   turnSpeed: .1,
//   speed: .1,
//   jumpHeight: .2,
//   gravity: .01,
//   velocity: 0,
  
//   playerJumps: false
// };

// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// scene.background = new THREE.Color("black");
// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera


//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// // Camera:Setup
// camera.position.set(0, player.height, -5);
// camera.lookAt(new THREE.Vector3(0, player.height, 5));



// // camera.position.set( 1, 1, 1 );
// // camera.lookAt( - 1, 8, - 8 );

// window.addEventListener('mousemove', (event) => {
//    cursor.x = event.clientX / sizes.width - 0.5
//    cursor.y = event.clientY / sizes.height - 0.5

//    console.log(cursor.x, cursor.y)
// })


// const dracoLoader = new DRACOLoader()
// dracoLoader.setDecoderPath('/draco/')

// const gltfLoader = new GLTFLoader()
// gltfLoader.setDRACOLoader(dracoLoader)
// //utiliser dracoloader uniquement quand le modele 3D est très grand, pour quelques KB c'est pas la peine

// gltfLoader.load(
//   '/backrooms-3Dmodel/backrooms_with_baked_textures/scene.gltf',
//   (gltf) => {
//     console.log('success')
//     // scene.add(gltf.scene.children[0])

//     // while (gltf.scene.children.length){
//     //   scene.add(gltf.scene.children[0])
//     // }

//     // const children = [...gltf.scene.children]
//     // for (const child of children){
//     //   scene.add(child)
//     // }

//     scene.add(gltf.scene)

//   },
//   () => {
//     console.log('progress')
//   },
//   () => {
//     console.log('error')
//   }
// )

// // Controls:Listeners
// document.addEventListener('keydown', ({ keyCode }) => { controls[keyCode] = true });
// document.addEventListener('keyup', ({ keyCode }) => { controls[keyCode] = false });

// // ...
// function control() {
//   // Controls:Engine 
//   if(controls[90]){ // w/z
//     camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
//     camera.position.z -= -Math.cos(camera.rotation.y) * player.speed;
//   }
//   if(controls[83]){ // s
//     camera.position.x += Math.sin(camera.rotation.y) * player.speed;
//     camera.position.z += -Math.cos(camera.rotation.y) * player.speed;
//   }
//   if(controls[81]){ // a/q
//     camera.position.x += Math.sin(camera.rotation.y + Math.PI / 2) * player.speed;
//     camera.position.z += -Math.cos(camera.rotation.y + Math.PI / 2) * player.speed;
//   }
//   if(controls[68]){ // d
//     camera.position.x += Math.sin(camera.rotation.y - Math.PI / 2) * player.speed;
//     camera.position.z += -Math.cos(camera.rotation.y - Math.PI / 2) * player.speed;
//   }


//   if(cursor.x){
//     camera.rotation.y = Math.cos(cursor.y * Math.PI * 2) * 3
//   }



//   if(controls[32]) { // space
//     if(player.jumps) return false;
//     player.jumps = true;
//     player.velocity = -player.jumpHeight;
//   }
// }

// function ixMovementUpdate() {
//   player.velocity += player.gravity;
//   camera.position.y -= player.velocity;
  
//   if(camera.position.y < player.height) {
//     camera.position.y = player.height;
//     player.jumps = false;
//   }
// }


// function update() {
//   control();
//   ixMovementUpdate();
// }

// function render() {
//   renderer.render(scene, camera);
//   controls.movementSpeed = 150;
//   controls.lookSpeed = 0.1;
  
// }


// const clock = new THREE.Clock()
// const tick = () =>
// {
//     update();
//     render();
//     const elapsedTime = clock.getElapsedTime()

//     // Update controls

//     //Update Camera
    

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()






























// //IMPORT 3D
// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'lil-gui'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// // import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

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
//  * Models
//  */

// // const dracoLoader = new DRACOLoader()
// // dracoLoader.setDecoderPath('/draco/')

// const gltfLoader = new GLTFLoader()
// // gltfLoader.setDRACOLoader(dracoLoader)
// //utiliser dracoloader uniquement quand le modele 3D est très grand, pour quelques KB c'est pas la peine

// gltfLoader.load(
//   '/backrooms-3Dmodel/infinite_corridor/scene.gltf',
//   (gltf) => {
//     console.log('success')
//     // scene.add(gltf.scene.children[0])

//     // while (gltf.scene.children.length){
//     //   scene.add(gltf.scene.children[0])
//     // }

//     // const children = [...gltf.scene.children]
//     // for (const child of children){
//     //   scene.add(child)
//     // }

//     scene.add(gltf.scene)

//   },
//   () => {
//     console.log('progress')
//   },
//   () => {
//     console.log('error')
//   }
// )
// /**
//  * Floor
//  */

// // const floor = new THREE.Mesh(
// //     new THREE.PlaneGeometry(10, 10),
// //     new THREE.MeshStandardMaterial({
// //         color: '#444444',
// //         metalness: 0,
// //         roughness: 0.5
// //     })
// // )
// // floor.receiveShadow = true
// // floor.rotation.x = - Math.PI * 0.5
// // floor.position.x = -1
// // scene.add(floor)

// /**
//  * Lights
//  */
// const ambientLight = new THREE.AmbientLight(0xffffff, 3)
// scene.add(ambientLight)

// const directionalLight = new THREE.DirectionalLight(0xffffff, 4)
// directionalLight.castShadow = true
// directionalLight.shadow.mapSize.set(1024, 1024)
// directionalLight.shadow.camera.far = 15
// directionalLight.shadow.camera.left = - 7
// directionalLight.shadow.camera.top = 7
// directionalLight.shadow.camera.right = 7
// directionalLight.shadow.camera.bottom = - 7
// directionalLight.position.set(5, 5, 5)
// scene.add(directionalLight)

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
// camera.position.set(2, 2, 2)
// scene.add(camera)

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.target.set(0, 0.75, 0)
// controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.shadowMap.enabled = true
// renderer.shadowMap.type = THREE.PCFSoftShadowMap
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Animate
//  */
// const clock = new THREE.Clock()
// let previousTime = 0

// const tick = () =>
// {
//     const elapsedTime = clock.getElapsedTime()
//     const deltaTime = elapsedTime - previousTime
//     previousTime = elapsedTime

//     // Update controls
//     controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()



















// var intro = document.querySelector('.intro');
// if(intro) {

// 	const hideIntro = () => {
// 		const intro = document.querySelector('.intro');
// 		intro.classList.add("hidden");
// 	  }
	  
// 	document.querySelector('.button').addEventListener('click', hideIntro);
// };



 

// //Button hover begin
// var hoverMouse = function($el) {
// 	$el.each(function() {
// 	  var $self = $(this);
// 	  var hover = false;
// 	  var offsetHoverMax = $self.attr("offset-hover-max") || 0.7;
// 	  var offsetHoverMin = $self.attr("offset-hover-min") || 0.5;
  
// 	  var attachEventsListener = function() {
// 		$(window).on("mousemove", function(e) {
// 		  //
// 		  var hoverArea = hover ? offsetHoverMax : offsetHoverMin;
  
// 		  // cursor
// 		  var cursor = {x: e.clientX, y: e.clientY - $(window).scrollTop()
// 		  };
  
// 		  // size
// 		  var width = $self.outerWidth();
// 		  var height = $self.outerHeight();
  
// 		  // position
// 		  var offset = $self.offset();
// 		  var elPos = { x: offset.left + width / 2, y: offset.top + height / 2
// 		  };
  
// 		  // comparaison
// 		  var x = cursor.x - elPos.x;
// 		  var y = cursor.y - elPos.y;
  
// 		  // dist
// 		  var dist = Math.sqrt(x * x + y * y);
  
// 		  // mutex hover
// 		  var mutHover = false;
  
// 		  // anim
// 		  if (dist < width * hoverArea) {
// 			mutHover = true;
// 			if (!hover) {
// 			  hover = true;
// 			}
// 			onHover(x, y);
// 		  }
  
// 		  // reset
// 		  if (!mutHover && hover) {
// 			onLeave();
// 			hover = false;
// 		  }
// 		});
// 	  };
  
// 	  var onHover = function(x, y) {
// 		TweenMax.to($self, 0.4, { x: x * 0.2, y: y * 0.2, ease: Power2.easeOut
// 		});
// 	  };
// 	  var onLeave = function() {
// 		TweenMax.to($self, 1, { x: 0, y: 0, scale: 1, rotation: 0, ease: Back.easeOut.config(1.2, 0.4)
// 		});
// 	  };
  
// 	  attachEventsListener();
// 	});
//   };
  
//   hoverMouse($('button'));















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
//  * Objects
//  */
// const object1 = new THREE.Mesh(
//     new THREE.SphereGeometry(0.5, 16, 16),
//     new THREE.MeshBasicMaterial({ color: '#ff0000' })
// )
// object1.position.x = - 2

// const object2 = new THREE.Mesh(
//     new THREE.SphereGeometry(0.5, 16, 16),
//     new THREE.MeshBasicMaterial({ color: '#ff0000' })
// )

// const object3 = new THREE.Mesh(
//     new THREE.SphereGeometry(0.5, 16, 16),
//     new THREE.MeshBasicMaterial({ color: '#ff0000' })
// )
// object3.position.x = 2

// scene.add(object1, object2, object3)


// /**
//  * raycaster
//  */

// const raycaster = new THREE.Raycaster()

// // const rayOrigin = new THREE.Vector3(-3, 0, 0)
// // const rayDirection = new THREE.Vector3(1, 0, 0)
// // rayDirection.normalize() //convertir la direction en unité

// // raycaster.set(rayOrigin, rayDirection)

// // const intersect = raycaster.intersectObject(object2) //ray pour un objet

// // const intersects = raycaster.intersectObjects([object1, object2, object3])//pour plusieurs


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

// /**
//  * Mousemove
//  */
// const mouse = new THREE.Vector2()

// window.addEventListener('mousemove', (event) => {

//   mouse.x = event.clientX / sizes.width * 2 - 1
//   mouse.y = event.clientY / sizes.height * 2 + 1

// })

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

// // let currentIntersect = null

// const tick = () =>
// {
//     const elapsedTime = clock.getElapsedTime()

//     // //cast a ray
//     raycaster.setFromCamera(mouse, camera)
//     // const rayOrigin = new THREE.Vector3(-3, 0, 0)
//     // const rayDirection = new THREE.Vector3(1, 0, 0)
//     // rayDirection.normalize()

//     // raycaster.set(rayOrigin, rayDirection)

//     const objectsToTest = [object1, object2, object3]
//     const intersects = raycaster.intersectObjects(objectsToTest)

//     for (const object of objectsToTest){
//       object.material.color.set('#ff0000')
//     }
//     for (const intersect of intersects){
//       intersect.object.material.color.set('#0000ff')
//     }

//     //animate objects
//     object1.position.y = Math.sin(elapsedTime * 0.3) * 1.5
//     object2.position.y = Math.sin(elapsedTime * 0.8) * 1.5
//     object3.position.y = Math.sin(elapsedTime * 1.4) * 1.5

//     // Update controls
//     controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()



















// import * as THREE from 'three';

// 			// import Stats from 'three/addons/libs/stats.module.js';

// 			import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// 			// import { Octree } from 'three/addons/math/Octree.js';
// 			// import { OctreeHelper } from 'three/addons/helpers/OctreeHelper.js';

// 			// import { Capsule } from 'three/addons/math/Capsule.js';

// 			import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

// 			const clock = new THREE.Clock();

// 			const scene = new THREE.Scene();
// 			scene.background = new THREE.Color( 0x88ccee );
// 			scene.fog = new THREE.Fog( 0x88ccee, 0, 50 );

// 			const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );

// 			const fillLight1 = new THREE.HemisphereLight( 0x4488bb, 0x002244, 0.5 );
// 			fillLight1.position.set( 2, 1, 1 );
// 			scene.add( fillLight1 );

// 			const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
// 			directionalLight.position.set( - 5, 25, - 1 );
// 			directionalLight.castShadow = true;
// 			directionalLight.shadow.camera.near = 0.01;
// 			directionalLight.shadow.camera.far = 500;
// 			directionalLight.shadow.camera.right = 30;
// 			directionalLight.shadow.camera.left = - 30;
// 			directionalLight.shadow.camera.top	= 30;
// 			directionalLight.shadow.camera.bottom = - 30;
// 			directionalLight.shadow.mapSize.width = 1024;
// 			directionalLight.shadow.mapSize.height = 1024;
// 			directionalLight.shadow.radius = 4;
// 			directionalLight.shadow.bias = - 0.00006;
// 			scene.add( directionalLight );

// 			const container = document.getElementById( 'container' );

// 			const renderer = new THREE.WebGLRenderer( { antialias: true } );
// 			renderer.setPixelRatio( window.devicePixelRatio );
// 			renderer.setSize( window.innerWidth, window.innerHeight );
// 			renderer.shadowMap.enabled = true;
// 			renderer.shadowMap.type = THREE.VSMShadowMap;
// 			renderer.outputEncoding = THREE.sRGBEncoding;
// 			renderer.toneMapping = THREE.ACESFilmicToneMapping;


// 			const GRAVITY = 30;

			

			


// 			const playerVelocity = new THREE.Vector3();
// 			const playerDirection = new THREE.Vector3();

// 			let playerOnFloor = false;
// 			let mouseTime = 0;

// 			const keyStates = {};

// 			const vector1 = new THREE.Vector3();
// 			const vector2 = new THREE.Vector3();
// 			const vector3 = new THREE.Vector3();

// 			document.addEventListener( 'keydown', ( event ) => {

// 				keyStates[ event.code ] = true;

// 			} );

// 			document.addEventListener( 'keyup', ( event ) => {

// 				keyStates[ event.code ] = false;

// 			} );



// 			window.addEventListener( 'resize', onWindowResize );

// 			function onWindowResize() {

// 				camera.aspect = window.innerWidth / window.innerHeight;
// 				camera.updateProjectionMatrix();

// 				renderer.setSize( window.innerWidth, window.innerHeight );

// 			}


// 			function playerCollisions() {


// 				playerOnFloor = false;

// 				if ( result ) {

// 					playerOnFloor = result.normal.y > 0;

// 					if ( ! playerOnFloor ) {

// 						playerVelocity.addScaledVector( result.normal, - result.normal.dot( playerVelocity ) );

// 					}

// 					playerCollider.translate( result.normal.multiplyScalar( result.depth ) );

// 				}

// 			}

// 			function updatePlayer( deltaTime ) {

// 				let damping = Math.exp( - 4 * deltaTime ) - 1;

// 				if ( ! playerOnFloor ) {

// 					playerVelocity.y -= GRAVITY * deltaTime;

// 					// small air resistance
// 					damping *= 0.1;

// 				}

// 				playerVelocity.addScaledVector( playerVelocity, damping );

// 				const deltaPosition = playerVelocity.clone().multiplyScalar( deltaTime );
// 				playerCollider.translate( deltaPosition );

// 				playerCollisions();

// 				camera.position.copy( playerCollider.end );

// 			}




// 			function getForwardVector() {

// 				camera.getWorldDirection( playerDirection );
// 				playerDirection.y = 0;
// 				playerDirection.normalize();

// 				return playerDirection;

// 			}

// 			function getSideVector() {

// 				camera.getWorldDirection( playerDirection );
// 				playerDirection.y = 0;
// 				playerDirection.normalize();
// 				playerDirection.cross( camera.up );

// 				return playerDirection;

// 			}

// 			function controls( deltaTime ) {

// 				// gives a bit of air control
// 				const speedDelta = deltaTime * ( playerOnFloor ? 25 : 8 );

// 				if ( keyStates[ 'KeyW' ] ) {

// 					playerVelocity.add( getForwardVector().multiplyScalar( speedDelta ) );

// 				}

// 				if ( keyStates[ 'KeyS' ] ) {

// 					playerVelocity.add( getForwardVector().multiplyScalar( - speedDelta ) );

// 				}

// 				if ( keyStates[ 'KeyA' ] ) {

// 					playerVelocity.add( getSideVector().multiplyScalar( - speedDelta ) );

// 				}

// 				if ( keyStates[ 'KeyD' ] ) {

// 					playerVelocity.add( getSideVector().multiplyScalar( speedDelta ) );

// 				}

// 				if ( playerOnFloor ) {

// 					if ( keyStates[ 'Space' ] ) {

// 						playerVelocity.y = 15;

// 					}

// 				}

// 			}

//         const gltfLoader = new GLTFLoader()
//       // gltfLoader.setDRACOLoader(dracoLoader)

//         gltfLoader.load(
//           '/backrooms-3Dmodel/backrooms_with_baked_textures/scene.gltf',
//           (gltf) => {
//             console.log('success')
//             scene.add(gltf.scene)
//           },
//           () => {
//             console.log('progress')
//           },
//           () => {
//             console.log('error')
//           }
//         )



// 			function animate() {

// 				const deltaTime = Math.min( 0.05, clock.getDelta() ) / STEPS_PER_FRAME;

// 				// we look for collisions in substeps to mitigate the risk of
// 				// an object traversing another too quickly for detection.

// 				for ( let i = 0; i < STEPS_PER_FRAME; i ++ ) {

// 					controls( deltaTime );

// 					updatePlayer( deltaTime );

// 					updateSpheres( deltaTime );

// 					teleportPlayerIfOob();

// 				}

// 				renderer.render( scene, camera );


// 				requestAnimationFrame( animate );

// 			}









// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


// const container = document.getElementById('home');
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const scene = new THREE.Scene();
// const renderer = new THREE.WebGLRenderer();

// // Charger le modèle 3D
// const loader = new GLTFLoader();
// loader.load('./backrooms-3Dmodel/backrooms_with_baked_textures/scene.gltf', (gltf) => {
//   // Ajouter le modèle 3D à la scène
//   scene.add(gltf.scene);

//   // Calculer la boîte englobante (bounding box) du modèle 3D
//   const bbox = new THREE.Box3().setFromObject(gltf.scene);

//   // Centrer la caméra sur la boîte englobante
//   const center = bbox.getCenter(new THREE.Vector3());
//   camera.position.set(center.x, center.y, bbox.max.z + 5);

//   // Pointer la caméra vers le centre de la boîte englobante
//   camera.lookAt(center);

//   // Ajouter une lumière à la scène
//   const light = new THREE.PointLight(0xffffff, 1, 100);
//   light.position.set(0, 0, 10);
//   scene.add(light);
// });

// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }

// animate();