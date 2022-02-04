import type { MeshProps } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'

export const XWall: React.FC<MeshProps> = (props) => {

  return (
    <mesh {...props} receiveShadow castShadow>
      <boxBufferGeometry args={[0.25, 20, 100]} />
      <meshPhysicalMaterial
        emissive="#f0f0f0"
        clearcoat={1}
        roughness={1}
        clearcoatRoughness={0.75}
        side={THREE.BackSide}
      />
    </mesh>
  )
}

export const YWall: React.FC<MeshProps> = (props) => {

  return (
    <mesh {...props} receiveShadow castShadow>
      <boxBufferGeometry args={[100, 20, 0.25]} />
      <meshPhysicalMaterial
        emissive="#f0f0f0"
        roughness={1}
        clearcoat={1}
        clearcoatRoughness={0.75}
        side={THREE.BackSide}
      />
    </mesh>
  )
}