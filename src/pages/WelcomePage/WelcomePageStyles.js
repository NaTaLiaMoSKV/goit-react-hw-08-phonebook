import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import '../../'
// import logoImage from '../../images/logo.png';
// import iconImage from '../../images/welcome-icon.png';

export const WelcomeWrapper = styled.div`

  font-family: 'Sira Sans';
    height: 100vh;
    // background: linear-gradient(180deg, rgba(196, 196, 196, 0) 25%, #BEDBB0 92.19%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const WelcomeContainer = styled.div`
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

export const WelcomeIcon = styled.img`
    width: 124px;
    height: 124px;

    @media (min-width: 768px) {
        width: 162px;
        height: 162px;
    }
`;

export const WelcomeLogo = styled.div`
    margin-top: 14px;
    display: flex;
    align-items: center;
    gap: 14px;
    height: 42px;

    @media (min-width: 768px) {
        margin-top: 24px;
        height: 60px;
    }
`;

export const WelcomeLogoIcon = styled.img`
    width: 30px;
    height: 30px;

    @media (min-width: 768px) {
        width: 38px;
        height: 38px;
    }
`;

export const WelcomeLogoTitle = styled.h1`
    margin: 0;
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    letter-spacing: -0.04em;
    color: #2a363b;

    @media (min-width: 768px) {
        font-size: 40px;
        line-height: 60px;
    }
`;

export const WelcomeDescription = styled.p`
    margin-top: 24px;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: #2a363b;
`;
export const WelcomeList = styled.ul`
    text-align: left;
`;
export const WelcomeItem = styled.li`
    list-style-type: square;
    margin-top: 10px;
    text-align: left;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: #2a363b;
`;

export const WelcomeRegisterButton = styled(Link)`
    width: 150px;
    padding: 15px;
    text-decoration: none;
    text-align:center;
    margin-bottom: 20px;
    background-color: #2a363b;
    font-family: 'Noto Sans', sans-serif;
    border: 1px solid #2a363b;
    color: #fff;
    letter-spacing: 0.04em;
    border-radius: 5px;
    margin-top: 10px;

    @media (min-width: 768px) {
        width: 320px;
    }
`;

export const WelcomeLoginButton = styled(Link)`
    width: 150px;
    text-decoration: none;
    text-align:center;
    font-weight: 600;
    font-family: 'Noto Sans', sans-serif;
    color: #2a363b;
    letter-spacing: 0.04em;
    border-radius: 5px;

    @media (min-width: 768px) {
        width: 320px;
    }
`;
