import React, { useRef } from 'react'
import * as THREE from "three"
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function Scene() {
  const [colorMap] = useLoader(TextureLoader, ['./1.jpeg'])
  const mesh = useRef()

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    mesh.current.rotation.x = a;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <mesh ref={mesh} position={[0, 0, 4 ]}>
        <planeGeometry />
        <meshStandardMaterial
          side={THREE.DoubleSide} 
          map={colorMap} />
      </mesh>
    </>
  )
}
