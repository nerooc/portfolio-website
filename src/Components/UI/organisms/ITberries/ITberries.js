import React from 'react';
import './ITberries.css';
import Parallax from 'react-rellax';
import Fade from 'react-reveal/Fade';
import Button from '../../atoms/Button/Button';

class Header extends React.Component {
  render() {
    return (
      <div className="itb">
        <Parallax speed={-6.5}>
          <img className="itb__logo" src="./images/ITberries/ITb-logo.png" alt="itbLogo" />
        </Parallax>
        <div className="itb__container">
          <Fade left duration={2500} distance="30px">
            <h1 className="itb__h1">IT BERRIES</h1>
          </Fade>
          <Fade left duration={2500} distance="30px">
            <p className="itb__p">
            I am a member of a science club that brings together enthusiasts of the Internet and new technologies. At ITberries, we design and develop websites and web applications following agile methodology. Apart from the projects, our biggest undertaking is the Ciemna Strona UX conference, which we are organizing for the sixth time. Working in the club as a Front-End Developer definitely gives me experience in group work and working under time pressure. If you want to know more about us, click the button below!
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
              MORE
            </Button>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Header;
