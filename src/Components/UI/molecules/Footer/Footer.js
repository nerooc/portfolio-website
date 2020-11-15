import React from 'react';
import './Footer.css';

const Footer = props => (
    <footer className="footer">

        <div className="footer__toTop">
            <a href="#" title="back-to-top">
                <img src="./images/footer/double-arrow-up.svg" alt="double-arrow-back"/>
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
                    src="./images/footer/figma.svg"
                    alt="fb-footer-svg"/>
            </a>

            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/tomasz-gajda-128371178/">

                <img
                    className="footer__social-media-unit"
                    src="./images/footer/linked-in-footer.svg"
                    alt="linkedin-footer-svg"/>
            </a>

            <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/nerooc">

                <img
                    className="footer__social-media-unit"
                    src="./images/footer/codepen-footer.svg"
                    alt="ig-footer-svg"/>
            </a>

            <a href="mailto:tomasz_gajda@outlook.com">
                <img
                    className="footer__social-media-unit"
                    src="./images/footer/mail-footer.svg"
                    alt="mail-footer-svg"/>
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