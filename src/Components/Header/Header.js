import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';

class Header extends React.Component {
	render() {
		return (
			<div className="container">
				<h2>my name is Thomas</h2>
				<h1>I'M A DEVELOPER</h1>
				<div className="social-media">
					<a href="#">
						<img src="../../Images/mail.svg" />
					</a>
					<a href="#">
						<img src="../../Images/github.svg" />
					</a>
					<a href="#">
						<img src="../../Images/linked-in.svg" />
					</a>
				</div>
			</div>
		);
	}
}

export default Header;
