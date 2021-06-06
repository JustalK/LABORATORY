import * as THREE from "three"
import { extend } from "@react-three/fiber"

export class ImageFadeMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        tDiffuse: { value: undefined },
        resolution: { value: new THREE.Vector2(window.innerHeight/window.innerWidth,window.innerHeight/window.innerWidth) },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uVelo: { value: 0.05 }
      },
      vertexShader: `varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }`,
      fragmentShader: `uniform float time;
      uniform sampler2D tDiffuse;
      uniform vec2 resolution;
      varying vec2 vUv;
      uniform vec2 uMouse;
      uniform float uVelo;
      float hash12(vec2 p) {
        float h = dot(p,vec2(127.1,311.7));
        return fract(sin(h)*43758.5453123);
      }
      float circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {
        uv -= disc_center;
        uv*=resolution;
        float dist = sqrt(dot(uv, uv));
        return smoothstep(disc_radius+border_size, disc_radius-border_size, dist);
      }
      void main()  {
          vec2 newUV = vUv;
	        vec4 color = vec4(1.,0.,0.,1.);
          float hash = hash12(vUv*10.);
      		float c = circle(newUV, uMouse, 0.0, 0.1+uVelo*0.01)*10.*uVelo;
      		vec2 warpedUV = vUv + vec2(hash - 0.5)*c;
      		color = texture2D(tDiffuse,warpedUV) + texture2D(tDiffuse,warpedUV)*vec4(vec3(c),1.);

          gl_FragColor = color;
      }`
    })
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

extend({ ImageFadeMaterial })
