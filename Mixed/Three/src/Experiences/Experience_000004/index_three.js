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
      this.initShader()
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

  initShader() {
    this.fragmentShader = `
      uniform vec2 u_mouse;
      uniform vec2 u_res;

      uniform sampler2D u_image;
      uniform sampler2D u_imagehover;

      uniform float u_time;

      varying vec2 v_uv;

      float circle(in vec2 _st, in float _radius, in float blurriness){
          vec2 dist = _st;
          return 1.-smoothstep(_radius-(_radius*blurriness), _radius+(_radius*blurriness), dot(dist,dist)*20.0);
      }

      void main() {
      	vec2 res = u_res * PR;
      	vec2 st = gl_FragCoord.xy / res.xy - vec2(0.5);
      	st.y *= u_res.y / u_res.x;

      	// We readjust the mouse coordinates
      	vec2 mouse = vec2((u_mouse.x / u_res.x) * 2. - 1.,-(u_mouse.y / u_res.y) * 2. + 1.) * -.5;
        mouse.y *= res.y / res.x;

      	vec2 circlePos = st + mouse;
      	float c = circle(circlePos, 0.3, 0.3) * 2.5;

      	float finalMask = smoothstep(0.4, 0.5, c);

        vec4 image = texture2D(u_image, v_uv);
      	vec4 hover = texture2D(u_imagehover, v_uv);

      	vec4 finalImage = mix(image, hover, finalMask);

      	gl_FragColor = finalImage;
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
          fragmentShader: this.fragmentShader,
          vertexShader: this.vertexShader,
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
      TM.to(this.mouse, 0.1, {
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
