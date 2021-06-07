import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'

export default function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Suspense>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
