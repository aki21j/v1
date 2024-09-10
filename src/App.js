import React from 'react';
import './App.css';
import NavComponent from './components/Header';
import Particles from 'react-tsparticles';
import TheTimeline from "./components/TheTimeline"
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';

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
        {/* top jumbo */}
        <Jumbotron fluid
            className="jumbotron-main w-100"
            id="home"
          >
          <Container>
            <p className="mb-1 top-subheading">Hi, I am</p>
            <h1><span className="color-me">{Config.firstName}</span> {Config.lastName}</h1>
            <p className="py-3 mb-3 top-subheading">
              Software Engineer | Aspiring Artist | Ocassional Gamer   
            </p>

              <a href="#contact" className="top-cta">
                <Button 
                  style={{width: 130}}
                  variant="outline-light"
                >
                  Get in touch
                </Button>
              </a>
          </Container>
        </Jumbotron>

        {/* aboutme jumbo */}
        <Jumbotron fluid
            className="jumbotron-other w-100"
            id="about"
          >
          <Container className="row">

            <div className="col-md-6 py-5">
              <div className="mugshot-wrapper">
                <img src={`${process.env.PUBLIC_URL}/assets/mugshot.jpg`} alt="ankit" className="mugshot-img"/>

              </div>
            </div>
            <div className="col-md-6">

              <div className="section-subheader-container">
                <h1 className="section-header"><span className="color-me">About</span> Me</h1>
              </div>

              <p className="pt-3 section-desc">
                {Config.aboutMeLine1}
              </p>
              <p className="section-desc">
                {Config.aboutMeLine2}
              </p>
              <p className="section-desc pb-3">
                {Config.aboutMeLine3}
              </p>
              <ul className="multi-col-ul section-desc">
                {
                  Config.technologies.map(el => <li key={el}>{el}</li>)
                }
              </ul>
              </div>
          </Container>
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

        {/* project section */}
        <Jumbotron fluid
            className="jumbotron-other w-100"
            id="work"
          >
          <Container className="row justify-content-center">

            <div className="col-md-12 mb-3">
              <div className="section-header-container">
                <h1 className="section-header text-center"><span className="color-me">Things</span> I've Built</h1>
              </div>
              <br />
            </div>

            <div className="col-md-10 col-12">
              <div className="row justify-content-center">
                {
                  Config.projects.map(el => {
                    return(
                      <div key={el.name} className="col-md-5 col-12 my-3">
                        <ProjectCard
                          name={el.name}
                          desc={el.desc}
                          githubUrl={el.githubUrl}
                          webUrl={el.webUrl}
                        />

                      </div>
                    )
                  })
                }
              </div>
            </div>
          </Container>
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
              <p className="pt-3 section-desc">
                I am always open to collabarate on interesting projects. So, whether you have a question or just want to say hi, drop me a message 
                @<a href={`mailto:${Config.emailId}`} className="color-me email-link">{Config.emailId}</a>  and I'll get back to you!
              </p>
              <br />
            </div>

            <div className="col-md-7 col-10 mb-3 text-center">
              <a href={`mailto:${Config.emailId}`}>
                <Button 
                  style={{width: 130}}
                  variant="outline-light"
                  
                >
                  Say Hello
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
