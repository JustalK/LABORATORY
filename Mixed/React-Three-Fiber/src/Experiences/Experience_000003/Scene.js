import React from 'react'
import { useThree } from '@react-three/fiber'
import Box from './Box'

export default function Scene() {
  const viewport = useThree((state) => state.viewport)
  return (
    <>
      <Box text={<span>This is HTML</span>} color="aquamarine" />
      <Box text={<h1>H1 caption</h1>} color="lightblue" position={[0, -viewport.height / 2, 0]} />
    </>
  )
}
