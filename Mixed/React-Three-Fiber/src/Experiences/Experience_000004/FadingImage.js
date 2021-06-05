import React, { useRef, useState } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from "three"
import "./ImageFadeMaterial"

export default function Scene() {
  const ref = useRef()
  const [texture1, texture2, dispTexture] = useLoader(THREE.TextureLoader, ['./Img2.jpg', './Img1.jpg', './disp.jpg'])
  const [hovered, setHover] = useState(false)

  useFrame(() => (ref.current.dispFactor = THREE.MathUtils.lerp(ref.current.dispFactor, !!hovered, 0.1)))
  return (
    <mesh onPointerMove={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
      <planeGeometry />
      <imageFadeMaterial ref={ref} tex={texture1} tex2={texture2} disp={dispTexture} />
    </mesh>
  )
}
