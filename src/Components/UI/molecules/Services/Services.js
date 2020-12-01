import React from 'react';
import Service from '../../atoms/Service/Service';

import './Services.css';

class Services extends React.Component{
  services = [
    {
      title: "DESIGN",
      source: "./images/services/design.png",
      text: "I can design the website based on your needs and suggestions. I can also create it from scratch by consulting with you during my work."
    },

    {
      title: "DEVELOPMENT",
      source: "./images/services/development.png",
      text: "Based on a project created by me (or any another one provided by you), I can code the website to be fully functional and responsive."
    },

    {
      title: "MAINTENANCE",
      source: "./images/services/maintenance.png",
      text: "I will look after your website, and in case of problems or the need for changes, I can introduce new functionalities and solutions."
    }
  ];

  render(){
    return(
      <div className="services">
        {this.services.map(service => {
          return (
            <Service key={service.title} title={service.title} source={service.source}>
              {service.text}
            </Service>)
          })}
      </div>
    )
  }
}

export default Services;
