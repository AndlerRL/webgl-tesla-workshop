import { ContactShadows, Plane } from '@react-three/drei'
import type { MeshProps } from '@react-three/fiber'
import React from 'react'
import { useTextures } from '../hooks/useTextures'
import { Orbit } from './Orbit'

export const Floor: React.FC<MeshProps> = (props) => {
  const { setTextures } = useTextures()
  const floor_texture = setTextures('floor', { x: 10, y: 10 })

  return (
    <>
      <Orbit />
      <axesHelper args={[5]} />
      <Plane
        args={[100, 100]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshPhysicalMaterial
          clearcoat={0.5}
          roughness={1}
          clearcoatRoughness={1}
          {...floor_texture.assets}
        />
      </Plane>
    </>
  )
}
