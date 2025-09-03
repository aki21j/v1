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
      command: 'cat about.txt', 
      output: 'Full-stack engineer who turns coffee into code ☕',
      delay: 60 
    },
    { 
      command: 'ls skills/', 
      output: 'problem-solving/  systems-thinking/  shipping-products/',
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
            Software Engineer | Problem Solver | Occasional Gamer
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
