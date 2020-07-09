import React from 'react';
import ReactDOM from 'react-dom';
import './ITberries.css';

class Header extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>IT BERRIES</h1>
				<p>
					Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
					varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
					quis libero viverra facilisis ut ac est. Morbi commodo, eros in
					dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
					tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
					Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet
					varius turpis vel pharetra. Ut ante justo, consequat vitae elementum
					tempor, accumsan nec eros.
				</p>
				<div className="social-media">
					<a href="#">
						<img src={mailPNG} alt="mail-svg" />
					</a>
					<a href="#">
						<img src={githubPNG} alt="git-svg" />
					</a>
					<a href="#">
						<img src={linkedinPNG} alt="linked-in-svg" />
					</a>
				</div>
			</div>
		);
	}
}

export default Header;
