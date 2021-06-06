import React, { useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import * as THREE from "three"
import "./ImageFadeMaterial"

export default function Scene() {
  const ref = useRef()
  const [tDiffuse] = useLoader(THREE.TextureLoader, ['./1.jpeg'])

  return (
    <mesh position={[0,0,0]} onPointerMove={(e) => {
      ref.current.uMouse = e.intersections[0].uv
    }}>
      <planeGeometry args={[1, 1]} />
      <imageFadeMaterial ref={ref} tDiffuse={tDiffuse} />
    </mesh>
  )
}
