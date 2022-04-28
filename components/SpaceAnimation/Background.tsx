import React, { Suspense, useLayoutEffect, useMemo } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Background() {
  const vertexShader = `
    void main() {
      gl_Position = vec4( position, 1.0 );
  }
  `

  const fragmentShader = `#ifdef GL_ES
    precision mediump float;
    #endif
  
    uniform vec2 u_resolution;
    uniform float u_time;
  
    float Cell(vec2 c) {
      vec2 uv = fract(c);
      c -= uv;
      return (1.-length(uv*10.-1.)) * step(fract(sin(c.x+c.y*1e2)*1e3), .04);
    }
  
    void main() {
  
         vec2 p = gl_FragCoord.xy / u_resolution.xy -.5;
         float a = fract(atan(p.x, p.y) / 6.2832);
         float d = length(p);
  
         vec2 coord = vec2(pow(d, .04), a)*256.;
         vec2 delta = vec2(1. + u_time*0.2, 1.);
  
         float c = Cell(coord-=delta);
         c += Cell(coord-=delta);
  
         gl_FragColor = vec4(c*d*6.);
    }`

  const uniforms = useMemo(
    () => ({
      u_time: { type: 'f', value: 1.0 },
      u_resolution: { type: 'v2', value: new THREE.Vector2() }
    }),
    []
  )

  useFrame(() => {
    uniforms.u_time.value += 0.05
  })

  useLayoutEffect(() => {
    uniforms.u_resolution.value.x = window.innerWidth
    uniforms.u_resolution.value.y = window.innerHeight
  })

  return (
    <mesh position={[0, 0, -400]}>
      <planeBufferGeometry attach="geometry" args={[2, 2]} />
      <shaderMaterial
        attach="material"
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent={true}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  )
}

export default Background