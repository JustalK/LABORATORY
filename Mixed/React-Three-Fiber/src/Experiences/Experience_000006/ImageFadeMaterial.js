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
      float circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {
        uv -= disc_center;
        uv*=resolution;
        float dist = sqrt(dot(uv, uv));
        return smoothstep(disc_radius+border_size, disc_radius-border_size, dist);
      }
      void main()  {
          vec2 newUV = vUv;
          float c = circle(vUv, uMouse, 0.075, 0.05);
          float r = texture2D(tDiffuse, newUV.xy  -= c * (0.1 * .15)).x;
          float b = texture2D(tDiffuse, newUV.xy  += c * (0.1 * .15)).z;
          vec4 color = vec4(r, 0., b, 1.);

          float finalMask = smoothstep(0.4, 0.5, c);

        	vec4 hover = texture2D(tDiffuse, vUv);

        	vec4 finalImage = mix(hover, color, finalMask);

          gl_FragColor = finalImage;
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
