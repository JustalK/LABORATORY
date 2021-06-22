import React, { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import "./ImageRippleMaterial"

export default function Scene() {
  const { viewport } = useThree()
  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.uTime += delta
  })

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height, 32, 32]} />
      <imageRippleMaterial ref={ref} />
    </mesh>
  )
}
