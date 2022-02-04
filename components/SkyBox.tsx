import { Cloud, ContactShadows, Environment, Sky, Stage } from '@react-three/drei'
import { MeshProps, useLoader, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'

export const SkyBox: React.FC<MeshProps> = ({ children }) => {
  const controlsRef = useRef(null!)

  return (
    <>
      <Sky
        distance={450000}
        sunPosition={[-10, 15, 20]}
        rayleigh={0.75}
        mieCoefficient={0.011}
        mieDirectionalG={0.8333}
        turbidity={0.9}
        inclination={0.15}
        azimuth={0.33}
      />
      {[...new Array(20)].map((_, index) => (
        <Cloud
          opacity={0.5}
          speed={0.4} // Rotation speed
          width={Math.random() * 400 + 100} // Width of the full cloud
          depth={Math.random() * 3 + 0.8} // Z-dir depth
          segments={10} // Number of particles
          position={[Math.random() * 100 + 2, 600, Math.random() * 100 + 2]}
          key={`cloud_background_${index}`}
        />
      ))}
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
