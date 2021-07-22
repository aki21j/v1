import React from "react"
import { FaStackOverflow, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

import { linkedinUrl, githubUrl, instagramUrl, stackoverflowUrl } from "../shared-util/config"

const Footer = () => {
    return (
        <div className="nav-transparent white-link px-5 footer-container">
            <div className="col-12 mb-3 text-center">
                <a href={linkedinUrl} target="_blank" rel="noreferrer">
                    <FaLinkedin
                        className="social-links"
                    />
                </a>
                <a href={githubUrl} target="_blank" rel="noreferrer">
                    <FaGithub
                        className="social-links"
                    />
                </a>
                <a href={stackoverflowUrl} target="_blank" rel="noreferrer">
                    <FaStackOverflow
                        className="social-links"
                    />
                </a>
                <a href={instagramUrl} target="_blank" rel="noreferrer">
                    <FaInstagram
                        className="social-links"
                    />
                </a>
            </div>
            <p>Designed and Built by  <span className="nav-brand color-me" style={{letterSpacing:2}}>{`<Ankit> `} </span></p>
        </div>
    )
}

export default Footer