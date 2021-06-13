import { useState, useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from "three"
import { a, useTransition } from '@react-spring/three'
import "./ImageFadeMaterial"

export default function Experience({ location }) {
  const ref = useRef()
  const [texture1, texture2, dispTexture] = useLoader(THREE.TextureLoader, ['./Img2.jpg', './Img1.jpg', './disp.jpg'])
  const [hovered, setHover] = useState(false)

  const [item] = useState({
    scale: [0, 0, 0]
  })
  const transitions = useTransition(item, {
    from: { scale: [0, 0, 0]},
    enter: { scale: [1, 1, 1]},
    leave: { scale: [0, 0, 0]},
    config: {mass: 1, tension: 580, friction: 120},
    delay: 1000
  })

  useFrame((state, delta) => {
    ref.current.uTime += delta
    ref.current.dispFactor = THREE.MathUtils.lerp(ref.current.dispFactor, !!hovered, 0.1)
  })

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="pink" position={[-1, 3, 5]} />
      {transitions((props, item) => (
        <a.mesh scale={props.scale} onPointerMove={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
          <planeGeometry args={[1, 1, 64, 64]} />
          <imageFadeMaterial ref={ref} tex={texture1} tex2={texture2} disp={dispTexture} />
        </a.mesh>
      ))}
    </>
  )
}
