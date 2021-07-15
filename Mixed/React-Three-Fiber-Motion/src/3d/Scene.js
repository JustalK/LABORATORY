import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useHistory } from "react-router-dom";

export default function Transition({ location }) {
  const history = useHistory();
  const activated = useRef();

  const handleClick = () => {
    activated.current = true;
    history.push('/Experience_000002')
  }

  return (
    <div id="canvas-container">
      <button className="button-center" onClick={handleClick}>Experience 2</button>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} />
          <directionalLight color="pink" position={[0, 0, 5]} />
          <mesh position={[0, 0, 0 ]}>
            <boxGeometry />
            <meshPhongMaterial />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  )
}
