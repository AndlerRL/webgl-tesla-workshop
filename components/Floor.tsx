import { Bounds, Plane } from '@react-three/drei'
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
      <axesHelper args={[200]} />
      <Bounds fit clip damping={6} margin={1.2}>
        <Plane
          args={[400, 400]}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
          castShadow
          position={[0, -0.5, 0]}
        >
          <meshPhysicalMaterial
            clearcoat={1}
            clearcoatRoughness={1}
            roughness={1}
            reflectivity={0.1}
            flatShading
            refractionRatio={0.1}
            {...floor_texture.assets}
          />
        </Plane>
      </Bounds>
    </>
  )
}
