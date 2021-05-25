const constants = {}

const initConstants = () => {
  constants.width = getScreenWidth()
  constants.height = getScreenHeight()
  constants.camera = null
  constants.fov = 70
  constants.scene = null
  constants.board = null
}

function createAnimation (doc) {
  initConstants()
  createScene()
  createBoard()

  const camera = createCamera(-10)
  const renderer = createRenderer()
  doc.appendChild(renderer.domElement)
  render(renderer)
}

/**
* Create the renderer for the three js animation
**/
const createRenderer = () => {
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(constants.width, constants.height)
  renderer.setClearColor(0x000000, 1)
  return renderer
}

/**
* Create the scene for the three js animation
**/
const createScene = () => {
  constants.scene = new THREE.Scene()
}

const createBoard = () => {
  const board = new THREE.Group()
  constants.scene.add(board)
  constants.board = board
}

/**
* Create a camera for the three js animation
**/
const createCamera = (positionZ) => {
  const camera = new THREE.PerspectiveCamera(constants.fov, constants.width / constants.height, 1, 1000)
  camera.position.z = positionZ
  camera.position.y = 50
  camera.lookAt(0, 0, 0)
  constants.scene.add(camera)
  constants.camera = camera
}

/**
* Create the render
**/
const render = (renderer) => {
  renderer.render(constants.scene, constants.camera)

  window.requestAnimationFrame(function () {
    render(renderer, constants.scene, constants.camera)
  })
}

createAnimation(document.body)
