import React, { useState } from 'react'
import { Html } from '@react-three/drei'

export default function Box({ text, color, ...props }) {
  const [hovered, set] = useState(false)
  return (
    <mesh {...props} onPointerOver={(e) => set(true)} onPointerOut={(e) => set(false)}>
      <planeGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : color} />
      <Html position={[0, 0, 0]} className="label" center>
        {text}
      </Html>
    </mesh>
  )
}
