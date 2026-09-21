import { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNormalizedScene } from './useNormalizedScene'

export default function HBridgeModel(props) {
  const { scene } = useGLTF('/models/hbridge/l298n-motor-driver.glb')
  const model = useNormalizedScene(scene)

  useEffect(() => {
    model.traverse((child) => {
      if (!child.isMesh) return
      child.castShadow = true
      child.receiveShadow = true
    })
  }, [model])

  return <primitive object={model} {...props} />
}

useGLTF.preload('/models/hbridge/l298n-motor-driver.glb')
