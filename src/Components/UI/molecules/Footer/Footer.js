import React from 'react';
import './Footer.css';

import mail from '../../../../images/footer/mail-footer.svg';
import figma from '../../../../images/footer/figma.svg';
import linkedin from '../../../../images/footer/linked-in-footer.svg';
import codepen from '../../../../images/footer/codepen-footer.svg';
import arrow from '../../../../images/footer/double-arrow-up.svg';

const Footer = props => (
    <footer className="footer">

        <div className="footer__toTop">
            <a href="#" title="back-to-top">
                <img src={arrow} alt="double-arrow-back"/>
                <p>BACK TO TOP</p>
            </a>
        </div>

        <div className="footer__social">

            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.figma.com/@nerooc">

                <img
                    className="footer__social-media-unit"
                    src={figma}
                    alt="fb-footer-svg"/>
            </a>

            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/tomasz-gajda-128371178/">

                <img
                    className="footer__social-media-unit"
                    src={linkedin}
                    alt="linkedin-footer-svg"/>
            </a>

            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://codepen.io/nerooc">

                <img className="footer__social-media-unit" src={codepen} alt="ig-footer-svg"/>
            </a>

            <a href="mailto:tomasz_gajda@outlook.com">
                <img className="footer__social-media-unit" src={mail} alt="mail-footer-svg"/>
            </a>

        </div>
        <div className="footer__rights">
            <b style={{
                fontWeight: '600'
            }}>@2020 Tomasz Gajda
            </b>
            &nbsp;All Rights Reserved. 🔥
        </div>

    </footer>

);

export default Footer;