import React, { useRef } from 'react'
import { Html } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import * as THREE from "three"
import "./ImageFadeMaterial"

export default function Box({ text, color, ...props }) {
  const ref = useRef()
  const [tDiffuse] = useLoader(THREE.TextureLoader, ['./1.jpeg'])
  return (
    <mesh {...props} onPointerMove={(e) => {
      ref.current.uMouse = e.intersections[0].uv
    }}>
      <planeGeometry args={[2, 2, 2]} />
      <imageFadeMaterial ref={ref} tDiffuse={tDiffuse} />
      <Html position={[0, 0, 2]} className="label" center>
        {text}
      </Html>
    </mesh>
  )
}
