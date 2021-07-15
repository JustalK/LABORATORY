
export default function Transition() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="pink" position={[0, 0, 5]} />
      <mesh position={[0, 0, 0 ]}>
        <boxGeometry />
        <meshPhongMaterial />
      </mesh>
    </>
  )
}
