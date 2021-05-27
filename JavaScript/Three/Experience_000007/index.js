// https://threejsfundamentals.org/threejs/lessons/threejs-shadertoy.html
const fragmentShader = `
  #include <common>

  uniform vec3 iResolution;
  uniform float iTime;
  uniform sampler2D iChannel0;

  // By Daedelus: https://www.shadertoy.com/user/Daedelus
  // license: Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
  #define TIMESCALE 0.25
  #define TILES 8
  #define COLOR 0.7, 1.6, 2.8

  void mainImage( out vec4 fragColor, in vec2 fragCoord )
  {
    vec2 uv = fragCoord.xy / iResolution.xy;
    uv.x *= iResolution.x / iResolution.y;

    vec4 noise = texture2D(iChannel0, floor(uv * float(TILES)) / float(TILES));
    float p = 1.0 - mod(noise.r + noise.g + noise.b + iTime * float(TIMESCALE), 1.0);
    p = min(max(p * 3.0 - 1.8, 0.1), 2.0);

    vec2 r = mod(uv * float(TILES), 1.0);
    r = vec2(pow(r.x - 0.5, 2.0), pow(r.y - 0.5, 2.0));
    p *= 1.0 - pow(min(1.0, 12.0 * dot(r, r)), 2.0);

    fragColor = vec4(COLOR, 1.0) * p;
  }

  void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
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
  constants.clock = null
}

function createAnimation (doc) {
  initConstants()
  initClock()
  createScene()
  createBoard()

  const camera = createCamera(-20)
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

  const geometry = new THREE.PlaneGeometry(2, 2);

  const loader = new THREE.TextureLoader();
  const texture = loader.load('./bayer.png');
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  const material = new THREE.ShaderMaterial({
    uniforms: {
      iTime: {
        value: 0
      },
      iResolution: {
        value: new THREE.Vector3()
      },
      iChannel0: { value: texture }
    },
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
  const camera = new THREE.OrthographicCamera(
    -1, // left
     1, // right
     1, // top
    -1, // bottom
    -1, // near,
     1, // far
  );
  constants.scene.add(camera)
  constants.camera = camera
}

/**
* Create the render
**/
const render = renderer => {
  renderer.render(constants.scene, constants.camera)
  const delta = constants.clock.getDelta();

  constants.board.children[0].material.uniforms.iResolution.value.set(renderer.domElement.width, renderer.domElement.height, 1);
  constants.board.children[0].material.uniforms.iTime.value += delta;

  window.requestAnimationFrame(function () {
    render(renderer, constants.scene, constants.camera)
  })
}

createAnimation(document.body)
