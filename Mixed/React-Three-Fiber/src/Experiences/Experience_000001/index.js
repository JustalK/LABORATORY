import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'

export default function Experience() {
  return (
    <div id="canvas-container">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
