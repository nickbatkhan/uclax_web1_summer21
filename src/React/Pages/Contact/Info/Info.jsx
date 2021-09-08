import React from 'react';
import styled from 'styled-components';

const Info = () => {

    return (
        <InfoStyled className='Info'>
            <p>Getting Started Is The Easiest Thing You’ll Do Today!
                <li>1. Tell Us About Yourself And Your Organization</li>
                <li>2. Meet Your Client Success Consultant</li>
                <li>3. Work With Your New Team Member</li>
            </p>
        </InfoStyled>
    );
}

export default Info;

const InfoStyled = styled.div`
    
`;