const fragmentShader = `
  #include <common>

  uniform vec3 iResolution;
  uniform float iTime;
  uniform sampler2D iChannel0;

  #define UI0 1597334673U
  #define UI1 3812015801U
  #define UI2 uvec2(UI0, UI1)
  #define UI3 uvec3(UI0, UI1, 2798796415U)
  #define UIF (1.0 / float(0xffffffffU))

  vec2 hash22(vec2 p)
  {
  	uvec2 q = uvec2(ivec2(p))*UI2;
  	q = (q.x ^ q.y) * UI2;
  	return vec2(q) * UIF;
  }

  vec3 hash33(vec3 p)
  {
  	uvec3 q = uvec3(ivec3(p)) * UI3;
  	q = (q.x ^ q.y ^ q.z)*UI3;
  	return vec3(q) * UIF;
  }

  // -	-	-	-	-	-	-	-

  float calcVoro31(vec3 p)
  {
      vec3 cellPos = fract(p);
      vec3 cellId = floor(p);

      float len = 2.0;

      for (int z = -1; z < 2; z++)
      for (int y = -1; y < 2; y++)
      for (int x = -1; x < 2; x++)
      {
          vec3 offs = vec3(x, y, z);
          len = min(len, length(cellPos + offs - hash33(cellId - offs)));
      }

      return len;
  }

  void mainImage( out vec4 fragColor, in vec2 fragCoord )
  {
      vec2 uv = (0.25 * fragCoord - iResolution.xy) / iResolution.y;

      vec3 col = vec3(0);

      vec3 p = vec3(uv, iTime / 40.0);

      float res;
      float scale = 0.1;

      for(int i = 0; i < 3; i++)
      {
          res += calcVoro31(p / scale) * scale;
          scale *= 0.5;
      }

      res = step(sin(iTime) / 4.0 + 0.25, res);
      col.rgb = vec3(res);

      // Output to screen
      fragColor = vec4(col,1.0);
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
  const texture = loader.load('./1.jpeg');
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
      iChannel0: {
        value: texture
      }
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
