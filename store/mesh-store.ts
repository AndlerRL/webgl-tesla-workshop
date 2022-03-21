import { ActiveMesh, MeshState } from './model/Mesh';
import create from 'zustand'

export const useStore = create<MeshState>((set, get) => ({
  active_mesh: null,
  setActiveMesh: (object: ActiveMesh) => set({ active_mesh: object }),
  resetActiveMesh: () => {
    set({ active_mesh: null })
  },
  setActivityMesh: (active: boolean) => {
    if (get().active_mesh) {
      const isActive = get().active_mesh?.active
      const new_activity_mesh = { ...get().active_mesh, active: !isActive } as ActiveMesh

      set({ active_mesh: new_activity_mesh })
    }
  }
}))