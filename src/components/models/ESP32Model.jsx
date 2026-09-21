import { useEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useNormalizedScene } from './useNormalizedScene'
import { ESP32_MATERIAL_FIX } from './esp32MaterialFix'

export default function ESP32Model(props) {
  const { scene } = useGLTF('/models/esp32/esp32-wroom.glb')
  const model = useNormalizedScene(scene)

  useEffect(() => {
    let i = 0
    model.traverse((child) => {
      if (!child.isMesh) return
      const fix = ESP32_MATERIAL_FIX[i]
      i += 1
      if (!fix) return
      child.material = new THREE.MeshStandardMaterial({
        color: new THREE.Color().setRGB(...fix.diffuse, THREE.LinearSRGBColorSpace),
        roughness: 1 - fix.glossiness,
        metalness: 0.15,
      })
      child.castShadow = true
      child.receiveShadow = true
    })
  }, [model])

  return <primitive object={model} {...props} />
}

useGLTF.preload('/models/esp32/esp32-wroom.glb')
