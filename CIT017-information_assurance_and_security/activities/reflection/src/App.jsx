import React, { useState, useEffect } from 'react';
import { Canvas3D } from './components/Canvas3D';
import { TerminalModal } from './components/TerminalModal';

function App() {
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [glitchActive, setGlitchActive] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.classList.toggle('dark-mode', theme === 'dark');
  }, [theme]);

  const triggerGlitch = () => {
    setGlitchActive(true);
    setTimeout(() => setGlitchActive(false), 200);
  };

  const handleTileClick = (entryData, pos, normal) => {
    triggerGlitch();
    setSelectedEntry(entryData);
  };

  const closeModal = () => {
    triggerGlitch();
    setSelectedEntry(null);
  };

  const toggleTheme = () => {
    triggerGlitch();
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-container">
      <div className="hud-element hud-top-left">
        <header className="app-header">
          <h1>J++ V.2.2.8</h1>
          <p>STATUS: null_state<br/>SEC_LEVEL: divine</p>
        </header>
      </div>
      
      <div className="hud-element hud-bottom-right">
        <p>AWAITING_INPUT...<br/>SELECT SECTOR TO DECRYPT</p>
      </div>

      <div className="hud-element hud-bottom-left">
        <button className="theme-toggle-btn" onClick={toggleTheme} onPointerEnter={() => {}}>
          [{theme === 'light' ? 'SYS.INVERT(DARK)' : 'SYS.INVERT(LIGHT)'}]
        </button>
      </div>

      <div className="hud-crosshair"></div>

      <div className="canvas-container">
        <Canvas3D 
          onTileClick={handleTileClick} 
          isModalOpen={!!selectedEntry}
          glitchActive={glitchActive}
          theme={theme}
        />
      </div>

      {selectedEntry && (
        <TerminalModal entry={selectedEntry} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
