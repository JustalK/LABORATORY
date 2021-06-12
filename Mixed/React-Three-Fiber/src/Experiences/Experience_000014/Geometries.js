import React, { useState } from 'react'
import { useTransition } from '@react-spring/three'
import * as THREE from 'three'
import Geometry from './Geometry'

function Geometries() {
  const [items] = useState([
    { position: [0.25, 1.8, -6], r: 0.5, geometry: new THREE.SphereBufferGeometry(1, 32, 32) },
    { position: [-1.5, 0, 2], r: 0.2, geometry: new THREE.TetrahedronBufferGeometry(2) },
    { position: [1, -0.75, 4], r: 0.3, geometry: new THREE.CylinderBufferGeometry(0.8, 0.8, 2, 32) }
  ])
  const transition = useTransition(items,  {
    from: { scale: [0, 0, 0], rotation: [0, 0, 0] },
    enter: ({ r }) => ({ scale: [1, 1, 1], rotation: [r * 3, r * 3, r * 3] }),
    leave: { scale: [0.1, 0.1, 0.1], rotation: [0, 0, 0] },
    config: { mass: 5, tension: 1000, friction: 100 },
    trail: 100
  })
  return (
    <>
      {
        transition((props, { position: [x, y, z], r, geometry }) => (
          <Geometry position={[x * 3, y * 3, z]} material={new THREE.MeshStandardMaterial({color: 'red'})} geometry={geometry} r={r} {...props} />
        ))
      }
    </>
  )
}

export default Geometries
