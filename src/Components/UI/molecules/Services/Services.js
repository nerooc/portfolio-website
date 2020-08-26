import React from 'react';
import Service from '../../atoms/Service/Service';

import "./Services.css";

import design from '../../../../Images/design.png';
import maintenance from '../../../../Images/maintenance.png';
import development from '../../../../Images/development.png';

const Services = () => {
    return (
        <div className="services">
            <Service className="services__service-unit" title="DESIGN" source={design}>I can
                design the site based on your needs and suggestions. I can also design the site
                from scratch and consult you during the job.</Service>

            <Service
                className="services__service-unit"
                title="DEVELOPMENT"
                source={development}>I
                can design the site based on your needs and suggestions. I can also design the
                site from scratch and consult you during the job.</Service>

            <Service
                className="services__service-unit"
                title="MAINTENANCE"
                source={maintenance}>I
                can design the site based on your needs and suggestions. I can also design the
                site from scratch and consult you during the job.</Service>
        </div>
    );
}

export default Services;