import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import FadingImage from './FadingImage'
import Cursor from './Cursor'
import { TweenMax as TM } from 'gsap'

export default function Experience() {
  const cursorPosition = useRef({
    x: 0,
    y: 0
  })
  return (
    <div id="canvas-container" onPointerMove={(e) => {
      TM.to(cursorPosition.current, 0.3, {
        x: e.clientX/window.innerWidth,
        y: e.clientY/window.innerHeight
      })
    }}>
      <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
        <Suspense fallback={null}>
          <Cursor cursorPosition={cursorPosition} />
          <FadingImage />
        </Suspense>
      </Canvas>
    </div>
  )
}
