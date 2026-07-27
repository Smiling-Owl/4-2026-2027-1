import React from 'react';
import { X } from 'lucide-react';
import { DecryptText } from './DecryptText';

export const TerminalModal = ({ entry, onClose }) => {
  if (!entry) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="terminal-window" onClick={(e) => e.stopPropagation()}>
        <div className="terminal-header">
          <span className="terminal-title">~/journal/read.sh - {entry.id}</span>
          <button className="close-button" onClick={onClose}>
            <X size={16} />
          </button>
        </div>
        <div className="terminal-content">
          <h2 className="entry-title"><DecryptText text={`> ${entry.title}`} duration={500} /></h2>
          <div className="entry-body">
            <DecryptText text={entry.content} duration={1500} />
          </div>
          <div className="cursor-blink">_</div>
        </div>
      </div>
    </div>
  );
};
