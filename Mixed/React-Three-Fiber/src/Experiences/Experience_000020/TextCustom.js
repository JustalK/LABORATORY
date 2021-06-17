import React, { useRef, useState, useEffect } from 'react'
import { useFrame, extend } from '@react-three/fiber'
import { Text, preloadFont } from "troika-three-text";
import "./TextOutlineMaterial"
import Roboto from './roboto.woff'
extend({ Text });

export default function Scene() {
  const ref = useRef()
  const [hover, setHover] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    preloadFont({font: "https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff", characters: 'abcdefghijklmnopqrstuvwxyz'}, () => {
        setLoaded(true)
      }
    )
  }, [setLoaded])

  useFrame((state, delta) => {
    if (loaded) {
      ref.current.uTime += delta
      ref.current.uVelo = hover ? Math.min(1.0, ref.current.uVelo + 0.05) : Math.max(0.0, ref.current.uVelo - 0.05)
    }
  })

  return (
    loaded &&
    <text
      position-z={-2}
      fontSize={1}
      color= "#99ccff"
      maxWidth={300}
      text="Hello World!"
      font={Roboto}
      anchorX="center"
      anchorY="middle"
      onPointerEnter={(e) => setHover(true)} onPointerLeave={(e) => setHover(false)} onPointerMove={(e) => {
        ref.current.uMouse = e.intersections[0].uv
      }}
    >
      <textOutlineMaterial ref={ref} />
    </text>
  )
}
