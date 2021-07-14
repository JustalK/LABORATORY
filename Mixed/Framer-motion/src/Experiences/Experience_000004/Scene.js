import React, { useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import "./ImageOffsetMaterial"

export default function Scene({ activated }) {
  const { viewport } = useThree()
  const ref = useRef()

  useFrame((state, delta) => {
    if (activated.current) {
      ref.current.uVelo += delta
    }
  })

  return (
    <>
      <mesh position={[0, 0, 0 ]}>
        <boxGeometry />
        <meshBasicMaterial color="red" />
      </mesh>
      <mesh position={[0, 0, 1 ]}>
        <planeGeometry args={[viewport.width, viewport.height, 32, 32]} />
        <imageOffsetMaterial ref={ref} transparent />
      </mesh>
    </>
  )
}
