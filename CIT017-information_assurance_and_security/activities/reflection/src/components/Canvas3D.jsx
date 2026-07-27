import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom, Glitch, ChromaticAberration } from '@react-three/postprocessing';
import { GlitchMode, BlendFunction } from 'postprocessing';
import { RubiksCube } from './RubiksCube';

export const Canvas3D = ({ onTileClick, isModalOpen, glitchActive, theme }) => {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
      <color attach="background" args={[theme === 'dark' ? '#030303' : '#f8f8f8']} />
      
      <OrbitControls 
        makeDefault
        minDistance={3}
        maxDistance={15}
        autoRotate={!isModalOpen}
        autoRotateSpeed={1.0}
        enablePan={false}
      />

      <React.Suspense fallback={null}>
        <RubiksCube onTileClick={onTileClick} theme={theme} />
      </React.Suspense>

      <EffectComposer>
        <Bloom 
          luminanceThreshold={0.5} 
          luminanceSmoothing={0.9} 
          height={300} 
          intensity={theme === 'dark' ? 1.2 : 0} 
        />
        <Glitch 
          delay={[0, 0]} 
          duration={[0.1, 0.2]} 
          strength={[0.1, 0.3]} 
          mode={GlitchMode.SPORADIC}
          active={glitchActive}
        />
        <ChromaticAberration 
          blendFunction={BlendFunction.NORMAL} 
          offset={glitchActive ? [0.02, 0.02] : [0, 0]} 
        />
      </EffectComposer>
    </Canvas>
  );
};
