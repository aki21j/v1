import React, { useState, useEffect } from 'react';

const TypeWriter = ({ 
  text, 
  delay = 100, 
  onComplete, 
  prefix = '$ ',
  className = '',
  showCursor = true 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBlinkingCursor, setShowBlinkingCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowBlinkingCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={`terminal-text ${className}`}>
      <span className="terminal-prompt">{prefix}</span>
      {displayText}
      {showCursor && (
        <span 
          className={`terminal-cursor ${showBlinkingCursor ? 'visible' : 'hidden'}`}
          style={{
            borderRight: '2px solid #39ff14',
            animation: 'blink 1.06s infinite',
            marginLeft: '2px'
          }}
        >
          &nbsp;
        </span>
      )}
    </span>
  );
};

export default TypeWriter;
