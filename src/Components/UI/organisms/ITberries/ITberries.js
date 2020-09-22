import React from 'react';
import './ITberries.css';
import Parallax from 'react-rellax';
import Fade from 'react-reveal/Fade';
import Button from '../../atoms/Button/Button';
import itbPNG from '../../../../Images/ITB.png';

class Header extends React.Component {
  render() {
    return (
      <div className="itb">
        <Parallax speed={-6.5}>
          <img className="itb__logo" src={itbPNG} alt="itbLogo" />
        </Parallax>
        <div className="itb__container">
          <Fade left duration={2500} distance="30px">
            <h1 className="itb__h1">IT BERRIES</h1>
          </Fade>
          <Fade left duration={2500} distance="30px">
            <p className="itb__p">
            Jestem jednym z członków koła naukowego skupiającego fascynatów internetu i nowych technologii. W ITberries zajmujemy się projektowaniem i tworzeniem stron internetowych, jak i aplikacji. Oprócz projektów, naszym największym przedsięwzięciem jest konferencja Ciemna Strona UX, którą organizujemy już szósty raz. Praca w kole na stanowisku Front-End Developera zdecydowanie rozwinęła moje umiejętności pracy w grupie, jak i  pracy pod presją czasu.  Jeśli chcesz dowiedzieć się więcej o kole, kliknij w poniższy przycisk!
            </p>
          </Fade>
          <Fade left duration={2500} distance="30px">
            <Button
              white
              className="itb__button"
              onClick={() => {
                window.open('https://www.facebook.com/ITberries/');
              }}
            >
              WIĘCEJ!
            </Button>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Header;
