import React from 'react';
import "./Service.css";

const service = (props) => {
    return (
        <div className="service">
            <img className="service__svg" src={props.source} alt="service-logo" />
            <h1 className="service__h1">{props.title}</h1>
            <p className="service__p">{props.children}</p>
        </div>
    );
}

export default service;