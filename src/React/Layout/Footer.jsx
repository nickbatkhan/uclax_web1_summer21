import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return <FooterStyled>G&J TAX CPA, INC. &copy; 2021</FooterStyled>
}

export default Footer;

const FooterStyled = styled.footer`
    background-color: white;
    color: black;
    padding: 10px;
    text-align: center;
`;