import React from 'react';
import './LoadingScreen.css';

import logo from '../../../../images/navbar/logo.svg';



class LoadingScreen extends React.Component{
    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }
    
    componentWillUnmount() {
        document.body.style.overflow = 'unset';
    }

    render(){
        return(
            <div className="loading__container">
                <div className="loading__wrapper">
                    <img className="loading__logo" src={logo} alt="logo"/>
                    <div class='loader loader1'>
                        <div>
                            <div>
                            <div>
                                <div>
                                <div>
                                    <div></div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default LoadingScreen;