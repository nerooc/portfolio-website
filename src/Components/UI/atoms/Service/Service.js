import React from 'react';
import "./Service.css";

const service = (props) => {
    return (
        <div className="service">
            <img className="service__svg" src={props.source} />
            <h1 className="service__h1">DESIGN</h1>
            <p className="service__p">I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
        </div>
    );
}

export default service;