import { WebGLRenderTarget, Object3D } from "three"
import React, { useMemo, useRef } from "react"
import { useThree, useFrame } from "@react-three/fiber"
import BackfaceMaterial from "./BackfaceMaterial"
import RefractionMaterial from "./RefractionMaterial"
import * as THREE from 'three'

export default function Diamond() {
  const { size, gl, scene, camera, clock } = useThree()
  const model = useRef()

  // Create Fbo's and materials
  const [envFbo, backfaceFbo, backfaceMaterial, refractionMaterial] = useMemo(() => {
    const envFbo = new WebGLRenderTarget(size.width, size.height)
    const backfaceFbo = new WebGLRenderTarget(size.width, size.height)
    const backfaceMaterial = new BackfaceMaterial()
    const refractionMaterial = new RefractionMaterial({ envMap: envFbo.texture, backfaceMap: backfaceFbo.texture, resolution: [size.width, size.height] })
    return [envFbo, backfaceFbo, backfaceMaterial, refractionMaterial]
  }, [size])

  const dummy = useMemo(() => new Object3D(), [])

  // Render-loop
  useFrame(() => {
    const t = clock.getElapsedTime()
    dummy.position.set(0, 0, 20)
    dummy.rotation.set(Math.cos(t/5) * 0.5, Math.cos(t/4) * 0.8, Math.cos(t/10) * 0.15)
    dummy.updateMatrix()
    model.current.setMatrixAt(0, dummy.matrix)

    model.current.instanceMatrix.needsUpdate = true
    // Render env to fbo
    gl.autoClear = false
    camera.layers.set(1)
    gl.setRenderTarget(envFbo)
    gl.render(scene, camera)
    // Render cube backfaces to fbo
    camera.layers.set(0)
    model.current.material = backfaceMaterial
    gl.setRenderTarget(backfaceFbo)
    gl.clearDepth()
    gl.render(scene, camera)
    // Render env to screen
    camera.layers.set(1)
    gl.setRenderTarget(null)
    //gl.render(scene, camera)
    gl.clearDepth()
    // Render cube with refraction material to screen
    camera.layers.set(0)
    model.current.material = refractionMaterial
    gl.render(scene, camera)
  }, 1)

  return (
    <instancedMesh ref={model} args={[new THREE.BoxGeometry(5, 5, 0.1), null, 1]}>
      <meshBasicMaterial />
    </instancedMesh>
  )
}
