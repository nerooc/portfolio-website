import React from 'react';

import ITberries from '../../UI/organisms/ITberries/ITberries';
import Hero from '../../UI/organisms/Hero/Hero';
import About from '../../UI/organisms/About/About';
import Portfolio from '../../UI/organisms/Portfolio/Portfolio';
import Contact from '../../UI/organisms/Contact/Contact';
import Footer from '../../UI/molecules/Footer/Footer';

import LoadingScreen from '../../UI/molecules/LoadingScreen/LoadingScreen';

import './App.css';


class App extends React.Component {
  state = {
    loading: true
  }

  setDocHeight() {
    document
        .documentElement
        .style
        .setProperty('--vh', `${window.innerHeight / 100}px`);
  };

  componentDidMount() {
      this.timerHandle = setTimeout(() => this.setState({loading: false}), 3500);
      this.setDocHeight();

      /* THIS IS CAUSING THE STAGGER ON MOBILE */
      window.addEventListener('resize', this.setDocHeight)
      window.addEventListener('orientationchange', this.setDocHeight)
  }

  componentWillUnmount(){
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
      
      let loadingScreen = this.state.loading
          ? <LoadingScreen/>
          : null; 


      return (
        <> 
          {loadingScreen}
          <Hero/> 
          <ITberries /> 
          <About/> 
          <Portfolio /> 
          <Contact/> 
          <Footer /> 
        </>
      );
  }
}

export default App;
