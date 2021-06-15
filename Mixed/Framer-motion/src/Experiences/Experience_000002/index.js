import { Canvas } from '@react-three/fiber'
import InitialTransition from '../../Transitions/InitialTransition'

export default function Transition() {
  return (
    <div id="canvas-container">
      <InitialTransition />
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="blue" position={[0, 0, 5]} />
        <mesh position={[0, 0, 0 ]}>
          <boxGeometry />
          <meshPhongMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}
