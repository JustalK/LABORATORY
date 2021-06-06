import React from 'react'
import { useThree } from '@react-three/fiber'
import Page from './Page'

export default function Scene() {
  const viewport = useThree((state) => state.viewport)
  return (
    <>
      <Page text={<h1>1</h1>} color="aquamarine" />
      <Page text={<h1>2</h1>} color="lightblue" position={[0, -viewport.height, 0]} />
      <Page text={<h1>3</h1>} color="lightblue" position={[0, -2 * viewport.height, 0]} />
      <Page text={<h1>4</h1>} color="lightblue" position={[0, -3 * viewport.height, 0]} />
    </>
  )
}
