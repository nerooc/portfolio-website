import React from 'react';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import Paragraph from '../../atoms/Paragraph/Paragraph';

import './Contact.css';

const Contact = (props) => {
	return (
			<div className="contact">
				<SectionHeader className="contact__header">CONTACT</SectionHeader>

				<Paragraph className="contact__paragraph">My name is Tomasz Gajda, I’m a third year Applied Computer Science student at AGH University of Science and Technology in Cracow, Poland. </Paragraph>
			</div>
	);
}

export default Contact;