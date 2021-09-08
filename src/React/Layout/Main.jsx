import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Welcome from '../Pages/Welcome/Welcome.jsx';
import Login from '../Pages/Login/Login.jsx';
import Contact from '../Pages/Contact/Contact.jsx';
import Services from '../Pages/Services/Services.jsx';
import Homework from '../Homework/Homework.jsx';

// import SunAndMoon from '../SunAndMoon/SunAndMoon.jsx';

const Main = () => {
    return (
        <MainStyled>
            <h1>Finances do not have to be overwelming</h1>
            <p>Money is complicated, especially in today’s world. Rules change, regulations shift, and keeping up becomes a full-time job. Not to mention all of the work required to track expenses, accounts payable, donations, and any other financial transaction in your organization. Money makes things happen, but managing it isn’t easy. Especially when you don’t have a strong virtual accountant to manage it for you.
            When it comes to small business accounting, we believe you deserve top-notch financial experts to support your organization. That’s why our virtual accounting services ensure everything is correct, updated, and understandable. Talk to our team today, and never lose sleep over a budget spreadsheet again.
            </p>
            <Switch>
                <Route path='/services'>
                    <Services />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/homework'>
                    <Homework />
                </Route>
                <Route path='/' exact>
                    <Welcome />
                </Route>
            </Switch>
        </MainStyled>
    )
}

export default Main;


const MainStyled = styled.nav`
    background-color: white;
    /* color: white; */
    padding: 10px;
    
    /* div {
        border: solid 2px white;
        padding: 20px;
    } */
`;