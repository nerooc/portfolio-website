import React from 'react';
import './Button.css';
import styled, {css} from 'styled-components'

const Button = styled.button `
	/*Reset's every elements apperance*/
	background: none repeat scroll 0 0 transparent;
	border: medium none;
	border-spacing: 0;
	font-family: 'PT Sans Narrow', sans-serif;
	font-size: 16px;
	font-weight: normal;
	line-height: 1.42rem;
	list-style: none outside none;
	margin: 0;
	padding: 0;
	text-decoration: none;
	text-indent: 0;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	display: block;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	font-size: 15px;
	position: relative;
	padding: 13px 30px;
	color: ${props => props.white
    ? 'white'
    : 'black'};
	transition: all 0.5s ease 0.2s;
	cursor: pointer;
	box-sizing: border-box;
	margin-left: 30px;


	&::before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: -30px;
		background-color: ${props => props.white
        ? 'white'
        : 'black'};
		height: 100%;
		width: 2px;
		transition: all 0.2s ease 0s;
	}

	&::after {
		content: '';
		display: block;
		position: absolute;
		right: -30px;
		top: 0;
		background-color: ${props => props.white
            ? 'white'
            : 'black'};
		height: 100%;
		width: 2px;
		transition: all 0.2s ease 0s;
	}

	&:hover::before {
		left: 0;
	}

	&:hover::after {
		right: 0;
	}

	&:hover {
		color: ${props => props.white
                ? 'black'
                : 'white'};
		background-color: ${props => props.white
                    ? 'white'
                    : 'black'};
		font-weight: 600;
		-webkit-box-shadow: inset 0px 0px 0px 2px ${props => props.white
                        ? 'white'
                        : 'black'};
		-moz-box-shadow: inset 0px 0px 0px 2px ${props => props.white
                            ? 'white'
                            : 'black'};
		box-shadow: inset 0px 0px 0px 2px ${props => props.white
                                ? 'white'
                                : 'black'};
		cursor: pointer;
	}
`;

export default Button;
