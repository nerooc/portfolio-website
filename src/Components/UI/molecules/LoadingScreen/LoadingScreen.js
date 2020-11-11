import React from 'react';
import './LoadingScreen.css';

class LoadingScreen extends React.Component{
    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }
    
    componentWillUnmount() {
        document.body.style.overflow = 'unset';
        document.body.style.overflowX = 'hidden';
        document.body.style.overflowyY = 'scroll';
    }

    render(){
        return(
            <div className="loading__container">
                <div className="loading__wrapper">
                    <div class="spinner"></div>
                </div>
            </div>
        )
    }
    
}

export default LoadingScreen;