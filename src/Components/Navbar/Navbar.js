import React from 'react';
import './Navbar.css';
import hamburger from '../../Images/hamburger.svg';
import '../../globalStyles/hamburger.css';

class Navbar extends React.Component {

    handleHamburgerClick = () => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        navLinks
            .classList
            .toggle('nav-collapse');

        hamburger.classList.toggle('is-active');
        
    }

    render() {
        window.onscroll = () => {
            const nav_wrap = document.querySelector('.nav-wrapper');
            if (this.scrollY <= 10) 
                nav_wrap.classList.remove('scroll-wrapper');
            else 
                nav_wrap
                    .classList
                    .add('scroll-wrapper');
            
            const nav_links = document.querySelector('.nav-links');
            if (this.scrollY <= 10) 
                nav_links.classList.remove('scroll-links');
            else 
                nav_links
                    .classList
                    .add('scroll-links');
            
            if (window.scrollY === 0) 
                nav_wrap.classList.remove('scroll-wrapper');
            if (window.scrollY === 0) 
                nav_links.classList.remove('scroll-links');
            };
        
        return (
            <header>

                <div className="nav-wrapper">
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
