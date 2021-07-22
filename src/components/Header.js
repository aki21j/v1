import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import '../index.css';

export default class NavComponent extends React.Component{
    constructor(props) {
        super(props);
    
        this.listener = null;
        this.state = {
          navPos: "top",
          maxHeight: 0
        }
    }

    componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
          const scrolled = document.scrollingElement.scrollTop;
          const jumbotronDiv = document.getElementsByClassName('changing-gradient')
          const thresholdHeight = jumbotronDiv[0].clientHeight

          if (scrolled >= thresholdHeight - 50) {
            if (this.state.navPos !== "fixed") {
              this.setState({ navPos: "fixed" });
            }
          } else {
            if (this.state.navPos !== "top") {
              this.setState({ navPos: "top" });
            }
          }
        });
      }
    
      componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
      }
    
    render() {
        return (
            <Navbar
              className={`nav-container w-100 container-fluid ${this.state.navPos === "top" ? "nav-transparent" : "nav-white"}`}
            >
              <Navbar.Brand className="brand" href={"/#home"}>
                <span className={`nav-brand ${this.state.navPos === "top" ? "white-link" : "black-link"}`}>[ A ]</span>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
              <Navbar.Collapse id="basic-navbar-nav"> 
              <Nav className="container-fluid" style={{justifyContent: "flex-end"}}>
                  <Nav.Link
                    className={`px-3 nav-link lead ${this.state.navPos === "top" ? "white-link" : "black-link"}`}
                    href={"/#projects"}
                  >
                    Projects
                  </Nav.Link>
                  <Nav.Link
                    className={`px-3 nav-link lead ${this.state.navPos === "top" ? "white-link" : "black-link"}`}
                    href={"#"}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Resume
                  </Nav.Link>
                  <Nav.Link
                    className={`px-3 nav-link lead ${this.state.navPos === "top" ? "white-link" : "black-link"}`}
                    href={"/#aboutme"}
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    className={`px-3 nav-link lead ${this.state.navPos === "top" ? "white-link" : "black-link"}`}
                    href={process.env.PUBLIC_URL + "/#skills"}
                  >
                    Skills
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>

            </Navbar>
        )
    }    
}

