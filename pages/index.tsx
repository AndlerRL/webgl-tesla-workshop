import type { NextPage } from 'next'
import { Suspense, useState } from 'react'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Canvas, extend, ReactThreeFiber } from '@react-three/fiber'
import { Box } from '../components/Box'
import { VanillaScene } from './components/vanillaScene'
import styles from '../styles/Home.module.scss'
import { Orbit } from '../components/Orbit'
import * as THREE from 'three'
import { Environment } from '@react-three/drei'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      geometry_: ReactThreeFiber.Object3DNode<THREE.Vector3 | THREE.Vector | THREE.Vector2, typeof THREE.Vector3 | THREE.Vector | THREE.Vector2>
    }
  }
}

const Home: NextPage = () => {
  const [canvas, setCanvas] = useState('react')

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.main_content}>
          <h1 className={styles.title}>
            WebGL Tesla Workshop
          </h1>
          <div className={styles.nav_container}>
            <button type='button' onClick={() => setCanvas('vanilla')}>Vanilla Render</button> | <button type='button' onClick={() => setCanvas('react')}>React Render</button>
          </div>
        </div>

        {canvas === 'vanilla' && (
          <VanillaScene />
        )}

        {canvas === 'react' && (
          <div className={styles.main_scene}>
            <Canvas style={{ background: '#00120e' }} camera={{ position: [3, 3, 3] }}>
              <Suspense fallback={null}>
                <Environment preset="lobby" background />
                <Box position={[1, 2, 0.1]} scale={[1, 1.1, 1]} />
                <axesHelper args={[5]} />
                <Orbit />
              </Suspense>
            </Canvas>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Home
