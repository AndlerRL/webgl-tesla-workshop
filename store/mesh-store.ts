import { ActiveMesh, MeshState } from './model/Mesh';
import create from 'zustand'

export const useStore = create<MeshState>((set, get) => ({
  active_mesh: null,
  dragging: false,
  setActiveMesh: (object: ActiveMesh) => set({ active_mesh: object }),
  resetActiveMesh: () => {
    set({ active_mesh: null })
  },
  setDrag: (dragging: boolean) => set({ dragging }),
  setActivityMesh: (active: boolean) => {
    if (get().active_mesh) {
      const new_activity_mesh = { ...get().active_mesh, active } as ActiveMesh

      set({ active_mesh: new_activity_mesh })
    }
  }
}))