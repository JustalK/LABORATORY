import * as THREE from "three"
import { extend } from "@react-three/fiber"

export class MovingMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        tDiffuse: { value: undefined },
        resolution: { value: new THREE.Vector2(window.innerHeight/window.innerWidth,window.innerHeight/window.innerWidth) },
        uMouse: { value: new THREE.Vector2(-10, -10) },
        uVeloX: { value: 0.0 },
        uVeloY: { value: 0.0 },
        uTime: { value: 0 }
      },
      vertexShader: `
      varying vec2 vUv;
      uniform float uTime;
      uniform float uVeloX;
      uniform float uVeloY;
      void main() {
        vec3 pos = position;
        if (uVeloX > 0.0f) {
          pos.x = pos.x + ((sin(uv.y * 3.1415926535897932384626433832795) * uVeloX * 0.1) * 0.125) - uVeloX * 0.025;
        } else {
          pos.x = pos.x - ((sin(uv.y * 3.1415926535897932384626433832795) * uVeloX * 0.1) * 0.125) + uVeloX * 0.025;
        }
        pos.y = pos.y - ((sin(uv.x * 3.1415926535897932384626433832795) * uVeloY * 0.1) * 0.125) - uVeloY * 0.025;
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
      }`,
      fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform vec2 resolution;
      varying vec2 vUv;
      uniform vec2 uMouse;
      uniform float uTime;
      uniform float uVeloX;
      uniform float uVeloY;
      float circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {
        uv -= disc_center;
        uv*=resolution;
        float dist = sqrt(dot(uv, uv));
        return smoothstep(disc_radius+border_size, disc_radius-border_size, dist);
      }
      void main()  {
          vec2 newUV = vUv;
          float c = circle(vUv, uMouse, 0.075 + (1.0 - uVeloX) * 0.25, 0.01);
          gl_FragColor = vec4(1.0 - 0.5 * uVeloY, 0, 0.5 * uVeloX, 1.0);
      }`
    })
  }
  get uVeloX() {
    return this.uniforms.uVeloX.value
  }
  set uVeloX(v) {
    return (this.uniforms.uVeloX.value = v)
  }
  get uVeloY() {
    return this.uniforms.uVeloY.value
  }
  set uVeloY(v) {
    return (this.uniforms.uVeloY.value = v)
  }
  get uTime() {
    return this.uniforms.uTime.value
  }
  set uTime(v) {
    return (this.uniforms.uTime.value = v)
  }
  get tDiffuse() {
    return this.uniforms.tDiffuse.value
  }
  set tDiffuse(v) {
    return (this.uniforms.tDiffuse.value = v)
  }
  get uMouse() {
    return this.uniforms.uMouse.value
  }
  set uMouse(v) {
    return (this.uniforms.uMouse.value = v)
  }
}

extend({ MovingMaterial })
