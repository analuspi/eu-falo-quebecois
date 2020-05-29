import React from 'react';
import "./Title.css";


const  Title = props => {
    return (
        <h1 className="title">{props.name}</h1>
    )
}

export default Title