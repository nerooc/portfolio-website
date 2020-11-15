import React from 'react';
import Service from '../../atoms/Service/Service';

import './Services.css';

class Services extends React.Component{
  state = {
    services: {
      design: {
        title: "DESIGN",
        source: "./images/services/design.png",
        text: "I can design the website based on your needs and suggestions. I can also create it from scratch by consulting with you during my work."
      },

      development: {
        title: "DEVELOPMENT",
        source: "./images/services/development.png",
        text: "Based on a project created by me (or any another one provided by you), I can program the website to be fully functional and responsive."
      },

      maintenance:{
        title: "MAINTENANCE",
        source: "./images/services/maintenance.png",
        text: "In case of any problems or a need for changes, I can introduce new functionalities and solutions."
      }
    }
  }

  render(){

    let servicesArray = [];

    for(let service in this.state.services){
      let pushable = {
        ...this.state.services[service]
      }
      servicesArray.push(pushable);
    }

    return(
      <div className="services">
        {servicesArray.map(service => {
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
