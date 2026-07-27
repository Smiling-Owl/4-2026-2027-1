import React, { useState, useEffect } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|:"<>?-=[]\\;\',./';

export const DecryptText = ({ text, speed = 30, duration = 1000 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let iteration = 0;
    const maxIterations = duration / speed;
    let interval = setInterval(() => {
      setDisplayText(() => {
        return text
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === ' ' || char === '\n') return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('');
      });
      // Increment iteration proportionally to text length to finish within duration
      iteration += text.length / maxIterations;

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, duration]);

  return <span style={{ whiteSpace: 'pre-wrap' }}>{displayText}</span>;
};
