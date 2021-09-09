import React from 'react';
import styled from 'styled-components';

import UniversalForm from 'React/Components/UniversalForm/UniversalForm.jsx';

const Login = () => {

    const defaultFormData = {
        apiUrl: '/user/login',
        hasSubmitted: false,
        request: {},
        response: {},
        message: '',

        controls: [
            {
                id: 'username',
                label: 'User Name',
                value: 'your user name here',
                type: 'text',
                validation: {
                    isValid: true,
                    rules: ['required'],
                    message: '',
                }
            },
            {
                id: 'password',
                label: 'Password',
                value: 'type your password here',
                type: 'password',
                validation: {
                    isValid: true,
                    rules: ['required'],
                    message: '',
                }
            },
        ]
    }

    return (
        <LoginStyled className='Login'>
            <UniversalForm defaultFormData= { defaultFormData} /> 
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`
    display: flex
`;