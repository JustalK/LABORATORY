import * as THREE from "three"


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

  initBoard() {
    this.board = new THREE.Group()
    const geometry = new THREE.BoxGeometry(20, 20, 20);
    const material = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: true} );
    const cube = new THREE.Mesh(geometry, material);
    this.board.add(cube)
    this.scene.add(this.board)
  }

  initClock() {
    this.clock = new THREE.Clock();
  }

  render() {
    this.renderer.render(this.scene, this.camera)
    const delta = this.clock.getDelta();

    this.board.children[0].rotation.x += delta;
    this.board.children[0].rotation.y += delta;

    window.requestAnimationFrame(this.render.bind(this))
  }
}
