import { extend, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { MeshLine, MeshLineMaterial } from 'meshline'
import { useRef } from 'react'

const points = [
  new THREE.Vector3( -1, 0, 0 ),
  new THREE.Vector3( -0.5, 0, 0 ),
  new THREE.Vector3( 3, 3, 0 ),
  new THREE.Vector3( 5, 0, 0 ),
];
const linePoints = new THREE.CatmullRomCurve3(points).getPoints(50);

extend({ MeshLine, MeshLineMaterial })

export default function Experience() {
  const material = useRef(null)
  useFrame(() => (material.current.uniforms.dashOffset.value -= 0.01))

  return (
    <>
      <mesh>
        <meshLine attach="geometry" points={linePoints} />
        <meshLineMaterial
          ref={material}
          attach="material"
          transparent
          depthTest={false}
          lineWidth={0.01}
          color={'#9c88ff'}
          dashArray={2.0}
          dashRatio={0.9}
        />
      </mesh>
    </>
  )
}
