
const vertexShader = `
  attribute float vertexDisplacement;
  uniform float delta;
  varying float vOpacity;
  varying vec3 vUv;
  void main() {
    vUv = position;
    vOpacity = vertexDisplacement;

    vec3 p = position;
    p.x += sin(vertexDisplacement) * 50.0;
    p.y += cos(vertexDisplacement) * 50.0;
    vec4 modelViewPosition = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;
  }
`;

const fragmentShader = `
  uniform float delta;
  varying float vOpacity;
  varying vec3 vUv;
  void main() {
    float r = 1.0 * cos(vUv.x * delta);
    float g = 0.0;
    float b = 0.0;

    gl_FragColor = vec4(r, g, b, vOpacity);
  }
`;

const constants = {}
const initConstants = () => {
  constants.width = getScreenWidth()
  constants.height = getScreenHeight()
  constants.camera = null
  constants.fov = 70
  constants.scene = null
  constants.board = null
  constants.delta = 0
}

function createAnimation (doc) {
  initConstants()
  createScene()
  createBoard()

  const camera = createCamera(-200)
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

  const geometry = new THREE.PlaneBufferGeometry(100, 100, 100, 10, 10, 10)
  const vertexDisplacement = new Float32Array(geometry.attributes.position.count)
  vertexDisplacement.map((v, i) => vertexDisplacement[i] = Math.sin(i))
  geometry.addAttribute('vertexDisplacement', new THREE.BufferAttribute(vertexDisplacement, 1))
  const material = new THREE.ShaderMaterial({
    uniforms: {
      delta: {
        value: 0
      }
    },
    vertexShader,
    fragmentShader,
    side: THREE.DoubleSide
  });
  const plane = new THREE.Mesh(geometry, material);
  board.add(plane);

  constants.scene.add(board)
  constants.board = board
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

/**
* Create the render
**/
const render = (renderer) => {
  renderer.render(constants.scene, constants.camera)

  constants.delta += 1

  constants.board.children[0].material.uniforms.delta.value = constants.delta  + Math.sin(constants.delta) * 0.05;

  window.requestAnimationFrame(function () {
    render(renderer, constants.scene, constants.camera)
  })
}

createAnimation(document.body)
