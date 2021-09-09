import React from 'react';
import styled from 'styled-components';

const Map = () => {

    return (
        <MapStyled className='Map'>
            <p>G&J TAX CPA, INC.</p>
            <p>CPA and Business Advisors</p>
            <p>15615 Alton Parkway, Suite 450</p>
            <p>Irvine, CA 92618</p>
            <p>Monday-Friday: 8am – 6pm</p>
            <p>Phone: 949-385-3676</p>
            <p>Email: gul@gjtaxcpa.com</p>
        </MapStyled>
    );
}

export default Map;

const MapStyled = styled.div`
    
`;