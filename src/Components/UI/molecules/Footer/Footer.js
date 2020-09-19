import React from 'react';
import './Footer.css';

import mail from '../../../../Images/mail-footer.svg';
import facebook from '../../../../Images/facebook-footer.svg';
import linkedin from '../../../../Images/linked-in-footer.svg';
import ig from '../../../../Images/ig-footer.svg';
import arrow from '../../../../Images/double-arrow-up.svg';

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
                href="https://www.facebook.com/tomek.gajda.94">

                <img className="footer__social-media-unit" src={facebook} alt="fb-footer-svg"/>
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

            <a href="mailto:tomasz_gajda@outlook.com">
                <img className="footer__social-media-unit" src={ig} alt="ig-footer-svg"/>
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
            &nbsp;All Rights Reserved. 🔥</div>

    </footer>

);

export default Footer;