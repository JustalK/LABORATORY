import { Canvas } from '@react-three/fiber'
import React, { Suspense } from "react"
import Background from "./Background"
import Diamond from "./Diamond"

export default function Experience() {
  return (
    <div id="canvas-container">
      <Canvas linear camera={{ fov: 50, position: [0, 0, 30] }}>
        <Suspense fallback={null}>
          <Diamond />
          <Background />
        </Suspense>
      </Canvas>
    </div>
  )
}
