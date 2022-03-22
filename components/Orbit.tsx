import { FlyControls, OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export const Orbit = () => {
  const { camera, gl } = useThree()

  return (
    <>
      <OrbitControls args={[camera, gl.domElement]} position={[0, 5, 0]} />
      <FlyControls movementSpeed={50} args={[camera, gl.domElement]} position={[0, 5, 0]} />
    </>
  )
}
