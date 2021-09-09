import React from 'react';
import styled from 'styled-components';

import Container from './Container';

const Services = () => {

    return (
        <ServicesStyled className='Services'>
            <h1>You shouldn’t have to do everything. And now you don’t have to.</h1>
            <p>Let’s get really real here: As a busy leader, it’s probably been too long since you were fully present. You know how we know? Because we’ve been there. Life has a sneaky way of getting in the way of our best intentions: bringing big ideas to life, growing our business, establishing healthy boundaries, self-care, putting family first. We know what we’re supposed to do – but often, we just can’t quite figure out how to do it all. But as with any struggle or obstacle in life, the first step is admitting you have a problem: You may not have everything under control. You know who can help you get everything ‘under control?’ A BELAY Assistant. And our contractor acceptance rate is lower than Harvard’s – 4.5 percent for anyone wondering – with our contractor acceptance rate at 3.93 percent. That means more than 96 percent of our applicants don’t make the grade. But those that do? Oh, they’re special. We’re talking creme-de-la-creme, knock-your-socks-off special – and they’re ready and waiting to help you reclaim the most valuable asset in business: more time to focus on what matters most. </p>
            <iframe width="600" height="500"  margin-left="auto" margin-right="auto" width="40%"
                src="https://www.youtube.com/embed/LahHlj6zneY?autoplay=1&mute=1">
            </iframe>
            <Container />
        </ServicesStyled>
    );
}

export default Services;

const ServicesStyled = styled.div`
    .iframe{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 40%;
    }

`;