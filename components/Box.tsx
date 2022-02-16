import type { NextComponentType } from 'next'
import * as THREE from 'three'
import React, { useRef } from 'react'
import { MeshProps, useFrame, useLoader } from '@react-three/fiber'
import { ContactShadows, useTexture } from '@react-three/drei'

export const Box: React.FC<MeshProps> = (props) => {
  const ref = useRef<THREE.Mesh>(null!)
  const texture = useLoader(THREE.TextureLoader, '/assets/wood.jpg')
  useFrame(state => {
    if (!ref.current) return

    ref.current.rotation.y += 0.01
  })


  return (
    <>
      <ContactShadows smooth width={10} height={10} opacity={0.5} blur={2} resolution={1080} far={10} rotation={[Math.PI / 2, 0, 0]} />
      <mesh ref={ref} {...props} smoothShadow castShadow receiveShadow>\
        <boxBufferGeometry />
        <meshPhysicalMaterial
          color="#5E4A35"
          map={texture}
          // opacity={0.7}
          // transparent
          metalness={0}
          roughness={1}
          clearcoat={0.5}
          clearcoatRoughness={0.5}
        />
      </mesh>
    </>
  )
}