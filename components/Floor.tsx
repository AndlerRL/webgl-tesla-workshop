import { ContactShadows, Plane } from '@react-three/drei'
import type { MeshProps } from '@react-three/fiber'
import React from 'react'
import { Orbit } from './Orbit'

export const Floor: React.FC<MeshProps> = (props) => {


  return (
    <>
      <Orbit />
      <axesHelper args={[5]} />
      <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow castShadow>
        <meshPhysicalMaterial
          color="#e0e0e0"
        />
      </Plane>
    </>
  )
}