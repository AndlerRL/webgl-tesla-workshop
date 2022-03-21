import type { NextComponentType } from 'next'
import * as THREE from 'three'
import React, { useRef } from 'react'
import { MeshProps, ThreeEvent, useFrame, useLoader } from '@react-three/fiber'
import { ContactShadows, useTexture } from '@react-three/drei'
import { Color } from 'three'
import { useStore } from '../store/mesh-store';
import { scaleDown, scaleUp } from '../util/helpers'
import { ActiveMesh } from '../store/model/Mesh'

export const Box: React.FC<MeshProps> = (props) => {
  const { active_mesh, setActivityMesh, setActiveMesh } = useStore()
  const ref = useRef<THREE.Mesh>(null!)
  const texture = useLoader(THREE.TextureLoader, '/assets/wood.jpg')

  useFrame(state => {
    if (!ref.current) return

    ref.current.rotation.y += 0.01
  })

  const onPointerDownHandler = (e: ThreeEvent<PointerEvent>) => {
    const new_mesh = {
      ...ref.current,
      active: true
    } as ActiveMesh

    if (active_mesh) {
      scaleDown(active_mesh)
      setActivityMesh(false)
    }
    setActiveMesh(new_mesh)
    console.log('onPointerDownHandler =>', e)
  }

  const onPointerEnterHandler = (e: ThreeEvent<PointerEvent>) => {
    scaleUp(ref.current)

    console.log('onPointerEnterHandler =>', e)
  }

  const onPointerLeaveHandler = (e: ThreeEvent<PointerEvent>) => {
    if (!active_mesh?.active) {
      scaleDown(ref.current)
    }


    console.log('onPointerLeaveHandler =>', e)
  }

  return (
    <>
      <ContactShadows smooth width={10} height={10} opacity={0.5} blur={2} resolution={1080} far={10} rotation={[Math.PI / 2, 0, 0]} />
      <mesh
        ref={ref}
        onPointerDown={onPointerDownHandler}
        onPointerEnter={onPointerEnterHandler}
        onPointerLeave={onPointerLeaveHandler}
        smoothShadow
        castShadow
        receiveShadow
        {...props}
      >
        <boxBufferGeometry />
        <meshPhysicalMaterial
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