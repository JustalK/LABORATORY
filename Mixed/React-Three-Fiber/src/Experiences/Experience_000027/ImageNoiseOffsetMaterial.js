import * as THREE from "three"
import { extend } from "@react-three/fiber"

export class ImageNoiseOffsetMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        tDiffuse: { value: undefined },
        resolution: { value: new THREE.Vector2(window.innerHeight/window.innerWidth,window.innerHeight/window.innerWidth) },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uVelo: { value: 0.0 },
        uTime: { value: 0 }
      },
      vertexShader: `
      varying vec2 vUv;
      uniform float uTime;
      uniform float uVelo;
      void main() {
        vec3 pos = position;
        pos.x += sin(pos.y*10.0*uVelo+uTime)/100.0 * uVelo;
        pos.y += sin(pos.x*10.0*uVelo+uTime)/100.0 * uVelo;
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
      }`,
      fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform vec2 resolution;
      varying vec2 vUv;
      uniform vec2 uMouse;
      uniform float uTime;
      uniform float uVelo;
      float rand(vec2 uv, float t) {
          return fract(sin(dot(uv, vec2(1225.6548, 321.8942))) * 4251.4865 + t);
      }
      void main()  {
        float scale = 0.005;
        vec2 ps = vec2(1.0) / resolution.xy;
        vec2 offset = (rand(vUv, uTime) - 0.5) * 2.0 * ps * scale;

        vec4 noise = texture2D(tDiffuse, vUv + offset);
        vec4 color = texture2D(tDiffuse, vUv);

        float amount = 0.5;

        vec4 final = mix(color, noise, amount);

        gl_FragColor = final;
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

extend({ ImageNoiseOffsetMaterial })
