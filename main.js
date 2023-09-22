import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';



const scene = new THREE.Scene();


// Importing Things


const textureLoader = new THREE.TextureLoader();
const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight,1,1000);
// camera.position.z = 3
// camera.position.set(0, 0, 0);
camera.position.set(-16, 11, 74);
scene.add(camera)

// Sitting the camera position in the windows



const loader = new FontLoader();

loader.load('fayyana.regular1695364536.json', function (font) {
  const geometry = new TextGeometry('HELLO WORLD', {
    font: font,
    size: 30,
    height: 5,
    // curveSegments: 2,
    // bevelEnabled: true,
    // bevelThickness: 10,
    // bevelSize: 8,
    // bevelOffset: 0,
    // bevelSegments: 15
  });

  const mesh = new THREE.Mesh(geometry, [
    new THREE.MeshBasicMaterial({ color: 0x484848 }),
    new THREE.MeshBasicMaterial({ color: 0x080808 })
  ]);

  mesh.position.x = -50;
  mesh.position.y = -100;
  mesh.position.z = -200;

  mesh.rotation.x -= 0.301
  mesh.rotation.y -= 0.301

  scene.add(mesh);
});


loader.load('optimer_bold.typeface.json', function (font) {
  const geometry = new TextGeometry('HTML', {
    font: font,
    size: 10,
    height: 3,
  });

  const mesh = new THREE.Mesh(geometry, [
    new THREE.MeshBasicMaterial({ color: 0xCD6402 }),
    new THREE.MeshBasicMaterial({ color: 0x080808 })
  ]);

  mesh.position.x = 30;
  mesh.position.y = 30;
  mesh.position.z = -100;

  scene.add(mesh);
});





loader.load('gentilis_bold.typeface.json', function (font) {
  const geometry = new TextGeometry('</>', {
    font: font,
    size: 10,
    height: 3,
  });

  const mesh = new THREE.Mesh(geometry, [
    new THREE.MeshBasicMaterial({ color: 0x00C61F }),
    new THREE.MeshBasicMaterial({ color: 0x080808 })
  ]);

  mesh.position.x = 0;
  mesh.position.y = 0;
  mesh.position.z = -100;

  scene.add(mesh);
});





loader.load('gentilis_bold.typeface.json', function (font) {
  const geometry = new TextGeometry('CSS', {
    font: font,
    size: 10,
    height: 3,
  });

  const mesh = new THREE.Mesh(geometry, [
    new THREE.MeshBasicMaterial({ color: 0x02BECD }),
    new THREE.MeshBasicMaterial({ color: 0x080808 })
  ]);

  mesh.position.x = -40;
  mesh.position.y = 0;
  mesh.position.z = -100;

  scene.add(mesh);
});





loader.load('gentilis_bold.typeface.json', function (font) {
  const geometry = new TextGeometry('JavaScript', {
    font: font,
    size: 10,
    height: 3,
  });

  const mesh = new THREE.Mesh(geometry, [
    new THREE.MeshBasicMaterial({ color: 0xFBFF00 }),
    new THREE.MeshBasicMaterial({ color: 0x080808 })
  ]);

  mesh.position.x = -160;
  mesh.position.y = -60;
  mesh.position.z = -100;

  scene.add(mesh);
});





loader.load('gentilis_bold.typeface.json', function (font) {
  const geometry = new TextGeometry('React.Js', {
    font: font,
    size: 10,
    height: 3,
  });

  const mesh = new THREE.Mesh(geometry, [
    new THREE.MeshBasicMaterial({ color: 0x00C5FF }),
    new THREE.MeshBasicMaterial({ color: 0x080808 })
  ]);

  mesh.position.x = 160;
  mesh.position.y = 60;
  mesh.position.z = -100;

  mesh.rotation.x -= 0.301
  mesh.rotation.y -= 0.701

  scene.add(mesh);
});






loader.load('gentilis_bold.typeface.json', function (font) {
  const geometry = new TextGeometry('Three.Js', {
    font: font,
    size: 10,
    height: 3,
  });

  const mesh = new THREE.Mesh(geometry, [
    new THREE.MeshBasicMaterial({ color: 0x00C5FF }),
    new THREE.MeshBasicMaterial({ color: 0x080808 })
  ]);

  mesh.position.x = -120;
  mesh.position.y = 30;
  mesh.position.z = -100;


  scene.add(mesh);
});





loader.load('gentilis_bold.typeface.json', function (font) {
  const geometry = new TextGeometry('BootStrap', {
    font: font,
    size: 10,
    height: 3,
  });

  const mesh = new THREE.Mesh(geometry, [
    new THREE.MeshBasicMaterial({ color: 0xD53AFF }),
    new THREE.MeshBasicMaterial({ color: 0x080808 })
  ]);

  mesh.position.x = 120;
  mesh.position.y = -100;
  mesh.position.z = -70;

  mesh.rotation.x -= 0.301
  mesh.rotation.y -= 0.701

  scene.add(mesh);
});


loader.load('gentilis_bold.typeface.json', function (font) {
  const geometry = new TextGeometry('PHP', {
    font: font,
    size: 20,
    height: 6,
  });

  const mesh = new THREE.Mesh(geometry, [
    new THREE.MeshBasicMaterial({ color: 0x3A40FF }),
    new THREE.MeshBasicMaterial({ color: 0x080808 })
  ]);

  mesh.position.x = 250;
  mesh.position.y = -250;
  mesh.position.z = -20;

  mesh.rotation.x -= 0.701
  mesh.rotation.y -= 0.501
  
  scene.add(mesh);
});

