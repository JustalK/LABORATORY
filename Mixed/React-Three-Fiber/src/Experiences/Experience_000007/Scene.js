import React, { useState, createRef } from 'react'
import { useThree } from '@react-three/fiber'
import { Nodes, Node } from './Nodes'

export default function Scene() {
  const viewport = useThree((state) => state.viewport)
  const [[birth, highschool, prepa, engineering, supersogo, idinteractive, rumarocket, manypixels]] = useState(() => [...Array(8)].map(createRef))
  return (
    <>
      <Nodes dashed color="#ff1050" lineWidth={1} dashSize={0.4} gapSize={0.1}>
        <Node ref={birth} name="Birth" startDate="1991" position={[-0.2 * viewport.width, 0.4 * viewport.height, 0]} connectedTo={[highschool]} />
        <Node ref={highschool} name="High School" startDate="2009" position={[0, 0.3 * viewport.height, 0]} connectedTo={[prepa]} />
        <Node ref={prepa} name="Prepa" startDate="2012" position={[0.2 * viewport.width, 0.2 * viewport.height, 0]} connectedTo={[engineering]} />
        <Node ref={engineering} name="High School" startDate="2016" position={[0, 0.1 * viewport.height, 0]} connectedTo={[supersogo]} />
        <Node ref={supersogo} name="Supersogo Co.LTD" startDate="2016" position={[0.2 * viewport.width, 0, 0]} connectedTo={[idinteractive]} />
        <Node ref={idinteractive} name="ID interactive" startDate="2016" position={[0, -0.1 * viewport.height, 0]}  connectedTo={[rumarocket, manypixels]} />
        <Node ref={rumarocket} name="Rumarocket" startDate="2018" position={[0.2 * viewport.width, -0.3 * viewport.height, 0]} />
        <Node ref={manypixels} name="ManyPixels" startDate="2021" position={[0, -0.3 * viewport.height, 0]} />
      </Nodes>
    </>
  )
}
