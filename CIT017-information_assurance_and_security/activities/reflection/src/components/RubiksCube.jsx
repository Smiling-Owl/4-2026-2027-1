import React, { useRef } from 'react';
import { RubiksTile } from './RubiksTile';
import journalData from '../data/journal.json';

export const RubiksCube = ({ onTileClick, theme }) => {
  const groupRef = useRef();

  const tiles = [];
  const coords = [-1, 0, 1];

  const generateFace = (faceName, positionFn, rotation) => {
    coords.forEach((u, i) => {
      coords.forEach((v, j) => {
        const index = i * 3 + j;
        const id = `${faceName}-${index}`;
        const tileData = journalData.find((t) => t.id === id);
        
        tiles.push(
          <RubiksTile
            key={id}
            delayIndex={tiles.length}
            position={positionFn(u, v)}
            rotation={rotation}
            tileData={tileData}
            onClick={onTileClick}
            theme={theme}
          />
        );
      });
    });
  };

  generateFace('Right', (u, v) => [1.5, u, v], [0, Math.PI / 2, 0]);
  generateFace('Left', (u, v) => [-1.5, u, v], [0, -Math.PI / 2, 0]);
  generateFace('Top', (u, v) => [u, 1.5, v], [-Math.PI / 2, 0, 0]);
  generateFace('Bottom', (u, v) => [u, -1.5, v], [Math.PI / 2, 0, 0]);
  generateFace('Front', (u, v) => [u, v, 1.5], [0, 0, 0]);
  generateFace('Back', (u, v) => [u, v, -1.5], [0, Math.PI, 0]);

  return (
    <group ref={groupRef}>
      {tiles}
    </group>
  );
};
