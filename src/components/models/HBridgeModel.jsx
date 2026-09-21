import { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNormalizedScene } from './useNormalizedScene'

const MODEL_URL = `${import.meta.env.BASE_URL}models/hbridge/l298n-motor-driver.glb`

export default function HBridgeModel(props) {
  const { scene } = useGLTF(MODEL_URL)
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

useGLTF.preload(MODEL_URL)
