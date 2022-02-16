import { MapControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export const Orbit = () => {
  const { camera, gl } = useThree()

  return (
    <MapControls args={[camera, gl.domElement]} target={[0, 0, 0]} />
  )
}
