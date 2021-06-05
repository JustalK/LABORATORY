import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import ScrollContainer from './ScrollContainer'
import Scene from './Scene'

export default function Experience() {
  const scrollRef = useRef()
  const scroll = useRef(0)
  const doScroll = (e) => (scroll.current = e.target.scrollTop / e.target.scrollHeight)
  return (
    <div id="canvas-container">
      <Canvas
        onCreated={(state) => state.events.connect(scrollRef.current)}
        raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}>
        <ambientLight />
        <pointLight position={[10, 0, 10]} />
        <ScrollContainer scroll={scroll}>
          <Scene />
        </ScrollContainer>
      </Canvas>
      <div ref={scrollRef} onScroll={doScroll} className="scroll">
        <div style={{ height: `200vh`, pointerEvents: 'none' }}></div>
      </div>
    </div>
  )
}
