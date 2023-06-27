import styled from "styled-components";

export const UserMenuContainer = styled.div`
    box-shadow: 3px 2px 2px rgba(31, 31, 31, 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoContainer = styled.div`
    margin-left: 20px;
    display:flex;
    align-items: center;
`

export const LogoTitle = styled.p`
    margin: 0;
    font-family: 'Noto Sans', sans-serif;
    text-align: center;
    font-weight: 600;
    font-size: 22px;
    line-height: 42px;
    letter-spacing: 0.02em;
    color: #2a363b;
`

export const LogoIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 5px;

    @media (min-width: 768px) {
        width: 38px;
        height: 38px;
    }
`

export const LogoutContainer = styled.div`
    text-align: right;
    margin-right: 20px;
    display: flex;
    align-items: center;
`
export const LogoutName = styled.p`
    width: 150px;
    font-size: 20px;
    text-align: right;
    margin-right: 20px;
`

export const LogoutButton = styled.button`
    margin-right: 20px;
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
`