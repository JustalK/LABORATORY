import { Canvas } from '@react-three/fiber'
import InitialDoubleTransition from '../../Transitions/InitialDoubleTransition'

export default function Transition() {
  return (
    <div id="canvas-container">
      <InitialDoubleTransition />
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="pink" position={[0, 0, 5]} />
        <mesh position={[0, 0, 0 ]}>
          <boxGeometry />
          <meshPhongMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}
