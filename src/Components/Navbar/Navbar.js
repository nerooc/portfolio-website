import React from 'react';
import './Navbar.css';
import logo from '../../Images/peace.svg';
import '../../globalStyles/hamburger.css';

class Navbar extends React.Component {

    // metoda obsługująca menu hamburger, zrzuca i chowa dropdown menu

    handleHamburgerClick = () => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        navLinks
            .classList
            .toggle('nav-collapse');

        hamburger
            .classList
            .toggle('is-active');

    }

    render() {

        // funkcja która po scrollu przesuwa navbar w górę i dołącza czarny background

        window.onscroll = () => {
            const nav_wrap = document.querySelector('.nav-wrapper');
            const logo = document.querySelector('.logo');

            if (this.scrollY <= 10) {
                nav_wrap
                    .classList
                    .remove('scroll-wrapper');
                logo
                    .classList
                    .remove('logo-wrapper');
            } else {
                nav_wrap
                    .classList
                    .add('scroll-wrapper');
                logo
                    .classList
                    .add('logo-wrapper');
            }

            const nav_links = document.querySelector('.nav-links');

            if (this.scrollY <= 10) 
                nav_links.classList.remove('scroll-links');
            else 
                nav_links
                    .classList
                    .add('scroll-links');
            
            if (window.scrollY === 0) {
                logo
                    .classList
                    .remove('logo-wrapper');
                nav_wrap
                    .classList
                    .remove('scroll-wrapper');
                nav_links
                    .classList
                    .remove('scroll-links');
            }

        };

        return (
            <header>

                <div className="nav-wrapper">
                    <img className="logo" src={logo}/>
                    <div className="black-bar">
                        <button
                            className="hamburger hamburger--collapse"
                            type="button"
                            onClick={this.handleHamburgerClick}>
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>

                    </div>
                    <ul className="nav-links">
                        <li>
                            <a href="#">About me</a>
                        </li>
                        <li>
                            <a href="#">Language</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li className="button">CONTACT ME</li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Navbar;
