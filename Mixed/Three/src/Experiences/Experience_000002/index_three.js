import * as THREE from "three"
import { BloomEffect, EffectComposer, EffectPass, RenderPass } from "postprocessing";

const constants = {}

const initConstants = doc => {
  constants.width = doc.clientWidth
  constants.height = doc.clientHeight
  constants.camera = null
  constants.fov = 70
  constants.clock = null
  constants.scene = null
  constants.board = null
  constants.composer = null
}

export const createAnimation = doc => {
  initConstants(doc)
  initClock()
  createScene()
  createBoard()
  createLight()

  createCamera(-50)
  const renderer = createRenderer()
  createComposer(renderer)
  doc.appendChild(renderer.domElement)
  render(renderer)
}

/**
* Create the renderer for the three js animation
**/
const createRenderer = () => {
  const renderer = new THREE.WebGLRenderer({
    powerPreference: "high-performance",
    antialias: false,
    stencil: false,
    depth: false
  })
  renderer.setSize(constants.width, constants.height)
  renderer.setClearColor(0x000000, 1)
  return renderer
}

/**
* Start the clock
**/
const initClock = () => {
  constants.clock = new THREE.Clock();
}

/**
* Create the scene for the three js animation
**/
const createScene = () => {
  constants.scene = new THREE.Scene()
}

const createBoard = () => {
  const board = new THREE.Group()
  const geometry = new THREE.BoxGeometry(20, 20, 20);
  const material = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
  const cube = new THREE.Mesh(geometry, material);
  board.add(cube)
  constants.scene.add(board)
  constants.board = board
}

const createLight = () => {
  const light = new THREE.DirectionalLight(0xFFFFFF, 2);
  light.position.set(0, 0, -20);
  constants.scene.add(light);
}

/**
* Create a camera for the three js animation
**/
const createCamera = (positionZ) => {
  const camera = new THREE.PerspectiveCamera(constants.fov, constants.width / constants.height, 1, 1000)
  camera.position.z = positionZ
  camera.position.y = 0
  camera.lookAt(0, 0, 0)
  constants.scene.add(camera)
  constants.camera = camera
}

const createComposer = renderer => {
  constants.composer = new EffectComposer(renderer);
  constants.composer.addPass(new RenderPass(constants.scene, constants.camera));
  const bloomOptions = {
    luminanceThreshold: 0.4,
    luminanceSmoothing: 0.1,
    height: 480
  };
  constants.composer.addPass(new EffectPass(constants.camera, new BloomEffect(bloomOptions)));
}

/**
* Create the render
**/
const render = (renderer) => {
  renderer.render(constants.scene, constants.camera)
  const delta = constants.clock.getDelta();

  constants.board.children[0].rotation.x += delta;
  constants.board.children[0].rotation.y += delta;

  constants.composer.render(delta);

  window.requestAnimationFrame(function () {
    render(renderer, constants.scene, constants.camera)
  })
}
