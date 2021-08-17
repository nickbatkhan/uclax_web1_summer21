import React from 'react';
import styled from 'styled-components';

import Lightbox from 'React/Components/Lightbox/Lightbox.jsx'

const Item = ({ service }) => {

    const LightboxContent = () => {
        return (
            <div>
                <img src={ service.image } alt= {service.title} />
                <h3>{ service.title }</h3>
                <h5>{ service.cost }</h5>
                <h5>{ service.description }</h5>
            </div>
        );
    }

    return (
        <ItemStyled className='Item'>
            <Lightbox LightboxContent = { LightboxContent }>
                <img src={ service.image } alt={ service.title } />
            <h3>{service.title}</h3>
            </Lightbox>
        </ItemStyled>
    );
}

export default Item;

const ItemStyled = styled.div`
    img {
        width: 100%;
        display: block;
    }
    h3 {
        background-color: teal;
        color: white;
        padding: 5px;
        font-size: 18px;
        margin: 0px;
    }
    
`;