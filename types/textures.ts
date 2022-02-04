import type { MeshProps } from "@react-three/fiber"

export interface Texture {
  repeat?: {
    x: number
    y: number
  }
  name: TextureName
}

export type TextureName = 'wall' | 'garage' | 'floor'