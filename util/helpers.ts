import * as THREE from 'three'

type NewMaterialParameters = THREE.MeshBasicMaterialParameters | THREE.LineBasicMaterialParameters | THREE.MeshDepthMaterialParameters | THREE.MeshDistanceMaterialParameters | THREE.MeshNormalMaterialParameters | THREE.MeshStandardMaterialParameters | THREE.MeshPhysicalMaterialParameters | THREE.MeshLambertMaterialParameters | THREE.MeshMatcapMaterialParameters | THREE.MeshPhongMaterialParameters | THREE.MeshToonMaterialParameters
type NewMaterialType = 'mesh-basic' | 'mesh-depth' | 'mesh-distance' | 'mesh-normal' | 'mesh-standard' | 'mesh-physical' | 'mesh-lambert' | 'mesh-matcap' | 'mesh-phong' | 'mesh-toon' | 'line'
  
export const setNewMaterial = (type?: NewMaterialType, params?: NewMaterialParameters | undefined) => {
  switch (type) {
    case 'line':
      return new THREE.LineBasicMaterial(params)
    case 'mesh-depth':
      return new THREE.MeshDepthMaterial(params)
    case 'mesh-distance':
      return new THREE.MeshDistanceMaterial(params)
    case 'mesh-normal':
      return new THREE.MeshNormalMaterial(params)
    case 'mesh-standard':
      return new THREE.MeshStandardMaterial(params)
    case 'mesh-physical':
      return new THREE.MeshPhysicalMaterial(params)
    case 'mesh-lambert':
      return new THREE.MeshLambertMaterial(params)
    case 'mesh-matcap':
      return new THREE.MeshMatcapMaterial(params)
    case 'mesh-phong':
      return new THREE.MeshPhongMaterial(params)
    case 'mesh-toon':
      return new THREE.MeshToonMaterial(params)
    case 'mesh-basic':
    default:
      return new THREE.MeshBasicMaterial(params)
  }
}
