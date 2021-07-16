import React, { useRef } from 'react'
import Transitions from '../../Transitions'

export default function Transition() {
  const activated = useRef(false)

  return (
    <>
      <Transitions activated={activated} route='/a' />
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh position={[0, 0, 0 ]} onClick={() => activated.current = true}>
        <boxGeometry />
        <meshPhongMaterial />
      </mesh>
    </>
  )
}
