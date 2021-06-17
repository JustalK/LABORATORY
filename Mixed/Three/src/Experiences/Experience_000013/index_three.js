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
  fragmentShader = null
  vertexShader = null
  uniforms = null

  constructor(doc) {
    this.width = doc.clientWidth
    this.height = doc.clientHeight

    this.initRenderer()
    this.initScene()
    this.initCamera()
    this.initShader()
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

  initShader() {
    this.fragmentShader = `
      varying vec2 v_uv;
      uniform float u_time;
      void main() {
      	gl_FragColor = vec4(cos(5.0 * u_time), cos(3.14 + 5.0 * u_time), 0.0, 1.0);
      }
    `

    this.vertexShader = `
      varying vec2 v_uv;
      void main() {
          v_uv = uv;

          gl_Position = projectionMatrix * modelViewMatrix *
      		vec4(position, 1.0);
      }
    `
  }

  initText() {
    const myText = new Text()
    this.scene.add(myText);
    this.uniforms = {
        u_time: { value: 0 }
    }
    myText.text = 'Hello world!'
    myText.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      fragmentShader: this.fragmentShader,
      vertexShader: this.vertexShader
    })
    myText.fontSize = 10
    myText.rotation.y = Math.PI
    myText.color = 0x9966FF;
    myText.textAlign = 'center';
    myText.sync()
  }

  render() {
    this.renderer.render(this.scene, this.camera)
    if (this.uniforms) {
      this.uniforms.u_time.value += 0.01
    }

    window.requestAnimationFrame(this.render.bind(this))
  }
}
