import React from 'react';
import styled from 'styled-components';

import Playground from 'React/Components/Lightbox/Playground.jsx';
import Slideshow from './Slideshow/Slideshow.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';
import Staff from './Staff/Staff.jsx';

const Welcome = () => {

    return (
        <WelcomeStyled className='Welcome'>
            <h1>We help ambitious people succeed</h1>
            <p> We are a CPA firm located in Irvine, CA. We offer a complete solution. Instead of having to go multiple service providers to fulfill your needs, why not keep everything under one roof. We serve a variety of industries, but they do specialize in the real estate, medical and E-commerce industry. Please feel free to contact us so we can help you solve all your financial needs. </p>
            <Playground />
            <Slideshow />
            <Tabbed />
            <Staff />
        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`
    h1 {
        color: #883131;
    }
`;