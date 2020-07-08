import React from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css';

class Navbar extends React.Component {
	render() {
		return (
			<header>
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
			</header>
		);
	}
}

export default Navbar;
