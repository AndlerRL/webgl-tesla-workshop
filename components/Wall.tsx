import { Bounds, RoundedBox, useGLTF } from '@react-three/drei'
import { MeshProps, useLoader } from '@react-three/fiber'
import React, { useMemo } from 'react'
import * as THREE from 'three'
import { GeometryUtils, PlaneBufferGeometry } from 'three'
import { useTextures } from '../hooks/useTextures'

export const XGarageDoor: React.FC<MeshProps> = (props) => {
  const { setTextures } = useTextures()
  const x_garage_texture = setTextures('garage', { x: 5, y: 1 })
  const x_wall_texture = setTextures('wall', { x: 10, y: 1 })

  return (
    <>
      <RoundedBox args={[1.93, 11, 27]} radius={0.05} smoothness={4} {...props} receiveShadow castShadow>
        <meshPhysicalMaterial
          color="#5d5c56"
          clearcoat={1}
          metalness={1}
          reflectivity={0.1}
          roughness={1}
          clearcoatRoughness={0.6}
        />
      </RoundedBox>
      <mesh {...props} receiveShadow>
        <boxBufferGeometry args={[1, 10, 25]} />
        <meshPhysicalMaterial
          clearcoat={1}
          metalness={0.83}
          roughness={1}
          clearcoatRoughness={0.6}
          {...x_garage_texture.assets}
        />
      </mesh>
    </>
  )
}

export const XWall: React.FC<MeshProps> = (props) => {
  const { setTextures } = useTextures()
  const x_wall_texture = setTextures('wall', { x: 7, y: 1 })

  return (
    <>
      <RoundedBox args={[0.8, 20.75, 100.88]} radius={0.4} smoothness={10} {...props} receiveShadow castShadow>
        <meshPhysicalMaterial
          color="#6b625f"
          clearcoat={1}
          roughness={1}
          clearcoatRoughness={0.75}
        />
      </RoundedBox>
      <Bounds fit clip damping={6} margin={1.2} makeDefault>
        <mesh {...props} receiveShadow>
          <boxBufferGeometry args={[0.25, 20, 100]} />
          <meshPhysicalMaterial
            emissive="#3a2f2e"
            clearcoat={1}
            roughness={1}
            clearcoatRoughness={0.75}
            {...x_wall_texture.assets}
          />
        </mesh>
      </Bounds>
    </>
  )
}

export const YWall: React.FC<MeshProps> = (props) => {
  const { setTextures } = useTextures()
  const y_wall_texture = setTextures('wall', { x: 7, y: 1 })

  return (
    <>
      <RoundedBox args={[100.88, 20.75, 0.8]} radius={0.4} smoothness={10} {...props} receiveShadow castShadow>
        <meshPhysicalMaterial
          color="#6b625f"
          roughness={1}
          clearcoat={1}
          clearcoatRoughness={0.75}
        />
      </RoundedBox>
      <Bounds fit clip damping={6} margin={1.2} makeDefault>
        <mesh {...props} receiveShadow>
          <boxBufferGeometry args={[100, 20, 0.25]} />
          <meshPhysicalMaterial
            emissive="#3a2f2e"
            roughness={1}
            clearcoat={1}
            clearcoatRoughness={0.75}
            {...y_wall_texture.assets}
          />
        </mesh>
      </Bounds>
    </>
  )
}
