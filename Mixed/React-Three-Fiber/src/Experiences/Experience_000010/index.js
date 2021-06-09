import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

const nbrPoints = 100
const curve = new THREE.SplineCurve( [
  new THREE.Vector2( -1, 0 ),
  new THREE.Vector2( -0.5, 0 ),
  new THREE.Vector2( 3, 3 ),
  new THREE.Vector2( 5, 0 ),
]);
const points = curve.getPoints( nbrPoints );
const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );

export default function Experience() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <line position={[-4, 0, 0]} geometry={lineGeometry}>
          <lineBasicMaterial attach="material" color={'#9c88ff'} linewidth={1} linecap={'round'} linejoin={'round'} />
        </line>
      </Canvas>
    </div>
  )
}
