import styled, {css} from 'styled-components'

const Button = styled.button `
	/* button reset */
	background: none repeat scroll 0 0 transparent;
	border: medium none;
	
	/* button style properties */
	display: block;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	font-size: 15px;
	position: relative;
	padding: 13px 30px;
	color: ${props => props.white
    ? 'white'
    : 'black'};
	transition: all 0.5s ease 0.2s, margin-left 0.5s;
	cursor: pointer;
	box-sizing: border-box;


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

		margin-left: 0;
	}

	&:focus { outline: none; }

`;

export default Button;
