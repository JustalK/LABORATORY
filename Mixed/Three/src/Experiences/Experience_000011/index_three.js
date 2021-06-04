import * as THREE from "three"
import { EffectComposer, RenderPass, ShaderPass } from "postprocessing";


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
  images = []
  mouse = new THREE.Vector2(0, 0)
  composer = null
  customPass = null
  error = false

  constructor($doc, $images) {
    this.width = $doc.clientWidth
    this.height = $doc.clientHeight

    this.initRenderer()
    this.initScene()
    this.initCamera()
    this.initComposer()
    this.initImages($images)
    this.initClock()

    $doc.appendChild(this.renderer.domElement)
    this.initEvents()
  }

  initEvents() {
    window.addEventListener('scroll', this)
    window.addEventListener('mousemove', this)
  }

  handleEvent(event) {
    switch(event.type) {
      case('scroll'):
        this.handleScrollEvent()
        clearTimeout(this.handleScrollTimeout)
        this.handleScrollTimeout = setTimeout(() => this.handleScrollStopEvent(), 50)
        break
      case('mousemove'):
        this.mouse.x = (event.clientX / window.innerWidth)
        this.mouse.y = 1. - (event.clientY/ window.innerHeight)
        break
      default:
    }
  }

  handleScrollEvent() {
    this.images.forEach(image => {
      image.invisible()
    })
  }

  handleScrollStopEvent() {
    this.images.forEach(image => {
      this.camera.position.y = -window.pageYOffset
      image.visible()
    })
  }

  removeEvents() {
    window.removeEventListener('scroll', this)
    window.removeEventListener('mousemove', this)
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

  initComposer() {
    this.composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);
    this.myEffect = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: null },
        resolution: { value: new THREE.Vector2(1.0,window.innerHeight/window.innerWidth) },
        uMouse: { value: new THREE.Vector2(-10,-10) },
        uVelo: { value: 0.05 }
      },
      vertexShader: `varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );}`,
      fragmentShader: `uniform float time;
      uniform sampler2D tDiffuse;
      uniform vec2 resolution;
      varying vec2 vUv;
      uniform vec2 uMouse;
      uniform float uVelo;
      float circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {
        uv -= disc_center;
        uv*=resolution;
        float dist = sqrt(dot(uv, uv));
        return smoothstep(disc_radius+border_size, disc_radius-border_size, dist);
      }
      void main()  {
          vec2 newUV = vUv;
	        vec4 color = vec4(1.,0.,0.,1.);
          float c = circle(newUV, uMouse, 0.0, 0.1+0.05*2.)*40.*uVelo;
      		vec2 offsetVector = normalize(uMouse - vUv);
      		vec2 warpedUV = mix(vUv, uMouse, c * 0.99); //power
      		color = texture2D(tDiffuse,warpedUV) + texture2D(tDiffuse,warpedUV)*vec4(vec3(c),1.);

          gl_FragColor = color;
      }`
    })
    this.customPass = new ShaderPass(this.myEffect, "tDiffuse");
    this.customPass.renderToScreen = true;
    this.composer.addPass(this.customPass);
  }

  initImages($images) {
    $images.forEach($image => {
      this.images.push(new Image({
        scene: this.scene,
        width: this.width,
        height: this.height,
        $image
      }))
    })
  }

  initClock() {
    this.clock = new THREE.Clock();
  }

  render() {
    if (!this.error) {
      try {
        if (this.renderer === undefined) return;
        window.requestAnimationFrame(this.render.bind(this))
        const delta = this.clock.getDelta();
        this.myEffect.uniforms.uMouse.value = this.mouse;
        this.composer.render(delta)
      } catch(e) {
        console.log(e)
        this.error = true
      }
    }
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
    this.material = null

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
    this.offset.set(
        left - window.innerWidth / 2 + width / 2,
        -top - window.pageYOffset + window.innerHeight / 2 - height / 2
    )
  }

  invisible() {
    if (this.mesh) {
      this.$image.style.opacity = 1
      this.mesh.visible = false
    }
  }

  visible() {
    if (this.mesh) {
      this.$image.style.opacity = 0
      this.mesh.visible = true
    }
  }

  createMesh() {
    const geometry = new THREE.PlaneBufferGeometry(1, 1, 1, 1);
    this.material = new THREE.MeshBasicMaterial( {map: this.image} )
    this.mesh = new THREE.Mesh(geometry, this.material)
    this.mesh.position.set(this.offset.x, this.offset.y, 0)
    this.mesh.scale.set(this.sizes.x, this.sizes.y, 1)
    this.scene.add(this.mesh)
  }
}
