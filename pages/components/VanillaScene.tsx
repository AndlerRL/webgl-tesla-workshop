import React, { useEffect } from 'react'
import styles from '../../styles/Home.module.scss'
import * as THREE from 'three'
import { setNewMaterial } from '../../util/helpers'

export const VanillaScene = () => {
  useEffect(() => {
    const sceneContainer = document.querySelector('#scene-container')

    if (!sceneContainer) return

    const scene = new THREE.Scene()
    // NOTE: Taking wrapper box width and heights to render correctly
    const scene_width = sceneContainer?.getBoundingClientRect().width
    const scene_height = sceneContainer?.getBoundingClientRect().height
    // field of view, aspect ratio, near looking plane, far looking plane
    const camera = new THREE.PerspectiveCamera(80, scene_width / scene_height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer()

    camera.position.z = 5
    renderer.setSize(
      scene_width,
      scene_height
    )

    sceneContainer?.appendChild(renderer.domElement)

    const box = new THREE.BoxGeometry()
    const material = setNewMaterial('mesh-basic', { color: '#f1f1f1' })
    const cube = new THREE.Mesh(box, material)

    scene.add(cube)

    const animate = () => {
      requestAnimationFrame(animate)

      cube.rotation.x += 0.01
      cube.rotation.y += 0.01

      renderer.render(scene, camera)
    }

    animate()
    window.addEventListener('resize', () => {
      const resize_scene_width = sceneContainer?.getBoundingClientRect().width
      const resize_scene_height = sceneContainer?.getBoundingClientRect().height
      renderer.setSize(
        resize_scene_width,
        resize_scene_height
      )
      camera.aspect = resize_scene_width / resize_scene_height
      camera.updateProjectionMatrix()
    })

    return () => {
      window.removeEventListener('resize', () => { })
    }
  }, [])

  return (
    <div id="scene-container" className={styles.main_scene} />
  )
}