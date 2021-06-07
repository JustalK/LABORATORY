import * as THREE from 'three'
import React, { createContext, useMemo, useRef, useState, useContext, useLayoutEffect, forwardRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Line, Html } from '@react-three/drei'
import without from 'lodash-es/without'
import "./ImageCustomMaterial"

const temp = new THREE.Vector3()
const context = createContext()

function Nodes({ children, ...props }) {
  const [nodes, set] = useState([])
  const lines = useMemo(() => {
    const lines = []
    for (let node of nodes) {
      if (node.connectedTo.length) {
        const connections = node.connectedTo.map((ref) => [node.position, ref.current.position])
        connections.forEach(([start, end]) => {
          start = start.clone().add(temp.set(0, 0, 0))
          end = end.clone().add(temp.set(0, 0, 0))
          const mid = start.clone().add(end.clone().sub(start)).add(new THREE.Vector3(0, (start.y - end.y), 0)) // prettier-ignore
          lines.push(new THREE.QuadraticBezierCurve3(start, mid, end).getPoints(50))
        })
      }
    }
    return lines
  }, [nodes])

  const group = useRef()
  useFrame((_, delta) => group.current.children.forEach((line) => (line.material.uniforms.dashOffset.value -= delta / 2)))

  return (
    <context.Provider value={set}>
      <group ref={group}>
        {lines.map((points, i) => (
          <Line key={i} points={points} {...props} />
        ))}
      </group>
      {children}
    </context.Provider>
  )
}

const Node = forwardRef(({ name, startDate, connectedTo = [], position = [0, 0, 0], ...props }, ref) => {
  const set = useContext(context)
  const material = useRef()
  const pos = useMemo(() => new THREE.Vector3(...position), [position])
  const state = useMemo(() => ({ position: pos, connectedTo }), [pos, connectedTo])
  const [hovered, setHovered] = useState(false)

  useLayoutEffect(() => {
    set((nodes) => [...nodes, state])
    return () => set((nodes) => without(nodes, state))
  }, [state, pos, set])

  useFrame((state, delta) => {
      material.current.uTime += delta
      material.current.uVelo = hovered ? Math.min(1.0, material.current.uVelo + 0.05) : Math.max(0.0, material.current.uVelo - 0.05)
  })

  return (
    <mesh ref={ref} position={pos} {...props} onPointerEnter={(e) => setHovered(true)} onPointerLeave={(e) => setHovered(false)} onPointerMove={(e) => {
      material.current.uMouse = e.intersections[0].uv
    }}>
      <circleGeometry args={[0.7, 32]} />
      <imageCustomMaterial ref={material} />
      <Html position={[0, 0, 0]} className="name" center>
        {name}
      </Html>
      <Html style={{transform: `rotateZ(-90deg)`}} position={[-1.0, 0.1, 0]} className="date" center>
        {startDate}
      </Html>
    </mesh>
  )
})

export { Nodes, Node }
