import { LinearFilter } from "three"
import { useAspect, useTexture } from "@react-three/drei"

export default function Background() {
  const texture = useTexture("1.jpeg")
  const size = useAspect(5000, 3800)
  return (
    <mesh layers={1} scale={size}>
      <planeGeometry />
      <meshBasicMaterial map={texture} map-minFilter={LinearFilter} depthTest={false} />
    </mesh>
  )
}
