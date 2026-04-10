import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Stars(props: any) {
  const ref = useRef<any>()
  const mouseRef = useRef({ x: 0, y: 0 })
  
  // Track mouse globally since BackgroundFX has pointer-events: none
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      // Normalize to -1 to 1
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  // Scale down particles for mobile browsers to maintain 60FPS and save battery
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const count = isMobile ? 2500 : 6000;
  
  // Generate a majestic spiral galaxy
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
        // Spiral galaxy distribution
        const radius = 25 * Math.random() // Wide spread
        const spinAngle = radius * 0.6 // Spiral twist
        const branchAngle = ((i % 3) * 2 * Math.PI) / 3 // 3 arms
        
        const randomAngle = Math.random() * Math.PI * 2
        
        // Add particle scatter
        const x = Math.cos(branchAngle + spinAngle + randomAngle * 0.1) * radius + (Math.random() - 0.5) * 2
        // Thicker in the center, tapering at the edges
        const y = (Math.random() - 0.5) * 3 * (8 / (radius + 0.1))
        const z = Math.sin(branchAngle + spinAngle + randomAngle * 0.1) * radius + (Math.random() - 0.5) * 2
        
        pos[i * 3] = x
        pos[i * 3 + 1] = y
        pos[i * 3 + 2] = z

        // Vibrant Neon palette matched to Midnight Journal
        const rand = Math.random();
        let colorObj = new THREE.Color()
        if (rand > 0.8) colorObj.set('#d946ef') // Fuchsia
        else if (rand > 0.5) colorObj.set('#06b6d4') // Cyan
        else colorObj.set('#8b5cf6') // Violet
        
        // Make the core pure bright white/blue
        const mixCenter = Math.max(0, 1 - (radius / 8))
        colorObj.lerp(new THREE.Color('#ffffff'), mixCenter * 0.8)

        col[i * 3] = colorObj.r
        col[i * 3 + 1] = colorObj.g
        col[i * 3 + 2] = colorObj.b
    }
    return [pos, col]
  }, [count])

  useFrame((state, delta) => {
    if (ref.current) {
      // Much faster continuous base rotation for life/motion
      ref.current.rotation.y -= delta * 0.2
      ref.current.rotation.z -= delta * 0.05
      
      // Interactive camera tilt based on global mouse position
      // Reduce the intense swooping on mobile since mouse/touch tracks differently
      const multiplier = isMobile ? 4 : 12;
      const targetCamX = mouseRef.current.x * multiplier
      const targetCamY = mouseRef.current.y * multiplier
      
      // Snappy and dramatic camera swoop
      state.camera.position.x += (targetCamX - state.camera.position.x) * (isMobile ? 0.01 : 0.03)
      state.camera.position.y += (targetCamY - state.camera.position.y) * (isMobile ? 0.01 : 0.03)
      state.camera.lookAt(0, 0, 0)
    }
  })

  return (
    <group rotation={[Math.PI / 3, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} {...props}>
        <PointMaterial 
            transparent 
            vertexColors 
            size={isMobile ? 0.08 : 0.06} 
            sizeAttenuation={true} 
            depthWrite={false} 
            blending={THREE.AdditiveBlending} 
        />
      </Points>
    </group>
  )
}

export default function ParticleGalaxy() {
  return (
    // Fixed interactability by keeping pointer-events-none but using global mouse hooks inside 
    <div className="absolute inset-0 z-0 opacity-100 mix-blend-screen pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15] }} dpr={[1, 1.5]}>
        <Stars />
      </Canvas>
    </div>
  )
}
