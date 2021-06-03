import * as THREE from "three"


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
  offsetY = 0

  constructor($doc, $images) {
    this.width = $doc.clientWidth
    this.height = $doc.clientHeight

    this.initRenderer()
    this.initScene()
    this.initCamera()
    this.initBoard()
    this.initImages($images)
    this.initClock()

    $doc.appendChild(this.renderer.domElement)
    this.initEvents()
  }

  initEvents() {
    window.addEventListener('scroll', this)
  }

  handleEvent(event) {
    switch(event.type) {
      case('scroll'):
        this.offsetY = window.pageYOffset;
        break
      default:
    }
  }

  removeEvents() {
    window.removeEventListener('scroll', this)
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true,
    alpha: true })
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

  initBoard() {
    this.board = new THREE.Group()
    const geometry = new THREE.BoxGeometry(20, 20, 20);
    const material = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: true} );
    const cube = new THREE.Mesh(geometry, material);
    this.board.add(cube)
    this.scene.add(this.board)
  }

  initImages($images) {
    $images.forEach($image => {
      new Image({
        scene: this.scene,
        width: this.width,
        height: this.height,
        $image
      })
    })
  }

  initClock() {
    this.clock = new THREE.Clock();
  }

  render() {
    this.renderer.render(this.scene, this.camera)
    const delta = this.clock.getDelta()

    this.scene.position.y = this.offsetY

    window.requestAnimationFrame(this.render.bind(this))
  }
}

class Image {
  constructor({ scene, width, height, $image }) {
    this.$image = $image
    //this.$image.style.opacity = 0
    this.sizes = new THREE.Vector2(0, 0)
    this.offset = new THREE.Vector2(0, 0)

    this.scene = scene
    this.width = width
    this.height = height

    this.initLoader()
  }

  initLoader() {
    this.loader = new THREE.TextureLoader()
    this.image = this.loader.load(this.$image.src, () => {
      this.initSize()
      this.createMesh()
    })
  }

  initSize() {
    const { width, height, left, top } = this.$image.getBoundingClientRect()
    this.sizes.set(width, height)
    console.log(top)
    this.offset.set(
        left - window.innerWidth / 2 + width / 2,
        -top + window.innerHeight / 2 - height / 2
    )
  }

  createMesh() {
    const geometry = new THREE.PlaneBufferGeometry(1, 1, 1, 1);
    const material = new THREE.MeshBasicMaterial( {map: this.image} )
    this.mesh = new THREE.Mesh(geometry, material)
    this.mesh.position.set(this.offset.x, this.offset.y, 0)
    this.mesh.scale.set(this.sizes.x, this.sizes.y, 1)
    this.scene.add(this.mesh)
  }
}
