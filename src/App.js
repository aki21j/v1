import './App.css';
import NavComponent from './components/Header';
import Particles from 'react-particles-js';
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button"

import { jumbotronOptions } from "./shared-util/config"

function App() {
  return (
    <div className="App">
      <NavComponent/>
      <Jumbotron fluid
        className="jumbotron-main w-100"
      >
      <Container>
        <p className="mb-1">Hi, I am</p>
        <h1>Ankit Gupta</h1>
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
      <Particles
      className="changing-gradient"
      params={jumbotronOptions}
    />
    </div>
  );
}

export default App;
