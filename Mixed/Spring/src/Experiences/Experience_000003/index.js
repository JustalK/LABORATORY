import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { a, useTransition } from '@react-spring/three'

export default function Experience({ location }) {
  const [item] = useState({
    scale: [0, 0, 0]
  })
  const transitions = useTransition(item, {
    from: { scale: [0, 0, 0] },
    enter: { scale: [1, 1, 1] },
    leave: { scale: [0, 0, 0] },
    config: {mass: 1, tension: 580, friction: 120},
    delay: 1000
  })

  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [5, 5, 10], fov: 35 }}>
        <ambientLight intensity={0.1} />
        <directionalLight color="pink" position={[-1, 3, 5]} />
        {transitions((props, item) => (
          <a.mesh scale={props.scale}>
            <boxGeometry />
            <meshPhongMaterial />
          </a.mesh>
        ))}
      </Canvas>
    </div>
  )
}
