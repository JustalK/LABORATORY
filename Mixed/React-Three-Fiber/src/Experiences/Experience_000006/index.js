import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import ScrollContainer from './ScrollContainer'
import Scene from './Scene'

export default function Experience() {
  const scrollRef = useRef()
  const scroll = useRef(0)
  const page = 3
  const doScroll = (e) => {
    (scroll.current = page * e.target.scrollTop / (e.target.scrollHeight - window.innerHeight));
  }
  return (
    <div id="canvas-container">
      <Canvas
        onCreated={(state) => state.events.connect(scrollRef.current)}
        raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}>
        <Suspense fallback={null}>
          <ambientLight />
          <pointLight position={[10, 0, 10]} />
          <ScrollContainer scroll={scroll}>
            <Scene />
          </ScrollContainer>
        </Suspense>
      </Canvas>
      <div ref={scrollRef} onScroll={doScroll} className="scroll">
        <div style={{ height: `${(page + 1) * 100}vh`, pointerEvents: 'none' }}></div>
      </div>
    </div>
  )
}
