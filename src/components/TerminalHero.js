import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import TypeWriter from './TypeWriter';
import * as Config from "../shared-util/config";

const TerminalHero = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const terminalCommands = [
    { 
      command: 'whoami', 
      output: `${Config.firstName} ${Config.lastName}`,
      delay: 80 
    },
    { 
      command: 'cat role.txt', 
      output: 'Product Engineer III @ Intercom',
      delay: 60 
    },
    { 
      command: 'ls skills/', 
      output: 'innovation/  problem-solving/  user-experience/',
      delay: 40 
    },
    { 
      command: 'echo "Ready to collaborate"', 
      output: 'Ready to collaborate',
      delay: 70 
    }
  ];

  const handleStepComplete = () => {
    if (currentStep < terminalCommands.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 800);
    } else {
      setTimeout(() => {
        setShowContent(true);
      }, 1000);
    }
  };

  useEffect(() => {
    // Small delay before starting the animation
    const initialDelay = setTimeout(() => {
      setCurrentStep(0);
    }, 500);

    return () => clearTimeout(initialDelay);
  }, []);

  return (
    <Container>
      <div className="terminal-hero-wrapper">
        {/* Terminal Window */}
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-controls">
              <span className="control-dot red"></span>
              <span className="control-dot yellow"></span>
              <span className="control-dot green"></span>
            </div>
            <div className="terminal-title">ankit@portfolio: ~</div>
          </div>
          
          <div className="terminal-body">
            {terminalCommands.map((cmd, index) => (
              <div key={index} className="terminal-line">
                {index <= currentStep && (
                  <>
                    <TypeWriter 
                      text={cmd.command}
                      delay={cmd.delay}
                      onComplete={index === currentStep ? handleStepComplete : undefined}
                      prefix="$ "
                      showCursor={index === currentStep}
                      className="command-line"
                    />
                    {index < currentStep && (
                      <div className="terminal-output">
                        <span className="output-text">{cmd.output}</span>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            
            {currentStep >= terminalCommands.length - 1 && (
              <div className="terminal-line">
                <span className="terminal-prompt">$ </span>
                <span className="terminal-cursor blinking">_</span>
              </div>
            )}
          </div>
        </div>

        {/* Traditional Hero Content - Appears after terminal animation */}
        <div className={`hero-content ${showContent ? 'fade-in' : 'hidden'}`}>
          <div className="hero-subtitle">
            Software Engineer | Aspiring Artist | Occasional Gamer
          </div>
          
          <div className="hero-cta">
            <a href="#contact">
              <Button 
                style={{width: 160}}
                variant="outline-light"
                className="terminal-button"
              >
                Initialize Contact
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TerminalHero;
