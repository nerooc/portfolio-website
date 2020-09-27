import React from 'react';
import Service from '../../atoms/Service/Service';

import './Services.css';

import design from '../../../../Images/services/design.png';
import maintenance from '../../../../Images/services/maintenance.png';
import development from '../../../../Images/services/development.png';

const Services = props => (
  <div className="services">
    <Service title="DESIGN" source={design}>
      I can design the website based on your needs and suggestions. I can also create it from scratch by consulting with you during work.
    </Service>

    <Service title="DEVELOPMENT" source={development}>
      Based on a project created by me or another one, sent by you, I can program the website to be fully functional and responsive.
    </Service>

    <Service title="MAINTENANCE" source={maintenance}>
     In case of any problems or the need for changes, I can introduce new functionalities and solutions.
    </Service>
  </div>
);

export default Services;
