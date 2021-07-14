import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'
import { useHistory } from "react-router-dom";
import DurationTransition from '../../Transitions/DurationTransition'

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
      <DurationTransition />
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} />
          <directionalLight color="pink" position={[0, 0, 5]} />
          <Scene activated={activated} />
        </Suspense>
      </Canvas>
    </div>
  )
}
