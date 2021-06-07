import * as THREE from 'three'
import React, { createContext, useMemo, useRef, useState, useContext, useLayoutEffect, forwardRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Line, Html } from '@react-three/drei'
import { useDrag } from 'react-use-gesture'
import without from 'lodash-es/without'

const removeZ = new THREE.Vector3(1, 1, 0)
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
          lines.push(new THREE.QuadraticBezierCurve3(start, mid, end).getPoints(20))
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
  const { size, camera } = useThree()
  const [pos, setPos] = useState(() => new THREE.Vector3(...position))
  const state = useMemo(() => ({ position: pos, connectedTo }), [pos, connectedTo])

  useLayoutEffect(() => {
    // Register this node on mount
    set((nodes) => [...nodes, state])
    // Unregister on unmount
    return () => set((nodes) => without(nodes, state))
  }, [state, pos])

  // Drag n drop, hover
  const [hovered, setHovered] = useState(false)

  return (
    <mesh ref={ref} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} position={pos} {...props}>
      <circleGeometry args={[0.8, 32]} />
      <meshBasicMaterial color={'#ff1050'} />
      <Html position={[0, 0, 0]} className="name" center>
        {name}
      </Html>
      <Html style={{transform: `rotateZ(-90deg)`}} position={[-1.35, 0.1, 0]} className="date" center>
        {startDate}
      </Html>
    </mesh>
  )
})

export { Nodes, Node }
