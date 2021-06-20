import { Canvas } from '@react-three/fiber'
import Scene from './Scene'

export default function Experience() {

  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Scene />
      </Canvas>
    </div>
  )
}
