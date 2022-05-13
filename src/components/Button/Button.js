import React from 'react';
import './styles.css';

const Button = (props) => {
    const openLink = () => {
        window.open(props.href, '_blank')
    }

    return (
        <p className={`button ${props.styleClass}`} onClick={openLink}>
            <img src={props.icon} alt={props.label} width="20" height="20" />
            {props.label}
        </p>
    )
}

export default Button;