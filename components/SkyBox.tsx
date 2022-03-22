import { Cloud, ContactShadows, Environment, FlyControls, Sky, softShadows, Stage, useBounds } from '@react-three/drei'
import { MeshProps, useLoader, useThree } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const SkyBox: React.FC<MeshProps> = ({ children }) => {
  const controlsRef = useRef(null!)
  const bounds = useBounds()

  useEffect(() => {
    if (controlsRef.current) {
      console.log('controlsRef', controlsRef.current)
    }
  }, [controlsRef.current])

  useEffect(() => {
    if (bounds) {
      bounds.refresh().clip().flip()
    }
  }, [bounds])

  return (
    <>
      <Sky
        distance={400}
        sunPosition={[-10, 15, 20]}
        rayleigh={0.75}
        mieCoefficient={0.011}
        mieDirectionalG={0.8333}
        turbidity={0.9}
        inclination={0.15}
        azimuth={0.33}
        exposure={0.2}
      />
      <Stage
        contactShadow={{ blur: 2, opacity: 0.6 }}
        controls={controlsRef}
        shadowBias={-0.083}
        intensity={0.05}
        preset="soft"
        adjustCamera
        shadows
      >
        {children}
      </Stage>
    </>
  )
} 
