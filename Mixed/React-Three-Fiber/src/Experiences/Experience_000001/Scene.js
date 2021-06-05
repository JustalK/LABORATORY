import React from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function Scene() {
  const [colorMap] = useLoader(TextureLoader, ['./1.jpeg'])

  return (
    <>
      <ambientLight intensity={0.5} />
      <mesh position={[0, 0, 4 ]}>
        <planeGeometry />
        <meshStandardMaterial
          map={colorMap} />
      </mesh>
    </>
  )
}
