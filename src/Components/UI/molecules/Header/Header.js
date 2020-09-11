import React from 'react';
import './Header.css';
import mailPNG from '../../../../Images/mail.png';
import githubPNG from '../../../../Images/github.png';
import linkedinPNG from '../../../../Images/linked-in.png';
import separator from '../../../../Images/separatorWhite.png';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h2 className="header__submain">my name is Thomas</h2>
        <h1 className="header__main">I'M A DEVELOPER</h1>
        <img src={separator} className="header__separator" alt="separator" />

        <div className="header__social-media">
          <a href="mailto:tomasz_gajda@outlook.com">
            <img
              className="header__social-media-unit"
              src={mailPNG}
              alt="mail-svg"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nerooc"
          >
            <img
              className="header__social-media-unit"
              src={githubPNG}
              alt="git-svg"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/tomasz-gajda-128371178/"
          >
            <img
              className="header__social-media-unit"
              src={linkedinPNG}
              alt="linked-in-svg"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
