import React from 'react';
import styled from 'styled-components';

import Lightbox from 'React/Components/Lightbox/Lightbox.jsx'

const StaffMember = ({member}) => {

    const LightboxContent = () => {
        return (
            <div>
                <img src={ member.image } alt= {member.name } />
                <h3>{ member.name }</h3>
                <p> {member.description}</p>
            </div>
        );
    }

    return (
        <StaffMemberStyled className='StaffMember' width={'300px'}>
            <Lightbox LightboxContent = { LightboxContent }>
                <img src= { member.image } alt={ member.name } />
            <h3> { member.name } </h3>
            </Lightbox>
            
        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`

    img {
        display: block;
        width: 100%;
    }

    h3 {
        margin: 0px;
        color: white;
        background-color: maroon;
        padding: 5px;
    }
    p {
        margin: 0px;

    }
    
`;