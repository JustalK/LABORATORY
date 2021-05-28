import * as THREE from "three"
import { TweenMax as TM } from 'gsap'
import fragmentShader from './shaders/fragmentShader.glsl'
import vertexShader from './shaders/vertexShader.glsl'

export default class Animation {
  width = null
  height = null
  fov = 70
  perspective = 800
  renderer = null
  camera = null
  scene = null
  clock = null
  board = null

  constructor(doc) {
    this.width = doc.getBoundingClientRect().width
    this.height = doc.getBoundingClientRect().height

    this.initScene()
    this.initRenderer(doc)
    this.initCamera()
    this.initLight()
    this.initClock()
    this.figure = new Figure(this.scene, this.width, this.height);
  }

  initRenderer(doc) {
    this.renderer = new THREE.WebGLRenderer({
      canvas: doc,
      alpha: true
    })
    this.renderer.setSize(this.width, this.height)
  }

  initScene() {
    this.scene = new THREE.Scene()
  }

  initCamera() {
    const fovModified = (180 * (2 * Math.atan(this.height / 2 / this.perspective))) / Math.PI
    this.camera = new THREE.PerspectiveCamera(fovModified, this.width / this.height, 1, 1000)
    this.camera.position.set(0, 0, this.perspective)
  }

  initLight() {
    const ambientlight = new THREE.AmbientLight(0xffffff, 2)
    this.scene.add(ambientlight)
  }

  initClock() {
    this.clock = new THREE.Clock();
  }

  render() {
    if (this.renderer === undefined) return;
    window.requestAnimationFrame(this.render.bind(this))

    this.figure.update();
    this.renderer.render(this.scene, this.camera)
  }
}

class Figure {
  fragmentShader = null
  vertexShader = null
  uniforms = null
  width = null
  height = null

  constructor(scene, width, height) {
      this.$image = document.querySelector('.tile__image')
      this.scene = scene
      this.width = width
      this.height = height
      this.loader = new THREE.TextureLoader()

      this.image = this.loader.load(this.$image.src)
      this.image = this.loader.load(this.$image.src, () => {
        this.start()
      })
      this.hover = this.loader.load(this.$image.dataset.hover)
      this.$image.style.opacity = 0
      this.sizes = new THREE.Vector2(0, 0)
      this.offset = new THREE.Vector2(0, 0)

      this.mouse = new THREE.Vector2(0, 0)
      window.addEventListener('mousemove', ev => {
          this.onMouseMove(ev)
      })
  }

  start() {
    this.getSizes()
    this.createMesh()
    this.update()
  }

  getSizes() {
      const { width, height, left, top } = this.$image.getBoundingClientRect()
      this.sizes.set(width, height)
      this.offset.set(
          left - window.innerWidth / 2 + width / 2,
          -top + window.innerHeight / 2 - height / 2
      )
  }

  createMesh() {
      this.uniforms = {
          u_alpha: { value: 1 },
          u_progressHover: { value: 1 },
          u_progressClick: { value: 1 },
          u_ratio: { value: 1 },
          u_hoverratio: { value: 1 },
          u_image: { type: 't', value: this.image },
          u_imagehover: { type: 't', value: this.hover },
          u_mouse: { value: this.mouse },
          u_time: { value: 0 },
          u_res: {
              value: new THREE.Vector2(window.innerWidth, window.innerHeight)
          }
      }
      this.geometry = new THREE.PlaneBufferGeometry(1, 1, 1, 1)
      this.material = new THREE.ShaderMaterial({
          uniforms: this.uniforms,
          fragmentShader,
          vertexShader,
          defines: {
              PR: window.devicePixelRatio.toFixed(1)
          }
      })

      this.mesh = new THREE.Mesh(this.geometry, this.material)

      this.mesh.position.set(this.offset.x, this.offset.y, 0)
      this.mesh.scale.set(this.sizes.x, this.sizes.y, 1)

      this.scene.add(this.mesh)
  }

  onMouseMove(event) {
      TM.to(this.mouse, 0.5, {
          x: event.clientX,
          y: event.clientY
      })
  }

  update() {
    if (this.uniforms) {
      this.uniforms.u_time.value += 0.01
    }
  }
}
