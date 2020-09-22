import React from 'react';
import Service from '../../atoms/Service/Service';

import './Services.css';

import design from '../../../../Images/design.png';
import maintenance from '../../../../Images/maintenance.png';
import development from '../../../../Images/development.png';

const Services = props => (
  <div className="services">
    <Service title="PROJEKT" source={design}>
      Mogę zaprojektować stronę na podstawie Twoich potrzeb i sugestii. Mogę również stworzyć ją od podstaw, konsultując się z Tobą w trakcie pracy.
    </Service>

    <Service title="PROGRAMOWANIE" source={development}>
      Na podstawie stworzonego przeze mnie lub podesłanego projektu, mogę zaprogramować stronę by była w pełni funkcjonalna i responsywna.
    </Service>

    <Service title="KONSERWACJA" source={maintenance}>
      W razie wszelkich problemów lub potrzeby zmian, mogę wprowadzić nowe funkcjonalności.
    </Service>
  </div>
);

export default Services;
