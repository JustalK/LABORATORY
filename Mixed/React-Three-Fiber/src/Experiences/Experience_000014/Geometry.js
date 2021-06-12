import { a } from '@react-spring/three'

export default function Geometry({ r, position, ...props }) {
  return (
    <group position={position}>
      <a.mesh {...props} />
    </group>
  )
}
