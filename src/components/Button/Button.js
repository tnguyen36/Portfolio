import React from 'react';
import './styles.css';

const Button = (props) => {
    return (
        <a className={`button ${props.styleClass}`} href={props.href}>
            <img src={props.icon} alt={props.label} width="20" height="20" />
            {props.label}
        </a>
    )
}

export default Button;