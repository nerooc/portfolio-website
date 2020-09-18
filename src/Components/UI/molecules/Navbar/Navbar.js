import React from 'react';
import './Navbar.css';
import logo from '../../../../Images/peace.svg';
import '../../../../globalStyles/hamburger.css';

import { Link, animateScroll as scroll } from "react-scroll";


class Navbar extends React.Component {
  // metoda obsługująca menu hamburger, zrzuca i chowa dropdown menu

  handleHamburgerClick = () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-bar__links');

    navLinks.classList.toggle('nav-bar--collapsed');

    hamburger.classList.toggle('is-active');
  };

  render() {
    // funkcja która po scrollu przesuwa navbar w górę i dołącza czarny background

    window.onscroll = () => {
      const navWrap = document.querySelector('.nav-bar');
      const logoQuery = document.querySelector('.nav-bar__logo');

      if (this.scrollY <= 10) {
        navWrap.classList.remove('nav-bar--scrolled');
        logoQuery.classList.remove('nav-bar__logo--scrolled');
      } else {
        navWrap.classList.add('nav-bar--scrolled');
        logoQuery.classList.add('nav-bar__logo--scrolled');
      }

      const navLinks = document.querySelector('.nav-bar__links');

      if (this.scrollY <= 10)
        navLinks.classList.remove('nav-bar__links--scrolled');
      else navLinks.classList.add('nav-bar__links--scrolled');

      if (window.scrollY === 0) {
        logoQuery.classList.remove('nav-bar__logo--scrolled');
        navWrap.classList.remove('nav-bar--scrolled');
        navLinks.classList.remove('nav-bar__links--scrolled');
      }
    };
    

    return (
      <header>
        <div className="nav-bar">
          
          <a href="#">
            <img className="nav-bar__logo" src={logo} alt="logo" />
          </a>

          <div className="nav-bar__black-bar">
            <button
              className="hamburger hamburger--collapse"
              type="button"
              onClick={this.handleHamburgerClick}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>

          <ul className="nav-bar__links">
            <li>
              <Link
                className="nav-bar__link" 
                activeClass="nav-bar__active"
                to="about__anchor"
                spy={true}
                smooth={true}
                offset={-120}
                duration={300}
              >About me</Link>
            </li>

            <li>
              <Link
                className="nav-bar__link" 
                activeClass="nav-bar__active"
                to="skills"
                spy={true}
                smooth={true}
                duration={300}
              >Skills</Link>
            </li>

            <li>
              <Link
                className="nav-bar__link" 
                activeClass="nav-bar__active"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={300}
              >Portfolio</Link>
            </li>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={300}
              offset={20}
            >
              <li className="nav-bar__button">
                CONTACT ME
              </li>
            </Link>
            
          </ul>
        </div>
      </header>
    );
  }
}

export default Navbar;
