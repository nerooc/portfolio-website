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
              Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
              varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
              quis libero viverra facilisis ut ac est. Morbi commodo, eros in
              dignissim tempus, lacus odio rutrum augue, in semper sem magna
              quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit
              amet elit. Nunc egestas nisi eget enim gravida facilisis.
              Pellentesque laoreet varius turpis vel pharetra. Ut ante justo,
              consequat vitae elementum tempor, accumsan nec eros.
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
              READ MORE
            </Button>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Header;
