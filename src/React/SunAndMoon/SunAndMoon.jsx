import React, { useState } from 'react';
import styled from 'styled-components';

const SunAndMoon = () => {

    const [imageState, imageStateUpdate] = useState('/img/sun.png');

    const handleOnMounseOver = () => {
        console.log('Mousing over');
        imageStateUpdate('/img/moon.png')
    }

    const handleOnMounseOut = () => {
        console.log('Mousing out');
        imageStateUpdate('/img/sun.png')
    }

    return (
        <SunAndMoonStyled>
            <h2> Sun And Moon changes </h2>
            <img 
                src={ imageState }
                alt='Sun'
                onMouseOver={ handleOnMounseOver }
                onMouseOut={ handleOnMounseOut }
                />
        </SunAndMoonStyled>
    )
}

export default SunAndMoon;

const SunAndMoonStyled = styled.div`
    background-color: #052907;

    text-align: center;
    padding-bottom: 50px;

    h2 {
        background-color: #c0c6ff;
        color: white;
    }

`;