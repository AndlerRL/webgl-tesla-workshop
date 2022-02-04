import type { MeshPhysicalMaterialProps } from '@react-three/fiber'

export interface Texture {
  repeat?: TextureRepeat
  name: TextureName
  assets: Partial<MeshPhysicalMaterialProps>
}

export type TextureRepeat = {
  x: number
  y: number
}

export type TextureName = 'wall' | 'garage' | 'floor' | 'asphalt'
