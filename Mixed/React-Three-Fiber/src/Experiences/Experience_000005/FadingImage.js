import React, { useRef } from 'react'
import { useLoader, useFrame, useThree } from '@react-three/fiber'
import * as THREE from "three"
import "./ImageFadeMaterial"

export default function Scene() {
  const viewport = useThree((state) => state.viewport)
  const ref = useRef()
    const mesh = useRef()
  const [tDiffuse] = useLoader(THREE.TextureLoader, ['./Img2.jpg'])

  useFrame(({ mouse }) => {
    ref.current.uMouse = {
      x: (mouse.x + 1) / 2,
      y: (mouse.y + 1) / 2
    }
  })
  return (
    <mesh ref={mesh} position={[0,0,0]} onPointerMove={(e) => {
      console.log(e.clientX)
      //(state.mouse = [(e.clientX / window.innerWidth) * 2 - 1, (e.clientY / window.innerHeight) * 2 - 1])}
    }}>
      <planeGeometry args={[1, 1]} />
      <imageFadeMaterial ref={ref} tDiffuse={tDiffuse} />
    </mesh>
  )
}
