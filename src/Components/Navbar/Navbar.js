import React from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css';
import App from '../App/App';

class Navbar extends React.Component {
	render() {
		window.onscroll = () => {
			const nav_wrap = document.querySelector('.nav-wrapper');
			if (this.scrollY <= 10) nav_wrap.classList.remove('scroll-wrapper');
			else nav_wrap.classList.add('scroll-wrapper');

			const nav_links = document.querySelector('.nav_links');
			if (this.scrollY <= 10) nav_links.classList.remove('scroll-links');
			else nav_links.classList.add('scroll-links');

			if (window.scrollY === 0) nav_wrap.classList.remove('scroll-wrapper');
			if (window.scrollY === 0) nav_links.classList.remove('scroll-links');
		};

		return (
			<header>
				<div className="nav-wrapper">
					<ul className="nav_links">
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
