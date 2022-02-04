import { MeshProps, useLoader } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'

export const XWall: React.FC<MeshProps> = (props) => {
  const wall_texture_diff = useLoader(THREE.TextureLoader, '/assets/brickwall/textures/sandstone_brick_wall_01_diff_2k.jpg')
  const wall_texture_disp = useLoader(THREE.TextureLoader, '/assets/brickwall/textures/sandstone_brick_wall_01_disp_2k.png')

  wall_texture_diff.wrapS = THREE.RepeatWrapping;
  wall_texture_diff.wrapT = THREE.RepeatWrapping;
  wall_texture_diff.repeat.set(10, 1)
  wall_texture_disp.repeat.set(10, 1)
  return (
    <mesh {...props} receiveShadow castShadow>
      <boxBufferGeometry args={[0.25, 20, 100]} />
      <meshPhysicalMaterial
        clearcoat={1}
        roughness={1}
        clearcoatRoughness={0.75}
        displacementMap={wall_texture_disp}
        map={wall_texture_diff}
      />
    </mesh>
  )
}

export const YWall: React.FC<MeshProps> = (props) => {
  const wall_texture_diff = useLoader(
    THREE.TextureLoader,
    '/assets/brickwall/textures/sandstone_brick_wall_01_diff_2k.jpg'
  )
  const wall_texture_disp = useLoader(
    THREE.TextureLoader,
    '/assets/brickwall/textures/sandstone_brick_wall_01_disp_2k.png'
  )


  wall_texture_diff.wrapS = THREE.RepeatWrapping;
  wall_texture_diff.wrapT = THREE.RepeatWrapping;
  wall_texture_diff.repeat.set(10, 1)
  wall_texture_disp.repeat.set(10, 1)
  return (
    <mesh {...props} receiveShadow castShadow>
      <boxBufferGeometry args={[100, 20, 0.25]} />
      <meshPhysicalMaterial
        roughness={1}
        clearcoat={1}
        clearcoatRoughness={0.75}
        displacementMap={wall_texture_disp}
        map={wall_texture_diff}
      />
    </mesh>
  )
}