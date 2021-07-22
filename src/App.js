import './App.css';
import NavComponent from './components/Header';
import Particles from 'react-particles-js';
import { TheTimeline } from "./components/TheTimeline"
import ProjectCard from './components/ProjectCard';

import Jumbotron from "react-bootstrap/Jumbotron"
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button"

import * as Config from "./shared-util/config"

function App() {
  const dumm = Config.projects[0]
  return (
    <div className="App">
      <NavComponent/>
      <div className="top-level-container container-fluid">
        {/* top jumbo */}
        <Jumbotron fluid
            className="jumbotron-main w-100"
            id="home"
          >
          <Container>
            <p className="mb-1">Hi, I am</p>
            <h1>{Config.firstName} {Config.lastName}</h1>
            <p className="py-3">
              Software Engineer | Aspiring Artist | Noob Gamer   
            </p>
            <Button 
              style={{width: 130}}
              variant="outline-light"
            >
              Get in touch
            </Button>
          </Container>
        </Jumbotron>

        {/* aboutme jumbo */}
        <Jumbotron fluid
            className="jumbotron-other w-100"
            id="about"
          >
          <Container className="row">

            <div className="col-md-6">
              <h1>{"<Insert Mugshot Here>"}</h1>
            </div>
            <div className="col-md-6">

              <div className="section-header-container">
                <h1 className="section-header">About Me</h1>
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

        {/* experience timeline */}
        <div
          className="jumbotron-other text-left"
          id="timeline"
        >
          <div className="section-header-container">
            <h1 className="section-header">Experience</h1>
          </div>
          <br/>
          <TheTimeline/>
        </div>

        {/* project section */}
        <Jumbotron fluid
            className="jumbotron-other w-100"
            id="work"
          >
          <Container className="row justify-content-center">

            <div className="col-md-12 mb-3">
              <div className="section-header-container">
                <h1 className="section-header text-center">Things I've Built</h1>
              </div>
              <br />
            </div>

            <div className="col-md-10 col-12">
              <div className="row justify-content-center">
                {
                  Config.projects.map(el => {
                    return(
                      <div className="col-md-5 col-12 my-3">
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


      </div>
      

      {/* background particles */}
      <Particles
        className="changing-gradient"
        params={Config.jumbotronOptions}
      />
    </div>
  );
}

export default App;
