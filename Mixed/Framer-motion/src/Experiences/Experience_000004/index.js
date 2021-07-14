import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'
import DurationTransition from '../../Transitions/DurationTransition'

export default function Transition() {
  return (
    <div id="canvas-container">
      <DurationTransition />
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} />
          <directionalLight color="pink" position={[0, 0, 5]} />
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
