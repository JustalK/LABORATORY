import * as THREE from "three"
import { TweenMax as TM } from 'gsap'

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
    this.figure = new Figure(this.scene)
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
    this.renderer.render(this.scene, this.camera)

    window.requestAnimationFrame(this.render.bind(this))
  }
}

 class Figure {
  constructor(scene) {
      this.$image = document.querySelector('.tile__image')
      this.scene = scene

      this.loader = new THREE.TextureLoader()

      this.image = this.loader.load(this.$image.src)
      this.hoverImage = this.loader.load(this.$image.dataset.hover)
      this.$image.style.opacity = 0
      this.sizes = new THREE.Vector2(0, 0)
      this.offset = new THREE.Vector2(0, 0)

      this.getSizes()

      this.createMesh()

      this.mouse = new THREE.Vector2(0, 0)
      window.addEventListener('mousemove', ev => {
          this.onMouseMove(ev)
      })
  }

    getSizes() {
        const { width, height, top, left } = this.$image.getBoundingClientRect()

        this.sizes.set(width, height)
        this.offset.set(
            left - (window.innerWidth + 201) / 2 + width / 2,
            -top + window.innerHeight / 2 - height / 2
        )
    }

    createMesh() {
        this.geometry = new THREE.PlaneBufferGeometry(1, 1, 1, 1)
        this.material = new THREE.MeshBasicMaterial({
            map: this.image
        })

        this.mesh = new THREE.Mesh(this.geometry, this.material)

        this.mesh.position.set(this.offset.x, this.offset.y, 0)
        this.mesh.scale.set(this.sizes.x, this.sizes.y, 1)

        this.scene.add(this.mesh)
    }

    onMouseMove(event) {
        TM.to(this.mouse, 0.5, {
            x: (event.clientX / window.innerWidth) * 2 - 1,
            y: -(event.clientY / window.innerHeight) * 2 + 1
        })

        TM.to(this.mesh.rotation, 0.5, {
            x: -this.mouse.y * 0.3,
            y: this.mouse.x * (Math.PI / 6)
        })
    }
}
