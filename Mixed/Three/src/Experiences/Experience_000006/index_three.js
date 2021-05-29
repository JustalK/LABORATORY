import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default class Animation {
  width = null
  height = null
  fov = 70
  renderer = null
  camera = null
  scene = null
  clock = null
  board = null

  constructor(doc) {
    this.width = doc.clientWidth
    this.height = doc.clientHeight

    this.initRenderer()
    this.initScene()
    this.initCamera()
    this.initBoard()
    this.initClock()
    this.initLight()

    doc.appendChild(this.renderer.domElement)
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(this.width, this.height)
    this.renderer.setClearColor(0xe2e2e2, 1)
  }

  initScene() {
    this.scene = new THREE.Scene()
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(this.fov, this.width / this.height, 1, 1000)
    this.camera.position.z = -50
    this.camera.position.y = 0
    this.camera.lookAt(0, 0, 0)
    this.scene.add(this.camera)
  }

  initBoard() {
    this.board = new THREE.Group()
    const loader = new GLTFLoader();
    loader.load( './spaceship.glb', gltf => {
      const spaceship = this.setupModel(gltf)
      spaceship.position.set(0, -5, -30);
      spaceship.rotation.set(Math.PI / 2, 0, 0);
      this.board.add(spaceship)
    }, undefined, function ( error ) {
      console.error( error );
    });
    this.scene.add(this.board)
  }

  setupModel(data) {
    const model = data.scene.children[0];

    return model;
  }

  initClock() {
    this.clock = new THREE.Clock();
  }

  initLight() {
    const light = new THREE.DirectionalLight(0xFFFFFF, 2);
    light.position.set(0, 100, -100);
    this.scene.add(light);
  }

  render() {
    this.renderer.render(this.scene, this.camera)

    window.requestAnimationFrame(this.render.bind(this))
  }
}
