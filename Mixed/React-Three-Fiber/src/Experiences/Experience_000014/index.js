import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Geometries from './Geometries'

export default function Experience() {
  return (
    <div id="canvas-container">
      <Canvas
        gl={{ powerPreference: 'high-performance', antialias: false, stencil: false, depth: false, alpha: false }}
        pixelRatio={1.25}
        camera={{ position: [0, 0, 15], near: 5, far: 40 }}>
        <color attach="background" args={['white']} />
        <ambientLight intensity={0.8} />
        <directionalLight castShadow position={[2.5, 12, 12]} intensity={4} />
        <Suspense fallback={null}>
          <Geometries />
        </Suspense>
      </Canvas>
    </div>
  )
}
