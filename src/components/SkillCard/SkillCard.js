import React from 'react';
import './styles.css';

const SkillCard = (props) => {
    return (
        <a href={props.url}><div className="skill-box">
            <h3>{props.name}</h3>
            <img src={props.image} className={props.styleClass} alt={props.name}/>
        </div></a>
    )
}

export default SkillCard;