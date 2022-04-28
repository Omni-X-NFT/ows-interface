import React, { Suspense } from 'react'
// import ReactDOM from 'react-dom'
import { Canvas, useFrame } from "@react-three/fiber";
import Background from './Background'


function SpaceAnimation() {
  return (
    // <div style={{ height: '100vh', backgroundColor: 'black' }}>
    <div className='space'>
      <Canvas gl={{ autoClear: false }}>
          <directionalLight intensity={1} color={0xffffff} position={[0, 3, 2]} />
          <Suspense fallback={null}>
            <Background />
          </Suspense>
      </Canvas>
    </div>
  )
}
export default SpaceAnimation

const getDevicePixelRatio = (maxDpr = 2) =>
  typeof window !== 'undefined' ? Math.min(Math.max(Math.round(window.devicePixelRatio), 1), maxDpr).toFixed(1) : '1.0'

// ReactDOM.render(<App />, document.getElementById('root'))
