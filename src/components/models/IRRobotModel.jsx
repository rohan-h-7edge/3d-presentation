import { useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useNormalizedScene } from './useNormalizedScene'

const MODEL_URL = `${import.meta.env.BASE_URL}models/ir-robot/ir-robot.glb`

export default function IRRobotModel(props) {
  const { scene, animations } = useGLTF(MODEL_URL)
  const model = useNormalizedScene(scene)
  const mixer = useMemo(() => new THREE.AnimationMixer(model), [model])

  useEffect(() => {
    model.traverse((child) => {
      // GLTFLoader strips dots from node names when building animation
      // track names (dots are the track-name path separator), but leaves
      // the node's own `.name` untouched. "Roda.004" therefore never
      // matches its own track ("Roda004.quaternion") at playback time
      // unless we sanitize the node name to line back up with it.
      if (child.name.includes('.')) {
        child.name = child.name.replace(/\./g, '')
      }
      if (!child.isMesh) return
      child.castShadow = true
      child.receiveShadow = true
    })
  }, [model])

  useEffect(() => {
    const actions = animations.map((clip) => mixer.clipAction(clip))
    actions.forEach((action) => action.reset().setLoop(THREE.LoopRepeat, Infinity).play())
    return () => mixer.stopAllAction()
  }, [animations, mixer, model])

  useFrame((_, delta) => {
    mixer.update(delta)
  })

  return <primitive object={model} {...props} />
}

useGLTF.preload(MODEL_URL)
