import * as THREE from "three";

export interface ActiveMesh extends THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]> {
  active: boolean
}

export interface MeshState {
  active_mesh: ActiveMesh | null
  dragging: boolean,
  setDrag: (dragging: boolean) => void
  setActiveMesh: (object: ActiveMesh) => void
  resetActiveMesh: () => void
  setActivityMesh: (active: boolean) => void
}