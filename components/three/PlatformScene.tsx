'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

export function PlatformScene() {
  const groupRef = useRef<THREE.Group>(null);

  const layers = [
    { y: -1.2, scale: [3.0, 0.18, 2.0] as [number,number,number], opacity: 0.5, color: '#0A1628' },
    { y: -0.6, scale: [2.4, 0.18, 1.6] as [number,number,number], opacity: 0.65, color: '#0F2040' },
    { y:  0.0, scale: [1.9, 0.18, 1.2] as [number,number,number], opacity: 0.8, color: '#1A3060' },
    { y:  0.6, scale: [1.4, 0.18, 0.9] as [number,number,number], opacity: 0.9, color: '#1A56DB' },
    { y:  1.1, scale: [0.9, 0.18, 0.6] as [number,number,number], opacity: 1.0, color: '#3B82F6' },
  ];

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {layers.map((layer, i) => (
        <RoundedBox
          key={i}
          position={[0, layer.y, 0]}
          args={layer.scale}
          radius={0.06}
          smoothness={4}
        >
          <meshStandardMaterial
            color={layer.color}
            transparent
            opacity={layer.opacity}
            emissive={layer.color}
            emissiveIntensity={0.3}
            metalness={0.4}
            roughness={0.3}
          />
        </RoundedBox>
      ))}
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 5, 3]} intensity={2} color="#1A56DB" />
      <pointLight position={[-3, -3, 3]} intensity={1} color="#050B18" />
      <pointLight position={[0, 3, -4]} intensity={0.8} color="#93C5FD" />
    </group>
  );
}
