import type { MeshProps } from '@react-three/fiber'
import React from 'react'

export const Bulb: React.FC<MeshProps> = (props) => {

  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 20, 20]} />
      <meshPhongMaterial emissive="#FFFFA7" />
    </mesh>
  )
}