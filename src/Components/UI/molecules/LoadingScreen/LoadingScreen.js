import React from 'react';
import './LoadingScreen.css';

import logo from '../../../../Images/peace.svg';

const LoadingScreen = (props) => {
    return(
        <div className="loading__container">
            <img className="loading__logo" src={logo} />
        </div>
    )
}

export default LoadingScreen;