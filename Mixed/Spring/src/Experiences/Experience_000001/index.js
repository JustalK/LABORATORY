import { Canvas } from '@react-three/fiber'

export default function Experience() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="blue" position={[0, 0, 5]} />
        <mesh position={[0, 0, 3 ]}>
          <boxGeometry />
          <meshPhongMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}
