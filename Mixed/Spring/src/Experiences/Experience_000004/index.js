import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'

export default function Experience({ location }) {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 0, 2], fov: 35 }}>
        <Suspense fallback={null}>
          <Scene location={location}/>
        </Suspense>
      </Canvas>
    </div>
  )
}
