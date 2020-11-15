import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1 className="header__main">Tomasz Gajda</h1>
                <h2 className="header__submain">Front End developer/ UI designer</h2>
                <img
                    src="./images/separators/separatorWhite.png"
                    className="header__separator"
                    alt="separator"/>

                <div className="header__social-media">
                    <a href="mailto:tomasz_gajda@outlook.com">
                        <img
                            className="header__social-media-unit"
                            src="./images/header/mail.svg"
                            alt="mail-svg"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/nerooc">
                        <img
                            className="header__social-media-unit"
                            src="./images/header/github.svg"
                            alt="git-svg"/>
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/tomasz-gajda-128371178/">
                        <img
                            className="header__social-media-unit"
                            src="./images/header/linked-in.svg"
                            alt="linked-in-svg"/>
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;
