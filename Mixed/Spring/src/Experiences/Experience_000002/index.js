import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

export default function Experience() {
  const [active, setActive] = useState(0)

  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 }
  })

  const scale = spring.to([0, 1], [1, 5])
  const rotation = spring.to([0, 1], [0, Math.PI])
  const color = spring.to([0, 1], ['#6246ea', '#e45858'])

  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [5, 5, 10], fov: 35 }}>
        <ambientLight intensity={0.1} />
        <a.directionalLight color={color} position={[-1, 3, 5]} />
        <a.mesh rotation-y={rotation} scale-x={scale} scale-z={scale} onClick={() => setActive(Number(!active))} position={[0, 0, 3 ]}>
          <boxGeometry />
          <meshPhongMaterial />
        </a.mesh>
      </Canvas>
    </div>
  )
}
