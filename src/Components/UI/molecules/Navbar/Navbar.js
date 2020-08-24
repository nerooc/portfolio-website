import React from 'react';
import './Navbar.css';
import logo from '../../../../Images/peace.svg';
import '../../../../globalStyles/hamburger.css';

class Navbar extends React.Component {

    // metoda obsługująca menu hamburger, zrzuca i chowa dropdown menu

    handleHamburgerClick = () => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-bar__links');

        navLinks
            .classList
            .toggle('nav-bar--collapsed');

        hamburger
            .classList
            .toggle('is-active');

    }

    render() {

        // funkcja która po scrollu przesuwa navbar w górę i dołącza czarny background

        window.onscroll = () => {
            const nav_wrap = document.querySelector('.nav-bar');
            const logo = document.querySelector('.nav-bar__logo');

            if (this.scrollY <= 10) {
                nav_wrap
                    .classList
                    .remove('nav-bar--scrolled');
                logo
                    .classList
                    .remove('nav-bar__logo--scrolled');
            } else {
                nav_wrap
                    .classList
                    .add('nav-bar--scrolled');
                logo
                    .classList
                    .add('nav-bar__logo--scrolled');
            }

            const nav_links = document.querySelector('.nav-bar__links');

            if (this.scrollY <= 10) 
                nav_links.classList.remove('nav-bar__links--scrolled');
            else 
                nav_links
                    .classList
                    .add('nav-bar__links--scrolled');
            
            if (window.scrollY === 0) {
                logo
                    .classList
                    .remove('nav-bar__logo--scrolled');
                nav_wrap
                    .classList
                    .remove('nav-bar--scrolled');
                nav_links
                    .classList
                    .remove('nav-bar__links--scrolled');
            }

        };

        return (
            <header>

                <div className="nav-bar">

                    <img className="nav-bar__logo" src={logo} alt="logo"/>
                    <div className="nav-bar__black-bar">
                        <button
                            className="hamburger hamburger--collapse"
                            type="button"
                            onClick={this.handleHamburgerClick}>
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>

                    <ul className="nav-bar__links">

                        <li>
                            <a href="#">About me</a>
                        </li>

                        <li>
                            <a href="#">Language</a>
                        </li>

                        <li>
                            <a href="#">Portfolio</a>
                        </li>

                        <li className="nav-bar__button">CONTACT ME</li>

                    </ul>
                </div>
            </header>
        );
    }
}

export default Navbar;
