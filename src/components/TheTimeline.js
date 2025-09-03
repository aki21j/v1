import React from 'react';
import { Container } from 'react-bootstrap';
import ScrollFadeIn from './ScrollFadeIn';
   
   const TheTimeline = () => {
    const experiences = [
        {
            title: "Senior Product Engineer",
            company: "Intercom",
            location: "Dublin, Ireland",
            startDate: "Apr 2024",
            endDate: "Present",
            isActive: true
        },
        {
            title: "Product Engineer III", 
            company: "Intercom",
            location: "Dublin, Ireland",
            startDate: "Oct 2021",
            endDate: "Apr 2024",
            isActive: false
        },
        {
            title: "Senior Software Engineer",
            company: "O4S",
            location: "Gurgaon, India", 
            startDate: "May 2018",
            endDate: "May 2021",
            isActive: false
        },
        {
            title: "Frontend Developer",
            company: "GlocalGurus",
            location: "Bangalore, India",
            startDate: "Aug 2017", 
            endDate: "Jan 2018",
            isActive: false
        }
    ];
   
    return (
        <Container>
            <div className="custom-timeline">
                {experiences.map((exp, index) => (
                    <ScrollFadeIn key={index} delay={index * 150} direction="up">
                        <div className="timeline-item">
                            <div className="timeline-marker">
                                <div className={`timeline-dot ${exp.isActive ? 'active' : ''}`}></div>
                                {index < experiences.length - 1 && <div className="timeline-line"></div>}
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3 className="timeline-title">{exp.title}</h3>
                                    <span className="timeline-date">
                                        {exp.startDate} - {exp.endDate}
                                    </span>
                                </div>
                                <div className="timeline-company">
                                    <span className="company-name">{exp.company}</span>
                                    <span className="company-location">{exp.location}</span>
                                </div>
                            </div>
                        </div>
                    </ScrollFadeIn>
                ))}
            </div>
        </Container>
    );
   };

export default TheTimeline