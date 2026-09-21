import { useMemo } from 'react'
import * as THREE from 'three'

// Recenters a cloned GLTF scene at the origin and uniformly scales it so its
// largest dimension equals targetSize, so wildly different source-asset
// scales/origins all end up framed consistently by the same fixed camera.
export function useNormalizedScene(scene, targetSize = 1.4) {
  return useMemo(() => {
    const model = scene.clone(true)
    const box = new THREE.Box3().setFromObject(model)
    const size = box.getSize(new THREE.Vector3())
    const center = box.getCenter(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z) || 1
    const scale = targetSize / maxDim

    const wrapper = new THREE.Group()
    model.position.set(-center.x * scale, -center.y * scale, -center.z * scale)
    model.scale.setScalar(scale)
    wrapper.add(model)
    return wrapper
  }, [scene, targetSize])
}
