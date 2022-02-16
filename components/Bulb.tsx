import { Cylinder, Sphere } from '@react-three/drei'
import type { MeshProps } from '@react-three/fiber'
import React from 'react'

export const Bulb: React.FC<MeshProps> = (props) => {

  return props.position && props.position[1] ? (
    <>
      <Cylinder args={[0.015, 0.015, 1.3]} position={[0, 20, 0]} castShadow>
        <meshStandardMaterial color="#333" />
      </Cylinder>
      <Cylinder args={[0.03, 0.03, 0.2]} position={[0, props.position[1] as number + 0.18, 0]} castShadow>
        <meshStandardMaterial color="#333" />
      </Cylinder>
      <Cylinder args={[0.01, 0.26, 0.2]} position={[0, props.position[1] as number + 0.10, 0]} castShadow>
        <meshStandardMaterial color="#333" />
      </Cylinder>
      <Sphere args={[0.15, 20, 20]} {...props}>
        <pointLight castShadow />
        <meshPhongMaterial emissive="#FFFFA7" />
      </Sphere>
    </>
  ) : <></>
}