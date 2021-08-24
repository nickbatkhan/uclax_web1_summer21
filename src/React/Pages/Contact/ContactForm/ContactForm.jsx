import React from 'react';
import styled from 'styled-components';

import UniversalForm from 'React/Components/UniversalForm/UniversalForm.jsx';

const ContactForm = () => {

    const defaultFormData = {
        controls: [
            {
                id: 'fullname',
                label: 'Full name',
                value: '',
                type: 'text',
            },
            {
                id: 'email',
                label: 'Email',
                value: '',
                type: 'text',
            },
            {
                id: 'message',
                label: 'Message',
                value: '',
                type: 'texarea',
            },
        ]
    }

    return (
        <ContactFormStyled className='Form'>
            < UniversalForm defaultFormData= { defaultFormData} /> 
        </ContactFormStyled>
    );
}

export default ContactForm;

const ContactFormStyled = styled.div`
    padding: 20px;
`;