import React, { useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import "./ImageOffsetMaterial"

export default function Scene() {
  const { viewport } = useThree()
  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.uTime += delta
  })

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height, 32, 32]} />
      <imageOffsetMaterial ref={ref} />
      <mesh position={[0, 0, 0 ]}>
        <boxGeometry />
        <meshPhongMaterial />
      </mesh>
    </mesh>
  )
}
