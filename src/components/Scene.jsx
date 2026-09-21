import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import ESP32Model from './models/ESP32Model'
import HBridgeModel from './models/HBridgeModel'
import IRRobotModel from './models/IRRobotModel'

const MODELS = {
  esp32: ESP32Model,
  hbridge: HBridgeModel,
  irrobot: IRRobotModel,
}

export default function Scene({ selected }) {
  const Model = MODELS[selected]

  return (
    <Canvas shadows camera={{ position: [2.4, 2.1, 2.4], fov: 45 }}>
      <color attach="background" args={['#0b0f14']} />
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[3, 4, 2]}
        intensity={1.6}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <Suspense fallback={null}>
        <Model key={selected} />
        <ContactShadows position={[0, -1, 0]} opacity={0.5} scale={6} blur={2.5} far={2} />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enablePan minDistance={1} maxDistance={6} />
    </Canvas>
  )
}
