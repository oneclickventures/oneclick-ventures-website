'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

export function GlobeScene() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate latitude/longitude lines
  const lines: [number, number, number][][] = [];
  for (let lat = -80; lat <= 80; lat += 20) {
    const points: [number, number, number][] = [];
    for (let lon = 0; lon <= 360; lon += 5) {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = lon * (Math.PI / 180);
      const r = 1.52;
      points.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta),
      ]);
    }
    lines.push(points);
  }
  for (let lon = 0; lon < 360; lon += 30) {
    const points: [number, number, number][] = [];
    for (let lat = -90; lat <= 90; lat += 5) {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = lon * (Math.PI / 180);
      const r = 1.52;
      points.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta),
      ]);
    }
    lines.push(points);
  }

  // Signal dots on globe surface
  const signals = [
    [0.8, 1.1, 0.9],
    [-1.2, 0.6, 0.8],
    [0.3, -1.3, 0.8],
    [1.4, 0.2, 0.4],
    [-0.5, 0.8, -1.3],
  ];

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <group ref={groupRef}>
      {/* Core globe */}
      <Sphere args={[1.5, 32, 32]}>
        <meshStandardMaterial
          color="#050B18"
          wireframe={false}
          transparent
          opacity={0.3}
        />
      </Sphere>
      {/* Grid lines */}
      {lines.map((pts, i) => (
        <Line
          key={i}
          points={pts}
          color="#1A56DB"
          lineWidth={0.4}
          transparent
          opacity={0.25}
        />
      ))}
      {/* Signal dots */}
      {signals.map((pos, i) => (
        <mesh key={i} position={pos as [number,number,number]}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial
            color="#93C5FD"
            emissive="#1A56DB"
            emissiveIntensity={2}
          />
        </mesh>
      ))}
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#1A56DB" />
      <pointLight position={[-5, -3, -5]} intensity={0.8} color="#050B18" />
    </group>
  );
}
