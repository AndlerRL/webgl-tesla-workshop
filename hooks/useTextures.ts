import { MeshProps, useLoader } from '@react-three/fiber'
import create from 'zustand'
import * as THREE from 'three'

import { Texture, TextureName } from '../types/textures'

interface TextureState {
  textures: Texture[]
  setTextures: (name: TextureName) => Texture
  changeTexture: (name: TextureName, assets: MeshProps[]) => Texture | null
}

const useTextures = create<TextureState>((set, get) => {
  const wall_texture_diff = useLoader(THREE.TextureLoader, '/assets/brickwall/textures/sandstone_brick_wall_01_diff_2k.jpg')
  const wall_texture_disp = useLoader(THREE.TextureLoader, '/assets/brickwall/textures/sandstone_brick_wall_01_disp_2k.png')

  const setTextures = (name: TextureName) => {
    const texture: Texture = { name }

    set((state) => ({
      textures: [...state.textures, texture]
    }))

    return texture
  }

  const changeTexture = (name: TextureName, assets: MeshProps) => {
    let texture: Texture | null = null

    set((state) => {
      const mutable_texture_state = state.textures
      texture = state.textures.find((tx: Texture) => tx.name === name) || null

      if (!texture) return state

      const texture_index = state.textures.findIndex((tx: Texture) => tx.name === name)

      // TODO: ASSETS!
      mutable_texture_state.splice(texture_index, 1, texture)

      return { textures: mutable_texture_state }
    })

    return texture
  }

  return {
    textures: [],
    setTextures,
    changeTexture
  }
})