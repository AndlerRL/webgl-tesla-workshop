import { RoundedBox } from '@react-three/drei'
import { MeshProps, useLoader } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'
import { useTextures } from '../hooks/useTextures'

export const XGarageDoor: React.FC<MeshProps> = (props) => {
  const { setTextures } = useTextures()
  const x_garage_texture = setTextures('garage', { x: 5, y: 1 })
  const x_wall_texture = setTextures('wall', { x: 10, y: 1 })

  return (
    <>
      <RoundedBox args={[1, 11, 27]} radius={0.05} smoothness={4} {...props} receiveShadow castShadow>
        <meshPhongMaterial
          attach="material"
          color="#12240e"
          clearcoat={1}
          metalness={1}
          roughness={1}
          clearcoatRoughness={1}
        />
      </RoundedBox>
      <mesh {...props} receiveShadow castShadow>
        <boxBufferGeometry args={[1, 10, 25]} />
        <meshPhysicalMaterial
          clearcoat={1}
          metalness={0.83}
          roughness={1}
          clearcoatRoughness={1}
          {...x_garage_texture.assets}
        />
      </mesh>
    </>
  )
}

export const XWall: React.FC<MeshProps> = (props) => {
  const { setTextures } = useTextures()
  const x_wall_texture = setTextures('wall', { x: 10, y: 1 })

  console.log(x_wall_texture, 'x_wall_texture')

  return (
    <mesh {...props} receiveShadow castShadow>
      <boxBufferGeometry args={[0.25, 20, 100]} />
      <meshPhysicalMaterial
        clearcoat={1}
        roughness={1}
        clearcoatRoughness={0.75}
        {...x_wall_texture.assets}
      />
    </mesh>
  )
}

export const YWall: React.FC<MeshProps> = (props) => {
  const { setTextures } = useTextures()
  const y_wall_texture = setTextures('wall', { x: 10, y: 1 })

  console.log(y_wall_texture)

  return (
    <mesh {...props} receiveShadow castShadow>
      <boxBufferGeometry args={[100, 20, 0.25]} />
      <meshPhysicalMaterial
        roughness={1}
        clearcoat={1}
        clearcoatRoughness={0.75}
        {...y_wall_texture.assets}
      />
    </mesh>
  )
}
