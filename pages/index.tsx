import type { NextPage } from 'next'
import { Suspense } from 'react'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Canvas, ReactThreeFiber, ThreeEvent } from '@react-three/fiber'
import { Box } from '../components/Box'
import styles from '../styles/Home.module.scss'
import * as THREE from 'three'
import { Floor } from '../components/Floor'
import { Bulb } from '../components/Bulb'
import { XGarageDoor, XWall, YWall } from '../components/Wall'
import { SkyBox } from '../components/SkyBox'
import { Roof } from '../components/Roof'
import { useStore } from '../store/mesh-store';
import { ActiveMesh } from '../store/model/Mesh'
import { Event, Object3D } from 'three';
import { ColorPickerPanel } from '../components/ColorPickerPanel'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      geometry_: ReactThreeFiber.Object3DNode<
        THREE.Vector3 | THREE.Vector | THREE.Vector2,
        typeof THREE.Vector3 | THREE.Vector | THREE.Vector2
      >
    }
  }
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.main_content}>
          <h1 className={styles.title}>WebGL Tesla Workshop</h1>
        </div>
        <div className={styles.main_scene}>
          <ColorPickerPanel />
          <Canvas
            shadows
            style={{ background: '#00120e' }}
            camera={{ fov: 90, position: [0, 1, 0], removeEventListener: () => { } }}
            flat
          >
            <Suspense fallback={null}>
              <SkyBox>
                <ambientLight intensity={0.2} />
                <pointLight />
                <Bulb position={[0, 19.06, 0]} />
                <Box position={[-5, 5, 0]} scale={[2, 2.5, 2]} />
                <Box position={[5, 5, 0]} scale={[2, 2.5, 2]} />
                <XGarageDoor position={[49.75, 5.25, 0]} />
                <XWall position={[50, 9.25, 0]} />
                <XWall position={[-50, 9.25, 0]} />
                <YWall position={[0, 9.25, 50]} />
                <YWall position={[0, 9.25, -50]} />
                <Floor />
                <Roof />
              </SkyBox>
            </Suspense>
          </Canvas>
        </div>
      </main >

      <Footer />
    </div >
  )
}

export default Home
