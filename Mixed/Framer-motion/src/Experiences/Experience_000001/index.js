import { Canvas } from '@react-three/fiber'
import { motion } from "framer-motion"

export default function Experience() {
  return (
    <div id="canvas-container">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="blue" position={[0, 0, 5]} />
          <mesh position={[0, 0, 0 ]}>
            <boxGeometry />
            <meshPhongMaterial />
          </mesh>
        </Canvas>
      </motion.div>
    </div>
  )
}
