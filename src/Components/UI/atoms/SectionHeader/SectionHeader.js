import styled from 'styled-components';

const SectionHeader = styled.h1`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 38px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.35538em;
    color: #000000;
    border: 8px solid black;
    padding: 25px 65px 25px 65px;

    @media (max-width: 630px) {
        font-size: 18px;
        padding: 15px 35px 15px 35px;
    }

`;

export default SectionHeader;