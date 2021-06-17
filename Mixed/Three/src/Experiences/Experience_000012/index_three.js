import * as THREE from "three"
import {Text} from 'troika-three-text'

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
    this.initText();
    this.initClock()

    doc.appendChild(this.renderer.domElement)
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(this.width, this.height)
    this.renderer.setClearColor(0x000000, 1)
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

  initClock() {
    this.clock = new THREE.Clock();
  }

  initText() {
    const myText = new Text()
    this.scene.add(myText);
    myText.text = 'Hello world!'
    myText.fontSize = 10
    myText.rotation.y = Math.PI
    myText.color = 0x9966FF;
    myText.sync()
  }

  render() {
    this.renderer.render(this.scene, this.camera)

    window.requestAnimationFrame(this.render.bind(this))
  }
}
