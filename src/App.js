import React from 'react';
import './App.css';
import NavComponent from './components/Header';
import Particles from 'react-tsparticles';
import TheTimeline from "./components/TheTimeline"
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import TerminalHero from './components/TerminalHero';
import ScrollFadeIn from './components/ScrollFadeIn';

import Jumbotron from "react-bootstrap/Jumbotron"
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button"


import * as Config from "./shared-util/config"

function App() {
  return (
    <div className="App">

      {/* background particles */}
      <Particles
        className="changing-gradient"
        options={Config.jumbotronOptions}
      />

      <NavComponent/>
      <div className="top-level-container container-fluid">
        {/* Terminal Hero Section */}
        <Jumbotron fluid
            className="jumbotron-main w-100"
            id="home"
          >
          <TerminalHero />
        </Jumbotron>

        {/* About section - Bento Box Layout */}
        <Jumbotron fluid
            className="jumbotron-other w-100 section-diagonal"
            id="about"
          >
          {/* Floating decorative elements */}
          <div className="floating-element floating-1"></div>
          <div className="floating-element floating-2"></div>
          
          <div className="bento-container bento-about">
            {/* Profile Card */}
            <ScrollFadeIn delay={0} direction="left">
              <div className="bento-card bento-profile">
                <div className="mugshot-wrapper mb-4">
                  <img src={`${process.env.PUBLIC_URL}/assets/mugshot.jpg`} alt="ankit" className="mugshot-img" style={{borderRadius: '12px'}}/>
                </div>
                <h1 className="section-header text-center"><span className="color-me">About</span> Me</h1>
              </div>
            </ScrollFadeIn>

            {/* Bio + Tech Stack Combined Card */}
            <ScrollFadeIn delay={200} direction="right">
              <div className="bento-card bento-content">
                <p className="section-desc mb-3">
                  {Config.aboutMeLine1}
                </p>
                <p className="section-desc mb-4">
                  {Config.aboutMeLine2}
                </p>
                
                <p className="section-desc mb-3">
                  {Config.aboutMeLine3}
                </p>
                <div className="tech-stack-grid">
                  {
                    Config.technologies.map((el, index) => (
                      <div key={el} className="tech-item" style={{
                        animationDelay: `${index * 100}ms`
                      }}>
                        <span>{el}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </Jumbotron>  
        <br/>

        {/* experience timeline */}
        <div
          className="jumbotron-other text-left"
          id="timeline"
        >
          <div className="section-header-container">
            <h1 className="section-header"><span className="color-me">Experience</span> Timeline</h1>
          </div>
          <br/>
          <div className='mx-auto'>
            <TheTimeline/>
          </div>
        </div>
        <br/>
        <br/>

        {/* Projects section - Bento Box Layout */}
        <Jumbotron fluid
            className="jumbotron-other w-100 section-diagonal"
            id="work"
          >
          {/* Floating decorative element */}
          <div className="floating-element floating-3"></div>
          
          <ScrollFadeIn delay={0}>
            <div className="text-center mb-5">
              <h1 className="section-header"><span className="color-me">Things</span> I've Built</h1>
            </div>
          </ScrollFadeIn>

          <div className="bento-container bento-projects">
            {
              Config.projects.map((el, index) => {
                // Define different sizes for bento layout
                let sizeClass = 'bento-project-small';
                if (index === 0) sizeClass = 'bento-project-large'; // First project gets large card
                else if (index === 1) sizeClass = 'bento-project-medium'; // Second project gets medium

                return(
                  <ScrollFadeIn key={el.name} delay={index * 150} direction="up">
                    <div className={`bento-card ${sizeClass}`}>
                      <div className="project-inner h-100" style={{background: 'transparent', border: 'none', padding: 0}}>
                        <div className="project-top">
                          <div className="project-folder-icon">
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 2a2 2 0 0 1 2-2h6.5a2 2 0 0 1 1.6.8L12 3h8a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" fill="var(--matrix-green)" opacity="0.6"/>
                            </svg>
                          </div>
                          <div className="project-links">
                            <a href={el.githubUrl} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                <title>GitHub</title>
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                </path>
                              </svg>
                            </a>
                            {el.webUrl && 
                              <a href={el.webUrl} aria-label="External Link" className="external" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                                  <title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                              </a>
                            }
                          </div>
                        </div>

                        <h3 className="project-title">
                          <a href={el.webUrl ? el.webUrl : el.githubUrl} target="_blank" rel="noopener noreferrer">
                            {el.name}
                          </a>
                        </h3>
                        <div className="project-description">
                          <p>{el.desc}</p>
                        </div>

                        {el.tech && (
                          <div className="project-tech-stack">
                            {el.tech.map((tech, techIndex) => (
                              <span key={techIndex} className="tech-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </ScrollFadeIn>
                )
              })
            }
          </div>
        </Jumbotron>  

        {/* contact jumbo */}
        <Jumbotron fluid
            className="jumbotron-small w-100"
            id="contact"
          >
          <Container className="row justify-content-center">

            <div className="col-md-7 col-10 mb-3 text-center">
              <div className="section-header-container">
                <h1 className="section-header text-center"><span className="color-me">Get</span> In Touch</h1>
              </div>
              <p className="pt-3 section-desc terminal-text">
                {Config.contactText}
              </p>
              <p className="section-desc">
                <span className="terminal-prompt">$ </span>
                <code>email --to=</code><a href={`mailto:${Config.emailId}`} className="color-me email-link">{Config.emailId}</a>
              </p>
              <br />
            </div>

            <div className="col-md-7 col-10 mb-3 text-center">
              <a href={`mailto:${Config.emailId}`}>
                <Button 
                  style={{width: 150}}
                  variant="outline-light"
                  className="terminal-button"
                >
                  ./send_message
                </Button>
              </a>
              
            </div>

          </Container>
        </Jumbotron>

        <Footer/>

      </div>
      
    </div>
  );
}

export default App;
