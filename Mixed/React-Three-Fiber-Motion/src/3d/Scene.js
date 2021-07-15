import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

export default function Transition({ children }) {

  return (
    <div id="canvas-container">
      <Canvas>
        <Suspense fallback={null}>
          { children }
        </Suspense>
      </Canvas>
    </div>
  )
}
