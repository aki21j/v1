import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import '../index.css';

import { cvLink } from "../shared-util/config"

export default class NavComponent extends React.Component{
    
    render() {
        return (
            <Navbar  collapseOnSelect expand="lg"
              className={`nav-container w-100 container-fluid nav-transparent}`}
            >
              <Navbar.Brand className="brand" href={"#home"}>
                <span className={`nav-brand white-link`}>[ A ]</span>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler navbar-dark"  />
              <Navbar.Collapse id="basic-navbar-nav"> 

              <Nav className="container-fluid pt-3" style={{justifyContent: "flex-end"}}>
                  <Nav.Link
                    className={`px-3 nav-link lead white-link`}
                    href={"#about"}
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    className={`px-3 nav-link lead white-link`}
                    href={"#timeline"}
                  >
                    Experience
                  </Nav.Link>
                  <Nav.Link
                    className={`px-3 nav-link lead white-link`}
                    href={"#work"}
                  >
                    Work
                  </Nav.Link>
                  <Nav.Link
                    className={`px-3 nav-link lead white-link`}
                    href={"#contact"}
                  >
                    Contact
                  </Nav.Link>
                  <Nav.Link
                    className={`px-3 nav-link lead white-link`}
                    href={cvLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      style={{width: 130}}
                      variant="outline-light"
                    >
                      Resume
                    </Button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        )
    }    
}

