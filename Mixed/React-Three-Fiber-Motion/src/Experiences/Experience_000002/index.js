import { useLocation } from "wouter";

export default function Transition() {
  const [location, setLocation] = useLocation();

  const handleClick = () => {
    setLocation("/a")
  }

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh position={[0, 0, 0 ]} onClick={handleClick}>
        <boxGeometry />
        <meshPhongMaterial />
      </mesh>
    </>
  )
}
