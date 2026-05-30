'use client';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

export function NetworkScene() {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => [
    [0, 0, 0],
    [1.8, 0.8, 0.5],
    [-1.6, 0.6, 0.3],
    [0.4, -1.8, 0.6],
    [-0.5, 1.6, -0.8],
    [2.0, -0.6, -0.4],
    [-1.8, -1.0, 0.8],
    [0.8, 0.8, 1.8],
  ] as [number, number, number][], []);

  const edges = [
    [0,1],[0,2],[0,3],[0,4],[1,5],[2,6],[3,6],[4,7],[1,7],[2,4],[3,5]
  ];

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.2;
  });

  return (
    <group ref={groupRef} scale={0.9}>
      {nodes.map((pos, i) => (
        <Sphere key={i} position={pos} args={[i === 0 ? 0.18 : 0.1, 16, 16]}>
          <meshStandardMaterial
            color={i === 0 ? '#1A56DB' : '#93C5FD'}
            emissive={i === 0 ? '#1A56DB' : '#1A56DB'}
            emissiveIntensity={i === 0 ? 1.5 : 0.8}
          />
        </Sphere>
      ))}
      {edges.map(([a, b], i) => (
        <Line
          key={i}
          points={[nodes[a], nodes[b]]}
          color="#1A56DB"
          lineWidth={0.8}
          transparent
          opacity={0.4}
        />
      ))}
      <ambientLight intensity={0.3} />
      <pointLight position={[4, 4, 4]} intensity={2} color="#1A56DB" />
      <pointLight position={[-4, -4, 4]} intensity={1} color="#050B18" />
    </group>
  );
}
