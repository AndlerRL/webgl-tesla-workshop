import {
  MeshPhysicalMaterialProps,
  MeshProps,
  useLoader,
} from '@react-three/fiber'
import create from 'zustand'
import * as THREE from 'three'

import { Texture, TextureName, TextureRepeat } from '../types/textures'

interface TextureState {
  textures: Texture[]
  setTextures: (name: TextureName, repeat?: TextureRepeat) => Texture
  changeTexture: (
    name: TextureName,
    assets: Partial<MeshPhysicalMaterialProps>,
    repeat?: TextureRepeat,
  ) => Texture | null
}

export const useTextures = (): TextureState => {
  const wall_texture_diff = useLoader(
    THREE.TextureLoader,
    '/assets/brickwall/textures/sandstone_brick_wall_01_diff_2k.jpg',
  )
  const wall_texture_disp = useLoader(
    THREE.TextureLoader,
    '/assets/brickwall/textures/sandstone_brick_wall_01_disp_2k.png',
  )

  const factory_wall_texture_diff = useLoader(
    THREE.TextureLoader,
    '/assets/factorywall/factory_wall_diff_2k.jpg',
  )
  const factory_wall_texture_disp = useLoader(
    THREE.TextureLoader,
    '/assets/factorywall/factory_wall_disp_2k.png',
  )
  // const factory_wall_texture_nor_gl = useLoader(THREE.TextureLoader, '/assets/factorywall/factory_wall_nor_gl_2k.exr')
  const factory_wall_texture_rough = useLoader(
    THREE.TextureLoader,
    '/assets/factorywall/factory_wall_rough_2k.jpg',
  )

  const concrete_floor_texture_diff = useLoader(
    THREE.TextureLoader,
    '/assets/concretefloor/concrete_floor_02_diff_2k.jpg',
  )
  const concrete_floor_texture_disp = useLoader(
    THREE.TextureLoader,
    '/assets/concretefloor/concrete_floor_02_disp_2k.png',
  )
  // const concrete_floor_texture_nor_gl = useLoader(THREE.TextureLoader, '/assets/concretefloor/concrete_floor_02_nor_gl_2k.exr')
  const concrete_floor_texture_rough = useLoader(
    THREE.TextureLoader,
    '/assets/concretefloor/concrete_floor_02_rough_2k.jpg',
  )

  const asphalt_texture_diff = useLoader(
    THREE.TextureLoader,
    '/assets/asphalt/asphalt_02_diff_2k.jpg',
  )
  const asphalt_texture_disp = useLoader(
    THREE.TextureLoader,
    '/assets/asphalt/asphalt_02_disp_2k.png',
  )
  // const asphalt_texture_nor_gl = useLoader(THREE.TextureLoader, '/assets/asphalt/asphalt_02_nor_gl_2k.exr')
  const asphalt_texture_rough = useLoader(
    THREE.TextureLoader,
    '/assets/asphalt/asphalt_02_rough_2k.jpg',
  )

  const setTextures = (name: TextureName, repeat?: TextureRepeat) => {
    const texture: Texture = { name, assets: {}, repeat }

    switch (name) {
      case 'asphalt':
        texture.assets = {
          map: asphalt_texture_diff,
          displacementMap: asphalt_texture_disp,
          // envMap: asphalt_texture_nor_gl,
          roughnessMap: asphalt_texture_rough,
        }
        break
      case 'floor':
        texture.assets = {
          map: concrete_floor_texture_diff,
          displacementMap: concrete_floor_texture_disp,
          // envMap: concrete_floor_texture_nor_gl,
          roughnessMap: concrete_floor_texture_rough,
        }
        break
      case 'garage':
        texture.assets = {
          map: factory_wall_texture_diff,
          displacementMap: factory_wall_texture_disp,
          // envMap: factory_wall_texture_nor_gl,
          roughnessMap: factory_wall_texture_rough,
        }
        break
      case 'wall':
      default:
        texture.assets = {
          map: wall_texture_diff,
          displacementMap: wall_texture_disp,
        }
        break
    }

    Object.keys(texture.assets).forEach((asset: string) => {
      const key = asset as keyof MeshPhysicalMaterialProps

      texture.assets[key].wrapS = THREE.RepeatWrapping
      texture.assets[key].wrapT = THREE.RepeatWrapping

      if (repeat) {
        texture.assets[key].repeat.set(repeat.x, repeat.y)
      }
    })

    // set((state) => ({
    //   textures: [...state.textures, texture]
    // }))

    return texture
  }

  const changeTexture = (
    name: TextureName,
    assets: Partial<MeshPhysicalMaterialProps>,
  ) => {
    let texture: Texture | null = null

    // set((state) => {
    //   const mutable_texture_state = state.textures
    //   texture = state.textures.find((tx: Texture) => tx.name === name) || null

    //   if (!texture) return state

    //   const texture_index = state.textures.findIndex((tx: Texture) => tx.name === name)

    //   texture = {
    //     ...texture,
    //     assets
    //   }

    //   mutable_texture_state.splice(texture_index, 1, texture)

    //   return { textures: mutable_texture_state }
    // })

    return texture
  }

  return {
    textures: [],
    setTextures,
    changeTexture,
  }
}
