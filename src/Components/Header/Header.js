import React from 'react';
import './Header.css';
import mailPNG from '../../Images/mail.png';
import githubPNG from '../../Images/github.png';
import linkedinPNG from '../../Images/linked-in.png';
import separator from '../../Images/separatorWhite.png';

class Header extends React.Component {
	render() {
		return (
			<div className="container">
				<h2>my name is Thomas</h2>
				<h1>I'M A DEVELOPER</h1>
				<img src={separator} className="separator" alt="separator" />

				<div className="social-media">
					<a href="#">
						<img className="social-media-unit" src={mailPNG} alt="mail-svg" />
					</a>
					<a href="#">
						<img className="social-media-unit" src={githubPNG} alt="git-svg" />
					</a>
					<a href="#">
						<img className="social-media-unit" src={linkedinPNG} alt="linked-in-svg" />
					</a>
				</div>
			</div>
		);
	}
}

export default Header;
