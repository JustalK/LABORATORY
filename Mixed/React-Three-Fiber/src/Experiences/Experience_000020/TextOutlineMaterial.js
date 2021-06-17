import * as THREE from "three"
import { extend } from "@react-three/fiber"

export class TextOutlineMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        resolution: { value: new THREE.Vector2(5.0,1.0) },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uVelo: { value: 0.0 },
        uTime: { value: 0 }
      },
      vertexShader: `
      varying vec2 vUv;
      uniform vec2 resolution;
      uniform float uTime;
      uniform float uVelo;
      uniform vec2 uMouse;
      float circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {
        uv -= disc_center;
        uv*=resolution;
        float dist = sqrt(dot(uv, uv));
        return smoothstep(disc_radius+border_size, disc_radius-border_size, dist);
      }
      void main() {
        vUv = uv;
        float c = circle(vUv, uMouse, 5.0 * (1.1 - uVelo), 0.05);
        float finalMask = smoothstep(0.4, 0.5, c);
        vec3 finalImage = position;
        finalImage.x =  position.x + c * 0.1;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(finalImage, 1.0);
      }`,
      fragmentShader: `
      uniform vec2 resolution;
      varying vec2 vUv;
      uniform vec2 uMouse;
      uniform float uTime;
      uniform float uVelo;
      float circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {
        uv -= disc_center;
        uv*=resolution;
        float dist = sqrt(dot(uv, uv));
        return smoothstep(disc_radius+border_size, disc_radius-border_size, dist);
      }
      void main()  {
          vec2 newUV = vUv;
          float c = circle(vUv, uMouse, 5.0 * (1.1 - uVelo), 0.05);

          float finalMask = smoothstep(0.4, 0.5, c);

        	vec4 finalImage = mix(vec4(1.0, 1.0, 0.0, 1.0), vec4(0.0, 0.0, 1.0, 1.0), finalMask);

          gl_FragColor = finalImage;
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

extend({ TextOutlineMaterial })
