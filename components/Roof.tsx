import { Cone, Plane, Polyhedron, RoundedBox, Tetrahedron } from '@react-three/drei'
import type { MeshProps } from '@react-three/fiber'
import React from 'react'
import { useTextures } from '../hooks/useTextures'
import { Orbit } from './Orbit'

export const Roof: React.FC<MeshProps> = (props) => {
  const { setTextures } = useTextures()
  const floor_texture = setTextures('floor', { x: 10, y: 10 })

  return (
    <>
      <RoundedBox
        args={[110, 2.5, 110]}
        position={[0, 20.7, 0]}
        receiveShadow
        castShadow
        radius={0.2}
        smoothness={10}
      >
        <meshPhysicalMaterial
          color="#333"
          clearcoat={1}
          clearcoatRoughness={1}
          roughness={1}
          reflectivity={0.1}
          flatShading
          refractionRatio={0.1}
        />
      </RoundedBox>
      <Plane
        args={[100, 100]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 22, 0]}
        receiveShadow
        castShadow
      >
        <meshPhysicalMaterial
          color="#333"
          clearcoat={1}
          clearcoatRoughness={1}
          roughness={1}
          reflectivity={0.1}
          flatShading
          refractionRatio={0.1}
        />
      </Plane>
    </>
  )
}
