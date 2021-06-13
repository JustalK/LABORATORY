import { Canvas } from '@react-three/fiber'

export default function Experience() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [5, 5, 10], fov: 35 }}>
        <ambientLight intensity={0.1} />
        <directionalLight color="blue" position={[-1, 3, 5]} />
        <mesh position={[0, 0, 3 ]}>
          <boxGeometry />
          <meshPhongMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}
