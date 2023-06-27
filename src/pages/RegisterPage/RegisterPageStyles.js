import { Link } from 'react-router-dom';
import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const AuthWrapper = styled.div`
    font-family: 'Sira Sans';
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AuthContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;

    @media (min-width: 375px) {
        width: 335px;
    }

    @media (min-width: 768px) {
        width: 473px;
    }
`;

export const AuthTitle = styled.h1`
    margin: 0;
    font-family: 'Noto Sans', sans-serif;
    text-align: center;
    font-weight: 600;
    font-size: 22px;
    line-height: 42px;
    letter-spacing: 0.02em;
    color: #2a363b;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        font-size: 35px;
        line-height: 60px;
    }
`;

export const AuthForm = styled(Form)`
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        width: 420px;
    }
`;

export const AuthFormWrapper = styled.div`
    width: calc(100% - 20px);
    position: relative;
    margin-bottom: 14px;
`;

export const ErrorSection = styled(ErrorMessage)`
    margin: 0;
    font-family: 'Noto Sans', sans-serif;
    margin-left: 10px;
    letter-spacing: 0.02em;
    color: rgba(31, 31, 31, 0.5);
    font-size: 12px;
`;

export const AuthFormField = styled(Field)`
    width: calc(100% - 40px);
    padding: 14px 18px;
    margin-bottom: 14px;
    opacity: 0.4;
    border: 1px solid #bedbb0;
    box-shadow: 3px 2px 2px rgba(31, 31, 31, 0.5);
    border-radius: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.04em;
    color: #2a363b;
`;

export const AuthFormPasswordIcon = styled.span`
  position: absolute;
  bottom: 26px;
  right: 18px;
  color: rgba(31, 31, 31, 0.5);
  opacity: 0.8;
  cursor: pointer;
`;

export const AuthButton = styled(Link)`
    width: 130px;
    padding: 15px;
    text-decoration: none;
    text-align:center;
    margin-bottom: 20px;
    background-color: #2a363b;
    font-family: 'Noto Sans', sans-serif;
    border: 1px solid #2a363b;
    color: #fff;
    letter-spacing: 1px;
    border-radius: 5px;
    margin-top: 10px;

    @media (min-width: 768px) {
        width: 290px;
    }
`;

export const LoginLink = styled(Link)`
    width: 260px;
    text-decoration: none;
    text-align:center;
    font-weight: 600;
    font-family: 'Noto Sans', sans-serif;
    color: #2a363b;
    letter-spacing: 1px;
    border-radius: 5px;

    @media (min-width: 768px) {
        width: 330px;
    }
`;
