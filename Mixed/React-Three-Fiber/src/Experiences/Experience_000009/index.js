import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

export default function Experience() {
  const nbrPoints = 50
  const amplitude = 2
  const length = 10
  const points = Array.from({length: nbrPoints}).map((_, i) => {
    return new THREE.Vector3(i * length/nbrPoints, Math.cos(Math.PI * i/nbrPoints) * amplitude, 0)
  })

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <line position={[-4, 0, 0]} geometry={lineGeometry}>
          <lineBasicMaterial attach="material" color={'#9c88ff'} linewidth={10} linecap={'round'} linejoin={'round'} />
        </line>
      </Canvas>
    </div>
  )
}
