import React from 'react';
import Button from '../Button/Button';
import './styles.css';

const ProjectCard = (props) => {
    return (
        <div className="project-item">
            <div className="left-section">
                <img src={props.image} alt={props.name}/>
            </div>
            <div className="right-section">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <Button label={props.name === "OnePass Password Manager App" ? "Google Play Store" : "See Live"} icon="document.svg" href={props.liveUrl} styleClass="resume-btn" />
                {props.name === "OnePass Password Manager App" ? null:
                    <Button label="Source Code" icon="github.svg" href={props.sourceUrl} styleClass="resume-btn" />
                }
                
            </div>       
        </div>
    )
            }

export default ProjectCard;
