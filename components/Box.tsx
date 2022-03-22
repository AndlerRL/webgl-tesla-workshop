import type { NextComponentType } from 'next'
import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { MeshProps, ThreeEvent, useFrame, useLoader, useThree, Vector3 } from '@react-three/fiber'
import { useStore } from '../store/mesh-store';
import { scaleDown, scaleUp } from '../util/helpers'
import { ActiveMesh } from '../store/model/Mesh'
import { useDrag } from 'react-use-gesture';

export const Box: React.FC<MeshProps> = (props) => {
  const { dragging, active_mesh, setActivityMesh, setActiveMesh, setDrag } = useStore()
  const ref = useRef<THREE.Mesh>(null!)
  const [position, setPosition] = useState(props.position || [0, 0, 0])
  const { size, viewport, camera, gl } = useThree();
  const aspect = size.width / viewport.width;
  const texture = useLoader(THREE.TextureLoader, '/assets/wood.jpg')

  useFrame(state => {
    if (!ref.current) return

    ref.current.rotation.y += 0.01

    if (dragging) ref.current.rotation.x += 0.01
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

    setDrag(true)
    setActiveMesh(new_mesh)
    console.log('onPointerDownHandler =>', e)
  }

  const onPointerOverHandler = (e: ThreeEvent<PointerEvent>) => {
    scaleUp(ref.current)
  }

  const onPointerOutHandler = (e: ThreeEvent<PointerEvent>) => {
    if (!active_mesh?.active) {
      scaleDown(ref.current)
    }

    setDrag(false)
  }

  const bind = useDrag(({ offset: [x, y] }) => {
    const [, , z] = ref.current.position;

    setDrag(true)
    setPosition([x / (aspect * 8), -y / (aspect * 8), z]);
  }, { pointerEvents: true });

  return (
    <mesh
      ref={ref}
      {...bind()}
      position={position as Vector3}
      onClick={onPointerDownHandler}
      onPointerOver={onPointerOverHandler}
      onPointerOut={onPointerOutHandler}
      smoothShadow
      castShadow
      receiveShadow
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
  )
}