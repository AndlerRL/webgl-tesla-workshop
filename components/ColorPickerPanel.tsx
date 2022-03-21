import React, { MouseEvent } from 'react'
import styles from '../styles/ColorPickerPanel.module.scss'
import { useStore } from '../store/mesh-store';
import * as THREE from 'three';
import { ActiveMesh } from '../store/model/Mesh';


export const ColorPickerPanel = () => {
  const { active_mesh, setActiveMesh } = useStore()

  const onClickHandler = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!active_mesh) return

    const color = e.currentTarget.children[0] as HTMLElement ?? e.currentTarget
    active_mesh.material.color = new THREE.Color(color.style.backgroundColor)

    setActiveMesh(active_mesh)
  }

  return (
    <div className={styles.color_picker__container}>
      <div className={styles.color_picker__item} onClick={onClickHandler}>
        <div style={{ background: '#05f' }} />
      </div>
      <div className={styles.color_picker__item} onClick={onClickHandler}>
        <div style={{ background: '#0f5' }} />
      </div>
      <div className={styles.color_picker__item} onClick={onClickHandler}>
        <div style={{ background: '#f50' }} />
      </div>
    </div>
  )
}
