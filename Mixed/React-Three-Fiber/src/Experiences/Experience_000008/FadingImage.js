import React, { useRef, useState } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from "three"
import { TweenMax as TM } from 'gsap'
import "./ImageShaderWhiteMaterial"

export default function Scene() {
  const ref = useRef()
  const mesh = useRef()
  const [hover, setHover] = useState(false)
  const [tDiffuse] = useLoader(THREE.TextureLoader, ['./1.jpeg'])

  useFrame((state, delta) => {
    ref.current.uTime += delta
    ref.current.uVelo = hover ? Math.min(1.0, ref.current.uVelo + 0.05) : Math.max(0.0, ref.current.uVelo - 0.05)
  })

  return (
    <mesh ref={mesh} onPointerEnter={(e) => setHover(true)} onPointerLeave={(e) => setHover(false)} position={[0,0,0]} onPointerMove={(e) => {
      TM.to(ref.current.uMouse, 0.3, {
        x: e.intersections[0].uv.x,
        y: e.intersections[0].uv.y
      })
    }}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <imageShaderWhiteMaterial ref={ref} tDiffuse={tDiffuse} />
    </mesh>
  )
}
