import { Canvas } from '@react-three/fiber'
import { useTransition, animated } from 'react-spring'

export default function Experience({ location }) {
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { transform: 'translate3d(0, 100vh, 0)' },
    enter: { transform: 'translate3d(0, 0, 0)' },
    leave: { transform: 'translate3d(0, -100vw, 0)' },
    mass: 1,
    tension: 580,
    friction: 120
  })

  return (
      <div id="canvas-container">
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
        <Canvas camera={{ position: [5, 5, 10], fov: 35 }}>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[-1, 3, 5]} />
          <mesh position={[0, 0, 3 ]}>
            <boxGeometry />
            <meshPhongMaterial />
          </mesh>
        </Canvas>
        </animated.div>
      ))}
      </div>
  )
}
