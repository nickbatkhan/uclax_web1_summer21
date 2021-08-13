import React from 'react';
import styled from 'styled-components';

import Categories from './Categories/Categories.jsx';
import Gallery from './Gallery/Gallery.jsx';

const Container = () => {

    return (
        <ContainerStyled className='Container'>
            <Categories />
            <Gallery /> 
        </ContainerStyled>
    );
}

export default Container;

const ContainerStyled = styled.div`
    
`;