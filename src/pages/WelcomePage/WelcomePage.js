import React from 'react';
import { WelcomeContainer, WelcomeDescription, WelcomeLogoIcon, WelcomeLoginButton, WelcomeLogo, WelcomeLogoTitle, WelcomeRegisterButton, WelcomeWrapper, WelcomeItem, WelcomeList } from './WelcomePageStyles';
import iconImage from '../../images/phone-icon.png'

const WelcomePage = () => {
    return (
        <WelcomeWrapper>
            <WelcomeContainer>

                <WelcomeLogo>
                    <WelcomeLogoIcon src={iconImage} alt="logo" />
                    <WelcomeLogoTitle>Phonebook</WelcomeLogoTitle>
                </WelcomeLogo>

                <WelcomeDescription>
                    Create your telephone directory, and organize and systematize your phone contacts.
                </WelcomeDescription>
                <WelcomeList>
                    <WelcomeItem>register or log in to our application;</WelcomeItem>
                    <WelcomeItem>add your friends and relatives to your contacts;</WelcomeItem>
                    <WelcomeItem>quickly find the contacts you need;</WelcomeItem>
                    <WelcomeItem>manage your phonebook the way you want!</WelcomeItem>
                </WelcomeList>

                <WelcomeRegisterButton to="/register">Registration</WelcomeRegisterButton>
                <WelcomeLoginButton to="/login">Log In</WelcomeLoginButton>
                
            </WelcomeContainer>
        </WelcomeWrapper>
    );
};

export default WelcomePage;
