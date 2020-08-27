import React from 'react';
import ITberries from '../../UI/organisms/ITberries/ITberries';
import Hero from '../../UI/organisms/Hero/Hero';
import About from '../../UI/organisms/About/About';
import Portfolio from '../../UI/organisms/Portfolio/Portfolio';

import './App.css';

function App() {
    return (
        <React.Fragment>
            <Hero/>
            <ITberries/>
            <About/>
            <Portfolio />
        </React.Fragment>
    );
}

export default App;
