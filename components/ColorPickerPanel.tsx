import React from 'react'
import styles from '../styles/ColorPickerPanel.module.scss'
import { useStore } from '../store/mesh-store';
import * as THREE from 'three';


export const ColorPickerPanel = () => {
  const { active_mesh, setActiveMesh } = useStore()

  const onClickHandler = (color: string) => {
    if (!active_mesh) return
    console.log(color)

    active_mesh.material.color = new THREE.Color(color)

    const update_active_mesh = {
      ...active_mesh,
      material: {
        ...active_mesh.material,
        color: new THREE.Color(color)
      }
    }

    setActiveMesh(update_active_mesh)
  }

  return (
    <div className={styles.color_picker__container}>
      <div className={styles.color_picker__item} onClick={() => onClickHandler('#05f')}>
        <div style={{ background: '#05f' }} />
      </div>
      <div className={styles.color_picker__item} onClick={() => onClickHandler('#0f5')}>
        <div style={{ background: '#0f5' }} />
      </div>
      <div className={styles.color_picker__item} onClick={() => onClickHandler('#f50')}>
        <div style={{ background: '#f50' }} />
      </div>
    </div>
  )
}
