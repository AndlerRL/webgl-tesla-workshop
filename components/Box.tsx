import type { NextComponentType } from 'next'
import React, { useRef } from 'react'
import { MeshProps, useFrame } from '@react-three/fiber'

export const Box: React.FC<MeshProps> = (props) => {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame(state => {
    if (!ref.current) return

    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })


  return (
    <mesh ref={ref} {...props}>
      <boxBufferGeometry />
      <meshLambertMaterial color="#34120f" />
    </mesh>
  )
}