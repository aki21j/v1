import React, { useState, useRef } from "react"

const ProjectCard = (props) => { 
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 8;
        const rotateY = (centerX - x) / 8;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    };

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        }
        setIsHovered(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return(
        <div 
            className={`project-inner ${isHovered ? 'project-hover' : ''}`}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
        >
            <div className="project-top">
                <div className="project-folder-icon">
                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 2a2 2 0 0 1 2-2h6.5a2 2 0 0 1 1.6.8L12 3h8a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" fill="var(--matrix-green)" opacity="0.6"/>
                    </svg>
                </div>
                <div className="project-links">
                    <a href={props.githubUrl} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                            <title>GitHub</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                            </path>
                        </svg>
                    </a>
                    {props.webUrl && 
                        <a href={props.webUrl} aria-label="External Link" className="external" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                                <title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    }
                </div>
            </div>

            <h3 className="project-title">
                <a href={props.webUrl ? props.webUrl : props.githubUrl} target="_blank" rel="noopener noreferrer">
                    {props.name}
                </a>
            </h3>
            <div className="project-description">
                <p>{props.desc}</p>
            </div>

            {/* Tech Stack Tags */}
            {props.tech && (
                <div className="project-tech-stack">
                    {props.tech.map((tech, index) => (
                        <span key={index} className="tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
    
}

export default ProjectCard