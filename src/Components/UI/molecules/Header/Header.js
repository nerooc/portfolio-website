import React from 'react';
import './Header.css';

import mail_icon from '../../../../images/header/mail.svg';
import github_icon from '../../../../images/header/github.svg';
import linkedin_icon from '../../../../images/header/linked-in.svg';
import separator from '../../../../images/separators/separatorWhite.png';

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
              src={mail_icon}
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
              src={github_icon}
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
              src={linkedin_icon}
              alt="linked-in-svg"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
