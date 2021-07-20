import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return ( 
        <NavStyled>
            <a href="/">Welcome</a>
            <a href="/">Services</a>
            <a href="/">Contact</a>
            <a href="/">Login</a>
            <a href="/">Homework</a>
        </NavStyled> 
    )
}

export default Nav;

const NavStyled = styled.nav`
    background-color: #005050;
    color: white;
    padding: 10px;
    text-align: center;

    a {
        display: inline-block;
        background-color: teal;
        color: white;
        padding: 10px;
        border-radius: 5px;
        margin: 0px 10px;

        text-decoration: none;
        text-transform: uppercase;

        &:hover{
            color: teal;
            background-color: white;
        }
    }
`;