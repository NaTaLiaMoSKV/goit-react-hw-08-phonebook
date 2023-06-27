import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AuthForm, AuthFormWrapper, AuthFormPasswordIcon, AuthFormField, AuthButton, ErrorSection, AuthWrapper, AuthContainer, AuthTitle, LoginLink } from '../RegisterPage/RegisterPageStyles';
// import {  } from 'pages/AuthPage/AuthPageStyles';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/operations';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().trim().required('Password is required')
        .min(8, 'Password must be at least 8 characters').max(64, 'Password must be at most 64 characters')
        .matches( /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]+$/, 'Password must contain at least one letter and at least one number'
    ),
})

const initialValues = {
    email: '',
    password: '',
    showPassword: false
};

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }

    const onSubmit = (values,  { resetForm }) => {
        const { email, password } = values;
        dispatch(
            logIn({ email, password})
        );
        resetForm();
    }

    return (
        <AuthWrapper>
            <AuthContainer>
                <AuthTitle>Login</AuthTitle>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <AuthForm>
                        <AuthFormWrapper>
                            <ErrorSection name="email" component="div" />
                            <AuthFormField type="email" id="email" name="email" placeholder='Enter your email' />
                        </AuthFormWrapper>

                        <AuthFormWrapper>
                            <ErrorSection name="password" component="div" />
                            <AuthFormField type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder='Confirm a password' />
                            <AuthFormPasswordIcon onClick={handleTogglePassword}>
                                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </AuthFormPasswordIcon>
                        </AuthFormWrapper>

                        <AuthButton type="submit">Login now</AuthButton>
                        <LoginLink to='/register'>Don't have an account yet? Sign Up!</LoginLink>
                    </AuthForm>
                </Formik>

            </AuthContainer>
        </AuthWrapper>
        
    );
};
