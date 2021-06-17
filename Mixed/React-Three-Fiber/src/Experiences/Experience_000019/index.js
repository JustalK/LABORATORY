import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import TextCustom from './TextCustom'

export default function Experience() {
  return (
    <div id="canvas-container">
      <Canvas pixelRatio={window.devicePixelRatio} camera={{ position: [0, 0, 2], fov: 50 }}>
        <Suspense fallback={null}>
          <TextCustom />
        </Suspense>
      </Canvas>
    </div>
  )
}
