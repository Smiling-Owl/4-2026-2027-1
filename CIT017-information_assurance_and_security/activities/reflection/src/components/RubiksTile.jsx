import React, { useRef, useState, useEffect } from 'react';
import { Edges, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import * as THREE from 'three';

export const RubiksTile = ({ position, rotation, tileData, onClick, delayIndex = 0, theme }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [booted, setBooted] = useState(false);
  
  const [startPos] = useState(() => [
    position[0] * 4 + (Math.random() - 0.5) * 2, 
    position[1] * 4 + (Math.random() - 0.5) * 2, 
    position[2] * 4 + (Math.random() - 0.5) * 2
  ]);

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.position.set(...startPos);
    }
    const t = setTimeout(() => setBooted(true), delayIndex * 15 + 100);
    return () => clearTimeout(t);
  }, [delayIndex, startPos]);

  useFrame((state, delta) => {
    if (meshRef.current && booted) {
      easing.damp3(meshRef.current.position, position, 0.5, delta);
    }
  });

  const isUnlocked = tileData?.status === 'unlocked';
  
  let color = theme === 'dark' ? '#111111' : '#e2e2e2'; 
  if (isUnlocked) {
    if (theme === 'dark') {
      color = hovered ? '#ffffff' : '#555555';
    } else {
      color = hovered ? '#ff52cc' : '#ec35b6'; 
    }
  }

  const textColor = theme === 'dark'
    ? (hovered ? '#ffffff' : '#555555')
    : (hovered ? '#050505' : '#ec35b6');

  const handleClick = (e) => {
    if (isUnlocked) {
      e.stopPropagation();
      
      const normal = new THREE.Vector3(0, 0, 1);
      normal.applyEuler(new THREE.Euler(...rotation));
      
      const worldPos = new THREE.Vector3(...position);
      
      onClick(tileData, worldPos, normal);
    }
  };

  return (
    <group ref={meshRef} rotation={rotation}>
      {/* 1. Dedicated Volumetric HitBox for 100% reliable raycasting */}
      <mesh
        onPointerUp={handleClick}
        onPointerOver={(e) => {
          if (isUnlocked) {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = 'crosshair';
          }
        }}
        onPointerOut={(e) => {
          if (isUnlocked) {
            setHovered(false);
            document.body.style.cursor = 'default';
          }
        }}
      >
        {/* Box is 1x1 with 0.2 thickness to ensure rays hit it from steep angles */}
        <boxGeometry args={[0.95, 0.95, 0.2]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

      {/* 2. Visual Outline */}
      <mesh position={[0, 0, 0.1]}>
        <planeGeometry args={[0.92, 0.92]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
        <Edges
          linewidth={isUnlocked ? (hovered ? 3 : 1) : 1}
          threshold={15}
          color={color}
          toneMapped={false}
        />
      </mesh>

      {/* 3. Text Overlay */}
      {isUnlocked && (
        <Text
          position={[0, 0, 0.11]}
          fontSize={0.09}
          color={textColor}
          anchorX="center"
          anchorY="middle"
          toneMapped={false}
        >
          {hovered ? tileData.title.substring(0, 10).toUpperCase() : `SEC_${tileData.id.split('-')[1]}`}
        </Text>
      )}
    </group>
  );
};
