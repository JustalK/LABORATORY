import React, { useRef, useState } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from "three"
import "./ImageOffsetMaterial"

export default function Scene() {
  const ref = useRef()
  const [hover, setHover] = useState(false)
  const [tDiffuse] = useLoader(THREE.TextureLoader, ['./1.jpeg'])

  useFrame((state, delta) => {
    ref.current.uTime += delta
    ref.current.uVelo = hover ? Math.min(1.0, ref.current.uVelo + 0.05) : Math.max(0.0, ref.current.uVelo - 0.05)
  })

  return (
    <mesh onPointerEnter={(e) => setHover(true)} onPointerLeave={(e) => setHover(false)} position={[0,0,0]} onPointerMove={(e) => {
      ref.current.uMouse = e.intersections[0].uv
    }}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <imageOffsetMaterial ref={ref} tDiffuse={tDiffuse} />
    </mesh>
  )
}
