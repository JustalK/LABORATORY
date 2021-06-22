import * as THREE from "three"
import { extend } from "@react-three/fiber"

export class ImageRippleMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        resolution: { value: new THREE.Vector2(window.innerHeight/window.innerWidth,window.innerHeight/window.innerWidth) },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uVelo: { value: 0.0 },
        uTime: { value: 0.0 }
      },
      vertexShader: `
      varying vec2 vUv;
      uniform float uTime;
      uniform float uVelo;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
      fragmentShader: `
      uniform vec2 resolution;
      varying vec2 vUv;
      uniform vec2 uMouse;
      uniform float uTime;
      uniform float uVelo;
      void main()  {
          vec2 newUV = vUv;
          vec4 c = vec4(0.25, 0.25, 0.25, 1.0);

          float noiseAmount = 0.2;
          float n = fract(sin(dot(vUv, vec2(uTime+12.9898, 78.233))) * 43758.5453);
          c *= (1.0 - noiseAmount + n * noiseAmount);
          gl_FragColor = c;
      }`
    })
  }
  get uVelo() {
    return this.uniforms.uVelo.value
  }
  set uVelo(v) {
    return (this.uniforms.uVelo.value = v)
  }
  get uTime() {
    return this.uniforms.uTime.value
  }
  set uTime(v) {
    return (this.uniforms.uTime.value = v)
  }
  get uMouse() {
    return this.uniforms.uMouse.value
  }
  set uMouse(v) {
    return (this.uniforms.uMouse.value = v)
  }
}

extend({ ImageRippleMaterial })
