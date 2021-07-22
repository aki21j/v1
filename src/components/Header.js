import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import '../index.css';

export default class NavComponent extends React.Component{
    
    render() {
        return (
            <Navbar
              className={`nav-container w-100 container-fluid nav-transparent}`}
            >
              <Navbar.Brand className="brand" href={"/#home"}>
                <span className={`nav-brand white-link`}>[ A ]</span>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
              <Navbar.Collapse id="basic-navbar-nav"> 
              <Nav className="container-fluid pt-3" style={{justifyContent: "flex-end"}}>
                  <Nav.Link
                    className={`px-3 nav-link lead white-link`}
                    href={"/#about"}
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    className={`px-3 nav-link lead white-link`}
                    href={"/#timeline"}
                  >
                    Experience
                  </Nav.Link>
                  <Nav.Link
                    className={`px-3 nav-link lead white-link`}
                    href={"/#work"}
                  >
                    Work
                  </Nav.Link>
                  <Nav.Link
                    className={`px-3 nav-link lead white-link`}
                    href={"/#contact"}
                  >
                    Contact
                  </Nav.Link>
                  <Nav.Link
                    className={`px-3 nav-link lead white-link`}
                    href={"/#contact"}
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

