import { Canvas, extend } from '@react-three/fiber'
import { Text } from "troika-three-text";

extend({ Text });

export default function Experience() {
  return (
    <div id="canvas-container">
      <Canvas pixelRatio={window.devicePixelRatio}>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <text
          position-z={-180}
          fontSize={50}
          color= "#99ccff"
          maxWidth={300}
          text="Hello World!"
          font="https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"
          anchorX="center"
          anchorY="middle"
        >
          <meshPhongMaterial />
        </text>
      </Canvas>
    </div>
  )
}
