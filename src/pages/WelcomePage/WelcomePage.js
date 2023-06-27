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
                    Create bla bla bla bla bla bla bla bla bla bla bla bla phonebook with your contacts!
                </WelcomeDescription>
                <WelcomeList>
                    <WelcomeItem>just sign in app;</WelcomeItem>
                    <WelcomeItem>add your friends and family members;</WelcomeItem>
                    <WelcomeItem>quickly find the contact you need;</WelcomeItem>
                    <WelcomeItem>manage your phonebook as you want!</WelcomeItem>
                </WelcomeList>

                <WelcomeRegisterButton to="/register">Registration</WelcomeRegisterButton>
                <WelcomeLoginButton to="/login">Log In</WelcomeLoginButton>
                
            </WelcomeContainer>
        </WelcomeWrapper>
    );
};

export default WelcomePage;