loader.load('gentilis_bold.typeface.json', function (font) {
  const geometry = new TextGeometry('GITHUB', {
    font: font,
    size: 10,
    height: 3,
  });

  const mesh = new THREE.Mesh(geometry, [
    new THREE.MeshBasicMaterial({ color: 0x000000 }),
    new THREE.MeshBasicMaterial({ color: 0x080808 })
  ]);

  mesh.position.x = -100;
  mesh.position.y = -100;
  mesh.position.z = -20;

  mesh.rotation.x -= 1.201
  // mesh.rotation.y -= 0.501
  
  scene.add(mesh);
});


loader.load('gentilis_bold.typeface.json', function (font) {
  const geometry = new TextGeometry('MongoDB', {
    font: font,
    size: 10,
    height: 3,
  });

  const mesh = new THREE.Mesh(geometry, [
    new THREE.MeshBasicMaterial({ color: 0x09CD00 }),
    new THREE.MeshBasicMaterial({ color: 0x080808 })
  ]);

  mesh.position.x = -200;
  mesh.position.y = 0;
  mesh.position.z = -70;

  // mesh.rotation.x -= 1.201
  mesh.rotation.y = 0.501
  
  scene.add(mesh);
});

loader.load('gentilis_bold.typeface.json', function (font) {
  const geometry = new TextGeometry('MySql', {
    font: font,
    size: 10,
    height: 3,
  });

  const mesh = new THREE.Mesh(geometry, [
    new THREE.MeshBasicMaterial({ color: 0x0073CD }),
    new THREE.MeshBasicMaterial({ color: 0x080808 })
  ]);

  mesh.position.x = -290;
  mesh.position.y = -100;
  mesh.position.z = -70;

  // mesh.rotation.x -= 1.201
  mesh.rotation.y = 0.501
  
  scene.add(mesh);
});


loader.load('gentilis_bold.typeface.json', function (font) {
  const geometry = new TextGeometry('jQuery', {
    font: font,
    size: 20,
    height: 3,
  });

  const mesh = new THREE.Mesh(geometry, [
    new THREE.MeshBasicMaterial({ color: 0x9FD5FF }),
    new THREE.MeshBasicMaterial({ color: 0x080808 })
  ]);

  mesh.position.x = -390;
  mesh.position.y = 100;
  mesh.position.z = -50;

  // mesh.rotation.x -= 1.201
  mesh.rotation.y = 0.901
  
  scene.add(mesh);
});



loader.load('./fonts/gentilis_bold.typeface.json', function (font) {
  const geometry = new TextGeometry('Node.js', {
    font: font,
    size: 20,
    height: 3,
  });

  const mesh = new THREE.Mesh(geometry, [
    new THREE.MeshBasicMaterial({ color: 0xE4FF03 }),
    new THREE.MeshBasicMaterial({ color: 0x080808 })
  ]);

  mesh.position.x = 390;
  mesh.position.y = 30;
  mesh.position.z = -50;

  // mesh.rotation.x -= 1.201
  mesh.rotation.y -= 0.901
  
  scene.add(mesh);
});


loader.load('./fonts/gentilis_bold.typeface.json', function (font) {
  const geometry = new TextGeometry('MERN APP', {
    font: font,
    size: 30,
    height: 3,
  });

  const mesh = new THREE.Mesh(geometry, [
    new THREE.MeshBasicMaterial({ color: 0xA9EEFF }),
    new THREE.MeshBasicMaterial({ color: 0x080808 })
  ]);

  mesh.position.x = 790;
  mesh.position.y = -230;
  mesh.position.z = -100;

  // mesh.rotation.x -= 1.201
  mesh.rotation.y -= 0.901
  
  scene.add(mesh);
});









const particlesGeometry = new THREE.BufferGeometry;
const particlesCnt = 2000;
const posArray = new Float32Array(particlesCnt * 3);

for (let i = 0; i < particlesCnt * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 400
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
const partMeterial = new THREE.PointsMaterial({ size: 0.105 })
const particlesMesh = new THREE.Points(particlesGeometry, partMeterial)
scene.add(particlesMesh)










const sphereGeometry3 = new THREE.BoxGeometry(5, 5, 5);
const sphereMaterial3 = new THREE.MeshBasicMaterial({ color: 0x46FF00 ,wireframe:true });
const sphere3 = new THREE.Mesh(sphereGeometry3, sphereMaterial3);
scene.add(sphere3);
sphere3.position.set(35, 0, -10)



const sphereGeometry4 = new THREE.SphereGeometry(30, 25, 16);
const sphereMaterial4 = new THREE.PointsMaterial({ color: 'white' });
const sphere4 = new THREE.Points(sphereGeometry4, sphereMaterial4);
scene.add(sphere4);
sphere4.position.set(225, 0, 200)

const sphereGeometry5 = new THREE.SphereGeometry(30, 25, 16);
const sphereMaterial5 = new THREE.PointsMaterial({ color: 'white' });
const sphere5 = new THREE.Points(sphereGeometry5, sphereMaterial5);
scene.add(sphere5);
sphere5.position.set(-225, 0, 200)






// Adding Geometry shapes in the scene


const renderer = new THREE.WebGLRenderer({ alpha: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.getElementById('app').append(renderer.domElement)
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();




// This do the were have to add canvas



const tick = () => {
  window.requestAnimationFrame(tick)

  particlesMesh.rotation.y += 0.001
  particlesMesh.rotation.x += 0.001

  // cube.rotation.y += 0.011
  // cube.rotation.x += 0.011

  sphere3.rotation.y += 0.0051
  sphere3.rotation.x += 0.0051

  sphere4.rotation.y += 0.0051
  sphere4.rotation.x += 0.0051
  sphere5.rotation.y += 0.0051
  sphere5.rotation.x += 0.0051


  // console.log(camera.position);
  renderer.render(scene, camera)
}
tick()

// That renders