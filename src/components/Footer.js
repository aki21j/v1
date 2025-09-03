import React from "react"
import { FaStackOverflow, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

import { linkedinUrl, githubUrl, instagramUrl, stackoverflowUrl } from "../shared-util/config"

const Footer = () => {
    return (
        <div className="nav-transparent white-link px-5 footer-container">
            {/* Social Links */}
            <div className="col-12 mb-4 text-center">
                <a href={linkedinUrl} target="_blank" rel="noreferrer">
                    <FaLinkedin className="social-links" />
                </a>
                <a href={githubUrl} target="_blank" rel="noreferrer">
                    <FaGithub className="social-links" />
                </a>
                <a href={stackoverflowUrl} target="_blank" rel="noreferrer">
                    <FaStackOverflow className="social-links" />
                </a>
                <a href={instagramUrl} target="_blank" rel="noreferrer">
                    <FaInstagram className="social-links" />
                </a>
            </div>
            
            {/* Terminal-style credits */}
            <div className="text-center footer-credits">
                <p className="terminal-text mb-1">
                    <span className="terminal-prompt">$ </span>
                    <code>git log --author="Ankit" --oneline</code>
                </p>
                <p className="footer-signature">
                    Designed and Built by <span className="nav-brand color-me" style={{letterSpacing:2}}>{`<Ankit>`}</span>
                </p>
            </div>
        </div>
    )
}

export default Footer