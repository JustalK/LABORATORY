import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import FadingImage from './FadingImage'

export default function Experience() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
        <Suspense fallback={null}>
          <FadingImage />
        </Suspense>
      </Canvas>
    </div>
  )
}
