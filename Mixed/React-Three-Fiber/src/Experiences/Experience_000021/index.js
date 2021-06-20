import { Canvas, extend } from '@react-three/fiber'
import * as THREE from 'three'
import { MeshLine, MeshLineMaterial } from 'meshline'

const points = [
  new THREE.Vector3( -1, 0, 0 ),
  new THREE.Vector3( -0.5, 0, 0 ),
  new THREE.Vector3( 3, 3, 0 ),
  new THREE.Vector3( 5, 0, 0 ),
];
const linePoints = new THREE.CatmullRomCurve3(points).getPoints(50);

extend({ MeshLine, MeshLineMaterial })

export default function Experience() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <meshLine attach="geometry" points={linePoints} />
          <meshLineMaterial
            attach="material"
            transparent
            depthTest={false}
            lineWidth={0.01}
            color={'#9c88ff'}
            dashArray={1.0}
            dashRatio={0.0}
          />
        </mesh>
      </Canvas>
    </div>
  )
}
